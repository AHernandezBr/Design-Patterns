
import { INotificationService } from './INotificationService';

export class EmailNotificationService implements INotificationService {
    public sendNotification(message: string, recipient: string): void {
        // Simula la obtención y configuración del cuerpo del correo, el correo puede venir a menudo de un template persistido en BD.
        console.log("Obteniendo template de envío de correos");

        // Realiza la verificación de conexión al servidor de envío de correos.
        console.log("Conectando con servidor de envío de correos");

        // Envía el mensaje al destinatario
        console.log(`Enviando correo a ${recipient}: ${message}`);
    }
}
