export function validateId(id: number): number {
	if (!id) throw new Error('id is required field');
	id = +id;
	if (isNaN(id)) throw new Error('id must be number');
	return id;
}
