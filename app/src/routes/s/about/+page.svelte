<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import "iconify-icon"
  import { PUBLIC_VERSION } from "$env/static/public"
</script>

<html lang="en">
  <body class="bg-[#FEFBF6]">
    <div class=" flex items-center justify-center">
      <div
        class="grid grid-cols-1 place-content-center place-items-center mx-4"
      >
        <div class="bg-white mt-14 rounded-3xl shadow-md mb-5">
          <img src="/khobor_text.png" alt="Icon" class="h-[120px]" />
        </div>
        <div><h3 class="black font-bold text-2xl">Khobor</h3></div>

        <div>
          <p class="text-slate-500 mb-3 text-sm">
            version: {PUBLIC_VERSION}
          </p>
        </div>
        <div class=" text-black">
          <div class="pt-4 pb-8 px-6">
            <h1 class="text-lg text-left font-bold mb-6">Author</h1>
            <div class="space-y-4">
              <div class="flex justify-items-start space-x-3">
                <span
                  class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                >
                  <img
                    class="aspect-square h-full w-full"
                    alt="Sharukhi"
                    src="https://github.com/sharukhi.png"
                  />
                </span>
                <div>
                  <div class="font-semibold">Ataullah Sharukhi</div>
                  <div class="text-sm text-gray-400 hover:underline">
                    <a href="https://github.com/sharukhi/" target="_blank"
                      >@sharukhi</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class=" px-6">
            <h2 class="text-lg font-bold mb-4">Support development</h2>
            <div class="flex flex-col space-y-3">
              <Button
                variant="outline"
                href="https://github.com/sharukhi/khobor/issues"
                target="_blank"
                ><iconify-icon
                  icon="material-symbols:star-outline"
                  class="mr-2"
                  style="color: black"
                ></iconify-icon> Give a star</Button
              >
              <Button
                variant="outline"
                href="https://github.com/sharukhi/khobor/"
                target="_blank"
                ><iconify-icon
                  icon="mdi:github"
                  class="mr-2"
                  style="color: black"
                ></iconify-icon> Source code</Button
              >
              <Button
                variant="outline"
                href="https://github.com/sharukhi/khobor/issues"
                target="_blank"
                ><iconify-icon
                  icon="mdi:git-issue"
                  class="mr-2"
                  style="color: black"
                ></iconify-icon> Report an issue</Button
              >
            </div>
          </div>
        </div>
        <div>
          <Button variant="outline" href="/" class="mt-10"
            ><iconify-icon icon="ic:round-arrow-back" class="mr-2"
            ></iconify-icon>
            Go back
          </Button>
        </div>
      </div>
    </div>
  </body>
</html>
