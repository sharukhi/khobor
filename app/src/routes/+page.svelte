<script lang="ts">
  //@ts-nocheck
  import * as Avatar from "$lib/components/ui/avatar"
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu"
  import { Skeleton } from "$lib/components/ui/skeleton"
  import arrow from "$lib/static/icons/right.png"
  import * as Sheet from "$lib/components/ui/sheet"
  import { page } from "$app/stores"
  import unauthorized from "$lib/static/icons/unauthorized.svg"

  // https://www.gravatar.com/avatar/3ef0678c1307a33515fd55d26d97a790?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/sharukhi@sharukhi.xyz

  let news
  let error

  const getNews = async () => {
    const res = await fetch("https://api.khobor.sharukhi.xyz/news")
    const data = await res.json()
    return data
  }
  getNews()
</script>

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
                  />
                </svg></Sheet.Trigger
              >
              <Sheet.Content side="left">
                <Sheet.Header>
                  <div
                    class="grid grid-cols-1 gap-2 text-left text-base text-gray-100"
                  >
                    <div>Account</div>
                    <div>Settings</div>
                    <div>About</div>
                    <div>Sign out</div>
                  </div>
                </Sheet.Header>
              </Sheet.Content>
            </Sheet.Root>
          </div>
          <nav class="space-x-2 md:flex text-sm font-medium items-center">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar.Root class="h-8 w-8">
                  <Avatar.Image
                    referrerpolicy="no-referrer"
                    src="https://www.gravatar.com/avatar/3ef0678c1307a33515fd55d26d97a790?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/sharukhi@sharukhi.xyz"
                  />
                  <Avatar.Fallback>
                    <Skeleton class="h-8 w-8 rounded-full" />
                  </Avatar.Fallback>
                </Avatar.Root>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Account</DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>About</DropdownMenu.Item>
                  <DropdownMenu.Item>Sign out</DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
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
        <div
          class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10"
        >
          <div class="w-full max-w-screen-xl px-4 py-6 mx-auto">
            <div class="border border-gray-200 rounded-lg bg-white">
              <img
                src={data.results[0].image_url}
                width="320"
                height="180"
                alt="News article"
                class="object-cover w-full h-full rounded-t-lg"
                style="aspect-ratio: 320 / 180; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[0].link} target="_blank">
                    {data.results[0].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[0].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[0].link}
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
                src={data.results[1].image_url}
                width="320"
                height="180"
                alt="News article"
                class="object-cover w-full h-full rounded-t-lg"
                style="aspect-ratio: 320 / 180; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[1].link} target="_blank">
                    {data.results[1].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[1].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[1].link}
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
                src={data.results[2].image_url}
                width="320"
                height="180"
                alt="News article"
                class="object-cover w-full h-full rounded-t-lg"
                style="aspect-ratio: 320 / 180; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[2].link} target="_blank">
                    {data.results[2].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[2].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[2].link}
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
                href={data.results[3].link}
                target="_blank"
              >
                <img
                  src={data.results[3].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[3].link} target="_blank">
                    {data.results[3].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[3].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[3].link}
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
                href={data.results[4].link}
                target="_blank"
              >
                <img
                  src={data.results[4].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[4].link} target="_blank">
                    {data.results[4].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[4].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[4].link}
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
                href={data.results[5].link}
                target="_blank"
              >
                <img
                  src={data.results[5].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[5].link} target="_blank">
                    {data.results[5].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[5].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[5].link}
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
                href={data.results[6].link}
                target="_blank"
              >
                <img
                  src={data.results[6].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[6].link} target="_blank">
                    {data.results[6].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[6].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[6].link}
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
                href={data.results[7].link}
                target="_blank"
              >
                <img
                  src={data.results[7].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[7].link} target="_blank">
                    {data.results[7].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[7].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[7].link}
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
                href={data.results[8].link}
                target="_blank"
              >
                <img
                  src={data.results[8].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[8].link} target="_blank">
                    {data.results[8].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[8].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[8].link}
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
                href={data.results[9].link}
                target="_blank"
              >
                <img
                  src={data.results[9].image_url}
                  width="320"
                  height="180"
                  alt="News article"
                  class="object-cover w-full h-full rounded-t-lg"
                  style="aspect-ratio: 320 / 180; object-fit: cover;"
                />
              </a>
              <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                  <a href={data.results[9].link} target="_blank">
                    {data.results[9].title}
                  </a>
                </h3>
                <p class="text-sm text-gray-500 line-clamp-3">
                  {data.results[9].description}
                </p>
                <div>
                  <a
                    class="text-gray-800"
                    href={data.results[9].link}
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
