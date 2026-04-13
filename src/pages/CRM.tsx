import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import LandingNavbar from "@/components/landing/LandingNavbar";
import siteContent from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, isToday, isTomorrow, isPast, isBefore, addDays } from "date-fns";
import {
  Plus,
  CalendarIcon,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  ArrowRight,
  GripVertical,
  User,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const crmContent = siteContent.crm;

const STATUSES = ["New", "Contacted", "Follow-up", "Converted", "Lost"] as const;
type Status = (typeof STATUSES)[number];

const STATUS_COLORS: Record<Status, string> = {
  New: "bg-blue-500/10 text-blue-700 border-blue-200",
  Contacted: "bg-amber-500/10 text-amber-700 border-amber-200",
  "Follow-up": "bg-purple-500/10 text-purple-700 border-purple-200",
  Converted: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  Lost: "bg-red-500/10 text-red-700 border-red-200",
};

const STATUS_DOT: Record<Status, string> = {
  New: "bg-blue-500",
  Contacted: "bg-amber-500",
  "Follow-up": "bg-purple-500",
  Converted: "bg-emerald-500",
  Lost: "bg-red-500",
};

interface Lead {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  consultation_type: string | null;
  discussion_topic: string | null;
  message: string | null;
  status: Status;
  next_follow_up_date: string | null;
  notes: string | null;
  source: string | null;
  created_at: string;
  updated_at: string;
}

const CRM = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Lead[];
    },
  });

  const updateLead = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Lead> }) => {
      const { error } = await supabase.from("leads").update(updates).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leads"] }),
  });

  const createLead = useMutation({
    mutationFn: async (lead: Record<string, any>) => {
      const { error } = await supabase.from("leads").insert([{
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        consultation_type: lead.consultation_type,
        notes: lead.notes,
        status: lead.status || "New",
        next_follow_up_date: lead.next_follow_up_date,
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
      setAddDialogOpen(false);
      toast.success("Lead added successfully");
    },
  });

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search)
  );

  const getLeadsByStatus = (status: Status) =>
    filteredLeads.filter((l) => l.status === status);

  const isFollowUpUrgent = (lead: Lead) => {
    if (!lead.next_follow_up_date) return false;
    const date = new Date(lead.next_follow_up_date);
    return isPast(date) || isToday(date) || isTomorrow(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="pt-24 pb-12 px-4 md:px-6 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
              {crmContent.pageTitle}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {leads.length} total leads · {leads.filter((l) => l.status === "Follow-up").length} follow-ups pending
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={crmContent.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-10 rounded-full border-border/60"
              />
            </div>
            <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 rounded-full gradient-bg border-0 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 shrink-0">
                  <Plus className="w-4 h-4" /> {crmContent.addButtonLabel}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Lead</DialogTitle>
                </DialogHeader>
                <AddLeadForm onSubmit={(data: any) => createLead.mutate(data)} isLoading={createLead.isPending} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Kanban Board */}
        {isLoading ? (
          <div className="text-center py-20 text-muted-foreground">{crmContent.loadingText}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto">
            {STATUSES.map((status) => (
              <KanbanColumn
                key={status}
                status={status}
                leads={getLeadsByStatus(status)}
                onStatusChange={(id, newStatus) =>
                  updateLead.mutate({ id, updates: { status: newStatus } })
                }
                onUpdateLead={(id, updates) => updateLead.mutate({ id, updates })}
                isFollowUpUrgent={isFollowUpUrgent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Kanban Column ─── */
const KanbanColumn = ({
  status,
  leads,
  onStatusChange,
  onUpdateLead,
  isFollowUpUrgent,
}: {
  status: Status;
  leads: Lead[];
  onStatusChange: (id: string, status: Status) => void;
  onUpdateLead: (id: string, updates: Partial<Lead>) => void;
  isFollowUpUrgent: (lead: Lead) => boolean;
}) => (
  <div className="min-w-[260px]">
    <div className="flex items-center gap-2 mb-3 px-1">
      <div className={cn("w-2.5 h-2.5 rounded-full", STATUS_DOT[status])} />
      <h3 className="font-semibold text-sm text-foreground">{status}</h3>
      <Badge variant="secondary" className="ml-auto text-xs rounded-full h-5 min-w-[20px] justify-center">
        {leads.length}
      </Badge>
    </div>
    <div className="space-y-2.5 min-h-[200px] bg-white/60 rounded-2xl p-2.5 border border-border/50">
      {leads.length === 0 ? (
        <p className="text-xs text-muted-foreground text-center py-8">{crmContent.noLeadsText}</p>
      ) : (
        leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            onStatusChange={onStatusChange}
            onUpdateLead={onUpdateLead}
            isUrgent={isFollowUpUrgent(lead)}
          />
        ))
      )}
    </div>
  </div>
);

/* ─── Lead Card ─── */
const LeadCard = ({
  lead,
  onStatusChange,
  onUpdateLead,
  isUrgent,
}: {
  lead: Lead;
  onStatusChange: (id: string, status: Status) => void;
  onUpdateLead: (id: string, updates: Partial<Lead>) => void;
  isUrgent: boolean;
}) => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
      <DialogTrigger asChild>
        <Card
          className={cn(
            "p-3.5 cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 border border-border/60 rounded-2xl bg-white",
            isUrgent && "ring-2 ring-amber-400/60 border-amber-300"
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{lead.name}</p>
                {lead.consultation_type && (
                  <p className="text-xs text-muted-foreground truncate">{lead.consultation_type}</p>
                )}
              </div>
            </div>
            {isUrgent && <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />}
          </div>

          {/* Contact info */}
          <div className="mt-2.5 space-y-1">
            {lead.phone && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Phone className="w-3 h-3" /> {lead.phone}
              </div>
            )}
            {lead.email && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground truncate">
                <Mail className="w-3 h-3" /> {lead.email}
              </div>
            )}
          </div>

          {/* Follow-up date */}
          {lead.next_follow_up_date && (
            <div
              className={cn(
                "mt-2.5 flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg w-fit",
                isUrgent
                  ? "bg-amber-100 text-amber-800"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <Clock className="w-3 h-3" />
              Follow-up: {format(new Date(lead.next_follow_up_date), "MMM d")}
            </div>
          )}

          {/* Quick status buttons */}
          <div className="mt-3 flex flex-wrap gap-1">
            {STATUSES.filter((s) => s !== lead.status)
              .slice(0, 2)
              .map((s) => (
                <button
                  key={s}
                  onClick={(e) => {
                    e.stopPropagation();
                    onStatusChange(lead.id, s);
                    toast.success(`Moved to ${s}`);
                  }}
                  className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full border transition-all hover:scale-105",
                    STATUS_COLORS[s]
                  )}
                >
                  → {s}
                </button>
              ))}
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {lead.name}
            <Badge className={cn("text-xs", STATUS_COLORS[lead.status])}>{lead.status}</Badge>
          </DialogTitle>
        </DialogHeader>
        <LeadDetail lead={lead} onStatusChange={onStatusChange} onUpdateLead={onUpdateLead} />
      </DialogContent>
    </Dialog>
  );
};

/* ─── Lead Detail ─── */
const LeadDetail = ({
  lead,
  onStatusChange,
  onUpdateLead,
}: {
  lead: Lead;
  onStatusChange: (id: string, status: Status) => void;
  onUpdateLead: (id: string, updates: Partial<Lead>) => void;
}) => {
  const [notes, setNotes] = useState(lead.notes || "");
  const [followUpDate, setFollowUpDate] = useState<Date | undefined>(
    lead.next_follow_up_date ? new Date(lead.next_follow_up_date) : undefined
  );

  return (
    <div className="space-y-5">
      {/* Contact */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-muted-foreground text-xs">Phone</span>
          <p className="font-medium">{lead.phone || "—"}</p>
        </div>
        <div>
          <span className="text-muted-foreground text-xs">Email</span>
          <p className="font-medium truncate">{lead.email || "—"}</p>
        </div>
        <div>
          <span className="text-muted-foreground text-xs">Type</span>
          <p className="font-medium">{lead.consultation_type || "—"}</p>
        </div>
        <div>
          <span className="text-muted-foreground text-xs">Topic</span>
          <p className="font-medium">{lead.discussion_topic || "—"}</p>
        </div>
      </div>

      {lead.message && (
        <div>
          <span className="text-muted-foreground text-xs">Message</span>
          <p className="text-sm mt-0.5 bg-muted/50 p-3 rounded-lg">{lead.message}</p>
        </div>
      )}

      {/* Status change */}
      <div>
        <Label className="text-xs text-muted-foreground mb-2 block">Change Status</Label>
        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => {
                onStatusChange(lead.id, s);
                toast.success(`Status changed to ${s}`);
              }}
              className={cn(
                "text-xs px-3 py-1.5 rounded-full border transition-all",
                s === lead.status
                  ? "ring-2 ring-primary/30 font-semibold"
                  : "hover:scale-105",
                STATUS_COLORS[s]
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Follow-up date */}
      <div>
        <Label className="text-xs text-muted-foreground mb-2 block">Next Follow-up Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn("w-full justify-start text-left rounded-xl h-10 border-border/60", !followUpDate && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {followUpDate ? format(followUpDate, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={followUpDate}
              onSelect={(date) => {
                setFollowUpDate(date);
                if (date) {
                  onUpdateLead(lead.id, {
                    next_follow_up_date: format(date, "yyyy-MM-dd"),
                  });
                  toast.success("Follow-up date set");
                }
              }}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Notes */}
      <div>
        <Label className="text-xs text-muted-foreground mb-2 block">Notes</Label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes about this lead..."
          rows={3}
          className="rounded-xl border-border/60"
        />
        <Button
          size="sm"
          variant="outline"
          className="mt-2 rounded-full"
          onClick={() => {
            onUpdateLead(lead.id, { notes });
            toast.success("Notes saved");
          }}
        >
          Save Notes
        </Button>
      </div>

      <p className="text-[10px] text-muted-foreground">
        Created {format(new Date(lead.created_at), "PPP")} · Updated{" "}
        {format(new Date(lead.updated_at), "PPP")}
      </p>
    </div>
  );
};

/* ─── Add Lead Form ─── */
const AddLeadForm = ({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: Partial<Lead>) => void;
  isLoading: boolean;
}) => {
  const [followUpDate, setFollowUpDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit({
      name: fd.get("name") as string,
      phone: (fd.get("phone") as string) || null,
      email: (fd.get("email") as string) || null,
      consultation_type: (fd.get("consultation_type") as string) || null,
      notes: (fd.get("notes") as string) || null,
      status: "New",
      next_follow_up_date: followUpDate ? format(followUpDate, "yyyy-MM-dd") : null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="add-name" className="text-sm">Name *</Label>
        <Input id="add-name" name="name" required placeholder="Lead name" className="h-10 rounded-xl mt-1 border-border/60" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="add-phone" className="text-sm">Phone</Label>
          <Input id="add-phone" name="phone" placeholder="+91..." className="h-10 rounded-xl mt-1 border-border/60" />
        </div>
        <div>
          <Label htmlFor="add-email" className="text-sm">Email</Label>
          <Input id="add-email" name="email" type="email" placeholder="email" className="h-10 rounded-xl mt-1 border-border/60" />
        </div>
      </div>
      <div>
        <Label htmlFor="add-type" className="text-sm">Consultation Type</Label>
        <Input id="add-type" name="consultation_type" placeholder="e.g. Insurance" className="h-10 rounded-xl mt-1 border-border/60" />
      </div>
      <div>
        <Label className="text-sm">Follow-up Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn("w-full justify-start text-left rounded-xl h-10 mt-1 border-border/60", !followUpDate && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {followUpDate ? format(followUpDate, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={followUpDate}
              onSelect={setFollowUpDate}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="add-notes" className="text-sm">Notes</Label>
        <Textarea id="add-notes" name="notes" placeholder="Any notes..." rows={2} className="rounded-xl mt-1 border-border/60" />
      </div>
      <Button type="submit" className="w-full rounded-full gradient-bg border-0 text-white shadow-lg shadow-primary/20" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Lead"}
      </Button>
    </form>
  );
};

export default CRM;
