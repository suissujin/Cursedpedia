<script>
  import { goto } from "$app/navigation"
  import {
    cultScore,
    demonScore,
    boredomScore,
    visitedLocations,
    hasAntivirus,
  } from "$lib/store.js"

  export let style = ""

  function reset() {
    $cultScore = 0
    $demonScore = 0
    $boredomScore = 0
    $visitedLocations = []
    $hasAntivirus = false
    goto("/")
  }
</script>

<button on:click={reset} class={style}>Reset game</button>
