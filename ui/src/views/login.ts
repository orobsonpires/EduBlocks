import Config from '../config';
import { UserSession } from '../types';
import { popupWindow } from './helper';

export function openLoginWindow() {
  return new Promise<UserSession>((resolve, reject) => {
    const loginWindow = popupWindow(Config.LoginServerUrl, 'Login to EduBlocks', 600, 800);

    if (!loginWindow) {
      alert('Failed to open login window. Please check your popup blocker.');

      return reject(new Error('Failed to open login window'));
    }

    const listener = (e: MessageEvent) => {
      // if (e.data.error === 'closed') {
      //   window.removeEventListener('message', listener);

      //   return reject(new Error('User closed the login window'));
      // }

      if (e.data.token) {
        const user: UserSession = e.data;

        window.removeEventListener('message', listener);

        loginWindow.close();

        return resolve(user);
      }
    };

    window.addEventListener('message', listener);
  });
}
