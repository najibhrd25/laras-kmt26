import React, { useState } from "react";
import { KECAMATAN_LIST, type KecamatanData, type RegionCardItem } from "../data/kecamatanData";
import type { Destination } from "../types/destination";

interface TrenggalekMapViewProps {
  onSelectDestination: (dest: Destination) => void;
}

type MapFilter = "semua" | "wisata" | "desa_wisata" | "umkm";

export const TrenggalekMapView: React.FC<TrenggalekMapViewProps> = ({ onSelectDestination }) => {
  const [filterType, setFilterType] = useState<MapFilter>("semua");
  const [selectedKecId, setSelectedKecId] = useState<string>("watulimo");
  const [hoveredKecId, setHoveredKecId] = useState<string | null>(null);

  // State untuk Slide-over Drawer Overlay (Pariwisata / UMKM per daerah)
  const [activeOverlayType, setActiveOverlayType] = useState<"wisata" | "umkm" | null>(null);

  // Kunci scroll background layar saat overlay terbuka, lepas saat ditutup
  React.useEffect(() => {
    if (activeOverlayType) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeOverlayType]);

  const activeKec: KecamatanData =
    KECAMATAN_LIST.find((k) => k.id === (hoveredKecId || selectedKecId)) ||
    KECAMATAN_LIST[0];

  const handleKecClick = (kec: KecamatanData) => {
    setSelectedKecId(kec.id);
  };

  const openOverlay = (type: "wisata" | "umkm") => {
    setActiveOverlayType(type);
  };

  const closeOverlay = () => {
    setActiveOverlayType(null);
  };

  // Tentukan item mana yang ditampilkan di overlay saat ini
  const overlayItems: RegionCardItem[] =
    activeOverlayType === "wisata"
      ? activeKec.pariwisataItems
      : activeOverlayType === "umkm"
      ? activeKec.umkmItems
      : [];

  return (
    <div className="flex flex-col w-full pb-28 animate-fadeIn">
      {/* 1. Header & Deskripsi Peta */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Peta Wilayah Trenggalek
          </span>
          <h1 className="text-2xl font-bold text-on-surface tracking-tight mt-1 leading-tight">
            Eksplorasi 14 Kecamatan
          </h1>
          <p className="text-sm text-on-surface-variant mt-1.5 leading-relaxed">
            Sentuh salah satu kecamatan untuk membuka rincian pariwisata lokal dan sentra UMKM khas daerah tersebut.
          </p>
        </div>

        {/* 2. Filter Tab Karakteristik: Semua, Destinasi Wisata, Desa Wisata, Sentra UMKM */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-3.5 p-1 bg-surface-container-low rounded-xl border border-surface-variant/40">
          <button
            type="button"
            onClick={() => setFilterType("semua")}
            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
              filterType === "semua"
                ? "bg-on-surface text-surface shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Semua (14 Kec.)
          </button>

          <button
            type="button"
            onClick={() => setFilterType("wisata")}
            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
              filterType === "wisata"
                ? "bg-[#8f0012] text-white shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#8f0012] shrink-0" />
            <span>Destinasi Wisata</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterType("desa_wisata")}
            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
              filterType === "desa_wisata"
                ? "bg-[#047857] text-white shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#047857] shrink-0" />
            <span>Desa Wisata</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterType("umkm")}
            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
              filterType === "umkm"
                ? "bg-[#b45309] text-white shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#b45309] shrink-0" />
            <span>Sentra UMKM</span>
          </button>
        </div>
      </div>

      {/* 3. Official Vector Map SVG Container (CLEAN: Cuma Ada Peta Saja di Dalam Box) */}
      <div className="px-5">
        <div className="relative w-full rounded-2xl bg-[#141515] p-3 shadow-xl border border-surface-variant/40 overflow-hidden flex items-center justify-center">
          {/* SVG Map of 14 Subdistricts (Clean & Pure Vector Map) */}
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            <svg
              viewBox="20 10 540 560"
              className="w-full h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] select-none"
            >
              {KECAMATAN_LIST.map((kec) => {
                const isSelected = selectedKecId === kec.id;
                const isHovered = hoveredKecId === kec.id;

                // Evaluasi kecocokan filter
                const isFilteredMatch =
                  filterType === "semua" ||
                  (filterType === "wisata" && (kec.highlightType === "wisata" || kec.highlightType === "campuran")) ||
                  (filterType === "desa_wisata" && (kec.highlightType === "desa_wisata" || kec.highlightType === "campuran")) ||
                  (filterType === "umkm" && (kec.highlightType === "umkm" || kec.highlightType === "campuran"));

                // Warna karakteristik wilayah
                let fillColor = "#2c2e2e"; // Default netral redup
                let strokeColor = "#444747";
                let strokeWidth = 1.2;

                if (isFilteredMatch) {
                  if (kec.highlightType === "wisata") {
                    fillColor = "#8f0012"; // Terracotta Wisata
                    strokeColor = "#fca5a5";
                  } else if (kec.highlightType === "desa_wisata") {
                    fillColor = "#047857"; // Emerald Green Desa Wisata
                    strokeColor = "#6ee7b7";
                  } else if (kec.highlightType === "umkm") {
                    fillColor = "#b45309"; // Warm Amber UMKM
                    strokeColor = "#fde68a";
                  } else {
                    fillColor = "#7e22ce"; // Campuran Ungu
                    strokeColor = "#e9d5ff";
                  }
                }

                if (isSelected) {
                  fillColor = "#d44321"; // Bright Terracotta Glow
                  strokeColor = "#ffffff";
                  strokeWidth = 2.8;
                } else if (isHovered) {
                  strokeColor = "#ffffff";
                  strokeWidth = 2;
                }

                return (
                  <g
                    key={kec.id}
                    onClick={() => handleKecClick(kec)}
                    onMouseEnter={() => setHoveredKecId(kec.id)}
                    onMouseLeave={() => setHoveredKecId(null)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    {/* Path Wilayah Kecamatan */}
                    <path
                      d={kec.svgPath}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="transition-all duration-300 hover:brightness-125"
                      style={{
                        opacity: isFilteredMatch ? 1 : 0.22,
                        filter: isSelected ? "drop-shadow(0 0 10px rgba(212,67,33,0.85))" : undefined,
                      }}
                    />

                    {/* Label Nama Kecamatan */}
                    <text
                      x={kec.labelPos.x}
                      y={kec.labelPos.y}
                      fill="#ffffff"
                      fontSize={isSelected ? "11px" : "9px"}
                      fontWeight={isSelected ? "bold" : "600"}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="pointer-events-none transition-all duration-200"
                      style={{
                        textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                        opacity: isFilteredMatch ? 1 : 0.35,
                      }}
                    >
                      {kec.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* 4. DETAIL INFORMASI DAERAH: 3 ROW BERJEJER KE BAWAH */}
      <div className="px-5 mt-4">
        <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-variant/60 shadow-md flex flex-col gap-3.5 animate-slideUp">
          {/* Header Kecamatan Terpilih */}
          <div className="flex items-center justify-between pb-2 border-b border-surface-variant/40">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                Daerah Terpilih ({activeKec.desaCount} Desa)
              </span>
              <h3 className="text-xl font-bold text-on-surface leading-snug">
                Kecamatan {activeKec.label}
              </h3>
            </div>
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                activeKec.highlightType === "wisata"
                  ? "bg-[#8f0012] text-white"
                  : activeKec.highlightType === "desa_wisata"
                  ? "bg-[#047857] text-white"
                  : activeKec.highlightType === "umkm"
                  ? "bg-[#b45309] text-white"
                  : "bg-[#7e22ce] text-white"
              }`}
            >
              {activeKec.highlightType === "wisata"
                ? "Wisata Alam"
                : activeKec.highlightType === "desa_wisata"
                ? "Desa Wisata"
                : activeKec.highlightType === "umkm"
                ? "Sentra UMKM"
                : "Wisata & UMKM"}
            </span>
          </div>

          {/* ROW 1: PARIWISATA LOKAL (Maksimal 2) + Panah Kanan ke Overlay */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-surface-variant/40 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-2.5 min-w-0 pr-2">
              <div className="w-8 h-8 rounded-lg bg-[#8f0012]/15 text-[#8f0012] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">landscape</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Pariwisata Lokal
                </span>
                <p className="text-xs font-bold text-on-surface truncate mt-0.5">
                  {activeKec.rowPariwisata.join(", ")}
                </p>
                <span className="text-[10px] text-primary font-medium mt-0.5">
                  Lihat {activeKec.pariwisataItems.length} destinasi daerah ini
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openOverlay("wisata")}
              className="w-9 h-9 rounded-full bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
              aria-label={`Buka Pariwisata ${activeKec.label}`}
              title="Buka Galeri Pariwisata"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>

          {/* ROW 2: UMKM DAERAH (Maksimal 2) + Panah Kanan ke Overlay */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-surface-variant/40 hover:border-amber-500/50 transition-all">
            <div className="flex items-start gap-2.5 min-w-0 pr-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">storefront</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Sentra UMKM Lokal
                </span>
                <p className="text-xs font-bold text-on-surface truncate mt-0.5">
                  {activeKec.rowUmkm.join(", ")}
                </p>
                <span className="text-[10px] text-amber-600 font-medium mt-0.5">
                  Lihat {activeKec.umkmItems.length} produk & sentra khas
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openOverlay("umkm")}
              className="w-9 h-9 rounded-full bg-amber-600 text-white hover:bg-amber-700 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
              aria-label={`Buka UMKM ${activeKec.label}`}
              title="Buka Katalog UMKM"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>

          {/* ROW 3: POTENSI & IKON UTAMA DAERAH */}
          <div className="p-3 rounded-xl bg-surface-container-low border border-surface-variant/40 flex flex-col gap-1">
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
              Potensi & Karakteristik Wilayah
            </span>
            <p className="text-xs text-on-surface leading-relaxed text-justify">
              {activeKec.potensiIkon}
            </p>
          </div>
        </div>
      </div>

      {/* 5. SLIDE-OVER / OVERLAY DAERAH (Scrollable Atas-Bawah, Card Foto di Atas & Nama di Bawah) */}
      {activeOverlayType && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overscroll-contain animate-fadeIn"
          onClick={closeOverlay}
        >
          <div
            className="w-full max-w-md max-h-[85vh] bg-surface rounded-t-3xl sm:rounded-2xl shadow-2xl border border-surface-variant/50 flex flex-col overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Overlay */}
            <div className="px-5 py-4 border-b border-surface-variant/40 flex items-center justify-between shrink-0 bg-surface-container-lowest">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 ${
                    activeOverlayType === "wisata" ? "bg-primary" : "bg-amber-600"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {activeOverlayType === "wisata" ? "landscape" : "storefront"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-on-surface leading-tight">
                    {activeOverlayType === "wisata" ? "Pariwisata" : "Sentra UMKM"} • Kec. {activeKec.label}
                  </h3>
                  <span className="text-[11px] text-on-surface-variant">
                    {overlayItems.length} destinasi & produk unggulan
                  </span>
                </div>
              </div>

              {/* Close Button Overlay */}
              <button
                type="button"
                onClick={closeOverlay}
                className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors cursor-pointer"
                aria-label="Tutup Overlay"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Scrollable Body: Daftar Card (Foto di Atas, Judul/Nama di Bawah) */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 no-scrollbar">
              {overlayItems.length === 0 ? (
                <div className="py-12 text-center text-on-surface-variant text-xs">
                  Belum ada entri untuk kategori ini di Kecamatan {activeKec.label}.
                </div>
              ) : (
                overlayItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      closeOverlay();
                      onSelectDestination(item.toDestination);
                    }}
                    className="group rounded-2xl bg-surface-container-lowest border border-surface-variant/60 hover:border-primary/60 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col"
                  >
                    {/* FOTO DI ATAS (Tinggi Pasti & Responsif agar Selalu Tampil Prima) */}
                    <div className="relative w-full h-44 sm:h-48 bg-surface-container overflow-hidden shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/vr_alun_alun_360.png";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                        <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold">
                          {item.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold">
                          {item.priceTag}
                        </span>
                      </div>
                    </div>

                    {/* NAMA / JUDUL DI BAWAH (Termuat dalam Card) */}
                    <div className="p-3.5 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1 text-amber-500 shrink-0">
                          <span className="material-symbols-outlined text-[15px] fill-current">star</span>
                          <span className="text-[11px] font-bold text-on-surface">{item.rating}</span>
                        </div>
                      </div>

                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-surface-variant/30 flex items-center justify-between text-[11px]">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          {item.openHours}
                        </span>
                        <span className="text-primary font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          <span>Buka Detail</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
