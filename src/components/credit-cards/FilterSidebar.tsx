import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import siteContent from "@/data/siteContent";

const { filterLabels, feeOptions } = siteContent.creditCards;

export interface Filters {
  banks: string[];
  categories: string[];
  feeRange: string[];
  cardTypes: string[];
}

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  availableBanks: string[];
  availableCategories: string[];
  availableCardTypes: string[];
  open: boolean;
  onClose: () => void;
}

const toggleItem = (arr: string[], item: string) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

const FilterSidebar = ({
  filters,
  onFiltersChange,
  availableBanks,
  availableCategories,
  availableCardTypes,
  open,
  onClose,
}: FilterSidebarProps) => {
  const hasActiveFilters =
    filters.banks.length > 0 ||
    filters.categories.length > 0 ||
    filters.feeRange.length > 0 ||
    filters.cardTypes.length > 0;

  const clearAll = () =>
    onFiltersChange({ banks: [], categories: [], feeRange: [], cardTypes: [] });

  const content = (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-foreground" />
          <h3 className="font-bold text-foreground">{filterLabels.title}</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-xs font-semibold text-primary hover:underline"
          >
            {filterLabels.clearAll}
          </button>
        )}
      </div>

      {/* Bank Filter */}
      <FilterGroup
        label={filterLabels.bank}
        items={availableBanks}
        selected={filters.banks}
        onChange={(v) => onFiltersChange({ ...filters, banks: v })}
      />

      {/* Category Filter */}
      <FilterGroup
        label={filterLabels.category}
        items={availableCategories}
        selected={filters.categories}
        onChange={(v) => onFiltersChange({ ...filters, categories: v })}
      />

      {/* Fee Filter */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {filterLabels.annualFee}
        </p>
        <div className="space-y-2">
          {feeOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <Checkbox
                checked={filters.feeRange.includes(opt.value)}
                onCheckedChange={() =>
                  onFiltersChange({
                    ...filters,
                    feeRange: toggleItem(filters.feeRange, opt.value),
                  })
                }
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Card Type Filter */}
      <FilterGroup
        label={filterLabels.cardType}
        items={availableCardTypes}
        selected={filters.cardTypes}
        onChange={(v) => onFiltersChange({ ...filters, cardTypes: v })}
      />
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-[260px] shrink-0 sticky top-24 self-start">
        <div className="bg-white rounded-2xl border border-border/60 p-5 shadow-sm">
          {content}
        </div>
      </aside>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="absolute inset-y-0 left-0 w-[300px] bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-border/60">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="font-bold">{filterLabels.title}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-5">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

const FilterGroup = ({
  label,
  items,
  selected,
  onChange,
}: {
  label: string;
  items: string[];
  selected: string[];
  onChange: (v: string[]) => void;
}) => (
  <div className="space-y-3">
    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
      {label}
    </p>
    <div className="space-y-2">
      {items.map((item) => (
        <label
          key={item}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <Checkbox
            checked={selected.includes(item)}
            onCheckedChange={() => onChange(toggleItem(selected, item))}
          />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default FilterSidebar;
