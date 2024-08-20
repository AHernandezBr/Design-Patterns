
import { IUser } from './IUser';
import { AdminUser } from './AdminUser';
import { InstructorUser } from './InstructorUser';
import { StudentUser } from './StudentUser';

export class UserFactory {
    public static createUser(type: string, id: number, name: string): IUser {
        switch (type){
            case 'admin':
                return new AdminUser(id, name);
            case 'instructor':
                return new InstructorUser(id, name);
            case 'student':
                return new StudentUser(id, name);
            default:
                throw new Error('Tipo de usuario no reconocido');
        }
    }
}