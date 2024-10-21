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
		titleKey: 'feature_recipe_title',
		descriptionKey: 'feature_recipe_description'
	},
	{
		Icon: Icons.Events,
		titleKey: 'feature_events_title',
		descriptionKey: 'feature_events_description'
	},
	{
		Icon: Icons.ResourceLib,
		titleKey: 'feature_resources_title',
		descriptionKey: 'feature_resources_description'
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

export const roadmapSteps = [
	{
		date: 'Q4 2024',
		titleKey: 'roadmap_q4_2024_title',
		descriptionKey: 'roadmap_q4_2024_description',
		status: 'in-progress',
		features: [
			'feature_swiper',
			'feature_messages',
			'feature_locations',
			'feature_recipes',
			'feature_posts'
		]
	},
	{
		date: 'Q1 2025',
		titleKey: 'roadmap_q1_2025_title',
		descriptionKey: 'roadmap_q1_2025_description',
		status: 'planned',
		features: ['feature_ios', 'feature_android']
	},
	{
		date: 'Q2 2025',
		titleKey: 'roadmap_q2_2025_title',
		descriptionKey: 'roadmap_q2_2025_description',
		status: 'planeed',
		features: ['feature_video', 'feature_blog', 'feature_library']
	},
	{
		date: 'Q4 2025',
		titleKey: 'roadmap_q4_2025_title',
		descriptionKey: 'roadmap_q4_2025_description',
		status: 'planned',
		features: ['feature_calls', 'feature_groups', 'feature_planning']
	}
];
