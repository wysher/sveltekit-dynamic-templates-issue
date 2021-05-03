<script>
	const EXAMPLES = [
        { href: '/one', label: 'One', description: 'uses onMount' },
        { href: '/two', label: 'Two', description: 'uses beforeUpdate' },
        { href: '/three', label: 'Three', description: 'uses page store subscription' },
    ];
	const PAGES = [
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<nav>
	<ul class="examples">
		{#each EXAMPLES as example}
			<li>
                {example.label}
				<ul>
					{#each PAGES as page}
						<li>
							<a href={`${example.href}${page.href}`}>{page.label}</a>
						</li>
					{/each}
				</ul>
                <p>
                    {example.description}
                </p>
			</li>
		{/each}
	</ul>
</nav>

<slot />

<style>
    .examples {
        display: flex;
        justify-content: space-between;
    }
</style>
