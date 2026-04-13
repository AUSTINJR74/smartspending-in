import { useState } from "react";
import { CreditCard } from "@/types/creditCard";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const { cardActions } = siteContent.creditCards;

interface CreditCardItemProps {
  card: CreditCard;
  index?: number;
}

const tagColors: Record<string, string> = {
  "Top Card": "bg-primary/10 text-primary border-primary/20",
  Free: "bg-green-50 text-green-700 border-green-200",
  Premium: "bg-amber-50 text-amber-700 border-amber-200",
  "Super Premium": "bg-amber-50 text-amber-700 border-amber-200",
};

const CreditCardItem = ({ card, index = 0 }: CreditCardItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const feeDisplay =
    card.annual_fee === 0 ? "FREE" : `₹${card.annual_fee.toLocaleString("en-IN")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Card Image */}
      <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/5 to-transparent" />
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        {/* Tags */}
        {card.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {card.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                  tagColors[tag] || "bg-muted text-muted-foreground border-border"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 border border-border/40 z-10">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs font-bold text-foreground">{card.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-base text-foreground leading-snug mb-0.5">
          {card.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">{card.bank}</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-muted/40 rounded-xl px-3 py-2.5">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
              Annual Fee
            </p>
            <p className={`text-sm font-bold ${card.annual_fee === 0 ? "text-green-600" : "text-foreground"}`}>
              {feeDisplay}
            </p>
          </div>
          <div className="bg-muted/40 rounded-xl px-3 py-2.5">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
              Reward Rate
            </p>
            <p className="text-sm font-bold text-primary">{card.reward_rate}</p>
          </div>
        </div>

        {/* Expandable Benefits */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mb-3"
        >
          {expanded ? "Hide" : "Show"} Benefits
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-1.5 mb-4"
          >
            {card.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                {b}
              </li>
            ))}
          </motion.ul>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="flex gap-2 mb-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 rounded-lg text-xs font-semibold h-9"
            onClick={() => setExpanded(!expanded)}
          >
            {cardActions.summary}
          </Button>
          <Button
            size="sm"
            className="flex-1 rounded-lg text-xs font-bold h-9 gradient-bg border-0 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href={card.apply_url} target="_blank" rel="noopener noreferrer">
              {cardActions.applyNow}
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full rounded-lg text-xs font-semibold h-8 text-primary hover:text-primary hover:bg-primary/5"
        >
          {cardActions.readReview}
        </Button>
      </div>
    </motion.div>
  );
};

export default CreditCardItem;
