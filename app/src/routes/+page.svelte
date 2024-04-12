<script lang="ts">
  //@ts-nocheck
  import * as Avatar from "$lib/components/ui/avatar"
  import "iconify-icon"
  import { Skeleton } from "$lib/components/ui/skeleton"
  import arrow from "$lib/static/icons/right.png"
  import * as Sheet from "$lib/components/ui/sheet"
  import MD5 from "crypto-js/md5"
  import Button from "$lib/components/ui/button/button.svelte"
  import * as Alert from "$lib/components/ui/alert"

  export let data

  let avatar
  let email_md5 = MD5(data.userProfile.email).toString()

  const device = true

  const getNews = async () => {
    const res = await fetch("https://api.khobor.sharukhi.xyz/news")
    const data = await res.json()
    return data
  }

  const getGravatar = async () => {
    const response = await fetch(
      `https://www.gravatar.com/avatar/${email_md5}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${data.userProfile.email}`,
    )
    avatar = response.url
  }

  getGravatar()
  getNews()
</script>

{#if device == true}
  <!-- svelte-ignore a11y-missing-attribute -->
  <html>
    <body class="bg-white">
      <nav class="fixed inset-x-0 top-0 z-50 bg-white">
        <div class="px-4 md:px-6">
          <div class="flex h-14 items-center">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div class="mr-auto">
              <Sheet.Root>
                <Sheet.Trigger>
                  <iconify-icon icon="pepicons-pop:menu"
                  ></iconify-icon></Sheet.Trigger
                >
                <Sheet.Content side="left">
                  <Sheet.Header>
                    <div
                      class="grid grid-cols-1 gap-1 my-1 mx-1 text-left text-base black"
                    >
                      <div>
                        <Button href="/s/account/" variant="ghost">
                          <iconify-icon icon="bx:user" class="mr-1"
                          ></iconify-icon> Account
                        </Button>
                      </div>
                      <div>
                        <Button href="/s/settings/" variant="ghost">
                          <iconify-icon icon="uil:setting" class="mr-1"
                          ></iconify-icon> Settings
                        </Button>
                      </div>
                      <div>
                        <Button href="/s/about/" variant="ghost">
                          <iconify-icon
                            icon="material-symbols:info-outline"
                            class="mr-1"
                          ></iconify-icon> About
                        </Button>
                      </div>
                      <div>
                        <Button variant="ghost" href="/api/auth/logout/">
                          <iconify-icon icon="uil:signout" class="mr-1"
                          ></iconify-icon>
                          Sign out</Button
                        >
                      </div>
                    </div></Sheet.Header
                  >
                </Sheet.Content>
              </Sheet.Root>
            </div>
            <nav class="space-x-2 md:flex text-sm font-medium items-center">
              <Avatar.Root class="h-8 w-8">
                <Avatar.Image referrerpolicy="no-referrer" src={avatar} />
                <Avatar.Fallback>
                  <Skeleton class="h-8 w-8 rounded-full" />
                </Avatar.Fallback>
              </Avatar.Root>
            </nav>
          </div>
        </div>
      </nav>

      <main>
        {#await getNews()}
          <div
            class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-screen-xl px-4 py-6 mx-auto"
          >
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
            <Skeleton class="h-[200px] w-[400px] rounded-lg" />
          </div>
        {:then data}
          <!-- 1st -->
          <!-- WARNING -->
          <div
            class="mt-12 mb-2 text-center grid grid-cols-1 place-items-center text-[#E72929]"
          >
            <h1 class="text-sm mt-5">
              <br /><b>Remember</b><br /> that Khobor is still in its early
              stages, so there may be a lot of problems. Feel free to report
              them
              <a
                href="mailto:sharukhi@sharukhi.xyz"
                target="_blank"
                class="underline">here.</a
              >
            </h1>
          </div>
          <!-- WARNING END-->
          <div
            class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10"
          >
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <img
                  src={data.news[0].image}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[0].url} target="_blank">
                      {data.news[0].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[0].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[0].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 1st END-->
            <!-- 2nd -->
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <img
                  src={data.news[1].image}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[1].url} target="_blank">
                      {data.news[1].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[1].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[1].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 2nd END-->
            <!-- 3rd -->
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <img
                  src={data.news[2].image}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[2].url} target="_blank">
                      {data.news[2].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[2].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[2].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 3rd END-->
            <!-- 4th -->
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[3].url}
                  target="_blank"
                >
                  <img
                    src={data.news[3].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[3].url} target="_blank">
                      {data.news[3].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[3].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[3].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 4th END-->
            <!-- 5th -->
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[4].url}
                  target="_blank"
                >
                  <img
                    src={data.news[4].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[4].url} target="_blank">
                      {data.news[4].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[4].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[4].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 5th END-->
            <!-- 6th -->
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[5].url}
                  target="_blank"
                >
                  <img
                    src={data.news[5].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[5].url} target="_blank">
                      {data.news[5].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[5].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[5].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 6th END-->
            <!-- 7th -->
            <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[6].url}
                  target="_blank"
                >
                  <img
                    src={data.news[6].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[6].url} target="_blank">
                      {data.news[6].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[6].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[6].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 7th END-->
            <!-- 8th -->
            <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[7].url}
                  target="_blank"
                >
                  <img
                    src={data.news[7].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[7].url} target="_blank">
                      {data.news[7].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[7].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[7].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 8th END-->
            <!-- 9th -->
            <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[8].url}
                  target="_blank"
                >
                  <img
                    src={data.news[8].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[8].url} target="_blank">
                      {data.news[8].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[8].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[8].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 9th END-->
            <!-- 10th -->
            <div class="items-start w-full max-w-screen-xl px-4 py-6 mx-auto">
              <div class="border border-gray-200 rounded-lg bg-white">
                <a
                  class="block w-full h-48 aspect-poster overflow-hidden rounded-t-lg"
                  href={data.news[9].url}
                  target="_blank"
                >
                  <img
                    src={data.news[9].image}
                    width="320"
                    height="180"
                    alt="News article"
                    class="object-cover w-full h-full rounded-t-lg"
                    style="aspect-ratio: 320 / 180; object-fit: cover;"
                  />
                </a>
                <div class="p-4">
                  <h3 class="text-lg font-semibold line-clamp-2">
                    <a href={data.news[9].url} target="_blank">
                      {data.news[9].title}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500 line-clamp-3">
                    {data.news[9].text}
                  </p>
                  <div>
                    <a
                      class="text-gray-800"
                      href={data.news[9].url}
                      target="_blank"
                      >Read more
                      <img class="h-4 w-4" src={arrow} /></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 10th END-->
          </div>
        {/await}
      </main>
    </body>
  </html>
{/if}
