<script>
  import { cultScore, demonScore, locationLock } from "$lib/store.js"
  export let image = ""
  export let altT = ""
  export let caption = ""

  if ($demonScore >= 4 && $locationLock !== "demon") {
    image = "cursed.png"
  }
  const imageSrc = `/images/${image}`
  const imageAlt = altT || image
  const captionText = caption || image
</script>

<figure class="float-right w-64 h-64 ml-5 text-xs">
  <img class="object-scale-down w-64 h-64" src={imageSrc} alt={imageAlt} />
  <figcaption>{captionText}</figcaption>
</figure>
