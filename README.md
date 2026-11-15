# LAKUPANDAI — Bank Enterprise Landing Page Platform

> **Bank Enterprise Distribution & Operations Platform**  
> Target Audience: Direksi Bank, Head of Digital/Branchless Banking, Enterprise Architecture, Risk & Compliance, Procurement.  
> Stack: React 19 + TypeScript + Vite + Tailwind CSS v4 + Lucide Icons.

---

## 🏛️ Desain & Filosofi Enterprise

Landing page ini dirancang khusus untuk memenuhi standar institusi perbankan (**B2B Enterprise Grade**). Pendekatan visual dan copywriting berpegang teguh pada prinsip **Scenario-First** dan **Outcome-First**:
- **Bukan Consumer Fintech**: Tidak ada tombol "Buka Rekening", "Daftar Agen", atau kalkulator pinjaman konsumen.
- **Kepatuhan Terjaga**: Seluruh data pada mockup menggunakan **data sintetis** berlabel `Demo illustration`, tanpa klaim sepihak yang belum terverifikasi.
- **Pemisahan Fase Rilis Transparan**: Pemisahan tegas antara **MVM-1** (Fondasi operasional siap jalan), **MVM-2** (Pengayaan roadmap terencana), dan **Custom Engagement** (QRIS, EDC, Native app).

---

## 🚀 Fitur Interaktif & Modul Operasional

1. **Executive Operations Cockpit (Hero)**:
   - Panel real-time status: Active Outlets (1.248), Pending Approval (14), Restricted (3).
   - Diagram aliran live: Agent App ➔ API Gateway ➔ Transaction Engine ➔ Core Banking Adapter.
   - Antrean backoffice: UNKNOWN Resolution, Low Float Alert, Maker-Checker Queue.

2. **6 Bab Interaktif Skenario Operasional**:
   - **01. Distribution & Agent Lifecycle**: Pipeline onboarding outlet berjenjang, validasi geotag outlet, hardware device key, dan persetujuan cabang.
   - **02. Transaction Certainty & UNKNOWN Resolution**: Simulator koneksi putus pasca-kirim, status transisi `UNKNOWN` (bukan langsung gagal), proteksi idempotensi, struk QR terverifikasi, dan batasan offline non-uang.
   - **03. Agent Liquidity & Float Management**: Indikator saldo float real-time, peringatan dini batas kritis (&lt; Rp 10Jt), alur pengajuan top-up, dan audit selisih kas fisik harian (*variance flag*).
   - **04. Daily 4-Way Reconciliation**: Kuadran rekonsiliasi (*MATCHED, MISMATCH, MISSING_IN_CORE, MISSING_IN_OURS*), tabel penelusuran trace ID, rekening tersamarkan (`•••• 1234`), dan ekspor paket audit.
   - **05. Governance & Configuration Diff**: Tampilan pembanding konfigurasi sebelum vs sesudah (*diff viewer*), penegakan mutlak pemisahan tugas (*segregation of duties / Four-Eyes Principle*), dan *hash-chained audit trail*.
   - **06. Service Economics & PPOB Smart Router**: Perutean API native (tanpa WebView), kalkulator *waterfall* margin (*Harga Pokok Pemasok ➔ Markup Bank ➔ Komisi Agen ➔ Harga Jual Nasabah*).

3. **Arsitektur On-Premise & Ketahanan DC/DRC**:
   - Visualisasi topologi deployment containerized berbasis RHEL 9 di data center bank.
   - Switcher simulasi failover Primary DC ↔ Hot Standby DRC.
   - Catatan arsitektur notifikasi (FCM hanya sebagai *fetch signal*, tanpa data nasabah di payload).

4. **Formulir Permintaan Executive Demo & Discovery**:
   - Validasi email kantor institusi resmi.
   - Pemilihan fokus diskusi multi-select.
   - Proteksi anti-spam honeypot dan konfirmasi modal otomatis dengan perayaan visual (*canvas-confetti*).

---

## 🛠️ Panduan Menjalankan Proyek

### 1. Instalasi Dependensi
```bash
pnpm install
```

### 2. Menjalankan Server Pengembangan (Dev)
```bash
pnpm run dev
# Akses melalui: http://localhost:5173/
```

### 3. Membangun Bundel Produksi (Build)
```bash
pnpm run build
```

### 4. Menjalankan Pratinjau Produksi (Preview)
```bash
pnpm run preview
# Akses melalui: http://localhost:4173/
```

---

## 🔒 Tata Kelola & Integritas Data
- Semua data nasabah, rekening, outlet, dan transaksi pada antarmuka situs adalah **data sintetis fiktif** untuk keperluan demonstrasi arsitektur perbankan.
- Seluruh spesifikasi diselaraskan dengan tata kelola produk resmi PT Sundawa Teknologi Indonesia.
