import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

type Metadata = {
	title: string;
};

export const load: PageServerLoad = async ({ params }) => {
	// const postsDirectory = join(process.cwd(), 'build', 'src', 'blogs');
	const postsDirectory = join(process.cwd(), 'src', 'legal');

	const filePath = join(postsDirectory, `${params.title}.md`);

	const fileContent = await readFile(filePath, 'utf-8');
	const [, frontmatter, content] = fileContent.split('---');

	try {
		const metadata = yamlLoad(frontmatter.trim()) as Metadata;
		const { title } = metadata;
		const htmlContent = marked(content.trim());

		return {
			title,
			content: htmlContent
		};
	} catch (error) {
		console.error('Error parsing frontmatter:', error);
		console.log('Frontmatter content:', frontmatter);
		throw error;
	}
};
