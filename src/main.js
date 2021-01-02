import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		resources: ['users', 'posts', 'comments']
	}
});

export default app;