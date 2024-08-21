
import { NotificationManager } from './NotificationManager';
import { ExternalNotificationService} from './ExternalNotificationService';

export class BillingService {
    private notificationManager: NotificationManager;
    // private externalService:ExternalNotificationService; 

    constructor() {
        this.notificationManager = NotificationManager.getSingleInstance();
    }

    public notifyPaymentDue(studentEmail: string): void {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);

        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        // this.externalService.notifyExternalTelegram('5512345678','Urgente pago de tu colegiatura');
        this.notificationManager.ownNotifyByTelegram('Urgente pago de tu colegiatura', '5512345678')
         
    }
}
