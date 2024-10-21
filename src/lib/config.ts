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

export const community_lower_features = [
	{
		Icon: Icons.Recipe,
		desc: m.feature_recipe_description(),
		title: m.feature_recipe_title()
	},
	{
		Icon: Icons.Events,
		title: m.feature_events_title(),
		desc: m.feature_events_description()
	},
	{
		Icon: Icons.ResourceLib,
		desc: m.feature_resources_description(),
		title: m.feature_resources_title()
	}
];
