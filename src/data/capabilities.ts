import { CapabilityWorkstream, FAQItem } from '../types/landing';

export const capabilityWorkstreamsData: CapabilityWorkstream[] = [
  {
    id: 'network-lifecycle',
    name: 'Network Lifecycle',
    oneLiner: 'Kendalikan siklus hidup agen dari registrasi hingga pengawasan berjenjang.',
    coverage: ['Onboarding Outlet', 'Verifikasi Dokumen', 'Device Binding', 'Geofencing'],
    capabilities: [
      {
        name: 'Agent Onboarding & Activation Workflow',
        description: 'Alur registrasi, validasi kelayakan usaha, kepemilikan outlet, dan verifikasi identitas berjenjang.',
        phase: 'mvm1'
      },
      {
        name: 'Cryptographic Device Trust',
        description: 'Pengikatan sertifikat perangkat unik (device key) dengan verifikasi PIN dan deteksi integritas native.',
        phase: 'mvm1'
      },
      {
        name: 'Hierarchy & Regional Scoping',
        description: 'Pemetaan cabang induk, supervisor wilayah, dan batas yurisdiksi outlet agen.',
        phase: 'mvm1'
      },
      {
        name: 'Supervisor Live Dashboard & Geospatial View',
        description: 'Peta sebaran transaksi real-time, status outlet aktif, dan visualisasi densitas transaksi regional.',
        phase: 'mvm2'
      }
    ]
  },
  {
    id: 'transaction-services',
    name: 'Transaction Services',
    oneLiner: 'Layani transaksi finansial melalui jalur terpercaya yang terhubung langsung ke sistem bank.',
    coverage: ['Setor Tunai', 'Tarik Tunai', 'Transfer Antarbank', 'Bukti Terenkripsi'],
    capabilities: [
      {
        name: 'Core Financial Transactions',
        description: 'Pemrosesan setor tunai, tarik tunai, transfer antar-rekening, dan cek saldo dengan proteksi idempotensi.',
        phase: 'mvm1'
      },
      {
        name: 'Tamper-Evident Digital Receipts',
        description: 'Struk transaksi dengan tanda tangan digital dan QR code verifikasi keaslian status transaksi.',
        phase: 'mvm1'
      },
      {
        name: 'Offline-Safe Non-Financial Queuing',
        description: 'Antrean aman pengajuan non-tunai (referral, pendaftaran, laporan kendala) saat jaringan putus.',
        phase: 'mvm1'
      },
      {
        name: 'Enhanced e-KYC Assisted Onboarding',
        description: 'Verifikasi biometrik dan validasi data kependudukan terintegrasi untuk pembukaan rekening via agen.',
        phase: 'mvm2'
      }
    ]
  },
  {
    id: 'operational-control',
    name: 'Operational Control',
    oneLiner: 'Kelola kepastian status transaksi, likuiditas lapangan, dan rekonsiliasi akhir hari.',
    coverage: ['Float Threshold', 'UNKNOWN Resolution', 'Reconcile 4-Way', 'Cash Close'],
    capabilities: [
      {
        name: 'Float Balance & Top-Up Governance',
        description: 'Pemantauan saldo kas agen, peringatan low-float otomatis, dan alur persetujuan top-up likuiditas.',
        phase: 'mvm1'
      },
      {
        name: 'UNKNOWN State Resolution Engine',
        description: 'Prosedur pemulihan status transaksi menggantung tanpa risiko pemrosesan ganda (anti double-charge).',
        phase: 'mvm1'
      },
      {
        name: 'Daily Automated 4-Way Reconciliation',
        description: 'Pencocokan data antara Agen, Platform, Core Banking, dan Switching dengan kuadran status presisi.',
        phase: 'mvm1'
      },
      {
        name: 'Case Engine & Dispute SLA Tracker',
        description: 'Sistem eskalasi tiket sengketa transaksi nasabah agen dengan pelacakan batas waktu SLA perbankan.',
        phase: 'mvm2'
      }
    ]
  },
  {
    id: 'product-economics',
    name: 'Product Economics',
    oneLiner: 'Atur struktur biaya, limit transaksi, dan penawaran produk digital secara dinamis.',
    coverage: ['Dynamic Fees', 'Limit Tiers', 'PPOB Smart Router', 'Margin Real-time'],
    capabilities: [
      {
        name: 'Configurable Fees & Transaction Limits',
        description: 'Pengaturan biaya admin, margin bank, komisi agen, dan limit transaksi harian per kelompok agen.',
        phase: 'mvm1'
      },
      {
        name: 'Native API PPOB Smart Router',
        description: 'Integrasi multipemasok untuk tagihan PLN, pulsa, PDAM, dan BPJS dengan perutean cerdas berbasis latensi.',
        phase: 'mvm1'
      },
      {
        name: 'Real-Time Transaction Margin Ledger',
        description: 'Pencatatan pendapatan fee dan biaya modal per transaksi secara granular untuk transparansi P&L.',
        phase: 'mvm1'
      },
      {
        name: 'Agent Loyalty, Incentives & Point Engine',
        description: 'Skema komisi bertingkat, target kinerja volume, dan poin loyalitas agen terotomasi.',
        phase: 'mvm2'
      }
    ]
  },
  {
    id: 'governance-integration',
    name: 'Governance & Integration',
    oneLiner: 'Jaga otorisasi pemisahan tugas, audit trail kekal, dan konektivitas infrastruktur bank.',
    coverage: ['Maker-Checker', 'Hash-Chained Audit', 'On-Premise RHEL 9', 'ELK Logging'],
    capabilities: [
      {
        name: 'Strict Maker-Checker Workflow',
        description: 'Pemisahan tugas mutlak (segregation of duties) untuk perubahan konfigurasi dan persetujuan bernilai besar.',
        phase: 'mvm1'
      },
      {
        name: 'Immutable Hash-Chained Audit Ledger',
        description: 'Pencatatan jejak audit seluruh aktivitas sistem yang disegel secara kriptografis anti-manipulasi.',
        phase: 'mvm1'
      },
      {
        name: 'Core Banking & Switching Connectors',
        description: 'Adapter modular siap pakai untuk ISO 8583, ISO 20022, REST/JSON, dan format proprietary perbankan.',
        phase: 'mvm1'
      },
      {
        name: 'Automated Fraud Monitoring & Rule Alerts',
        description: 'Engine deteksi pola transaksi mencurigakan dan lonjakan volume kas tidak wajar di tingkat agen.',
        phase: 'mvm2'
      }
    ]
  }
];

export const faqData: FAQItem[] = [
  {
    category: 'architecture',
    question: 'Apakah platform hanya dapat dijalankan di cloud?',
    answer:
      'Tidak. Pendekatan arsitektur produk LAKUPANDAI dirancang untuk model on-premise pada infrastruktur data center (DC) dan disaster recovery center (DRC) bank sendiri. Platform dideploy menggunakan containerization berbasis RHEL 9 (Podman/Docker atau Kubernetes/OpenShift) sehingga bank memegang kendali 100% atas data, jaringan, dan keamanan.'
  },
  {
    category: 'architecture',
    question: 'Apakah harus langsung terhubung ke core banking untuk sesi evaluasi / demo?',
    answer:
      'Tidak. Evaluasi awal dan sesi executive walkthrough dapat dijalankan menggunakan lingkungan Standalone dengan mock connector yang dilabeli jelas. Hal ini memungkinkan direksi dan tim teknis meninjau seluruh proses operasional tanpa dependensi integrasi di awal. Penerapan integrasi ke core banking, switching, atau e-KYC dilakukan pada fase implementasi terpisah.'
  },
  {
    category: 'operations',
    question: 'Apakah transaksi uang dapat berjalan tanpa koneksi internet (offline mode)?',
    answer:
      'Secara default tidak. Prinsip keamanan kami menetapkan bahwa seluruh transaksi bernilai uang (setor, tarik, transfer) memerlukan koneksi online untuk menjamin integritas saldo dan mencegah double-spending. Mode offline bawaan secara ketat dibatasi untuk pengajuan non-uang—seperti antrean pembukaan rekening, laporan sengketa, dan referral—yang akan disinkronkan saat koneksi pulih.'
  },
  {
    category: 'security',
    question: 'Bagaimana perubahan konfigurasi biaya (fee) dan limit transaksi dikendalikan?',
    answer:
      'Setiap perubahan konfigurasi dikelola sebagai data berversi (immutable versioning) dengan tanggal efektif terencana. Alur perubahan tunduk pada mekanisme Maker-Checker berlapis: staf yang mengusulkan perubahan (maker) secara sistemik dilarang menjadi pihak yang menyetujui (checker). Seluruh riwayat perubahan tercatat dalam audit trail lengkap dengan diff visual.'
  },
  {
    category: 'architecture',
    question: 'Apakah platform mendukung sistem core banking yang heterogen atau legacy?',
    answer:
      'Ya. LAKUPANDAI mengadopsi arsitektur berbasis connector (konektor terisolasi). Tim enterprise architecture bank dapat menghubungkan sistem melalui adapter ISO 8583, ISO 20022, REST API, maupun antrean pesan (message queue). Desain konektor memisahkan logika transaksi agen dari protokol spesifik core banking.'
  },
  {
    category: 'security',
    question: 'Bagaimana platform memastikan perlindungan dan kerahasiaan data nasabah?',
    answer:
      'Perlindungan data dirancang sejak awal (privacy-by-design): data sensitif dimaskir pada antarmuka staf (misalnya nomor kartu/rekening menjadi •••• 1234), pencatatan audit mencatat setiap akses terhadap data pribadi, pengikatan perangkat agen diverifikasi melalui device key unik, dan seluruh komunikasi payload API dienkripsi end-to-end.'
  },
  {
    category: 'commercial',
    question: 'Apakah fitur QRIS, terminal EDC fisik, dan kartu e-money sudah termasuk dalam paket dasar?',
    answer:
      'Fitur QRIS MPM/CPM, integrasi terminal EDC proprietary, kartu uang elektronik (chip/NFC), dan aplikasi native khusus (Kotlin/Swift) merupakan cakupan di luar fondasi MVM-1. Kapabilitas tersebut dapat didiskusikan sebagai opsi engagement implementasi terpisah (custom scope) sesuai kesiapan infrastruktur dan dependensi vendor bank.'
  }
];
