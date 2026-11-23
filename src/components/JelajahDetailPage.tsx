import React, { useState } from "react";
import { JELAJAH_ALL_ITEMS } from "../data/jelajahData";
import type { Destination } from "../types/destination";

interface JelajahDetailPageProps {
  onBack: () => void;
  onSelectDestination: (dest: Destination) => void;
}

type CatalogFilter = "SEMUA" | "PARIWISATA" | "UMKM" | "BUDAYA";

const ITEMS_PER_PAGE = 9; // Grid 3x3 = 9 item per halaman

export const JelajahDetailPage: React.FC<JelajahDetailPageProps> = ({
  onBack,
  onSelectDestination,
}) => {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>("SEMUA");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter items
  const filteredItems = JELAJAH_ALL_ITEMS.filter((item) => {
    if (activeFilter === "SEMUA") return true;
    return item.catalogCategory === activeFilter;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (filter: CatalogFilter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset ke halaman 1 saat ganti filter
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col pb-32 animate-fadeIn">
      {/* 1. Header Top Navigasi Kembali - Rapi, Proporsional, & Bersih */}
      <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-md border-b border-surface-variant/40 px-4 py-3 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high active:scale-95 flex items-center justify-center text-on-surface transition-all cursor-pointer shrink-0 border border-surface-variant/50 shadow-xs"
            aria-label="Kembali ke Jelajah"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex flex-col min-w-0">
            <h1 className="text-sm font-bold text-on-surface leading-tight truncate">
              Katalog Lengkap Jelajah
            </h1>
            <p className="text-[11px] text-on-surface-variant truncate">
              Trenggalek • {filteredItems.length} Item Wisata & Budaya
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
          <span className="material-symbols-outlined text-[13px]">location_on</span>
          <span className="text-[11px] font-bold">Trenggalek</span>
        </div>
      </header>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/*
          2. FILTER KATEGORI: SEMUA, PARIWISATA, UMKM, BUDAYA (Rounded Melengkung & Modern)
        */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-primary">tune</span>
              <span>Kategori Katalog</span>
            </span>
            <span className="text-[11px] text-on-surface-variant font-medium bg-surface-container px-2 py-0.5 rounded-full">
              Grid 3x3
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1">
            {/* Tombol SEMUA */}
            <button
              type="button"
              onClick={() => handleFilterChange("SEMUA")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeFilter === "SEMUA"
                  ? "bg-on-surface text-surface shadow-sm ring-2 ring-on-surface/20"
                  : "bg-surface-container-low text-on-surface-variant border border-surface-variant/70 hover:bg-surface-container"
              }`}
            >
              <span>Semua</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeFilter === "SEMUA"
                    ? "bg-white/20 text-white"
                    : "bg-surface-variant/60 text-on-surface-variant"
                }`}
              >
                {JELAJAH_ALL_ITEMS.length}
              </span>
            </button>

            {/* Tombol PARIWISATA */}
            <button
              type="button"
              onClick={() => handleFilterChange("PARIWISATA")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeFilter === "PARIWISATA"
                  ? "bg-[#8f0012] text-white shadow-sm ring-2 ring-[#8f0012]/30"
                  : "bg-surface-container-low text-on-surface-variant border border-surface-variant/70 hover:bg-surface-container hover:text-[#8f0012]"
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">landscape</span>
              <span>Pariwisata</span>
            </button>

            {/* Tombol UMKM */}
            <button
              type="button"
              onClick={() => handleFilterChange("UMKM")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeFilter === "UMKM"
                  ? "bg-[#b45309] text-white shadow-sm ring-2 ring-[#b45309]/30"
                  : "bg-surface-container-low text-on-surface-variant border border-surface-variant/70 hover:bg-surface-container hover:text-[#b45309]"
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">storefront</span>
              <span>UMKM</span>
            </button>

            {/* Tombol BUDAYA */}
            <button
              type="button"
              onClick={() => handleFilterChange("BUDAYA")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeFilter === "BUDAYA"
                  ? "bg-[#7e22ce] text-white shadow-sm ring-2 ring-[#7e22ce]/30"
                  : "bg-surface-container-low text-on-surface-variant border border-surface-variant/70 hover:bg-surface-container hover:text-[#7e22ce]"
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">theater_comedy</span>
              <span>Budaya</span>
            </button>
          </div>
        </div>

        {/*
          3. GRID 3x3 CARDS (MOBILE FIRST: Tepat 3 Kolom per Baris di Layar HP)
        */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDestination(item)}
              className="group rounded-xl bg-surface-container-lowest border border-surface-variant/60 hover:border-primary/60 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Foto Di Atas (Tinggi Kompak untuk 3 Kolom HP) */}
              <div className="relative w-full h-24 sm:h-28 overflow-hidden bg-surface-container shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/vr_alun_alun_360.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Tag Kategori Melengkung Rapi */}
                <div className="absolute top-1 left-1 pointer-events-none">
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm ${
                      item.catalogCategory === "PARIWISATA"
                        ? "bg-[#8f0012]/90"
                        : item.catalogCategory === "UMKM"
                        ? "bg-[#b45309]/90"
                        : "bg-[#7e22ce]/90"
                    }`}
                  >
                    {item.badgeText}
                  </span>
                </div>

                <div className="absolute bottom-1 right-1 pointer-events-none">
                  <span className="px-1.5 py-0.5 rounded-md bg-primary/95 text-white text-[8px] font-bold shadow-sm backdrop-blur-sm">
                    {item.ticketPrice.includes("Rp") ? item.ticketPrice.split(" ")[0] : "Gratis"}
                  </span>
                </div>
              </div>

              {/* Judul & Info Di Bawah (Optimal untuk Tampilan HP 3 Kolom) */}
              <div className="p-1.5 sm:p-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[10px] sm:text-xs text-on-surface group-hover:text-primary transition-colors line-clamp-1 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[8.5px] text-on-surface-variant line-clamp-1 mt-0.5">
                    {item.kecamatan || item.location.split(",")[0]}
                  </p>
                </div>

                <div className="mt-1.5 pt-1 border-t border-surface-variant/30 flex items-center justify-between text-[8.5px]">
                  <div className="flex items-center gap-0.5 text-amber-500 font-bold shrink-0">
                    <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                    <span className="text-on-surface">{item.rating}</span>
                  </div>
                  <span className="text-primary font-bold flex items-center group-hover:translate-x-0.5 transition-transform">
                    <span>Lihat</span>
                    <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*
          4. PAGINATION: Tombol Geser Kanan-Kiri Tepat di Bawah Grid
          Sesuai instruksi USER:
          "disini juga bisa pagination let say ada 3x3 pariwistaa. Jadi semisal mau lihat ke 10 di bawah pariwisata ada tombol geser kanan kiri, yang berada tepat di atas sub umkm gitu."
        */}
        <div className="mt-2 pt-4 pb-2 border-t border-surface-variant/40 flex items-center justify-between">
          {/* Panah Kiri */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className="w-10 h-10 rounded-xl bg-surface-container-high hover:bg-surface-container-highest active:scale-95 text-on-surface disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center cursor-pointer border border-surface-variant/40"
            aria-label="Halaman Sebelumnya"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>

          {/* Indikator Halaman */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-on-surface">
              Halaman {currentPage} dari {totalPages}
            </span>
            <span className="text-[11px] text-on-surface-variant">
              Menampilkan {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length)} dari {filteredItems.length}
            </span>
          </div>

          {/* Panah Kanan */}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className="w-10 h-10 rounded-xl bg-primary hover:bg-primary/90 active:scale-95 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Halaman Selanjutnya"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
