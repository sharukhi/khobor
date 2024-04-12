import { kindeAuthClient } from '@kinde-oss/kinde-auth-sveltekit'
import { request } from '@sveltejs/kit'

export async function load({ request }) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(request) // Boolean: true or false
	let userProfile = null
	if (isAuthenticated) {
		userProfile = await kindeAuthClient.getUser(request)
		
	} else {
		// Need to implement, e.g: redirect user to sign in, etc..
	}
	return {
		isAuthenticated,
		userProfile
	}
}