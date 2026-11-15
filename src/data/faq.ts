import { FAQItem } from '../types/landing';

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
