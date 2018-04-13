import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('Register', credentials);
  },
  login(credentials) {
    return Api().post('Login', credentials);
  },
};

// call this method from another file
// AuthenticationService.register({
//     email: 'emailku@gmail.com',
//     password: 12345
// })
