<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import "iconify-icon"
  import { PUBLIC_VERSION } from "$env/static/public"
  import * as Avatar from "$lib/components/ui/avatar"
  import "iconify-icon"
  import { Skeleton } from "$lib/components/ui/skeleton"
  import * as Sheet from "$lib/components/ui/sheet"
</script>

<html lang="en">
  <body class="bg-[#0e1116]">
    <nav class="fixed inset-x-0 top-0 z-50 bg-[#0e1116]">
      <div class="px-4 md:px-6">
        <div class="flex h-14 items-center">
          <div class="mr-auto">
            <a href="/"
              ><iconify-icon
                icon="ic:round-arrow-back"
                class="mr-2 text-[#feffff]"
              ></iconify-icon></a
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="flex items-center justify-center">
      <div class=" flex items-center justify-center">
        <div
          class="grid grid-cols-1 place-content-center place-items-center mx-4"
        >
          <div
            class="bg-white mt-14 rounded-3xl shadow-md mb-5"
            style="  
              border-style: solid;
              border-width: 2px ;
              border-color: #2f343a;
              padding: 1em 0.75em;
              box-shadow: 6px 6px 0px #2f343a;"
          >
            <img src="/khobor.svg" alt="Icon" class="h-[100px]" style="" />
          </div>
          <div>
            <h3 class="black font-bold text-2xl text-[#feffff]">Khobor</h3>
          </div>

          <div>
            <p class="text-[#bdc4d7] mb-4 text-sm">
              version: {PUBLIC_VERSION}
            </p>
          </div>
          <div>
            <div class=" px-6 mt-6">
              <div class="flex flex-col space-y-3">
                <Button
                  class="bg-[#1b2026] border-[#2f343a] border-2"
                  href="https://github.com/sharukhi/khobor"
                  target="_blank"
                  ><iconify-icon
                    icon="material-symbols:star-outline"
                    class="mr-2"
                  ></iconify-icon> Give a star</Button
                >
                <Button
                  class="bg-[#1b2026] border-[#2f343a] border-2"
                  href="https://github.com/sharukhi/khobor/"
                  target="_blank"
                  ><iconify-icon icon="mdi:github" class="mr-2"></iconify-icon> Source
                  code</Button
                >
                <Button
                  class="bg-[#1b2026] border-[#2f343a] border-2"
                  href="https://github.com/sharukhi/khobor/issues"
                  target="_blank"
                  ><iconify-icon icon="mdi:git-issue" class="mr-2"
                  ></iconify-icon> Report an issue</Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
