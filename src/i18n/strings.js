// Kalimat milik antarmuka. Isi yang bersifat data (proyek, pekerjaan,
// organisasi) tetap tinggal di src/data dan diterjemahkan di tempatnya
// masing-masing, supaya satu proyek tidak terbelah di dua berkas.
export const uiStrings = {
    // ---- Navbar --------------------------------------------------------
    'nav.about': { en: 'About', id: 'Tentang' },
    'nav.skills': { en: 'What I Do', id: 'Keahlian' },
    'nav.work': { en: 'Work', id: 'Proyek' },
    'nav.experience': { en: 'Experience', id: 'Pengalaman' },
    'nav.contact': { en: 'Contact', id: 'Kontak' },
    'nav.cv': { en: 'CV', id: 'CV' },
    'nav.downloadCv': { en: 'Download CV', id: 'Unduh CV' },
    'nav.main': { en: 'Main navigation', id: 'Navigasi utama' },
    'nav.mobile': { en: 'Mobile navigation', id: 'Navigasi mobile' },
    'nav.openMenu': { en: 'Open menu', id: 'Buka menu' },
    'nav.closeMenu': { en: 'Close menu', id: 'Tutup menu' },
    'nav.language': { en: 'Change language', id: 'Ganti bahasa' },

    // ---- Hero ----------------------------------------------------------
    'hero.viewWork': { en: 'See my work', id: 'Lihat proyek' },

    // ---- About ---------------------------------------------------------
    'about.title': { en: 'about me', id: 'tentang saya' },

    // ---- Skills --------------------------------------------------------
    'skills.title': { en: 'what i do', id: 'keahlian' },
    'skills.lede': {
        en: 'Four things I work on, and the tools I use to do them. The top half explains how I work; the bottom half is for anyone who wants the technical detail straight away.',
        id: 'Empat hal yang saya kerjakan, dan alat yang saya pakai untuk mengerjakannya. Bagian atas menjelaskan cara saya bekerja, bagian bawah untuk yang ingin langsung melihat detail teknisnya.',
    },
    'skills.techHead': { en: 'Technology & Tools', id: 'Teknologi & Tools' },

    // ---- Projects ------------------------------------------------------
    'projects.homeTitle': { en: 'selected work', id: 'karya pilihan' },
    'projects.homeLede': {
        en: 'Four projects that together cover what I actually do: shaping a product, building it, and testing someone else’s before it ships.',
        id: 'Empat proyek yang bersama-sama mewakili apa yang benar-benar saya kerjakan: merancang produk, membangunnya, dan menguji milik orang lain sebelum diserahkan.',
    },
    'projects.viewAll': { en: 'See all projects', id: 'Lihat semua proyek' },

    'projects.title': { en: 'projects', id: 'proyek' },
    'projects.lede': {
        en: 'Products I build and manage at Twenti Studio, client systems I test before handover, and the coursework and personal projects underneath it all. The label on each card marks what I did there.',
        id: 'Produk yang saya bangun dan kelola di Twenti Studio, sistem klien yang saya uji sebelum serah terima, serta proyek kuliah dan mandiri yang jadi dasarnya. Label di tiap kartu menandai apa yang saya kerjakan di sana.',
    },
    'projects.count': { en: 'projects', id: 'proyek' },
    'projects.filterLabel': {
        en: 'Filter projects by type of work',
        id: 'Saring proyek menurut jenis pekerjaan',
    },
    'projects.otherTitle': { en: 'other projects', id: 'proyek lain' },
    'projects.back': { en: 'Back to home', id: 'Kembali ke beranda' },

    'project.view': { en: 'Visit', id: 'Lihat' },
    'project.code': { en: 'Code', id: 'Kode' },
    'project.preview': { en: 'Preview of', id: 'Tampilan' },

    // ---- Experience ----------------------------------------------------
    'experience.title': { en: 'experience', id: 'pengalaman' },
    'experience.tabsLabel': { en: 'Type of experience', id: 'Jenis pengalaman' },
    'experience.tabWork': { en: 'Work', id: 'Kerja' },
    'experience.tabOrg': { en: 'Organisations', id: 'Organisasi' },
    'experience.education': { en: 'Education', id: 'Pendidikan' },
    'experience.certificate': { en: 'View certificate', id: 'Lihat sertifikat' },

    // ---- Currently -----------------------------------------------------
    'currently.title': { en: 'right now', id: 'saat ini' },
    'currently.updated': { en: 'Updated', id: 'Diperbarui' },

    // ---- Contacts ------------------------------------------------------
    'contacts.title': { en: 'contact', id: 'kontak' },
    'contacts.lede': {
        en: 'Open to product management, quality assurance, and software engineering roles, whether internship, part time, or project based.',
        id: 'Terbuka untuk peran product management, quality assurance, dan software engineering, baik magang, paruh waktu, maupun proyek.',
    },
    'contacts.email': { en: 'Email', id: 'Email' },
    'contacts.phone': { en: 'Phone', id: 'Telepon' },
    'contacts.location': { en: 'Location', id: 'Lokasi' },
    'contacts.name': { en: 'Name', id: 'Nama' },
    'contacts.message': { en: 'Message', id: 'Pesan' },
    'contacts.namePlaceholder': { en: 'Your name', id: 'Nama kamu' },
    'contacts.emailPlaceholder': { en: 'you@email.com', id: 'nama@email.com' },
    'contacts.messagePlaceholder': {
        en: 'Write your message here',
        id: 'Tulis pesan kamu di sini',
    },
    'contacts.send': { en: 'Send message', id: 'Kirim pesan' },
    'contacts.sending': { en: 'Sending…', id: 'Mengirim…' },
    'contacts.errEmpty': {
        en: 'Every field needs to be filled in.',
        id: 'Semua kolom perlu diisi.',
    },
    'contacts.errEmail': {
        en: 'That email address does not look right.',
        id: 'Format email belum benar.',
    },
    'contacts.ok': {
        en: 'Message sent. I will reply by email as soon as I can.',
        id: 'Pesan terkirim. Saya balas lewat email secepatnya.',
    },
    'contacts.errSend': {
        en: 'The message did not go through. Try again, or email me directly using the address beside this form.',
        id: 'Pesan gagal terkirim. Coba lagi, atau kirim langsung ke email di samping.',
    },

    // ---- Misc ----------------------------------------------------------
    'backToTop': { en: 'Back to top', id: 'Kembali ke atas' },
    'fullscreen.enter': { en: 'Enter fullscreen', id: 'Masuk ke layar penuh' },
    'fullscreen.exit': { en: 'Exit fullscreen', id: 'Keluar dari layar penuh' },
}
