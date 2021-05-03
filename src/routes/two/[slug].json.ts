import { readFile } from '../../utils/readFile'

export async function get({ params }) {
	const { slug } = params;
	const body = await readFile(`./content/${slug}.json`);

	if (body) return { body };
}
