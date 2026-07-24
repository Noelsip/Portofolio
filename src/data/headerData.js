import resume from '../assets/pdf/Resume_Noel1.pdf'

export const headerData = {
    name: 'Noel Ericson Rapael Sipayung',
    shortName: 'Noel Sipayung',

    // Dipecah manual jadi dua baris. Kalau dibiarkan wrap sendiri, nama ini
    // pecah jadi empat baris dan menghabiskan hampir satu layar penuh.
    nameLines: ['Noel Ericson', 'Rapael Sipayung'],

    // Kept from the original site, with the framing moved from "sedang
    // mendalami" to what the Twenti Studio role actually is now.
    title: 'Product Manager, Quality Assurance & Software Engineer',

    roles: ['Product Manager', 'Quality Assurance', 'Software Engineer'],

    description:
        'Mahasiswa Informatika di Institut Teknologi Kalimantan yang menggarap product management, quality assurance, analisis sistem, dan pengelolaan produk digital di Twenti Studio. Saya memahami kebutuhan pengguna, menyusun alur produk, membuat dokumentasi, dan menjalankan pengujian agar produk lebih rapi dan mudah digunakan.',

    location: 'Balikpapan, Indonesia',
    resumePdf: resume,
}
