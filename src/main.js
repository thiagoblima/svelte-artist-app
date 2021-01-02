import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		apiEnv: 'https://jsonplaceholder.typicode.com/',
		resources: ['users', 'posts', 'comments']
	}
});

export default app;