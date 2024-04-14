<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex flex-col min-h-[100dvh]">
  <header class="px-4 lg:px-6 h-14 flex items-center">
    <a class="flex items-center justify-center" href="/">
      <img src="/khobor.svg" class="h-7 w-7" alt="logo" />
      <span class="sr-only">Khobor</span>
    </a>
  </header>
  <main class="flex-1">
    <section
      class="w-full py-12 md:py-24 lg:py-32 xl:py-48 sm:my-[-120px] md:my-[-120px]"
    >
      <div
        class="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 md:flex-row md:space-y-0 lg:space-y-6"
      >
        <div class="my-3 space-y-2 text-center md:text-left">
          <h1
            class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            Khobor
          </h1>
          <p
            class=" mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            Cut through the clutter and stay informed with the latest news. Dive
            deeper into the topics that matters most to you.
          </p>

          <Button
            data-tally-open="w48b4d"
            data-tally-layout="modal"
            data-tally-hide-title="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave">Join Waitlist</Button
          >
          <!--
          <Button variant="secondary"
            ><a
              href="https://khobor.sharukhi.xyz/api/auth/login/"
              rel="prefetch">Sign in</a
            ></Button
          >
          <Button
            ><a
              href="https://khobor.sharukhi.xyz/api/auth/register/"
              rel="prefetch">Sign up</a
            ></Button
          >
          -->
        </div>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/home.png" alt="Image" class="h-[650px]" />
      </div>
    </section>
  </main>
  <footer
    class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
  >
    <p class="text-xs text-gray-500 dark:text-gray-400">
      © <a href="https://sharukhi.xyz" class="hover:underline">Sharukhi</a>
      All rights reserved.
    </p>
  </footer>
</div>
