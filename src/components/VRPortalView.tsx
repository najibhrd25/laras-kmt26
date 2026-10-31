import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

interface VRPortalViewProps {
  onClose: () => void;
  targetMonumentName?: string;
}

interface StoryPoint {
  icon: string;
  badge: string;
  title: string;
  detail: string;
}

interface FolkStory {
  id: string;
  headerTitle: string;
  headerSubtitle: string;
  imageSrc: string;
  imageTag: string;
  imageEra: string;
  leadTitle: string;
  leadDesc: string;
  points: StoryPoint[];
}

const ALL_FOLK_STORIES: FolkStory[] = [
  {
    id: "menak-sopal",
    headerTitle: "Hikayat Kyai Menak Sopal",
    headerSubtitle: "Legenda pahlawan pertanian Trenggalek",
    imageSrc: "/images/menak_sopal.jpg",
    imageTag: "Kyai Menak Sopal & Kali Bagong",
    imageEra: "Abad ke-16",
    leadTitle: "Sang Peletak Fondasi Kemakmuran Trenggalek",
    leadDesc:
      "Kyai Menak Sopal adalah tokoh bangsawan saleh yang memadukan kearifan batin dan kecerdasan teknik sipil kuno. Berkat keberanian dan tekad baja beliau, tanah Trenggalek yang semula gersang dan terancam kemiskinan diubah menjadi lumbung pangan yang makmur sejahtera.",
    points: [
      {
        icon: "water_drop",
        badge: "Paceklik & Keprihatinan",
        title: "Kekeringan Melanda Bumi Trenggalek",
        detail:
          "Ratusan tahun silam, tlatah Trenggalek didera kemarau panjang berkepanjangan. Tanah persawahan retak, lumbung pangan kosong, dan rakyat terancam paceklik hebat. Menak Sopal memohon petunjuk di bawah beringin kembar untuk menyelamatkan warganya.",
      },
      {
        icon: "architecture",
        badge: "Prakarsa Irigasi Kuno",
        title: "Pembangunan Dam Bagong & Tantangan Gaib",
        detail:
          "Dengan visi besar mendahului zamannya, Menak Sopal menggerakkan ribuan warga membendung aliran Kali Bagong. Namun fondasi batu selalu ambrol di malam hari akibat penolakan siluman penunggu sungai Mbok Roro Krincing Wesi.",
      },
      {
        icon: "pets",
        badge: "Pengorbanan Luhur",
        title: "Meminjam Gajah Putih Mbok Roro Kencono",
        detail:
          "Demi mengalirkan air dan menyelamatkan ribuan nyawa petani, Menak Sopal meminjam Gajah Putih pusaka milik Mbok Roro Kencono Ponorogo sebagai sarana tumbal penakluk arus liar Kali Bagong agar bendungan berdiri kokoh.",
      },
      {
        icon: "agriculture",
        badge: "Trenggalek Gemah Ripah",
        title: "Air Mengalir & Tradisi Abadi Nyadran",
        detail:
          "Bendungan Bagong berhasil berdiri kokoh dan mengairi jutaan petak sawah dari Trenggalek hingga pesisir. Peristiwa bersejarah ini diabadikan turun-temurun lewat upacara adat Nyadran Dam Bagong setiap bulan Selo.",
      },
    ],
  },
  {
    id: "turonggo-yakso",
    headerTitle: "Kesenian Turonggo Yakso",
    headerSubtitle: "Tarian jaranan buto asli Dongko Trenggalek",
    imageSrc: "/images/turonggo_yakso.jpg",
    imageTag: "Pentas Turonggo Yakso Pegunungan",
    imageEra: "Tradisi Budaya",
    leadTitle: "Simbol Kemenangan Melawan Angkara Murka",
    leadDesc:
      "Berbeda dari jaran kepang kuda biasa, Turonggo Yakso menampilkan kuda berkepala raksasa (Buto). Kesenian magis yang lahir dari kawasan pegunungan Dongko ini melambangkan pergulatan batin manusia dalam menaklukkan nafsu angkara murka demi menjaga keselarasan alam.",
    points: [
      {
        icon: "theater_comedy",
        badge: "Asal-Usul Kesenian",
        title: "Lahir dari Upacara Bersih Desa Dongko",
        detail:
          "Diciptakan oleh para sesepuh Desa Dongko Trenggalek sebagai bagian dari ritual Baritan (upacara adat tolak bala) untuk memohon perlindungan tanaman pertanian dan hewan ternak dari wabah penyakit.",
      },
      {
        icon: "masks",
        badge: "Karakter Raksasa",
        title: "Kuda Berkepala Raksasa Bertaring",
        detail:
          "Bentuk anyaman bambu kuda tidak berkepala kuda jinak, melainkan berkepala raksasa (Yakso) dengan mata melotot dan taring mencuat, menggambarkan kekuatan liar alam pegunungan yang berhasil dikendalikan manusia.",
      },
      {
        icon: "campaign",
        badge: "Iringan Musik Unik",
        title: "Irama Kothekan Lesung & Slompret",
        detail:
          "Iringan musik Turonggo Yakso sangat khas dengan tiupan slompret melengking, bunyi lesung kayu pemukul padi, dan tabuhan kendang energik yang memacu adrenalin para penari dalam formasi perang.",
      },
      {
        icon: "military_tech",
        badge: "Warisan Budaya",
        title: "Kekayaan Intelektual Komunal Trenggalek",
        detail:
          "Kini Turonggo Yakso telah diakui sebagai Warisan Budaya Takbenda (WBTb) Indonesia dan menjadi ikon kebanggaan budaya Kabupaten Trenggalek yang dipentaskan di berbagai festival tari internasional.",
      },
    ],
  },
  {
    id: "larung-sembonyo",
    headerTitle: "Tradisi Larung Sembonyo",
    headerSubtitle: "Upacara syukur sedekah laut Teluk Prigi",
    imageSrc: "/images/larung_sembonyo.jpg",
    imageTag: "Arak-arakan Tumpeng Teluk Prigi",
    imageEra: "Tradisi Bahari",
    leadTitle: "Harmoni Nelayan Pesisir dengan Samudra Hindia",
    leadDesc:
      "Larung Sembonyo adalah puncak ritual sedekah laut masyarakat nelayan Teluk Prigi Watulimo. Berakar dari legenda pernikahan Raden Tumenggung Yudhanegara dengan Putri Gambar Inten, upacara ini memadukan rasa syukur panen ikan melimpah dan penghormatan kepada penguasa laut selatan.",
    points: [
      {
        icon: "sailing",
        badge: "Sejarah Babad Prigi",
        title: "Napak Tilas Raden Tumenggung Yudhanegara",
        detail:
          "Menurut folklor pesisir Watulimo, kawasan teluk Prigi yang angker berhasil dibuka berkat perjanjian suci pernikahan Raden Tumenggung Yudhanegara dengan penguasa laut Putri Gambar Inten.",
      },
      {
        icon: "dinner_dining",
        badge: "Prosesi Tumpeng Agung",
        title: "Arak-arakan Tumpeng Raksasa Berhias Janur",
        detail:
          "Masyarakat nelayan mengarak tumpeng raksasa setinggi 2 meter beserta aneka hasil bumi dan laut, diiringi pagelaran wayang kulit semalam suntuk di Tempat Pelelangan Ikan Prigi.",
      },
      {
        icon: "waves",
        badge: "Pelarungan Samudra",
        title: "Pelepasan Sesaji ke Tengah Laut Selatan",
        detail:
          "Puluhan kapal nelayan berhias bendera warna-warni mengawal kapal utama pembawa tumpeng menuju mulut Teluk Prigi untuk dilarung ke tengah deburan ombak Samudra Hindia.",
      },
      {
        icon: "handshake",
        badge: "Kearifan Ekologis",
        title: "Simbol Kerukunan & Kelestarian Maritim",
        detail:
          "Lebih dari sekadar ritual, Sembonyo mempererat gotong royong ribuan nelayan Trenggalek serta menjadi pengingat leluhur untuk menjaga kelestarian ekosistem terumbu karang dan lautan.",
      },
    ],
  },
];

export const VRPortalView: React.FC<VRPortalViewProps> = ({
  onClose,
  targetMonumentName = "Tugu Alun-Alun Trenggalek",
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Audio Synth Web Audio API: Pewayangan Gamelan & Deep Gong
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<any>(null);
  const gongTimerRef = useRef<any>(null);

  // States
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);
  const [activeInfoContent, setActiveInfoContent] = useState<"tugu" | "pendopo" | null>(null);

  // 1. Audio Gamelan Pewayangan Asik & Gong Besar (Web Audio API Synthesizer)
  const startPewayanganGamelan = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const saronScale = [293.66, 329.63, 392.0, 440.0, 523.25, 587.33];
      const gongFrequencies = [55.0, 73.4, 82.4, 110.0];

      const playDeepGong = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = ctx.currentTime;
        const baseFreq = gongFrequencies[Math.floor(Math.random() * gongFrequencies.length)];

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(baseFreq, now);

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(baseFreq * 2.02, now);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.35, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(filter);
        filter.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 5.0);
        osc2.stop(now + 5.0);
      };

      let noteIndex = 0;
      const playSaronNote = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = saronScale[noteIndex % saronScale.length];
        noteIndex = (noteIndex + Math.floor(Math.random() * 2) + 1) % saronScale.length;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.3);
      };

      playDeepGong();
      playSaronNote();

      synthTimerRef.current = setInterval(playSaronNote, 480);
      gongTimerRef.current = setInterval(playDeepGong, 3840);

      setIsPlayingAudio(true);
    } catch (e) {
      console.warn("AudioContext error:", e);
    }
  };

  const stopPewayanganGamelan = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (gongTimerRef.current) {
      clearInterval(gongTimerRef.current);
      gongTimerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlayingAudio(false);
  };

  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopPewayanganGamelan();
    } else {
      startPewayanganGamelan();
    }
  };

  // 2. Three.js Setup with OrbitControls
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0.1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = -0.35;
    controls.minDistance = 0.05;
    controls.maxDistance = 0.5;

    // 360 Sphere
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/images/vr_alun_alun_360.png");
    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      stopPewayanganGamelan();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  const story = ALL_FOLK_STORIES[currentStoryIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col select-none overflow-hidden animate-fadeIn">
      {/* 3D WebGL Canvas Layer - Super Clean */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* TOP BAR: Clean & Minimalist */}
      <div className="relative z-20 p-4 pt-safe flex items-center justify-between pointer-events-none">
        {/* Title Tag */}
        <div className="flex items-center gap-2 pointer-events-auto bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white shadow-lg">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide">
            {targetMonumentName} (360°)
          </span>
        </div>

        {/* Right Controls: Info (Tanda Seru) + Close Button */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Info Button (Tanda Seru) */}
          <div className="relative">
            <button
              onClick={() => setShowInfoDropdown(!showInfoDropdown)}
              className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 ${
                showInfoDropdown
                  ? "bg-primary border-white text-white"
                  : "bg-black/50 border-white/20 text-white hover:bg-black/70"
              }`}
              title="Informasi Seputar Alun-Alun"
            >
              <span className="material-symbols-outlined text-[18px]">info</span>
            </button>

            {/* Dropdown Menu Tanda Seru */}
            {showInfoDropdown && (
              <div className="absolute top-11 right-0 w-56 bg-surface/95 backdrop-blur-xl border border-surface-variant/70 shadow-2xl rounded-2xl p-2 flex flex-col gap-1 text-on-surface animate-slideUp z-30">
                <button
                  onClick={() => {
                    setActiveInfoContent("tugu");
                    setShowInfoDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-surface-container flex items-center gap-2 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-amber-500 text-[18px]">
                    history_edu
                  </span>
                  <span>Fakta Tugu Alun-Alun</span>
                </button>

                <button
                  onClick={() => {
                    setActiveInfoContent("pendopo");
                    setShowInfoDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-surface-container flex items-center gap-2 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    account_balance
                  </span>
                  <span>Pendopo Manggala Praja</span>
                </button>
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all shadow-lg cursor-pointer"
            aria-label="Tutup VR"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      </div>

      {/* POPUP INFORMASI DARI TANDA SERU */}
      {activeInfoContent && (
        <div className="absolute top-20 left-4 right-4 z-30 max-w-sm mx-auto bg-surface/95 backdrop-blur-xl p-4 rounded-2xl border border-surface-variant/60 shadow-2xl animate-slideUp">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">
                {activeInfoContent === "tugu" ? "history_edu" : "account_balance"}
              </span>
              <h4 className="text-sm font-bold text-on-surface">
                {activeInfoContent === "tugu"
                  ? "Tugu Alun-Alun & Pusaka Trenggalek"
                  : "Pendopo Manggala Praja Nugraha"}
              </h4>
            </div>
            <button
              onClick={() => setActiveInfoContent(null)}
              className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
            {activeInfoContent === "tugu"
              ? "Tugu Alun-Alun Trenggalek merupakan titik sentral kosmologis tata ruang Jawa kuno, menghubungkan sumbu filosofis antara Gunung Wilis di utara dengan Samudra Hindia di pesisir selatan."
              : "Pendopo Agung berusia lebih dari satu abad yang menjadi saksi bisu kepemimpinan bupati Trenggalek dari masa ke masa, dengan arsitektur Joglo Sinom megah dan kayu jati tua pilihan."}
          </p>
        </div>
      )}

      {/* MODAL 1 CARD SINGLE TINGGI HAMPIR FULL DENGAN NAVIGATION CERITA LAINNYA */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Card Tunggal dengan rounded-[15px], Proporsi Tinggi 90vh */}
          <div className="relative w-full max-w-md h-[90vh] max-h-[820px] bg-gradient-to-b from-[#1f2121] via-[#161717] to-[#0d0e0e] border border-white/20 rounded-[15px] shadow-2xl text-white flex flex-col overflow-hidden">
            {/* Header Card: Tepat 2 Baris (1 baris judul, 1 baris penjelasan) sejajar dengan Close */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.02]">
              <div className="flex items-center gap-2.5 overflow-hidden pr-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                </div>
                <div className="flex flex-col min-w-0">
                  {/* Baris 1: Judul Cerita */}
                  <h3 className="text-sm font-bold text-white tracking-tight truncate leading-tight">
                    {story.headerTitle}
                  </h3>
                  {/* Baris 2: Subjudul Penjelasan Singkat */}
                  <p className="text-[11px] text-amber-300/90 font-medium truncate leading-tight mt-0.5">
                    {story.headerSubtitle}
                  </p>
                </div>
              </div>

              {/* Close Button Header */}
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Tutup Cerita"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3.5 no-scrollbar">
              {/* Foto Ilustrasi 16:9 Persegi Panjang Sinematik */}
              <div className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden border border-white/15 shadow-xl shrink-0">
                <img
                  src={story.imageSrc}
                  alt={story.headerTitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 font-semibold truncate max-w-[200px]">
                    {story.imageTag}
                  </span>
                  <span className="text-[10px] text-amber-300 font-medium shrink-0">
                    {story.imageEra}
                  </span>
                </div>
              </div>

              {/* Pengantar Cerita Tanpa Card (Teks Langsung Bersih & Rapi) */}
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                  {story.leadTitle}
                </h4>
                <p className="text-xs text-white/80 mt-1.5 leading-relaxed text-justify">
                  {story.leadDesc}
                </p>
              </div>

              {/* Poin-Poin Penting Sejarah Bernutrisi */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-primary rounded-full" />
                  <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">
                    Tonggak Perjalanan Sejarah
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {story.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-[12px] bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500/20 to-primary/20 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-300 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          {pt.icon}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                          {pt.badge}
                        </span>
                        <h5 className="text-xs font-bold text-white mt-0.5">
                          {pt.title}
                        </h5>
                        <p className="text-[11px] text-white/70 mt-1 leading-relaxed text-justify">
                          {pt.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Area: Navigation Carousel Panah Kiri-Kanan Minimalis Di Atas Teks Pustaka */}
            <div className="px-4 py-3 border-t border-white/10 shrink-0 bg-white/[0.02] flex flex-col gap-2">
              {/* Baris Panah Kiri-Kanan & Indikator Cerita */}
              <div className="flex items-center justify-between">
                {/* Panah Kiri */}
                <button
                  type="button"
                  disabled={currentStoryIndex === 0}
                  onClick={() => setCurrentStoryIndex((prev) => Math.max(0, prev - 1))}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center cursor-pointer border border-white/10"
                  aria-label="Sebelumnya"
                >
                  <span className="material-symbols-outlined text-[22px]">arrow_back</span>
                </button>

                {/* Indikator Titik (Dots) Cerita */}
                <div className="flex items-center gap-2">
                  {ALL_FOLK_STORIES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentStoryIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentStoryIndex ? "w-6 bg-amber-400" : "w-2 bg-white/30"
                      }`}
                      aria-label={`Cerita ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Panah Kanan */}
                <button
                  type="button"
                  disabled={currentStoryIndex === ALL_FOLK_STORIES.length - 1}
                  onClick={() =>
                    setCurrentStoryIndex((prev) =>
                      Math.min(ALL_FOLK_STORIES.length - 1, prev + 1)
                    )
                  }
                  className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 active:scale-95 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center cursor-pointer shadow-md"
                  aria-label="Selanjutnya"
                >
                  <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
                </button>
              </div>

              {/* Teks Pustaka Budaya di Bagian Paling Bawah */}
              <div className="flex items-center justify-between text-[11px] text-white/50 pt-1 border-t border-white/5">
                <span>Pusaka Budaya Dinas Pariwisata Trenggalek</span>
                <span className="text-amber-300/80 font-medium">
                  {currentStoryIndex + 1} dari {ALL_FOLK_STORIES.length} Folklor
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BAR: Tombol "Buka Cerita Budaya" & "Musik Gong Wayang" */}
      <div className="relative z-20 mt-auto p-4 pb-safe flex items-center justify-center gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
        {/* Tombol Utama: Kisah Budaya Trenggalek */}
        <button
          onClick={() => {
            setIsStoryModalOpen(true);
            if (!isPlayingAudio) startPewayanganGamelan();
          }}
          className="pointer-events-auto px-5 py-3 rounded-2xl bg-gradient-to-tr from-primary via-[#b32025] to-[#ff7b52] text-white text-xs font-bold flex items-center gap-2 shadow-[0_4px_20px_rgba(189,45,0,0.5)] active:scale-95 transition-all hover:brightness-110 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] text-amber-200">
            auto_stories
          </span>
          <span>Buka Cerita Rakyat Trenggalek</span>
        </button>

        {/* Tombol Musik Gong Pewayangan Latar */}
        <button
          onClick={toggleAudio}
          className={`pointer-events-auto w-12 h-12 rounded-2xl backdrop-blur-md border flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer ${
            isPlayingAudio
              ? "bg-amber-500 text-white border-amber-300 ring-2 ring-amber-400/40"
              : "bg-black/50 text-white/80 border-white/20 hover:text-white"
          }`}
          title={isPlayingAudio ? "Matikan Gong Wayang" : "Nyalakan Gong Wayang"}
        >
          <span
            className={`material-symbols-outlined text-[22px] ${
              isPlayingAudio ? "animate-spin" : ""
            }`}
          >
            {isPlayingAudio ? "graphic_eq" : "music_note"}
          </span>
        </button>
      </div>
    </div>
  );
};
