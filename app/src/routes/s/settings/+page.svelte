<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import "iconify-icon"
</script>

<div class="h-screen flex items-center justify-center">
  <div class="grid place-content-center mx-4">
    <h1 class="font-semibold text-lg mb-3 text-[#feffff]">Coming Soon</h1>
    <Button
      class="bg-[#1b2026] border-[#2f343a] hover:bg-[#1b2026] border-2"
      href="/"
      ><iconify-icon icon="ic:round-arrow-back" class="mr-2"></iconify-icon>
      Go back
    </Button>
  </div>
</div>
