export const load = ({ url }) => {
	console.log(url.pathname);

	const lang = url.pathname.startsWith('/de') ? ('de' as const) : ('en' as const);

	return {
		lang
	};
};
