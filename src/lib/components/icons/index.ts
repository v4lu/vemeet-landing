import type { HTMLAttributes } from 'svelte/elements';
import Freetier from './freetier.svelte';
import Events from './events.svelte';
import Community from './community.svelte';
import Leaf from './leaf.svelte';
import RightArrow from './right-arrow.svelte';
import Time from './time.svelte';
import Community2 from './community2.svelte';
import ResourceLib from './resource-lib.svelte';
import Recipe from './recipe.svelte';
import Code from './code.svelte';
import Design from './design.svelte';
import Translation from './translation.svelte';
import Docs from './docs.svelte';

export type IconType = HTMLAttributes<SVGSVGElement>;

export const Icons = {
	Freetier,
	Events,
	Community,
	Leaf,
	RightArrow,
	Time,
	Community2,
	ResourceLib,
	Recipe,
	Code,
	Design,
	Translation,
	Docs
};
