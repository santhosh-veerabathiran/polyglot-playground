export function frameResponse(
	status: 'Error' | 'Success',
	message: string,
	data?: any
) {
	return {
		status,
		message,
		data,
	};
}
