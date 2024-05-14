import { User } from "../interfaces/user.interface";

export function validateId(id: number): number {
    if (!id) throw new Error('id is required field');
    id = +id;
    if (isNaN(id)) throw new Error('id must be number');
    return id;
}

export function validateUser(user: User) {
    if (Object.entries(user).length == 0) throw new Error('Required data not found');

    if (!user.username) throw new Error('username is required field');
    if (!user.password) throw new Error('password is required field');

    return user;
}