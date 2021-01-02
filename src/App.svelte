<script>
	export let name;
</script>

<style global lang="scss">
  $primary: purple;
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>

<main class="row justify-content-center mt-2">
   <section class="col-12 col-md-8 col-lg-6 border rounded bg-light p-3">
	     <h1 class="text-primary">Hello {name}!</h1>
	     <p>Initial Commit and Configs</p>
	</section>
</main>
