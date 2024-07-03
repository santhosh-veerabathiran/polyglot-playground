import { TUsers } from '../interfaces';

export function validateId(id: number): number {
	if (!id) throw new Error('id is required field');
	id = +id;
	if (isNaN(id)) throw new Error('id must be number');
	return id;
}

export function validateUser(user: TUsers) {
	if (Object.entries(user).length == 0)
		throw new Error('Required data not found');

	if (!user.fname) throw new Error('fname is required field');
	if (!user.email) throw new Error('email is required field');
	if (!user.phone_no) throw new Error('phone number is required field');

	return user;
}
