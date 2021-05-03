<script context="module">
  export async function load({ page, fetch }) {
    const { params: { slug } } = page;

    try {
      const res = await fetch(`./${slug}.json`);
      const data = await res.json();

      return { props: { data, slug } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
	import { onMount } from 'svelte';
    export let data, slug, component;

	onMount(async () => {
		component = (await import(`../_templates/${slug}.svelte`)).default;
	});
</script>

<svelte:component this={component} data={data} />
