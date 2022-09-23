import enAuth from './lang/enAuth'
import idAuth from './lang/idAuth'

const langString = {
  en: {
    auth: enAuth,
    error: {
      serverErr: 'Something went wrong. Please try again later.'
    },
    topBarSearch: 'Search by title',
    sidebar: {
      home: 'Home',
      archived: 'Archived Notes',
      create: 'Create Note',
      settings: 'Settings'
    },
    active: {
      statistics: 'Statistics',
      all: 'All Notes',
      active: 'Active Notes',
      archived: 'Archived Notes'
    },
    create: {
      title: 'Create a note',
      inputTitle: {
        placeholder: 'Note Title',
        error: 'Title must be filled'
      },
      contentError: 'Content must be filled',
      action: 'Create',
      success: 'Note Added Successfully'
    },
    notFound: 'Page not found.',
    loading: 'Loading...',
    noData: 'No notes found.'
  },
  id: {
    auth: idAuth,
    error: {
      serverErr: 'Masalah terjadi. Harap coba lagi nanti'
    },
    topBarSearch: 'Cari berdasarkan judul',
    sidebar: {
      home: 'Halaman Utama',
      archived: 'Catatan Terarsip',
      create: 'Buat Catatan',
      settings: 'Pengaturan'
    },
    active: {
      statistics: 'Statistik',
      all: 'Semua Catatan',
      active: 'Catatan Aktif',
      archived: 'Catatan Terarsip'
    },
    create: {
      title: 'Buat catatan',
      inputTitle: {
        placeholder: 'Judul Catatan',
        error: 'Judul Catatan harus di isi.'
      },
      contentError: 'Konten Catatan harus di isi.',
      action: 'Buat',
      success: 'Catatan berhasil di buat.'
    },
    notFound: 'Halaman tidak ditemukan.',
    loading: 'Memuat...',
    noData: 'Tidak ada catatan yang dapat ditemukan.'
  }
}

export default langString
