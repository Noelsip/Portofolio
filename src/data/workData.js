// Paid / professional roles only. Organisational roles live in
// organizationData.js so the two are never read as the same thing.
export const workData = [
    {
        id: 1,
        // Tanggal mengikuti CV. Jabatan sengaja tanpa "Founder" sesuai
        // permintaan, meski di CV masih tertulis begitu.
        role: 'Product Development & Quality Assurance',
        company: 'Twenti Studio',
        companyUrl: 'https://twenti.studio',
        location: 'Balikpapan',
        startYear: { en: 'January 2026', id: 'Januari 2026' },
        endYear: { en: 'Present', id: 'Sekarang' },
        summary: {
            en: 'Leading product development and validation across the studio’s own products, alongside testing on client projects.',
            id: 'Memimpin kegiatan pengembangan dan validasi produk internal studio, sekaligus pengujian proyek klien.',
        },
        points: [
            {
                en: 'Led development and validation across every studio product: Healthify, FiNot, Well Track, Games Twenti, and MiTa.',
                id: 'Memimpin pengembangan dan validasi di seluruh produk studio: Healthify, FiNot, Well Track, Games Twenti, dan MiTa.',
            },
            {
                en: 'Coordinated product planning, implementation, and the development process itself.',
                id: 'Mengoordinasi perencanaan produk, implementasi, dan proses pengembangan.',
            },
            {
                en: 'Verified user flows and business requirements before each feature shipped.',
                id: 'Memverifikasi alur pengguna dan kebutuhan bisnis sebelum tiap fitur dirilis.',
            },
            {
                en: 'Identified usability problems and openings to improve the product.',
                id: 'Mengidentifikasi masalah usability dan peluang perbaikan produk.',
            },
            {
                en: 'Tested the Simaggot Balkot, KlirLogistik, and BEM FSTI ITK client projects before handover.',
                id: 'Menguji proyek klien Simaggot Balkot, KlirLogistik, dan BEM FSTI ITK sebelum serah terima.',
            },
        ],
        certificate: null,
    },
    {
        id: 2,
        role: {
            en: 'Teaching Assistant, Object Oriented Programming',
            id: 'Asisten Dosen Pemrograman Berorientasi Objek',
        },
        company: 'Institut Teknologi Kalimantan',
        companyUrl: null,
        location: 'Balikpapan',
        startYear: '2025',
        endYear: '2025',
        summary: {
            en: 'Supported the OOP course and assessed the systems students built.',
            id: 'Mendampingi mata kuliah PBO dan menilai sistem yang dibangun mahasiswa.',
        },
        points: [
            {
                en: 'Taught object oriented concepts in Java: classes, inheritance, encapsulation, and polymorphism.',
                id: 'Mengajarkan konsep berorientasi objek menggunakan Java: kelas, pewarisan, enkapsulasi, dan polimorfisme.',
            },
            {
                en: 'Assessed and evaluated the systems students produced, including whether their class design answered the case they were given.',
                id: 'Menilai dan mengevaluasi sistem hasil kerja mahasiswa, termasuk memeriksa apakah rancangan kelasnya menjawab kasus yang diberikan.',
            },
        ],
        certificate: null,
    },
    {
        id: 3,
        role: {
            en: 'Lab Assistant, Algorithms and Programming',
            id: 'Asisten Praktikum Algoritma Pemrograman',
        },
        company: 'Institut Teknologi Kalimantan',
        companyUrl: null,
        location: 'Balikpapan',
        startYear: '2024',
        endYear: '2025',
        summary: {
            en: 'Taught algorithm and Python fundamentals to a full intake of lab students.',
            id: 'Mengajar fundamental algoritma dan pemrograman Python untuk satu angkatan praktikan.',
        },
        points: [
            {
                en: 'Taught algorithm basics in Python, from control structures through to data processing.',
                id: 'Mengajarkan dasar algoritma dengan Python, dari struktur kontrol sampai pemrosesan data.',
            },
            {
                en: 'Guided students through building simple desktop interfaces with Tkinter.',
                id: 'Membimbing praktikan membangun antarmuka desktop sederhana menggunakan Tkinter.',
            },
            {
                en: 'Marked lab assignments and gave feedback to each student.',
                id: 'Memeriksa tugas praktikum dan memberi umpan balik per praktikan.',
            },
        ],
        certificate:
            'https://drive.google.com/file/d/1Y6yx8NAxaQSTMvK8QOdCvyrL3U2CeaYp/view?usp=sharing',
    },
]
