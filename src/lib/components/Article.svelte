<script>
  import { cultScore, demonScore } from "$lib/store.js"
  export let title = ""

  let titleClass = "pb-1 mb-5 font-serif text-3xl border-b border-gray-600"
  let divClass = ""

  if ($demonScore >= 2 && $demonScore < 3) {
    titleClass += " text-red-600"
  } else if ($demonScore >= 3 && $demonScore < 4) {
    titleClass += " text-red-800"
    divClass = "absolute left-0 font-serif"
  } else if ($demonScore >= 4) {
    titleClass = " text-red-800 font-serif text-3xl"
    divClass = "absolute left-0 font-serif w-1/3"
  }

  if ($cultScore >= 2 && $cultScore < 3) {
    divClass += "font-serif"
  } else if ($cultScore >= 3 && $cultScore < 4) {
    divClass += "font-serif text-blue-950 text-1xl"
  } else if ($cultScore >= 4) {
    divClass += "font-serif text-center w-1/2 text-blue-800 text-1xl mx-auto "
  }
</script>

<div class={divClass}>
  <h1 class={titleClass}>{title}</h1>
  {#if $cultScore >= 4}
    <img
      class="w-44 left-20"
      src="/images/tso/daughter.jpeg"
      alt="holy message"
    />
  {/if}
  <slot />
</div>
