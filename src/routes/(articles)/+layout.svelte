<script>
  import { cultScore, demonScore, visitedLocations } from "$lib/store.js"
  import { goto } from "$app/navigation"

  let searchInput = ""
  let searchClass = "flex items-center"

  function onKeyPress(e) {
    if (e.key === "Enter") {
      if ($visitedLocations.includes("/" + searchInput.trim())) {
        goto("/" + searchInput)
      }
      switch (searchInput.trim()) {
        case "448":
          goto("/FBI")
          break
        case "credits":
          goto("/Credits")
          break
        case "bember":
          goto("/Bember")
          break
        default:
          break
      }
    }
  }

  if ($demonScore >= 4) {
    searchClass += " justify-start"
  } else {
    searchClass += " justify-center"
  }
</script>

<nav class="px-3 py-2">
  <a href="/" class="text-blue-500 hover:text-blue-800">Accursedia</a>
</nav>
<div class={searchClass}>
  <input
    bind:value={searchInput}
    on:keypress={onKeyPress}
    class="px-2 py-1 text-gray-700 border border-gray-800 rounded focus:outline-none"
    placeholder="Search Accursedia"
  />
</div>
<main class="container max-w-5xl pt-10 mx-auto mb-10">
  <slot />
</main>
