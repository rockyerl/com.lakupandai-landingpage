import { Scenario } from '../types/landing';

export const scenariosData: Scenario[] = [
  {
    id: 'agent-lifecycle',
    order: 1,
    kicker: '01 / DISTRIBUTION & AGENT LIFECYCLE',
    headline: 'Ekspansi jaringan agen dimulai dari kontrol identitas dan kewenangan.',
    situation:
      'Sebuah bank ingin menjangkau lebih banyak kecamatan melalui mitra agen. Setiap agen memiliki lokasi usaha, penanggung jawab, perangkat, tingkat risiko, dan proses persetujuan yang harus dikelola sebelum bisa melayani transaksi.',
    platformResponse: [
      'Data agen, wilayah, dan geotag outlet dicatat pada proses onboarding.',
      'Status agen mengikuti siklus persetujuan dan aktivasi berjenjang.',
      'Perubahan data sensitif masuk jalur persetujuan (maker-checker); histori perubahan tersimpan aman.',
      'Akses staff operasional mengikuti struktur dan cakupan wilayah organisasi bank.'
    ],
    bankOutcome:
      'Tim bank memiliki basis data agen dan jejak keputusan yang terstruktur untuk mendukung perluasan distribusi tanpa mengorbankan kepatuhan.',
    visualKind: 'agent-lifecycle',
    capabilities: [
      'Agent Identity & Lifecycle',
      'Onboarding Engine',
      'Maker-Checker Approval',
      'Geo & Outlet Geotagging'
    ],
    phases: ['mvm1'],
    caveat:
      'Layar visualisasi geospasial analitik dan hierarki multiwilayah penuh dijadwalkan pada MVM-2.'
  },
  {
    id: 'transaction-certainty',
    order: 2,
    kicker: '02 / TRANSACTION CERTAINTY',
    headline: 'Transaksi membutuhkan kepastian status, bukan sekadar respons cepat.',
    situation:
      'Seorang nasabah melakukan transaksi melalui agen. Koneksi terputus tepat setelah permintaan dikirim ke sistem. Agen perlu mengetahui apakah transaksi berhasil, masih menunggu kepastian, atau ditolak—tanpa mengulang transaksi secara berisiko.',
    platformResponse: [
      'Permintaan transaksi diproses melalui transaction engine dengan idempotency key dan konektor bank.',
      'Hasil yang belum pasti ditampilkan sebagai pending/UNKNOWN, bukan otomatis dianggap gagal.',
      'Bukti transaksi dilengkapi verifikasi QR kriptografis untuk transaksi yang sudah definitif.',
      'Mekanisme resolusi otomatis & rekonsiliasi mencegah risiko double-charge ke rekening nasabah.'
    ],
    bankOutcome:
      'Bank dapat menelusuri status dan bukti transaksi dalam jalur operasional yang dirancang untuk menjaga konsistensi keputusan dan integritas dana.',
    visualKind: 'transaction-status',
    capabilities: [
      'Core Transactions Engine',
      'Idempotency Key Guard',
      'UNKNOWN State Resolution',
      'Tamper-evident Receipt QR'
    ],
    phases: ['mvm1'],
    caveat:
      'Batas offline: transaksi uang memerlukan koneksi online. Mode offline hanya mengantre pengajuan non-uang (pembukaan rekening, keluhan, sengketa, referral) hingga tersinkronisasi.'
  },
  {
    id: 'liquidity-management',
    order: 3,
    kicker: '03 / AGENT LIQUIDITY',
    headline: 'Agen yang aktif tetap membutuhkan pengelolaan likuiditas harian.',
    situation:
      'Aktivitas tarik tunai meningkat signifikan di suatu sentra pasar. Saldo float agen mendekati ambang batas minimum, sementara supervisor cabang harus memantau kebutuhan top-up dan perbedaan fisik kas di akhir hari kerja.',
    platformResponse: [
      'Posisi saldo float dan ambang batas peringatan low-float dipantau secara berkala.',
      'Agen dapat mengajukan permintaan top-up instan yang divalidasi oleh kebijakan limit bank.',
      'Penyetoran kelebihan kas fisik dan daily cash close memiliki catatan serah terima yang terlacak.',
      'Perbedaan antara expected cash dan declared cash langsung ditandai dengan flag variance.'
    ],
    bankOutcome:
      'Tim operasi bank memperoleh visibilitas terpusat atas likuiditas lapangan dan penyimpangan kas tanpa menunggu rekap bulanan.',
    visualKind: 'liquidity',
    capabilities: [
      'Agent Float Management',
      'Low-Float Early Alerts',
      'Cash-in/Cash-out Balancing',
      'Daily Cash Variance Flagging'
    ],
    phases: ['mvm1'],
    caveat:
      'Deteksi anomali fraud likuiditas berbasis AI/heuristic lanjutan dijadwalkan pada MVM-2.'
  },
  {
    id: 'reconciliation-settlement',
    order: 4,
    kicker: '04 / RECONCILIATION & OPERATIONS',
    headline: 'Akhir hari bukan sekadar laporan volume. Setiap selisih harus terlihat.',
    situation:
      'Bank mencocokkan catatan transaksi platform dengan mutasi core banking dan settlement pemasok produk digital. Sebagian data cocok, sebagian berbeda status atau nominal, dan sebagian belum muncul di salah satu pihak.',
    platformResponse: [
      'Engine rekonsiliasi harian membandingkan tiga sumber data secara otomatis.',
      'Hasil audit diklasifikasikan ke dalam 4 kuadran: MATCHED, MISMATCH, MISSING_IN_CORE, MISSING_IN_OURS.',
      'Tim backoffice dapat memfilter, menelusuri akar masalah dengan trace ID, dan mengekspor bukti rekonsiliasi.',
      'Selisih dapat langsung dimasukkan ke antrean investigasi operasional.'
    ],
    bankOutcome:
      'Pengecualian operasional langsung teridentifikasi, terklasifikasi secara objektif, dan siap ditindaklanjuti sebelum penutupan buku.',
    visualKind: 'reconciliation',
    capabilities: [
      'Automated 4-Way Reconciliation',
      'Settlement Traceability',
      'Audit Discrepancy Matrix',
      'Export & Investigation Log'
    ],
    phases: ['mvm1'],
    caveat:
      'Eskalasi otomatis berbasis Case Engine & pelacakan SLA dispute masuk dalam fase MVM-2.'
  },
  {
    id: 'governance-change-control',
    order: 5,
    kicker: '05 / GOVERNANCE & CHANGE CONTROL',
    headline: 'Tim bisnis perlu kelincahan. Tim risiko perlu jejak persetujuan.',
    situation:
      'Bank perlu memperbarui skema biaya layanan, limit transaksi harian, atau ketersediaan menu produk untuk kelompok agen tertentu. Perubahan harus tercatat, ditinjau secara independen, dan diberlakukan sesuai tanggal efektif.',
    platformResponse: [
      'Konfigurasi fee, limit, markup, dan visibilitas menu dikelola sebagai data berversi (immutable versioning).',
      'Setiap perubahan sensitif wajib melalui alur maker-checker; pembuat usulan tidak dapat menyetujui usulannya sendiri.',
      'Perubahan yang disetujui memiliki stempel tanggal efektif dan riwayat perbandingan (diff viewer).',
      'Audit trail mencatat identitas pemohon, penyetujui, stempel waktu, dan catatan bisnis persetujuan.'
    ],
    bankOutcome:
      'Kebijakan operasional dapat disesuaikan secara lincah oleh divisi bisnis tanpa pernah melemahkan kendali tata kelola dan audit kepatuhan bank.',
    visualKind: 'approval',
    capabilities: [
      'Maker-Checker Governance',
      'Versioned Configuration Diff',
      'Effective-date Scheduling',
      'Immutable Audit Trail'
    ],
    phases: ['mvm1'],
    caveat:
      'Segregasi peran dan hak akses staf dikonfigurasi mengikuti matriks kewenangan spesifik masing-masing bank.'
  },
  {
    id: 'service-economics-ppob',
    order: 6,
    kicker: '06 / SERVICE ECONOMICS',
    headline: 'Setiap layanan perlu model ekonomi yang transparan.',
    situation:
      'Selain transaksi perbankan dasar, agen melayani pembelian produk digital (PLN, pulsa, BPJS) melalui pemasok agregator. Tim produk bank perlu mengendalikan harga modal, margin bank, komisi agen, dan kualitas routing pemasok.',
    platformResponse: [
      'Transaksi PPOB diproses via smart router berbasis API native, bukan tampilan WebView yang rentan kendala.',
      'Struktur harga modal (HPP), markup bank, dan komisi agen dikonfigurasi fleksibel per tier agen.',
      'Fee dan margin tercatat per lembar transaksi untuk rekonsiliasi P&L real-time.',
      'Router dapat mengalihkan rute ke pemasok cadangan jika terjadi penurunan kualitas layanan.'
    ],
    bankOutcome:
      'Portofolio layanan agen dapat dievaluasi secara presisi dari sisi volume, biaya operasional, dan margin kontribusi bank.',
    visualKind: 'product-economics',
    capabilities: [
      'Native API Supplier Router',
      'Dynamic Markup & Fee Engine',
      'Real-time P&L Ledger',
      'Multi-Biller Failover'
    ],
    phases: ['mvm1'],
    caveat:
      'Model komersial pembagian bagi hasil (revenue sharing) antara penyedia platform dan bank disepakati bilateral di luar sistem.'
  }
];
