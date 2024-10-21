export const load = ({ url }) => {
	const lang = url.pathname.startsWith('/de') ? ('de' as const) : ('en' as const);

	return {
		lang
	};
};
