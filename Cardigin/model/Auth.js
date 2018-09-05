import api from '../common/info/api';
import { AsyncStorage } from 'react-native';
import Error from './Error';

export default class Auth {
  constructor() {
    this.uid = null;
    this.username = null;
    this.token = null;
  }
  async readTokenFromStorage() {
    this.username = await AsyncStorage.getItem('currentUsername');
    this.token = await AsyncStorage.getItem('currentUserToken');
  }
  isLogedin(handler) {
    try {
      api.get('/auth/me', (res, err) => {
        if (res.status === 200) {
          handler(true, null);
        } else {
          this.uid = null;
          this.username = null;
          this.token = null;
          handler(false, null);
        }
      });
    } catch (error) {
      handler(false, error);
    }
  }

  register_withUsernameAndPassword(username, password) {
    api.post(
      '/auth/register',
      { payload: { username, password } },
      (res, err) => {
        if (err === null) {
          this.token = res.token;
          this.username = username;
          AsyncStorage.setItem('currentUserToken', res.token).catch(error => {
            Error.showAlert_withError(error);
          });
          AsyncStorage.setItem('currentUsername', username).catch(error => {
            Error.showAlert_withError(error);
          });
        } else {
          Error.showAlert_withError(err);
        }
      }
    );
  }

  login_withUsernameAndPassword(username, password) {
    console.log(username);
    api.post('/auth/login', { payload: { username, password } }, (res, err) => {
      console.log(res);
      if (err === null) {
        this.token = res.token;
        this.username = username;
        try {
          AsyncStorage.setItem('currentUserToken', res.token).catch(error => {
            Error.showAlert_withError(error);
          });
          AsyncStorage.setItem('currentUsername', username).catch(error => {
            Error.showAlert_withError(error);
          });
        } catch (error) {
          Error.showAlert_withError(error);
        }
      } else {
        Error.showAlert_withError(err);
      }
    });
  }

  async login_withUsernameAndToken(username, token) {
    try {
      await AsyncStorage.setItem('currentUserToken', token);
      await AsyncStorage.setItem('currentUsername', username);
      this.username = username;
      this.token = token;
    } catch (error) {
      Error.showAlert_withError(error);
    }
  }
  logout() {
    this.username = null;
    this.token = null;
  }
}
