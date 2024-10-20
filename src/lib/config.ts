import * as m from '$lib/paraglide/messages';
import { Icons } from './components/icons';

export const hero_features = [
	{
		Icon: Icons.Freetier,
		getMessage: () => m.feature_free_tier({})
	},
	{
		Icon: Icons.Events,
		getMessage: () => m.feature_events({})
	},
	{
		Icon: Icons.Community,
		getMessage: () => m.feature_community({})
	}
];
