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

export const contributionAreas = [
	{
		Icon: Icons.Code,
		titleKey: 'contribution_code_title',
		descriptionKey: 'contribution_code_description'
	},
	{
		Icon: Icons.Design,
		titleKey: 'contribution_design_title',
		descriptionKey: 'contribution_design_description'
	},
	{
		Icon: Icons.Translation,
		titleKey: 'contribution_translation_title',
		descriptionKey: 'contribution_translation_description'
	},
	{
		Icon: Icons.Docs,
		titleKey: 'contribution_docs_title',
		descriptionKey: 'contribution_docs_description'
	}
];

export const repositories = [
	{
		name: 'vemeet-web',
		description: 'Web APP',
		language: 'TypeScript Svelte',
		color: 'bg-orange-600'
	},
	{
		name: 'vemeet-api',
		description: 'Backend API',
		language: 'Kotlin Springboot',
		color: 'bg-purple-600'
	},
	{
		name: 'vemeet-mobile',
		description: 'TBA',
		language: 'TBA',
		color: 'bg-red-500'
	},
	{
		name: 'vemeet-landing',
		description: 'Web Landing Page',
		language: 'Typescript Svelte',
		color: 'bg-orange-600'
	}
];
