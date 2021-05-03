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
    import { page } from '$app/stores';
    import { onDestroy } from 'svelte';
    export let data, component;

    const unsubscribe = page.subscribe(async ({ params }) => {
		component = (await import(`../_templates/${params.slug}.svelte`)).default;
    })

    onDestroy(() => unsubscribe())
</script>

<svelte:component this={component} data={data} />
