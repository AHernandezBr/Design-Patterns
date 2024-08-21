import { INotificationService } from "./INotificationService"
import { ExternalNotificationService} from "./ExternalNotificationService"

export class NotificationAdapter implements INotificationService {
    private externalService

    constructor(externalService:ExternalNotificationService){
        this.externalService = externalService
    }
    sendNotification(message: string, recipient: string): void {
        this.externalService.notifyExternalTelegram(message, recipient)
    }
}