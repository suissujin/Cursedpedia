<script>
  import { popups } from "$lib/store.js"

  export let id = ""
  export let x = "0%"
  export let y = "0%"
  export let style = ""
  export let menu = true
</script>

<div
  {id}
  class="absolute border border-black {style}"
  style="left: {x}; top: {y};"
>
  {#if menu}
    <div class="flex justify-end border-b border-black">
      <button
        class="px-1 text-xs border border-black"
        on:click={() => ($popups = $popups.filter((el) => el.id != id))}
      >
        X
      </button>
    </div>
  {/if}
  <div class="p-1">
    <slot />
  </div>
</div>
