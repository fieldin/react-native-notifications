import 'proxy-polyfill';
import { Commands } from './commands/Commands';
import { Platform } from 'react-native';
import { NotificationChannel } from './interfaces/NotificationChannel';

Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");

export class NotificationsAndroid {
   constructor(commands) {
        this.commands = commands;
    }

    /**
    * Refresh FCM token
    */
    registerRemoteNotifications() {
        if (react_native_1.Platform.OS === 'android') {
        this.commands.refreshToken();
        }
    }

  /**
   * setNotificationChannel
   */
  public setNotificationChannel(notificationChannel: NotificationChannel) {
    return this.commands.setNotificationChannel(notificationChannel);
  }
}
