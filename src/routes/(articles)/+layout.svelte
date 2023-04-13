<script>
  import { visitedLocations } from "$lib/store.js"
  import { goto } from "$app/navigation"

  let searchInput = ""

  function onKeyPress(e) {
    if (e.key === "Enter") {
      if ($visitedLocations.includes("/" + searchInput.trim())) {
        goto("/" + searchInput)
      }
      switch (searchInput.trim()) {
        case "448":
          goto("/FBI")
          break
        default:
          break
      }
    }
  }
</script>

<nav class="px-3 py-2">
  <a href="/" class="text-blue-500 hover:text-blue-800">Cursedpedia</a>
</nav>
<div class="mx-auto mt-3 mb-3 xl:w-96">
  <input
    bind:value={searchInput}
    on:keypress={onKeyPress}
    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
    id="exampleSearch"
    placeholder="Search Cursedpedia"
  />
</div>
<main class="container max-w-5xl pt-10 mx-auto mb-10">
  <slot />
</main>
