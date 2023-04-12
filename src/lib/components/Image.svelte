<script>
  export let image = ""
  export let alt = ""
  export let caption = ""

  const imageSrc = `/images/${image}`
  const imageAlt = alt || image
  const captionText = caption || image
</script>

<img class="float-right" />
