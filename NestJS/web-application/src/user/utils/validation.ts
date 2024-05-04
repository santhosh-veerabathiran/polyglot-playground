export function validateId(id: number): number {
    if (!id) throw new Error('id is required field');
    id = +id;
    if (isNaN(id)) throw new Error('id must be number');
    return id;
}

function isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) throw new Error('invalid email');
}

export function validateUser(user: {
    id: number,
    name: string,
    email: string
}) {
    if (Object.entries(user).length == 0) throw new Error('Required data not found');

    user.id = validateId(user.id);
    if (!user.name) throw new Error('name is required field');
    if (!user.email) throw new Error('email is required field');
    isValidEmail(user.email);

    return user;
}
