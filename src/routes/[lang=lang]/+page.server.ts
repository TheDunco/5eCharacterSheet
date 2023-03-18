import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { PAYLOAD_SECRET } from '$env/static/private';

const CmsUrl = 'https://payload-character-sheet-production.up.railway.app';

export const load = (async ({ fetch }) => {
	// TODO: Character ID from URL
	const res = await fetch(`${CmsUrl}/api/fifth-edition-character/640a6b601da1c697cbb97262`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${PAYLOAD_SECRET}`
		}
	});

	if (res.ok) {
		const character = await res.json();
		return {
			props: {
				character
			}
		};
	}

	return {
		status: res.status,
		error: new Error(await res.text())
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	setTheme: async ({ url, cookies, params }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo ?? params.lang);
	}
};
