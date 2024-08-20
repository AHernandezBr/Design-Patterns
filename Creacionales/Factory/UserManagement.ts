
import { IUser } from './IUser';
import { UserFactory } from './UserFactory';

export class UserManagement {
    public createUser(type: string, id: number, name: string): IUser {
        return UserFactory.createUser(type, id, name)
    }
}