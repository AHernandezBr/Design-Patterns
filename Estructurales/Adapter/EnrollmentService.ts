
import { NotificationManager } from './NotificationManager';

export class EnrollmentService {
    private notificationManager: NotificationManager;

    constructor() {
        this.notificationManager = NotificationManager.getSingleInstance();
    }

    public enrollStudent(studentEmail: string): void {
        // Lógica para inscribir al estudiante...
        // console.log(`Estudiante inscrito: ${studentEmail}`);

        // Notificación de inscripción exitosa
        this.notificationManager.notifyByEmail('Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail);
        this.notificationManager.notifyBySMS('Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail)
        this.notificationManager.ownNotifyByTelegram('Telegram: Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail   )
    }
}
