<script context="module">
	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;	
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 100%;
		margin: 0 0 1em 0;
	}

	li {
		font-size: 2em;
		list-style-type: none;
	}

	.outer {
		background-color: #d8d4cf;
		margin: 0 0 1em 0;
	}

	.inner {
		text-decoration: none;
	}

	.sub{
		font-size: 0.5em;
		text-align: center;
	}

	.banner{
		width: 100%;
	}

	.subimage{
		height: 448px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.subtitle{
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
	<title>Biddy & Colin - Home</title>
</svelte:head>

<h1>Biddy & Colin</h1>

<div class="banner">
	<img alt='Mountain Fall Forest' src='mountain_fall_forest.jpg'>
</div>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li class="outer">
			<a rel="prefetch" href="{post.slug}" class="inner">
				<div href="{post.slug}" class="subtitle">{post.title}</div> <div href="{post.slug}" class="sub"><i>{post.date}</i></div>
				<img class="subimage" href="{post.slug}" alt={post.alt} src={post.src}>
			</a>
		</li>
	{/each}
</ul>