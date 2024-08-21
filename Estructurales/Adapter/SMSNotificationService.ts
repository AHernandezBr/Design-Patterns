
import { INotificationService } from './INotificationService';

export class SMSNotificationService implements INotificationService {
    public sendNotification(message: string, recipient: string): void {
        console.log("Conectando con el proveedor de telefonía");
        console.log(`Enviando SMS a ${recipient}: ${message}`);
    }
}
