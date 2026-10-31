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
      {/* 1. Header Top Navigasi Kembali */}
      <div className="sticky top-0 z-30 bg-surface/95 backdrop-blur-xl border-b border-surface-variant/40 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors cursor-pointer"
            aria-label="Kembali ke Jelajah"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-on-surface leading-tight">
              Katalog Lengkap Jelajah
            </h1>
            <span className="text-[11px] text-on-surface-variant">
              {filteredItems.length} Destinasi, Produk UMKM & Seni Budaya
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10">
          Kab. Trenggalek
        </span>
      </div>

      <div className="px-5 pt-5 flex flex-col gap-5">
        {/*
          2. FILTER KATEGORI: PARIWISATA, UMKM, BUDAYA
          Sesuai instruksi USER:
          "jangan lupa tulisan pariwisata umkm budaya itu di kasih background teks yang bershape kotak rounded 0 ya, biar tegas."
        */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Filter Kategori Utama
            </span>
            <span className="text-[11px] text-on-surface-variant">
              Tampilan 3x3 Grid
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {/* Tombol SEMUA (rounded-none / rounded 0) */}
            <button
              type="button"
              onClick={() => handleFilterChange("SEMUA")}
              className={`rounded-none px-2.5 py-1.5 text-[11px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                activeFilter === "SEMUA"
                  ? "bg-on-surface text-surface border-on-surface shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant border-surface-variant/80 hover:border-on-surface"
              }`}
            >
              SEMUA ({JELAJAH_ALL_ITEMS.length})
            </button>

            {/* Tombol PARIWISATA (rounded-none / rounded 0) */}
            <button
              type="button"
              onClick={() => handleFilterChange("PARIWISATA")}
              className={`rounded-none px-2.5 py-1.5 text-[11px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-1 ${
                activeFilter === "PARIWISATA"
                  ? "bg-[#8f0012] text-white border-[#8f0012] shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant border-surface-variant/80 hover:border-[#8f0012]"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">landscape</span>
              <span>PARIWISATA</span>
            </button>

            {/* Tombol UMKM (rounded-none / rounded 0) */}
            <button
              type="button"
              onClick={() => handleFilterChange("UMKM")}
              className={`rounded-none px-2.5 py-1.5 text-[11px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-1 ${
                activeFilter === "UMKM"
                  ? "bg-[#b45309] text-white border-[#b45309] shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant border-surface-variant/80 hover:border-[#b45309]"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">storefront</span>
              <span>UMKM</span>
            </button>

            {/* Tombol BUDAYA (rounded-none / rounded 0) */}
            <button
              type="button"
              onClick={() => handleFilterChange("BUDAYA")}
              className={`rounded-none px-2.5 py-1.5 text-[11px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-1 ${
                activeFilter === "BUDAYA"
                  ? "bg-[#7e22ce] text-white border-[#7e22ce] shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant border-surface-variant/80 hover:border-[#7e22ce]"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">theater_comedy</span>
              <span>BUDAYA</span>
            </button>
          </div>
        </div>

        {/*
          3. GRID 3x3 CARDS (MOBILE FIRST: Tepat 3 Kolom per Baris di Layar HP)
          Sesuai instruksi USER:
          "saat detail katalog lengkap jelaj bilagnku gimana sih? 3x3 kan? ini mobile app first yak, jadi 3x3 di hp makstu saya."
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

                {/* Badge Tag Kategori Kotak Tegas Rounded-0 */}
                <div className="absolute top-1 left-1 pointer-events-none">
                  <span
                    className={`rounded-none px-1 py-0.5 text-[7.5px] font-black uppercase tracking-wider text-white shadow-sm ${
                      item.catalogCategory === "PARIWISATA"
                        ? "bg-[#8f0012]"
                        : item.catalogCategory === "UMKM"
                        ? "bg-[#b45309]"
                        : "bg-[#7e22ce]"
                    }`}
                  >
                    {item.badgeText}
                  </span>
                </div>

                <div className="absolute bottom-1 right-1 pointer-events-none">
                  <span className="px-1 py-0.5 rounded bg-primary text-white text-[7.5px] font-bold">
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
