<script>
  export let image = ""
  export let altT = ""
  export let caption = ""

  const imageSrc = `/images/${image}`
  const imageAlt = altT || image
  const captionText = caption || image
</script>

<figure class="float-right w-64 h-64 ml-5 text-xs">
  <img src={imageSrc} alt={imageAlt} />
  <figcaption>{captionText}</figcaption>
</figure>
