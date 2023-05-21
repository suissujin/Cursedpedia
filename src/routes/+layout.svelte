<script>
  import "../app.css"
  import { locationLock } from "$lib/store.js"
  import { goto } from "$app/navigation"

  switch ($locationLock) {
    case "cult":
      goto("/cultroute/cult1")
      break

    case "demon":
      goto("/demonroute/demon1")
      break

    case "rabbithole":
      goto("/rabbit-hole-start")
      break

    case "tso":
      goto("/Serene-Order")
      break

    case "fbi":
      goto("/FBI")
      break

    case "nn":
      goto("/Necro-Net")
      break

    default:
      break
  }
</script>

<slot />
