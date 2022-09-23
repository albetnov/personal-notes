const enAuth = {
  login: {
    title: 'Sign In To Notes',
    email: {
      label: 'Email Address',
      placeholder: 'Your email',
      error: 'Your email is invalid'
    },
    password: {
      label: 'Password',
      placeholder: 'Your password',
      error: 'Your password must be more than 8 characters long.'
    },
    action: 'Login',
    links: {
      title: "Don't have an account?",
      link: 'Register Now!'
    },
    invalidCred: 'Provided cresidentials invalid.'
  },
  register: {
    title: 'Register to Notes App',
    name: {
      label: 'Name',
      placeholder: 'Your name',
      error: 'Your name is required'
    },
    email: {
      label: 'Email',
      placeholder: 'Your email',
      error: 'Your email is invalid'
    },
    password: {
      label: 'Password',
      placeholder: 'Your password',
      error: 'Your password must be more than 8 characters long.'
    },
    confirmPassword: {
      label: 'Confirm Password',
      placeholder: 'Re type your password',
      error: 'Your password confirmation is not the same as your password'
    },
    action: 'Register',
    links: {
      title: 'Already have an account?',
      link: 'Login Now!'
    }
  }
}

export default enAuth
