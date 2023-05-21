<script>
  import Reset from "$lib/components/Reset.svelte"
  import { locationLock } from "$lib/store.js"

  $locationLock = "fbi"
</script>

<div class="flex flex-col items-center justify-center min-h-screen text-white">
  <div class="text-3xl sans-serif">FBI</div>
  <p>You found the FBI. They are watching you. You can't escape.</p>
  <p>You know too much.</p>
  <p class="pt-2 pb-2">You found ending FBI out of ???</p>
  <div class="flex justify-center"><Reset style="font-bold underline" /></div>
</div>

<style>
  :global(body) {
    background-color: black;
  }
</style>
