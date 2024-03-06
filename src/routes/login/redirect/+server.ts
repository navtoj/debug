import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	console.log('/login/redirect/+server.ts');
	redirect(303, '/');
};
