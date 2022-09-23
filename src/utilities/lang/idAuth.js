const idAuth = {
  login: {
    title: 'Masuk ke Catatan',
    email: {
      label: 'Alamat Email',
      placeholder: 'Email anda',
      error: 'Email anda tidak valid.'
    },
    password: {
      label: 'Kata Sandi',
      placeholder: 'Kata Sandi anda',
      error: 'Kata sandi anda harus lebih dari 8 huruf.'
    },
    action: 'Masuk',
    links: {
      title: 'Tidak memiliki akun?',
      link: 'Daftar Sekarang!'
    },
    invalidCred: 'Kresidensil anda tidak valid'
  },
  register: {
    title: 'Daftar ke Aplikasi Catatan',
    name: {
      label: 'Nama',
      placeholder: 'Nama anda',
      error: 'Nama harus di isi.'
    },
    email: {
      label: 'Email',
      placeholder: 'Email anda',
      error: 'Email anda tidak valid'
    },
    password: {
      label: 'Kata Sandi',
      placeholder: 'Kata Sandi anda',
      error: 'Kata sandi anda harus lebih dari 8 huruf'
    },
    confirmPassword: {
      label: 'Konfirmasi Kata Sandi',
      placeholder: 'Ketik ulang kata sandi anda',
      error: 'Konfirmasi kata sandi anda harus sama dengan kata sandi anda.'
    },
    action: 'Daftar',
    links: {
      title: 'Sudah memiliki akun?',
      link: 'Masuk sekarang!'
    }
  }
}

export default idAuth
