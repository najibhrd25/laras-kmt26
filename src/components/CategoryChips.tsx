import React from "react";

interface CategoryChipsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="pt-2.5 pb-2 px-margin-mobile overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 whitespace-nowrap">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-label-md transition-all active:scale-95 cursor-pointer ${
                isActive
                  ? "font-semibold bg-primary-container text-on-primary shadow-sm"
                  : "font-medium bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-variant/60"
              }`}
              type="button"
            >
              {cat}
            </button>
          );
        })}
      </div>
    </section>
  );
};
