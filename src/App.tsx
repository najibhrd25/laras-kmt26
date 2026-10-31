import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Header } from "./components/Header";
import { HeroGreeting } from "./components/HeroGreeting";
import { SearchBar } from "./components/SearchBar";
import { LocationBanner } from "./components/LocationBanner";
import { CategoryChips } from "./components/CategoryChips";
import { DestinationCard } from "./components/DestinationCard";
import { FilterModal } from "./components/FilterModal";
import { DestinationDetailPage } from "./components/DestinationDetailPage";
import { BottomNav, type NavTab } from "./components/BottomNav";
import { WelcomeModal } from "./components/WelcomeModal";
import { TrenggalekMapView } from "./components/TrenggalekMapView";
import { QRScannerModal } from "./components/QRScannerModal";
import { VRPortalView } from "./components/VRPortalView";
import { JelajahView } from "./components/JelajahView";
import { JelajahDetailPage } from "./components/JelajahDetailPage";
import { destinationsData } from "./data/destinations";
import type { Destination } from "./types/destination";

const categories = ["Semua", "Pantai", "Alam", "Budaya", "Desa Wisata", "Kuliner"];
const sortOptions = ["Terdekat dari saya", "Paling populer", "Rekomendasi LARAS"];
const distanceOptions = ["< 5 km", "< 10 km", "< 25 km", "Semua jarak"];
const filterCategories = [
  "Semua",
  "Pantai",
  "Alam",
  "Budaya",
  "Desa Wisata",
  "Ekowisata",
  "Kuliner",
];

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<NavTab>("beranda");

  // User Name State & First-time Welcome Modal
  const [userName, setUserName] = useState<string>("Sobat Wisata");
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [showVRModal, setShowVRModal] = useState(false);

  // VR Portal State
  const [isVRPortalOpen, setIsVRPortalOpen] = useState(false);
  const [selectedVRMonument, setSelectedVRMonument] = useState("Tugu Alun-Alun Trenggalek");

  // Jelajah Full Catalog (3x3 Grid) State
  const [isJelajahCatalogOpen, setIsJelajahCatalogOpen] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("laras_user_name");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    const savedName = localStorage.getItem("laras_user_name");
    if (!savedName) {
      setIsWelcomeOpen(true);
    }
  };

  const handleSaveName = (name: string) => {
    localStorage.setItem("laras_user_name", name);
    setUserName(name);
    setIsWelcomeOpen(false);
  };

  // State untuk halaman destinasi terpilih (masuk page baru)
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter state
  const [filterSort, setFilterSort] = useState("Terdekat dari saya");
  const [modalCategory, setModalCategory] = useState("Semua");
  const [filterDistance, setFilterDistance] = useState("Semua jarak");

  const filteredDestinations = destinationsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplyFilter = () => {
    setSelectedCategory(modalCategory);
    setIsFilterOpen(false);
  };

  const handleResetFilter = () => {
    setFilterSort("Terdekat dari saya");
    setModalCategory("Semua");
    setFilterDistance("Semua jarak");
    setSelectedCategory("Semua");
  };

  return (
    <>
      {/* 1. Splash Screen with Gunungan Wayang & Zipper effect */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Welcome Modal Input Nama Pertama Kali */}
      <WelcomeModal
        isOpen={isWelcomeOpen}
        onSaveName={handleSaveName}
      />

      {/* QR Scanner Camera Interface */}
      <QRScannerModal
        isOpen={showVRModal}
        onClose={() => setShowVRModal(false)}
        onTriggerVR={(monument) => {
          setSelectedVRMonument(monument);
          setShowVRModal(false);
          setIsVRPortalOpen(true);
        }}
      />

      {/* Interactive 360 Photosphere VR Dimension (Three.js) */}
      {isVRPortalOpen && (
        <VRPortalView
          targetMonumentName={selectedVRMonument}
          onClose={() => setIsVRPortalOpen(false)}
        />
      )}

      {/* 2. Jika ada destinasi yang dipilih, buka halaman baru detail destinasi */}
      {activeDestination ? (
        <DestinationDetailPage
          destination={activeDestination}
          onBack={() => setActiveDestination(null)}
        />
      ) : isJelajahCatalogOpen ? (
        <div className="w-full min-h-screen bg-surface flex flex-col items-center">
          <div className="w-full max-w-md min-h-screen flex flex-col relative bg-surface shadow-2xl">
            <JelajahDetailPage
              onBack={() => setIsJelajahCatalogOpen(false)}
              onSelectDestination={setActiveDestination}
            />
            <BottomNav
              activeTab={activeTab}
              onChangeTab={(tab) => {
                setIsJelajahCatalogOpen(false);
                setActiveTab(tab);
              }}
              onOpenVR={() => setShowVRModal(true)}
            />
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-surface flex flex-col items-center">
          {/* Mobile-first containment wrapper */}
          <div className="w-full max-w-md min-h-screen flex flex-col relative bg-surface shadow-2xl">
            {/* Top Header with Batik Logo */}
            <Header />

            {/* Main Content Area: pb-32 untuk memberi ruang leluasa pada navbar h-[88px] */}
            <main className="flex-1 flex flex-col relative w-full pt-16 pb-32 bg-surface">
              {activeTab === "beranda" && (
                <div className="flex flex-col w-full animate-fadeIn">
                  {/* 1. Greeting Dinamis */}
                  <HeroGreeting
                    userName={userName}
                    onEditName={() => setIsWelcomeOpen(true)}
                  />

                  {/* 2. Prominent Search + Filter */}
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onOpenFilter={() => setIsFilterOpen(true)}
                  />

                  {/* 3. Location Indicator */}
                  <LocationBanner />

                  {/* 4. Category Chips */}
                  <CategoryChips
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />

                  {/* 5. Destination List */}
                  <section className="px-margin-mobile pt-3 pb-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                        Jelajahi Trenggalek
                      </h2>
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                        {filteredDestinations.length} Destinasi
                      </span>
                    </div>

                    {filteredDestinations.length === 0 ? (
                      <div className="py-12 flex flex-col items-center justify-center text-center p-6 bg-surface-container-lowest rounded-xl border border-surface-variant/40">
                        <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
                          search_off
                        </span>
                        <p className="font-headline-sm font-semibold text-on-surface">
                          Destinasi tidak ditemukan
                        </p>
                        <p className="text-body-sm text-on-surface-variant mt-1">
                          Coba gunakan kata kunci lain atau pilih kategori Semua.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory("Semua");
                            setSearchQuery("");
                          }}
                          className="mt-4 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md cursor-pointer"
                        >
                          Reset Pencarian
                        </button>
                      </div>
                    ) : (
                      filteredDestinations.map((dest) => (
                        <DestinationCard
                          key={dest.id}
                          destination={dest}
                          onSelect={setActiveDestination}
                        />
                      ))
                    )}
                  </section>
                </div>
              )}

              {activeTab === "jelajah" && (
                <JelajahView
                  onSelectDestination={setActiveDestination}
                  onOpenFullCatalog={() => setIsJelajahCatalogOpen(true)}
                />
              )}

              {activeTab === "peta" && (
                <TrenggalekMapView onSelectDestination={setActiveDestination} />
              )}

              {activeTab === "setting" && (
                <div className="px-margin-mobile pt-4 flex flex-col gap-5 animate-fadeIn">
                  <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    Pengaturan
                  </h1>
                  
                  {/* Profil Card */}
                  <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-variant/60 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">person</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-base font-bold text-on-surface">
                        Najib Bahrudin
                      </span>
                      <span className="font-body-sm text-xs text-on-surface-variant">
                        najib.bahrudin@example.com
                      </span>
                    </div>
                  </div>

                  {/* Preference Options */}
                  <div className="rounded-xl bg-surface-container-lowest border border-surface-variant/60 divide-y divide-surface-variant/40">
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">translate</span>
                        <span className="font-label-lg text-on-surface">Bahasa Aplikasi</span>
                      </div>
                      <span className="text-body-sm text-on-surface-variant font-medium">Bahasa Indonesia</span>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">notifications</span>
                        <span className="font-label-lg text-on-surface">Notifikasi Rekomendasi</span>
                      </div>
                      <span className="text-body-sm text-primary font-bold">Aktif</span>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <span className="font-label-lg text-on-surface">Tentang LARAS Trenggalek</span>
                      </div>
                      <span className="text-body-sm text-on-surface-variant">v1.0.0</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Filter Bottom Sheet */}
              <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                sortOptions={sortOptions}
                filterSort={filterSort}
                onSelectSort={setFilterSort}
                categories={filterCategories}
                filterCategory={modalCategory}
                onSelectCategory={setModalCategory}
                distanceOptions={distanceOptions}
                filterDistance={filterDistance}
                onSelectDistance={setFilterDistance}
                onReset={handleResetFilter}
                onApply={handleApplyFilter}
              />
            </main>

            {/* Bottom Navigation: Beranda, Jelajah, Setting + Center VR Camera Button */}
            <BottomNav
              activeTab={activeTab}
              onChangeTab={setActiveTab}
              onOpenVR={() => setShowVRModal(true)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
