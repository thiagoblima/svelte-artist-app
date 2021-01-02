<script>
     import { onMount } from "svelte";
	 import UserSearch from "./users/UserSearch.svelte";

	 export let apiEnv;
	 export let resources;
	 let users = [];
	 let searchTerm = "";
	 let displayUsersList = [];

	 function genericResources(resource) {
		 return resources.filter(el => el === resource);
	 }

	 function filterList(list, query) {
         return list.filter(item => {
             return (
                 item.name.toLowerCase().match(query.toLowerCase()) ||
                 item.email.toLowerCase().match(query.toLowerCase())
             );
         });
     }

	 onMount(async () => {
         const res = await fetch(`${apiEnv + genericResources('users')}`);
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
</main>
