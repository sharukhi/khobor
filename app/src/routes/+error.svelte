<script>
  import { page } from "$app/stores"
  import Button from "$lib/components/ui/button/button.svelte"
</script>

<main
  class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
>
  <div class="text-center">
    <p class="text-base font-semibold black">ERROR</p>
    <h1
      class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
    >
      {$page.error?.message}
    </h1>
    <p class="mt-6 text-base leading-7 text-gray-600">
      Sorry, if you are seeing this page, it means that something went wrong.
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Button>
        <a
          href="/"
          class="rounded-md black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >Go back</a
        >
      </Button>
      <Button variant="secondary">
        <a
          href="mailto:sharukhi@sharukhi.xyz"
          target="_blank"
          class="text-sm font-semibold"
          >Contact support <span aria-hidden="true">&rarr;</span></a
        >
      </Button>
    </div>
  </div>
</main>
