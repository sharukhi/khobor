<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import "iconify-icon"
</script>

<div class="h-screen flex items-center justify-center">
  <div class="grid place-content-center mx-4">
    <h1 class="font-semibold text-lg mb-3">Coming Soon</h1>
    <Button variant="outline" href="/"
      ><iconify-icon icon="ic:round-arrow-back" class="mr-2"></iconify-icon>
      Go back
    </Button>
  </div>
</div>
