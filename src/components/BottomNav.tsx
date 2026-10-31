import React from "react";

export type NavTab = "beranda" | "jelajah" | "peta" | "setting";

interface BottomNavProps {
  activeTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
  onOpenVR?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  onOpenVR,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 pb-safe pointer-events-none">
      <div className="max-w-md mx-auto relative pointer-events-auto">
        {/*
          FLOATING CENTER BUTTON (VR CAMERA):
          Mengadaptasi diamond/squircle organic notch dari gambar referensi QRIS:
          - Rotated rounded-squircle base dengan warna Terracotta khas LARAS
          - Melayang anggun di tengah bar, memotong garis navbar
          - Z-index 50 agar berada di atas layer bar
        */}
        {/* Floating Center Button (VR CAMERA): Tanpa teks VR, Icon Pas Tepat di Tengah-Tengah */}
        <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-50 flex items-center justify-center">
          <button
            type="button"
            onClick={onOpenVR}
            aria-label="Scan & Akses Virtual Reality"
            className="relative group cursor-pointer focus:outline-none flex items-center justify-center"
          >
            {/* Outer Soft Ring / Notch background */}
            <div className="w-[62px] h-[62px] rounded-[22px] rotate-45 bg-[#fcf9f8] p-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              {/* Inner Diamond Button with Terracotta Gradient */}
              <div className="w-full h-full rounded-[18px] bg-gradient-to-br from-[#d44321] via-primary to-[#992205] shadow-[0_4px_14px_rgba(189,45,0,0.4)] flex items-center justify-center text-white">
                {/* Counter-rotate icon back to upright (0 deg) with absolute center alignment */}
                <div className="-rotate-45 flex items-center justify-center w-full h-full leading-none">
                  <span className="material-symbols-outlined text-[28px] select-none flex items-center justify-center">
                    photo_camera
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/*
          NAVBAR CONTAINER (5 ITEMS: Beranda, Jelajah, [VR], Peta, Pengaturan)
          Tinggi ditingkatkan ke h-[88px] dengan pt-2 pb-3 agar active bar bulat merah bernapas lega & tidak mepet
        */}
        <div className="h-[88px] px-3 pt-2 pb-3 bg-surface/95 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.06)] border-t border-surface-variant/40 flex items-center justify-between">
          {/* 1. Beranda */}
          <button
            type="button"
            onClick={() => onChangeTab("beranda")}
            aria-current={activeTab === "beranda" ? "page" : undefined}
            className="flex-1 flex flex-col items-center justify-center h-full transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeTab === "beranda"
                  ? "bg-primary text-white shadow-[0_4px_12px_rgba(189,45,0,0.35)] scale-105"
                  : "text-on-surface-variant group-hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">home</span>
            </div>
            <span
              className={`text-[10.5px] mt-1 transition-colors ${
                activeTab === "beranda"
                  ? "font-bold text-primary"
                  : "font-medium text-on-surface-variant"
              }`}
            >
              Beranda
            </span>
          </button>

          {/* 2. Jelajah */}
          <button
            type="button"
            onClick={() => onChangeTab("jelajah")}
            aria-current={activeTab === "jelajah" ? "page" : undefined}
            className="flex-1 flex flex-col items-center justify-center h-full transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeTab === "jelajah"
                  ? "bg-primary text-white shadow-[0_4px_12px_rgba(189,45,0,0.35)] scale-105"
                  : "text-on-surface-variant group-hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">explore</span>
            </div>
            <span
              className={`text-[10.5px] mt-1 transition-colors ${
                activeTab === "jelajah"
                  ? "font-bold text-primary"
                  : "font-medium text-on-surface-variant"
              }`}
            >
              Jelajah
            </span>
          </button>

          {/* Center Empty Gap for Floating Diamond Button (w-16) */}
          <div className="w-16 h-full pointer-events-none" />

          {/* 3. Peta Destinasi */}
          <button
            type="button"
            onClick={() => onChangeTab("peta")}
            aria-current={activeTab === "peta" ? "page" : undefined}
            className="flex-1 flex flex-col items-center justify-center h-full transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeTab === "peta"
                  ? "bg-primary text-white shadow-[0_4px_12px_rgba(189,45,0,0.35)] scale-105"
                  : "text-on-surface-variant group-hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">map</span>
            </div>
            <span
              className={`text-[10.5px] mt-1 transition-colors ${
                activeTab === "peta"
                  ? "font-bold text-primary"
                  : "font-medium text-on-surface-variant"
              }`}
            >
              Peta
            </span>
          </button>

          {/* 4. Pengaturan */}
          <button
            type="button"
            onClick={() => onChangeTab("setting")}
            aria-current={activeTab === "setting" ? "page" : undefined}
            className="flex-1 flex flex-col items-center justify-center h-full transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeTab === "setting"
                  ? "bg-primary text-white shadow-[0_4px_12px_rgba(189,45,0,0.35)] scale-105"
                  : "text-on-surface-variant group-hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">settings</span>
            </div>
            <span
              className={`text-[10.5px] mt-1 transition-colors ${
                activeTab === "setting"
                  ? "font-bold text-primary"
                  : "font-medium text-on-surface-variant"
              }`}
            >
              Pengaturan
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
