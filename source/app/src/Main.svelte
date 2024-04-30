<script lang="ts">
  // @ts-nocheck
  import "iconify-icon";
  import { Router, Route, Link } from "svelte-routing";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import * as Sheet from "$lib/components/ui/sheet";
  import Button from "$lib/components/ui/button/button.svelte";

  const getNews = async () => {
    const res = await fetch("https://khobor-api.sharukhi.xyz/news");
    const data = await res.json();
    return data;
  };
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<html>
  <body class="bg-[#0e1116]">
    <nav class="fixed inset-x-0 top-0 z-50 bg-[#0e1116]">
      <div class="px-4 md:px-6">
        <div class="flex h-14 items-center">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <div class="mr-auto">
            <Sheet.Root>
              <Sheet.Trigger>
                <iconify-icon icon="pepicons-pop:menu" style="color: #bcc1d5"
                ></iconify-icon></Sheet.Trigger
              >
              <Sheet.Content
                side="left"
                class="bg-[#0e1116] border-0 text-[#feffff]"
              >
                <Sheet.Header>
                  <div
                    class="grid grid-cols-1 gap-1 my-1 mx-1 text-left text-base black"
                  >
                    <div>
                      <Button
                        href="/about/"
                        variant="ghost"
                        class="text-[#feffff] hover:bg-[#1b2026] hover:text-[#feffff]"
                      >
                        <iconify-icon
                          icon="material-symbols:info-outline"
                          class="mr-1"
                        ></iconify-icon> About
                      </Button>
                    </div>
                  </div>
                </Sheet.Header>
              </Sheet.Content>
            </Sheet.Root>
          </div>
        </div>
      </div>
    </nav>

    <main>
      {#await getNews()}
        <div class="grid grid-cols-1 gap-2 mt-10">
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="h-[200px] w-[385px] rounded-md opacity-5 bg-[#2f3237]"
            />
          </div>
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="h-[200px] w-[385px] rounded-md opacity-5 bg-[#2f3237]"
            />
          </div>
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="h-[200px] w-[385px] rounded-md opacity-5 bg-[#2f3237]"
            />
          </div>
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="h-[200px] w-[385px] rounded-md opacity-5 bg-[#2f3237]"
            />
          </div>
        </div>
      {:then data}
        <!-- 1st -->
        <div class="grid grid-cols-1 gap-2 mt-10">
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[0].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[0].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[2].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 1st END-->
          <!-- 2nd -->
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[1].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[1].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[0].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 2nd END-->
          <!-- 3rd -->
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[2].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[2].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[2].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 3rd END-->
          <!-- 4th -->
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[3].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[3].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[3].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 4th END-->
          <!-- 5th -->
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[4].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[4].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[4].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 5th END-->
          <!-- 6th -->
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[5].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[5].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[5].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 6th END-->
          <!-- 7th -->
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[6].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[6].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[6].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 7th END-->
          <!-- 8th -->
          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[7].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[7].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[7].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 8th END-->
          <!-- 9th -->
          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[8].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[8].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[8].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 9th END-->
        </div>
      {/await}
    </main>
  </body>
</html>
