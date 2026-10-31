import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onOpenFilter: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onOpenFilter,
}) => {
  return (
    <section className="px-margin-mobile pt-2 pb-2.5">
      <div className="flex items-center gap-2.5">
        <div className="flex-1 relative flex items-center bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant px-3.5 py-2.5 focus-within:border-primary transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-2">
            search
          </span>
          <input
            aria-label="Cari destinasi di Trenggalek"
            className="w-full bg-transparent text-on-surface text-body-md placeholder:text-on-surface-variant/70 focus:outline-none"
            placeholder="Cari destinasi di Trenggalek..."
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-on-surface-variant hover:text-on-surface cursor-pointer"
              aria-label="Hapus pencarian"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
        <button
          aria-label="Buka filter"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-on-primary shadow-sm hover:opacity-95 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
          onClick={onOpenFilter}
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">tune</span>
        </button>
      </div>
    </section>
  );
};
