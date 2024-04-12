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
  <body class="">
    <nav class="fixed inset-x-0 top-0 z-50 bg-white">
      <div class="px-4 md:px-6">
        <div class="flex h-14 items-center">
          <div class="mr-auto">
            <a href="/"
              ><iconify-icon icon="ic:round-arrow-back" class="mr-2"
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
          <div class="bg-white mt-14 rounded-3xl shadow-md mb-5">
            <img src="/khobor_text.png" alt="Icon" class="h-[120px]" />
          </div>
          <div><h3 class="black font-bold text-2xl">Khobor</h3></div>

          <div>
            <p class="text-slate-500 mb-4 text-sm">
              version: {PUBLIC_VERSION}
            </p>
          </div>
          <div>
            <div class=" px-6 mt-6">
              <div class="flex flex-col space-y-3">
                <Button
                  variant="outline"
                  href="https://github.com/sharukhi/khobor"
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
        </div>
      </div>
    </div>
  </body>
</html>
