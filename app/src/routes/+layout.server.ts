import {kindeAuthClient, type SessionManager} from '@kinde-oss/kinde-auth-sveltekit';
import {redirect, type RequestEvent} from '@sveltejs/kit';

export async function load({request}: RequestEvent) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	); 
	if (isAuthenticated) {
	
	} else {
		redirect(302, 'http://khobor.sharukhi.xyz/'); 
	}


	return {
		isAuthenticated
	};
}