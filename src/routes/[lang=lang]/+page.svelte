<script>
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Card from '$lib/components/Shared/Card.svelte';
	const delayFactor = 30;
</script>

<div class="mx-auto max-w-7xl transition-all duration-300 ease-in-out md:grid md:grid-cols-2">
	<Card title="Test 1">
		<div>Test</div>
		<div>Test</div>
		<div>Test</div>
		<div>Test</div>
		<div>Test</div>
		<div>Test</div>
		<div>Test</div>
		<div>Test</div>
	</Card>
	<Card title="Test 2" delay={delayFactor}>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
	</Card>
	<Card title="Test 3" delay={2 * delayFactor}>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
	</Card>
	<Card title="Test 4" delay={3 * delayFactor}>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
	</Card>
</div>

<Footer />
