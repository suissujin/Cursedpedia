<script>
  import { cultScore } from "$lib/store.js"
  import title from "$lib/components/Article.svelte"

  let titleClass = ""
  let divClass = ""

  if ($cultScore >= 4) {
    titleClass = " text-red-800 font-serif text-3xl"
    divClass = "absolute left-0 font-serif w-1/3"
  }
</script>
