import resume from '../assets/pdf/Resume_Noel1.pdf'

// Field yang berupa objek { en, id } diterjemahkan lewat `pick` dari
// LanguageContext. Yang ditulis sebagai string biasa memang sama di kedua
// bahasa, jadi tidak perlu dikembarkan.
export const headerData = {
    name: 'Noel Sipayung',
    shortName: 'Noel',

    // Tiap elemen jadi satu baris sendiri di hero, masing-masing dengan mask
    // reveal. Dipecah manual supaya tidak wrap sembarangan di layar sempit.
    nameLines: ['Noel Sipayung'],

    title: 'Product Manager, Quality Assurance & Software Engineer',

    roles: ['Product Manager', 'Quality Assurance', 'Software Engineer'],

    // Kalimat pembuka, dibaca sebelum daftar peran. Cukup manusiawi untuk
    // orang yang sekadar ingin kenal, cukup jelas untuk perekrut.
    tagline: {
        en: 'I build, test, and explore technology to understand how an idea turns into something people can actually use.',
        id: 'Saya membangun, menguji, dan mengeksplorasi teknologi untuk memahami bagaimana sebuah ide bisa menjadi produk yang berguna.',
    },

    description: {
        en: 'I am Noel, an Informatics student at Institut Teknologi Kalimantan with experience across software development, product development, quality assurance, and student organisations. I enjoy moving between the technical side and the product side, from understanding how a system works to thinking about how people will use it.',
        id: 'Saya Noel, mahasiswa Informatika di Institut Teknologi Kalimantan dengan pengalaman dalam software development, product development, quality assurance, dan organisasi. Saya senang berpindah antara sisi teknis dan produk, dari memahami bagaimana sistem bekerja hingga memikirkan bagaimana orang akan menggunakannya.',
    },

    // Deskripsi lama tidak dibuang, cuma dipindah tugas jadi meta description.
    // Isinya menyebut Twenti Studio dan nama produk, berguna di hasil
    // pencarian tapi terlalu padat kata kunci untuk kalimat pembuka.
    metaDescription: {
        en: 'Informatics student at Institut Teknologi Kalimantan working on product management, quality assurance, systems analysis, and digital product management at Twenti Studio. I map user needs, shape product flows, write documentation, and run testing so products end up tidier and easier to use.',
        id: 'Mahasiswa Informatika di Institut Teknologi Kalimantan yang menggarap product management, quality assurance, analisis sistem, dan pengelolaan produk digital di Twenti Studio. Saya memahami kebutuhan pengguna, menyusun alur produk, membuat dokumentasi, dan menjalankan pengujian agar produk lebih rapi dan mudah digunakan.',
    },

    // Sama di kedua bahasa, jadi ditulis biasa.
    location: 'Balikpapan, Indonesia',

    resumePdf: resume,
}
