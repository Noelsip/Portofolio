import healthify from '../assets/png/products/healti.png'
import finot from '../assets/png/products/FiNot.png'
import welltrack from '../assets/png/products/welltrack.png'
import gamesTwenti from '../assets/png/products/games.png'
import mita from '../assets/png/products/mita-test.png'
import simaggot from '../assets/png/products/simaggot.png'
import klirlogistik from '../assets/png/products/klirlogistik.png'
import bemfsti from '../assets/png/products/bemfsti.png'
import twentiLogo from '../assets/png/products/twenti-logo.png'
import pjli from '../assets/png/products/pjli.png'
import meracikopi from '../assets/png/products/meracikopi.png'
import unocoffee from '../assets/png/products/unocoffee.png'
// Dua proyek berikut tidak punya situs live, jadi gambarnya kartu repo GitHub.
import asah from '../assets/png/products/asah.png'
import apotek from '../assets/png/products/apotek.png'

// Deskripsi proyek lama tetap memakai tulisan asli dari versi sebelumnya.
// Yang baru hanya produk Twenti Studio yang belum pernah dimasukkan.
//
// `role`       = jabatan yang dipegang di proyek itu, tampil di kartu.
// `scope`      = pengelompokan internal untuk statistik di hero, tidak ditampilkan.
// `featured`   = tampil besar di beranda dan di baris atas halaman Proyek.
// `categories` = dipakai filter. Satu proyek boleh masuk lebih dari satu.
//
// `tags` sengaja tidak diterjemahkan: istilahnya dipakai apa adanya di kedua
// bahasa, dan menerjemahkannya justru membuat kartu sulit dipindai perekrut.

// Label filter. Urutannya menentukan urutan tombol.
export const projectCategories = [
    { key: 'semua', label: { en: 'All', id: 'Semua' } },
    { key: 'produk', label: { en: 'Product', id: 'Produk' } },
    { key: 'engineering', label: { en: 'Engineering', id: 'Engineering' } },
    { key: 'qa', label: { en: 'Quality Assurance', id: 'Quality Assurance' } },
    { key: 'organisasi', label: { en: 'Organisation', id: 'Organisasi' } },
]

export const projectsData = [
    {
        id: 'twenti-studio',
        name: 'Twenti Studio',
        kind: { en: 'App Studio', id: 'App Studio' },
        context: 'Twenti Studio',
        role: { en: 'Product Development', id: 'Product Development' },
        scope: null,
        featured: true,
        categories: ['produk'],
        desc: {
            en: 'Managing product requirements and feature priorities for an app development agency site, focused on the user experience and on making the service path legible.',
            id: 'Mengelola kebutuhan produk dan prioritas fitur untuk website layanan pembuatan aplikasi, dengan fokus pada pengalaman pengguna dan kejelasan alur layanan.',
        },
        tags: ['Product Planning', 'Web Product', 'Stakeholder Needs'],
        image: twentiLogo,
        imageFit: 'contain',
        demo: 'https://twenti.studio',
        code: null,
        status: null,
    },
    {
        // Nama, kind, dan konteks disesuaikan dengan situs yang sudah live:
        // "Unocoffee Express, Kopi keliling Samarinda", fitur utamanya mencari
        // rider terdekat plus menu. Sebelumnya masih tebakan saya.
        id: 'unocoffee',
        name: 'Unocoffee Express',
        kind: {
            en: 'Rider Locator & Digital Menu',
            id: 'Rider Locator & Digital Menu',
        },
        context: {
            en: 'Unocoffee Express, Samarinda',
            id: 'Unocoffee Express, Samarinda',
        },
        role: { en: 'Product Discovery', id: 'Product Discovery' },
        scope: null,
        featured: true,
        categories: ['produk'],
        desc: {
            en: 'A roaming coffee service where customers can see which rider is selling nearest to them and open the route. I helped map the operational problems happening on the ground and turn them into use cases, which became the basis for the software that was then built.',
            id: 'Layanan kopi keliling yang pembelinya bisa melihat rider mana yang sedang berjualan paling dekat, lalu membuka rutenya. Saya membantu memetakan masalah operasional yang terjadi di lapangan dan menerjemahkannya menjadi use case, sebagai dasar perangkat lunak yang kemudian dibangun.',
        },
        tags: ['Use Case Mapping', 'Requirement Analysis', 'Problem Discovery'],
        image: unocoffee,
        demo: 'https://unocoffee.id',
        code: null,
        status: null,
    },
    {
        id: 'healthify',
        name: 'Healthify',
        kind: {
            en: 'AI Health Hoax Detector',
            id: 'AI Health Hoax Detector',
        },
        context: 'Twenti Studio',
        role: { en: 'Product Validation', id: 'Product Validation' },
        scope: 'built',
        featured: true,
        categories: ['produk'],
        desc: {
            en: 'An assistant that checks health claims against thousands of scientific publications, so people can separate what is grounded from what is merely circulating. I set the product scope, shaped the claim verification flow, and tested its output before release.',
            id: 'Asisten yang memverifikasi klaim kesehatan terhadap ribuan publikasi ilmiah, supaya pengguna bisa memisahkan informasi yang berdasar dari yang sekadar beredar. Saya menentukan cakupan produk, menyusun alur verifikasi klaim, dan menguji keluarannya sebelum rilis.',
        },
        tags: ['Product Discovery', 'User Flow', 'QA'],
        image: healthify,
        demo: 'https://healthify.twenti.studio/',
        code: null,
        status: null,
    },
    {
        id: 'finot',
        name: 'FiNot',
        kind: {
            en: 'AI Personal Finance Assistant',
            id: 'AI Personal Finance Assistant',
        },
        context: 'Twenti Studio',
        role: {
            en: 'Product Validation & Development',
            id: 'Product Validation & Development',
        },
        scope: 'built',
        featured: true,
        categories: ['produk'],
        desc: {
            en: 'An income and expense tracker you run by typing a single sentence rather than filling in a long form. I designed the logging flow, set feature priorities for each version, and tested how accurately it recorded free form language.',
            id: 'Pencatat pemasukan dan pengeluaran yang cukup dijalankan dengan mengetik satu kalimat, bukan mengisi formulir panjang. Saya merancang alur pencatatannya, menetapkan prioritas fitur tiap versi, dan menguji akurasi pencatatan terhadap masukan bahasa bebas.',
        },
        tags: ['Product Requirement', 'UX Flow', 'Functional Testing'],
        image: finot,
        demo: 'https://fi-note.app',
        code: null,
        status: null,
    },
    {
        id: 'welltrack',
        name: 'Well Track',
        kind: {
            en: 'AI Personal Health Assistant',
            id: 'AI Personal Health Assistant',
        },
        context: 'Twenti Studio',
        role: {
            en: 'Product Development & Validation',
            id: 'Product Development & Validation',
        },
        scope: 'built',
        featured: false,
        categories: ['produk'],
        desc: {
            en: 'A daily health companion that takes complaints in everyday language, on the premise that noting how your body feels should be as easy as telling someone. I shaped the product concept and its conversation scenarios, then tested how the system responded to different ways of speaking.',
            id: 'Pendamping kesehatan harian yang menerima keluhan dalam bahasa sehari-hari, dengan premis bahwa mencatat kondisi tubuh harusnya semudah bercerita. Saya menyusun konsep produk dan skenario percakapannya, lalu menguji respons sistem terhadap berbagai gaya bahasa pengguna.',
        },
        tags: ['Product Concept', 'Scenario Design', 'QA'],
        image: welltrack,
        demo: 'https://welltrack.twenti.studio',
        code: null,
        status: null,
    },
    {
        id: 'games-twenti',
        name: 'Games Twenti',
        kind: { en: 'Digital Store', id: 'Digital Store' },
        context: 'Twenti Studio',
        role: { en: 'Product Management', id: 'Product Management' },
        scope: 'managed',
        featured: false,
        categories: ['produk'],
        desc: {
            en: 'Twenti’s official digital store for game top ups, vouchers, e-books, and social media services. I manage its feature priorities and keep the transaction path short precisely as the catalogue keeps growing.',
            id: 'Digital store resmi Twenti untuk top-up game, voucher, e-book, dan layanan media sosial. Saya mengelola prioritas fiturnya dan menjaga alur transaksi tetap pendek justru ketika katalognya terus bertambah.',
        },
        tags: ['Roadmap', 'Transaction Flow', 'Backlog'],
        image: gamesTwenti,
        demo: 'https://games.twenti.studio',
        code: null,
        status: null,
    },
    {
        id: 'mita',
        name: 'MiTa',
        kind: { en: 'Micro Task Platform', id: 'Micro Task Platform' },
        context: 'Twenti Studio',
        role: {
            en: 'Product Validation & Development',
            id: 'Product Validation & Development',
        },
        scope: 'managed',
        featured: false,
        categories: ['produk'],
        desc: {
            en: 'A micro tasking platform that hands short tasks to users for a set reward. I wrote the platform requirements and the rules between task giver and task doer, and steered its development from the product side.',
            id: 'Platform mikro tasking yang membagikan tugas ringkas ke pengguna dengan imbalan tertentu. Saya menyusun kebutuhan platform dan aturan main antara pemberi tugas dan pengerja, serta mengawal pengembangannya dari sisi produk.',
        },
        tags: ['Requirement', 'Product Ops'],
        image: mita,
        demo: 'https://mita.twenti.studio',
        code: null,
        status: { en: 'In development', id: 'Dalam pengembangan' },
    },
    {
        id: 'simaggot',
        name: 'Simaggot Balkot',
        kind: {
            en: 'Waste Management System',
            id: 'Waste Management System',
        },
        context: {
            en: 'Balikpapan Kota District',
            id: 'Kecamatan Balikpapan Kota',
        },
        role: { en: 'Quality Validation', id: 'Quality Validation' },
        scope: 'qa',
        featured: false,
        categories: ['qa'],
        desc: {
            en: 'A system digitising maggot farming operations, pulling field data collection, officer coordination, asset records, and residents’ waste savings into one place. I tested the data collection flow and the resident deposit calculations, making sure the numbers the system produced matched the field data.',
            id: 'Sistem digitalisasi operasional budidaya maggot yang menyatukan pendataan lapangan, koordinasi petugas, pencatatan aset, dan tabungan sampah warga. Saya menguji alur pendataan dan perhitungan setoran warga, memastikan angka yang dihitung sistem cocok dengan data lapangan.',
        },
        tags: ['Functional Testing', 'Data Validation'],
        image: simaggot,
        demo: 'https://simaggotbalkot.com',
        code: null,
        status: null,
    },
    {
        id: 'klirlogistik',
        name: 'KlirLogistik',
        kind: { en: 'B2B Logistics', id: 'B2B Logistics' },
        context: { en: 'Client project', id: 'Proyek klien' },
        role: { en: 'Quality Validation', id: 'Quality Validation' },
        scope: 'qa',
        featured: false,
        categories: ['qa'],
        desc: {
            en: 'A subscription based B2B logistics and freight service for businesses that ship regularly. Because the model is a subscription, an error in one cycle repeats every month, so I traced the edge cases around cycle renewal before the client started using it.',
            id: 'Layanan logistik dan ekspedisi B2B berbasis langganan untuk bisnis yang mengirim rutin. Karena modelnya langganan, kesalahan pada satu siklus akan berulang tiap bulan, jadi saya menelusuri kasus tepi pada perpanjangan siklus sebelum sistem dipakai klien.',
        },
        tags: ['Regression Testing', 'Bug Reporting'],
        image: klirlogistik,
        imageFit: 'contain',
        demo: null,
        code: null,
        status: null,
    },
    {
        id: 'bemfsti',
        name: 'BEM FSTI ITK',
        kind: {
            en: 'Organisation Platform',
            id: 'Platform Organisasi',
        },
        context: 'BEM FSTI ITK',
        role: { en: 'Quality Validation', id: 'Quality Validation' },
        scope: 'qa',
        featured: false,
        categories: ['qa', 'organisasi'],
        desc: {
            en: 'The official BEM FSTI ITK platform, bringing event schedules, work programmes, documentation, and the student feedback channel into a single site. I tested the feedback channel and the work programme management module before handover.',
            id: 'Platform resmi BEM FSTI ITK yang menyatukan agenda kegiatan, program kerja, dokumentasi, dan kanal aspirasi mahasiswa dalam satu situs. Saya menguji kanal aspirasi dan modul manajemen program kerjanya sebelum diserahkan.',
        },
        tags: ['UAT', 'Content QA'],
        image: bemfsti,
        imageFit: 'contain',
        demo: 'https://bemfsti.org',
        code: null,
        status: null,
    },
    {
        id: 'asah',
        name: 'Predictive Copilot ASAH',
        kind: {
            en: 'Predictive Maintenance',
            id: 'Predictive Maintenance',
        },
        context: 'Dicoding x Accenture 2025',
        role: {
            en: 'Testing Contributor & Developer',
            id: 'Testing Contributor & Developer',
        },
        scope: null,
        featured: false,
        categories: ['engineering', 'qa'],
        desc: {
            en: 'A system predicting the condition of manufacturing sensors, built for the ASAH Dicoding x Accenture 2025 programme. I designed the scenarios and test cases from the functional requirements, ran functional testing, and used Postman for API testing to verify that requests and responses stayed consistent.',
            id: 'Sistem prediksi kondisi sensor manufaktur pada program ASAH Dicoding x Accenture 2025. Saya merancang skenario dan test case berdasarkan kebutuhan fungsional, menjalankan functional testing, serta melakukan pengujian API dengan Postman untuk memverifikasi konsistensi request dan response.',
        },
        tags: ['Test Case Design', 'Functional Testing', 'API Testing'],
        image: asah,
        imageFit: 'contain',
        demo: null,
        code: 'https://github.com/Noelsip/Capstone-ASAH',
        status: null,
    },
    {
        id: 'pjli',
        name: 'Penerus Jaga Laut Indonesia',
        kind: {
            en: 'Organisation Website',
            id: 'Website Organisasi',
        },
        context: 'PJLI Foundation',
        role: { en: 'Quality Validation', id: 'Quality Validation' },
        scope: null,
        featured: false,
        categories: ['qa', 'organisasi'],
        desc: {
            en: 'Supported the information design, content structure, and operational requirements of a website introducing the foundation’s marine protection programmes and activities. I verified the site’s functions against stakeholder needs, validated the content management and publishing flow, and tested navigation and usability before release.',
            id: 'Mendukung perancangan informasi, struktur konten, dan kebutuhan operasional website untuk memperkenalkan program penjagaan laut dan aktivitas organisasi. Saya memverifikasi fungsi situs terhadap kebutuhan stakeholder, memvalidasi alur pengelolaan dan publikasi konten, serta menguji navigasi dan usability sebelum situs dirilis.',
        },
        tags: ['Information Architecture', 'Content Planning', 'Web QA'],
        image: pjli,
        imageFit: 'contain',
        demo: 'https://pjlifoundation.org',
        code: null,
        status: null,
    },
    {
        id: 'meracikopi',
        name: 'Webstore Meracikopi',
        kind: { en: 'E-commerce', id: 'E-commerce' },
        context: 'Meracikopi',
        role: { en: 'Developer', id: 'Developer' },
        scope: null,
        featured: false,
        categories: ['engineering', 'produk'],
        desc: {
            en: 'Worked out the requirements for an online coffee store and its purchase flow, from the catalogue and product information through to the transaction itself.',
            id: 'Menyusun kebutuhan toko online dan alur pembelian produk kopi, mulai dari katalog, informasi produk, hingga proses transaksi.',
        },
        tags: ['E-commerce Flow', 'Requirement Analysis', 'Figma'],
        image: meracikopi,
        demo: 'https://www.figma.com/proto/msW4sM7Wy8ClgUjETBzxmb/Meracikopi?node-id=1-2',
        code: 'https://github.com/Noelsip/e-commerce-meracikopi',
        status: null,
    },
    {
        id: 'apotek',
        name: 'Aplikasi Apotek',
        kind: {
            en: 'Pharmacy Management System',
            id: 'Sistem Manajemen Apotek',
        },
        context: { en: 'Coursework project', id: 'Proyek kuliah' },
        role: { en: 'Developer & Tester', id: 'Developer & Tester' },
        scope: null,
        featured: false,
        categories: ['engineering', 'qa'],
        desc: {
            en: 'Wrote the usage flows and test scenarios for a pharmacy management system, covering medicine search, stock checks, and doctor information.',
            id: 'Menyusun alur penggunaan dan skenario pengujian untuk sistem manajemen apotek, mencakup pencarian obat, pengecekan stok, dan informasi dokter.',
        },
        tags: ['Use Case Design', 'Functional Testing', 'System Analysis'],
        image: apotek,
        imageFit: 'contain',
        demo: null,
        code: 'https://github.com/Noelsip/Apotek-App',
        status: null,
    },
]
