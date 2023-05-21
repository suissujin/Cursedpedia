<script>
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
    window.location.href = "/"
  }
</script>

<button on:click={reset} class={style}>Reset game</button>
