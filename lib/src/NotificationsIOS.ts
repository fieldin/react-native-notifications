import 'proxy-polyfill';
import { Notification } from './DTO/Notification';
import { Commands } from './commands/Commands';
import { Platform } from 'react-native';
import { EventsRegistryIOS } from './events/EventsRegistryIOS';

Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");


export class NotificationsIOS {
   constructor(commands, eventsRegistry) {
        this.commands = commands;
        this.eventsRegistry = eventsRegistry;
    }

    /**
    * Request permissions to send remote notifications
    */
    registerRemoteNotifications() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.requestPermissions();
        }
        return {};
    }

    /**
    * Unregister for all remote notifications received via Apple Push Notification service
    */
    abandonPermissions() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.abandonPermissions();
        }
        return {};
    }

    /**
    * registerPushKit
    */
    registerPushKit() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.registerPushKit();
        }
        return {};
    }

    /**
    * getBadgeCount
    */
    getBadgeCount() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.getBadgeCount();
        }
        return {};
    }

    /**
    * setBadgeCount
    * @param count number of the new badge count
    */
    setBadgeCount(count) {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.setBadgeCount(count);
        }
        return {};
    }

    /**
    * cancelAllLocalNotifications
    */
    cancelAllLocalNotifications() {
        if (react_native_1.Platform.OS === 'ios') {
            this.commands.cancelAllLocalNotifications();
        }
    }

    /**
    * checkPermissions
    */
    checkPermissions() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.checkPermissions();
        }
        return {};
    }

    /**
    * removeDeliveredNotifications
    * @param identifiers Array of notification identifiers
    */
    removeDeliveredNotifications(identifiers) {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.removeDeliveredNotifications(identifiers);
        }
        return {};
    }

    /**
    * getDeliveredNotifications
    */
    getDeliveredNotifications() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.commands.getDeliveredNotifications();
        }
        return {};
    }

    /**
    * Obtain the events registry instance
    */
    events() {
        if (react_native_1.Platform.OS === 'ios') {
            return this.eventsRegistry;
        }
        return {};
    }
}
