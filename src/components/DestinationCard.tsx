import React from "react";
import type { Destination } from "../types/destination";

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(destination)}
      className="w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_3px_16px_rgba(27,28,28,0.06)] border border-surface-variant/40 flex flex-col group cursor-pointer transition-all active:scale-[0.99] hover:border-primary/40"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-container">
        <img
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          src={destination.imageUrl}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-sm shadow-sm flex items-center gap-1.5">
          <span className="font-label-tag text-label-tag text-primary font-bold uppercase tracking-wider">
            {destination.category}
          </span>
        </div>

        {/* AR Ready Indicator Badge */}
        <div className="absolute top-3 right-3 bg-primary/90 text-on-primary backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 text-xs font-semibold">
          <span className="material-symbols-outlined text-[14px]">view_in_ar</span>
          <span>AR Ready</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {/* Title & Metadata Group */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-bold text-on-surface tracking-tight leading-snug">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 text-secondary font-bold text-xs shrink-0">
              <span className="material-symbols-outlined text-[15px] text-[#D6A01D]">
                star
              </span>
              <span>{destination.rating}</span>
            </div>
          </div>

          {/* Subtitle / Lokasi: 4px dari judul (mt-1) */}
          <div className="flex items-center gap-1.5 text-on-surface-variant text-xs mt-1">
            <span className="material-symbols-outlined text-[14px] text-primary">
              location_on
            </span>
            <span className="truncate">{destination.location}</span>
            <span className="text-outline">•</span>
            <span className="font-semibold text-secondary shrink-0">{destination.distance}</span>
          </div>
        </div>

        {/* Deskripsi Tempat: 8px visual gap, line-height seimbang */}
        <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        {/* Action Button: 12px visual gap (pt-2.5) */}
        <div className="pt-2 border-t border-surface-variant/30 flex items-center justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(destination);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white active:scale-95 transition-all cursor-pointer font-bold text-xs"
          >
            <span>Lihat Destinasi</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
