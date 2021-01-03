<script>
     import { onMount } from "svelte";
	 import UserSearch from "./users/UserSearch.svelte";
	 import UserList from "./users/UserList.svelte";

	 export let apiEnv;
	 export let resources;
	 let users = [];
	 let searchTerm = "";
	 let displayUsersList = [];

	 const isDev = __myapp.env.isDev
	 const apiUrl = __myapp.env.API_URL
	 const apiKey = __myapp.env.API_CLIENT_ID

	 function genericResources(resource) {
		 return resources.filter(el => el === resource);
	 }

	 function filterList(list, query) {
         return list.filter(item => {
             return (
                 item.user.name.toLowerCase().match(query.toLowerCase())
             );
         });
     }

	 onMount(async () => {
         const res = await fetch(`${apiUrl + apiKey}`);
		 users = await res.json();
         displayUsersList = users;
     });
</script>

<style global lang="scss">
  $primary: purple;
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>

<main class="container">
     <UserSearch
         bind:searchTerm
         on:updateSearch={() => {
             displayUsersList = filterList(users, searchTerm);
		 }}
	 />
	 <UserList bind:users={displayUsersList} />
</main>
