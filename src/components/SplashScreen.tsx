import React, { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  // sequence phase:
  // 1. 'closed' (0 - 600ms): 2 gunungan menutup di tengah (kiri miring ke kanan, kanan miring ke kiri)
  // 2. 'opening' (600ms - 1500ms): gunungan berputar ke posisi tegak (0 deg) lalu meluncur membuka ke samping
  // 3. 'revealed' (1500ms - 3200ms): logo batik & teks Sugeng Rawuh ing LARAS tampil di tengah
  // 4. 'curtain-open' (3200ms - 4600ms): Tirai membuka dengan sangat lembut dan anggun (durasi 1400ms)
  const [phase, setPhase] = useState<"closed" | "opening" | "revealed" | "curtain-open">("closed");

  useEffect(() => {
    // 0.6s: gunungan mulai berputar ke tegak dan membuka
    const t1 = setTimeout(() => {
      setPhase("opening");
    }, 600);

    // 1.5s: teks Sugeng Rawuh tampil elegan
    const t2 = setTimeout(() => {
      setPhase("revealed");
    }, 1500);

    // 3.2s: mulai membuka tirai secara sangat halus dan diperlambat
    const t3 = setTimeout(() => {
      setPhase("curtain-open");
    }, 3200);

    // 4.6s: transisi tirai selesai sempurna dan masuk ke home screen
    const t4 = setTimeout(() => {
      onComplete();
    }, 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none select-none bg-transparent">
      {/* 
        TIRAI KIRI (LEFT CURTAIN):
        Durasi transisi diperlambat menjadi 1400ms dengan timing cubic-bezier lembut
      */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-[50.5%] bg-[#fcf9f8] z-30 transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-left overflow-hidden ${
          phase === "curtain-open" ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Background Batik Halus */}
        <div
          className="absolute inset-0 opacity-[0.06] bg-repeat bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/bg_batik.jpg')", backgroundSize: "320px auto" }}
        />

        {/* Akses Sudut Tradisional Kiri */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/50" />

        {/* Sisi Kiri Konten Teks */}
        <div
          className={`absolute inset-0 w-[198%] flex flex-col items-center justify-center px-6 transition-opacity duration-700 ${
            phase === "revealed" || phase === "curtain-open" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-2 border-secondary-container mb-4">
            <img
              src="/images/laras_logo.jpg"
              alt="LARAS Batik Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-display-hero-mobile text-3xl md:text-4xl text-primary font-bold tracking-tight">
            Sugeng Rawuh
          </p>
          <span className="font-body-md text-secondary tracking-widest uppercase my-1 text-sm font-semibold">
            — ing —
          </span>
          <h1 className="font-display-hero text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
            LARAS
          </h1>
          <p className="font-body-sm text-on-surface-variant mt-2 text-xs tracking-wider uppercase font-medium">
            Warisan Luhur & Pariwisata Trenggalek
          </p>
        </div>
      </div>

      {/* 
        TIRAI KANAN (RIGHT CURTAIN):
        Durasi transisi diperlambat menjadi 1400ms dengan timing cubic-bezier lembut
      */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-[50.5%] bg-[#fcf9f8] z-30 transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-right overflow-hidden ${
          phase === "curtain-open" ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Background Batik Halus */}
        <div
          className="absolute inset-0 opacity-[0.06] bg-repeat bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/bg_batik.jpg')", backgroundSize: "320px auto" }}
        />

        {/* Akses Sudut Tradisional Kanan */}
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/50" />

        {/* Sisi Kanan Konten Teks */}
        <div
          className={`absolute inset-0 -left-[98%] w-[198%] flex flex-col items-center justify-center px-6 transition-opacity duration-700 ${
            phase === "revealed" || phase === "curtain-open" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-2 border-secondary-container mb-4">
            <img
              src="/images/laras_logo.jpg"
              alt="LARAS Batik Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-display-hero-mobile text-3xl md:text-4xl text-primary font-bold tracking-tight">
            Sugeng Rawuh
          </p>
          <span className="font-body-md text-secondary tracking-widest uppercase my-1 text-sm font-semibold">
            — ing —
          </span>
          <h1 className="font-display-hero text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
            LARAS
          </h1>
          <p className="font-body-sm text-on-surface-variant mt-2 text-xs tracking-wider uppercase font-medium">
            Warisan Luhur & Pariwisata Trenggalek
          </p>
        </div>
      </div>

      {/* 
        GUNUNGAN WAYANG DI Z-INDEX PALING DEPAN (z-50)
      */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Gunungan Wayang Kiri */}
        <div
          className="absolute top-0 bottom-0 left-0 w-1/2 flex items-center justify-end transition-all duration-1000 ease-in-out"
          style={{
            transform:
              phase === "closed"
                ? "translateX(18%) rotate(18deg) scale(1.15)"
                : "translateX(-115%) rotate(0deg) scale(1.15)",
            transformOrigin: "bottom center",
            opacity: phase === "revealed" || phase === "curtain-open" ? 0 : 1,
          }}
        >
          <div className="h-[88vh] w-auto max-w-[380px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
            <img
              src="/images/gunungan_transparent.png"
              alt="Gunungan Wayang Kiri"
              className="h-full w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* Gunungan Wayang Kanan */}
        <div
          className="absolute top-0 bottom-0 right-0 w-1/2 flex items-center justify-start transition-all duration-1000 ease-in-out"
          style={{
            transform:
              phase === "closed"
                ? "translateX(-18%) rotate(-18deg) scale(1.15)"
                : "translateX(115%) rotate(0deg) scale(1.15)",
            transformOrigin: "bottom center",
            opacity: phase === "revealed" || phase === "curtain-open" ? 0 : 1,
          }}
        >
          <div className="h-[88vh] w-auto max-w-[380px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
            <img
              src="/images/gunungan_transparent.png"
              alt="Gunungan Wayang Kanan"
              className="h-full w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
