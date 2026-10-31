export interface MasterWisataItem {
  id: string;
  nama: string;
  jenis: string;
  kategori: string;
  kecamatan: string;
  desaKelurahan: string;
  deskripsi: string;
  gmapsLink: string;
  hariOperasional?: string;
  jamBuka?: string;
  jamTutup?: string;
  hargaTiket?: string;
  instagramLink?: string;
  fasilitasSingkat?: string;
  sumberData?: string;
}

export interface UmkmRegistrationItem {
  waktuSubmit: string;
  namaUsaha: string;
  kategoriUmkm: string;
  deskripsi: string;
  alamatUsaha: string;
  namaKontak: string;
  whatsapp: string;
  wisataTerkait: string;
  jenisKeterkaitan: string;
  gmapsLink: string;
  statusVerifikasi: "PENDING" | "ACC" | "REVISI" | "DITOLAK";
}

export const SHEET_ID = "1PYGUZR2zZ_0hRmSqkEwkQXwMVUcc-cUi7yt46Lq_8zc";
export const GID_MASTER_WISATA = "2110145233";
export const GID_PENDAFTARAN_UMKM = "1753094090";

function parseCsvRows(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentCell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = "";
    } else if ((char === "\r" || char === "\n") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") i++;
      currentRow.push(currentCell.trim());
      if (currentRow.some((c) => c.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentCell = "";
    } else {
      currentCell += char;
    }
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some((c) => c.length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}

export async function fetchMasterWisata(): Promise<MasterWisataItem[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID_MASTER_WISATA}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal mengambil data MASTER_WISATA dari Google Sheets");

  const text = await res.text();
  const rows = parseCsvRows(text);
  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.toLowerCase());
  const idxNama = headers.indexOf("nama_wisata");
  const idxJenis = headers.indexOf("jenis_wisata");
  const idxKategori = headers.indexOf("kategori");
  const idxKecamatan = headers.indexOf("kecamatan");
  const idxDesa = headers.indexOf("desa_kelurahan");
  const idxDeskripsi = headers.indexOf("deskripsi_singkat");
  const idxGmaps = headers.indexOf("gmaps_link");
  const idxHari = headers.indexOf("hari_operasional");
  const idxBuka = headers.indexOf("jam_buka");
  const idxTutup = headers.indexOf("jam_tutup");
  const idxTiket = headers.indexOf("harga_tiket");
  const idxIg = headers.indexOf("instagram_link");
  const idxFasilitas = headers.indexOf("fasilitas_singkat");
  const idxStatus = headers.indexOf("status_tayang_wisata");

  return rows
    .slice(1)
    .filter((r) => (r[idxNama] || "").length > 0)
    .map((r, i) => {
      const nama = r[idxNama] || "";
      const slug = nama
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      return {
        id: slug || `wisata-${i}`,
        nama,
        jenis: r[idxJenis] || "Destinasi",
        kategori: r[idxKategori] || "Alam",
        kecamatan: r[idxKecamatan] || "Trenggalek",
        desaKelurahan: r[idxDesa] || "",
        deskripsi: r[idxDeskripsi] || "Destinasi wisata kebanggaan Kabupaten Trenggalek.",
        gmapsLink: r[idxGmaps] || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nama + " Trenggalek")}`,
        hariOperasional: r[idxHari] || "",
        jamBuka: r[idxBuka] || "",
        jamTutup: r[idxTutup] || "",
        hargaTiket: r[idxTiket] || "Sesuai ketentuan pengelola",
        instagramLink: r[idxIg] || "",
        fasilitasSingkat: r[idxFasilitas] || "",
        sumberData: r[idxStatus] || "TAYANG",
      };
    });
}

export async function fetchUmkmRegistrations(): Promise<UmkmRegistrationItem[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID_PENDAFTARAN_UMKM}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal mengambil data PENDAFTARAN_UMKM dari Google Sheets");

  const text = await res.text();
  const rows = parseCsvRows(text);
  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.toLowerCase());
  const idxWaktu = headers.indexOf("waktu_submit");
  const idxNama = headers.indexOf("nama_usaha");
  const idxKategori = headers.indexOf("kategori_umkm");
  const idxDeskripsi = headers.indexOf("deskripsi_singkat");
  const idxAlamat = headers.indexOf("alamat_usaha");
  const idxKontak = headers.indexOf("nama_kontak");
  const idxWa = headers.indexOf("whatsapp");
  const idxWisata = headers.indexOf("wisata_terkait");
  const idxJenisRel = headers.indexOf("jenis_keterkaitan");
  const idxGmaps = headers.indexOf("gmaps_link");
  const idxStatus = headers.indexOf("status_verifikasi");

  return rows
    .slice(1)
    .filter((r) => (r[idxNama] || "").length > 0)
    .map((r) => ({
      waktuSubmit: r[idxWaktu] || "",
      namaUsaha: r[idxNama] || "",
      kategoriUmkm: r[idxKategori] || "Kuliner & Jajanan",
      deskripsi: r[idxDeskripsi] || "",
      alamatUsaha: r[idxAlamat] || "",
      namaKontak: r[idxKontak] || "",
      whatsapp: r[idxWa] || "",
      wisataTerkait: r[idxWisata] || "",
      jenisKeterkaitan: r[idxJenisRel] || "",
      gmapsLink: r[idxGmaps] || "",
      statusVerifikasi: (r[idxStatus] as "PENDING" | "ACC" | "REVISI" | "DITOLAK") || "PENDING",
    }));
}
