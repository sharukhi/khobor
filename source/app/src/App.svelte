<script lang="ts">
  // @ts-nocheck
  import "iconify-icon";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import { Skeleton } from "$lib/components/ui/skeleton";
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
            <div
              class="grid grid-cols-1 gap-1 my-1 mx-1 text-left text-base black"
            >
              <div>
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <iconify-icon
                      icon="material-symbols:settings-outline"
                      style="color: #bcc1d5"
                    ></iconify-icon></AlertDialog.Trigger
                  >
                  <AlertDialog.Content
                    class="bg-[#0e1116] border-2 border-[#2f343a]"
                  >
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
                            <img
                              src="/khobor.svg"
                              alt="Icon"
                              class="h-[100px]"
                              style=""
                            />
                          </div>
                          <div>
                            <h3 class="black font-bold text-2xl text-[#feffff]">
                              Khobor
                            </h3>
                          </div>

                          <div>
                            <p class="text-[#bdc4d7] mb-4 text-sm">
                              version: 1.0.0
                            </p>
                          </div>
                          <div>
                            <div class=" px-6 mt-6">
                              <div class="flex flex-col space-y-3">
                                <Button
                                  class="bg-[#1b2026] border-[#2f343a] border-2 hover:bg-[#1b2026]"
                                  href="https://github.com/sharukhi/khobor"
                                  target="_blank"
                                  ><iconify-icon
                                    icon="material-symbols:star-outline"
                                    class="mr-2"
                                  ></iconify-icon> Give a star</Button
                                >
                                <Button
                                  class="bg-[#1b2026] border-[#2f343a] border-2 hover:bg-[#1b2026]"
                                  href="https://github.com/sharukhi/khobor/"
                                  target="_blank"
                                  ><iconify-icon icon="mdi:github" class="mr-2"
                                  ></iconify-icon> Source code</Button
                                >
                                <Button
                                  class="bg-[#1b2026] border-[#2f343a] border-2 hover:bg-[#1b2026]"
                                  href="https://github.com/sharukhi/khobor/issues"
                                  target="_blank"
                                  ><iconify-icon
                                    icon="mdi:git-issue"
                                    class="mr-2"
                                  ></iconify-icon> Report an issue</Button
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <AlertDialog.Footer class="items-align-right">
                      <AlertDialog.Cancel
                        class="bg-[#0e1116] border-0 hover:bg-[#0e1116]"
                      >
                        <Button
                          class="bg-[#1b2026] border-[#2f343a] border-2 hover:bg-[#1b2026] hover:text-[#feffff]"
                          >Close</Button
                        >
                      </AlertDialog.Cancel>
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main>
      {#await getNews()}
        <div
          class="grid grid-cols-1 gap-2 mt-10 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2"
        >
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>
          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <Skeleton
              class="w-full h-[180px] opacity-10 bg-[#1b2026] rounded-md"
            />
          </div>
        </div>
      {:then data}
        <div
          class="grid grid-cols-1 gap-2 mt-10 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2"
        >
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

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[9].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[9].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[9].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[10].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[10].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[10].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[11].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[11].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[11].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[12].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[12].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[12].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[13].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[13].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[13].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[14].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[14].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[14].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[15].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[15].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[15].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[16].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[16].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[16].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[17].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[17].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[17].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[18].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[18].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[18].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[19].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[19].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[19].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[20].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[20].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[20].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[21].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[21].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[21].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[22].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[22].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[22].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[23].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[23].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[23].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[24].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[24].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[24].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[25].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[25].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[25].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[26].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[26].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[26].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[27].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[27].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[27].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[28].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[28].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[28].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border-solid border-[#1f2227] border-2 rounded-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2 text-[#feffff]">
                  {data[29].title}
                </h3>
                <p class="text-sm text-[#bdc4d7] line-clamp-3">
                  {data[29].description}
                </p>
                <div>
                  <a class="text-[#feffff]" href={data[29].url} target="_blank"
                    >Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/await}
    </main>
  </body>
</html>
