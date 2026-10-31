import React, { useEffect, useRef, useState } from "react";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerVR: (monumentName: string) => void;
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({
  isOpen,
  onClose,
  onTriggerVR,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setCameraActive(false);
      return;
    }

    let stream: MediaStream | null = null;

    // Start live device camera if available
    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: "environment" } })
      .then((s) => {
        stream = s;
        if (videoRef.current) {
          videoRef.current.srcObject = s;
          videoRef.current.play();
          setCameraActive(true);
        }
      })
      .catch((err) => {
        console.warn("Camera access denied or unavailable in current context:", err);
        setCameraActive(false);
      });

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSimulateScan = () => {
    setIsScanning(false);
    setTimeout(() => {
      onTriggerVR("Tugu Alun-Alun Trenggalek");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between animate-fadeIn select-none">
      {/* Live Video Camera Background */}
      <div className="absolute inset-0 overflow-hidden">
        {cameraActive ? (
          <video
            ref={videoRef}
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#1c1d1d] via-[#121313] to-black flex items-center justify-center">
            {/* Visual Viewfinder Background */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #000000 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>
        )}
      </div>

      {/* Top Header Controls */}
      <div className="relative z-10 p-5 pt-safe flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Pemindai QR LARAS
            </h3>
            <p className="text-[11px] text-white/70">
              Arahkan ke Plang QR Cagar Budaya
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all cursor-pointer"
          aria-label="Tutup Scanner"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Center QR Reticle & Scanner Laser */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <div className="relative w-64 h-64 rounded-3xl border-2 border-white/30 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Corner Target Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl" />

          {/* Scanning Laser Beam */}
          {isScanning && (
            <div className="absolute inset-x-2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#ff4d26] animate-[bounce_2s_infinite]" />
          )}

          {/* QR Icon Placeholder if camera off */}
          {!cameraActive && (
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="material-symbols-outlined text-5xl">qr_code_2</span>
              <span className="text-xs font-medium">Tempatkan QR Code di dalam kotak</span>
            </div>
          )}
        </div>

        <p className="text-xs text-white/80 text-center mt-6 max-w-xs leading-relaxed">
          Pindai barcode pada tugu atau monumen bersejarah untuk membuka portal Virtual Reality 360°.
        </p>
      </div>

      {/* Bottom Action Area: Quick Simulation for Jury/Testing */}
      <div className="relative z-10 p-6 pb-safe bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-3">
        {/* Instant Demo Simulation Button */}
        <button
          onClick={handleSimulateScan}
          type="button"
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-tr from-primary via-[#b32025] to-[#ff7b52] text-white font-bold text-sm shadow-[0_6px_24px_rgba(189,45,0,0.5)] flex items-center justify-center gap-2 active:scale-98 transition-all hover:brightness-110 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">view_in_ar</span>
          <span>Simulasi Pindai: Tugu Alun-Alun Trenggalek</span>
        </button>

        <p className="text-[11px] text-white/50 text-center">
          *Klik tombol di atas untuk menguji demo langsung tanpa cetak barcode fisik.
        </p>
      </div>
    </div>
  );
};
