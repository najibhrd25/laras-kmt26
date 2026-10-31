import React from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  sortOptions: string[];
  filterSort: string;
  onSelectSort: (val: string) => void;
  categories: string[];
  filterCategory: string;
  onSelectCategory: (val: string) => void;
  distanceOptions: string[];
  filterDistance: string;
  onSelectDistance: (val: string) => void;
  onReset: () => void;
  onApply: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  sortOptions,
  filterSort,
  onSelectSort,
  categories,
  filterCategory,
  onSelectCategory,
  distanceOptions,
  filterDistance,
  onSelectDistance,
  onReset,
  onApply,
}) => {
  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col justify-end"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Bottom Sheet Container */}
      <div className="relative z-10 max-h-[85vh] overflow-y-auto bg-surface rounded-t-2xl shadow-2xl p-5 flex flex-col gap-4 border-t border-surface-variant pb-safe max-w-md mx-auto w-full">
        {/* Handle bar */}
        <div className="w-12 h-1.5 bg-surface-variant rounded-full mx-auto -mt-1 mb-1" />
        {/* Header */}
        <div className="flex items-center justify-between pb-1 border-b border-surface-variant/60">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
            Filter Wisata
          </h3>
          <button
            aria-label="Tutup filter"
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container cursor-pointer"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Section Urutkan */}
        <div className="flex flex-col gap-2">
          <span className="font-label-lg text-label-lg text-on-surface font-semibold">
            Urutkan
          </span>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelectSort(opt)}
                className={`px-3.5 py-1.5 rounded-full text-label-md transition-colors cursor-pointer ${
                  filterSort === opt
                    ? "font-semibold bg-primary-container text-on-primary"
                    : "font-medium bg-surface-container-lowest text-on-surface border border-surface-variant"
                }`}
                type="button"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Section Kategori */}
        <div className="flex flex-col gap-2">
          <span className="font-label-lg text-label-lg text-on-surface font-semibold">
            Kategori
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelectCategory(opt)}
                className={`px-3.5 py-1.5 rounded-full text-label-md transition-colors cursor-pointer ${
                  filterCategory === opt
                    ? "font-semibold bg-primary-container text-on-primary"
                    : "font-medium bg-surface-container-lowest text-on-surface border border-surface-variant"
                }`}
                type="button"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Section Jarak */}
        <div className="flex flex-col gap-2">
          <span className="font-label-lg text-label-lg text-on-surface font-semibold">
            Jarak
          </span>
          <div className="flex flex-wrap gap-2">
            {distanceOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelectDistance(opt)}
                className={`px-3.5 py-1.5 rounded-full text-label-md transition-colors cursor-pointer ${
                  filterDistance === opt
                    ? "font-semibold bg-primary-container text-on-primary"
                    : "font-medium bg-surface-container-lowest text-on-surface border border-surface-variant"
                }`}
                type="button"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-3 flex items-center gap-3">
          <button
            className="flex-1 py-2.5 rounded-xl border border-surface-variant text-on-surface font-label-lg text-label-lg font-medium hover:bg-surface-container-high transition-colors cursor-pointer"
            onClick={onReset}
            type="button"
          >
            Reset
          </button>
          <button
            className="flex-1 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
            onClick={onApply}
            type="button"
          >
            Terapkan Filter
          </button>
        </div>
      </div>
    </div>
  );
};
