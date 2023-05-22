<script>
  import {
    cultScore,
    demonScore,
    boredomScore,
    visitedLocations,
  } from "$lib/store.js"
  import { goto } from "$app/navigation"

  export let location = ""
  export let counter = ""

  let linkStyle = "text-blue-600 hover:text-blue-800"
  if ($cultScore >= 4) {
    linkStyle = "text-red-600 hover:text-red-800"
  }

  const visited = $visitedLocations.includes(location)

  function updateScoreAndRedirect() {
    if (!visited) {
      switch (counter) {
        case "cult":
          $cultScore++
          break
        case "demon":
          $demonScore++
          break
        case "boring":
          $boredomScore++
          break
        default:
          break
      }
      $visitedLocations = [...$visitedLocations, location]
    }

    goto(location)
  }
</script>

<button
  on:click={updateScoreAndRedirect}
  class={linkStyle}
  class:text-purple-600={visited}
>
  <slot />
</button>
