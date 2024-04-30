<script lang="ts">
  // @ts-nocheck
  import "iconify-icon";
  import { Router, Route, Link } from "svelte-routing";
  import About from "./routes/About.svelte";
  import Main from "./Main.svelte";
  export let url = "";
</script>

<Router {url}>
  <Route path="/about" component={About} />
  <Route path="/" component={Main} />
</Router>
