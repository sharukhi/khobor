<script>
  //@ts-nocheck
  import Button from "$lib/components/ui/button/button.svelte"
  import * as Avatar from "$lib/components/ui/avatar"
  import { Skeleton } from "$lib/components/ui/skeleton"
  import MD5 from "crypto-js/md5"
  import "iconify-icon"
  import * as AlertDialog from "$lib/components/ui/alert-dialog"

  export let data

  let avatar
  let email_md5 = MD5(data.userProfile.email).toString()

  const getGravatar = async () => {
    const response = await fetch(`https://www.gravatar.com/avatar/${email_md5}`)
    avatar = response.url
  }

  getGravatar()
</script>

<html lang="en">
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
  <body class="bg-[#0e1116]">
    <div class="flex items-center justify-center">
      <div class="rounded-lg bg-card shadow-sm w-full max-w-3xl">
        <div class="flex flex-col p-6 space-y-1"></div>
        <div class="p-6 space-y-4 bg-[#0e1116]">
          <div class="flex items-center space-x-4 bg-[#0e1116]">
            <div class="relative rounded-full overflow-hidden">
              <Avatar.Root class="h-12 w-12">
                <Avatar.Image referrerpolicy="no-referrer" src={avatar} />
                <Avatar.Fallback>
                  <Skeleton class="h-8 w-8 rounded-full" />
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center space-x-2">
                <h3 class="text-sm font-medium tracking-tight text-[#feffff]">
                  {data.userProfile.email}
                </h3>

                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <button
                      class="text-[#feffff] bg-[#1b2026]  hover:bg-[#1b2026] hover:text-[#feffff] border-[#2f343a] border-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3"
                    >
                      Edit
                    </button></AlertDialog.Trigger
                  >
                  <AlertDialog.Content
                    class="text-[#feffff] bg-[#0e1116]  border-0 "
                  >
                    <AlertDialog.Header>
                      <AlertDialog.Title>Update gravatar</AlertDialog.Title>
                      <AlertDialog.Description>
                        You have to update your gravatar in order to change your
                        profile image.
                      </AlertDialog.Description>
                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                      <AlertDialog.Cancel class="bg-[#1b2024] border-0"
                        >Cancel</AlertDialog.Cancel
                      >
                      <AlertDialog.Action class="bg-[#1b2024]"
                        ><a href="https://gravatar.com/" target="_blank"
                          >Open gravatar</a
                        ></AlertDialog.Action
                      >
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <p
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#feffff]"
            >
              Email
            </p>
            <p
              class="text-sm font-medium tracking-tight dark:text-gray-400 text-[#bdc4d7]"
            >
              {data.userProfile.email}
            </p>
          </div>
          <div class="space-y-2">
            <p
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#feffff]"
            >
              Password
            </p>
            <p
              class="text-sm font-medium tracking-tight dark:text-gray-400 text-[#bdc4d7]"
            >
              Coming soon
            </p>
          </div>
          <div class="space-y-2">
            <p
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#feffff]"
            >
              Country
            </p>
            <p
              class="text-sm font-medium tracking-tight text-[#bdc4d7] dark:text-gray-400"
            >
              Coming soon
            </p>
          </div>
          <div class="space-y-2">
            <p
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#feffff]"
            >
              Subscription
            </p>
            <p
              class="text-sm font-medium tracking-tight text-[#bdc4d7] dark:text-gray-400"
            >
              Coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
