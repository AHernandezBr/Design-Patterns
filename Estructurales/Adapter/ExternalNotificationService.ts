export class ExternalNotificationService {
    public notifyExternalTelegram(target: string, msg: string): void {
        console.log('Logica interna de Telegram, no disponible para el cliente.');
        console.log(`Enviando notificación a Telegarm a ${target}: ${msg}`);
    }
}
