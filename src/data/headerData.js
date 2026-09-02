import resume from '../assets/pdf/Resume_Noel1.pdf'

export const headerData = {
    name: 'Noel Sipayung',
    shortName: 'Noel',

    // Tiap elemen jadi satu baris sendiri di hero, masing-masing dengan mask
    // reveal. Dipecah manual supaya tidak wrap sembarangan di layar sempit.
    nameLines: ['Noel Sipayung'],

    // Kept from the original site, with the framing moved from "sedang
    // mendalami" to what the Twenti Studio role actually is now.
    title: 'Product Manager, Quality Assurance & Software Engineer',

    roles: ['Product Manager', 'Quality Assurance', 'Software Engineer'],

    // Kalimat pembuka, dibaca sebelum daftar peran. Cukup manusiawi untuk
    // orang yang sekadar ingin kenal, cukup jelas untuk perekrut.
    tagline:
        'Saya membangun, menguji, dan mengeksplorasi teknologi untuk memahami bagaimana sebuah ide bisa menjadi produk yang berguna.',

    description:
        'Saya Noel, mahasiswa Informatika di Institut Teknologi Kalimantan dengan pengalaman dalam software development, product development, quality assurance, dan organisasi. Saya senang berpindah antara sisi teknis dan produk, dari memahami bagaimana sistem bekerja hingga memikirkan bagaimana orang akan menggunakannya.',

    // Deskripsi lama tidak dibuang, cuma dipindah tugas jadi meta description.
    // Isinya menyebut Twenti Studio dan nama produk, berguna di hasil
    // pencarian tapi terlalu padat kata kunci untuk kalimat pembuka.
    metaDescription:
        'Mahasiswa Informatika di Institut Teknologi Kalimantan yang menggarap product management, quality assurance, analisis sistem, dan pengelolaan produk digital di Twenti Studio. Saya memahami kebutuhan pengguna, menyusun alur produk, membuat dokumentasi, dan menjalankan pengujian agar produk lebih rapi dan mudah digunakan.',

    location: 'Balikpapan, Indonesia',
    resumePdf: resume,
}
