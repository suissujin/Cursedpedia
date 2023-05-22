<script>
  import "../app.css"
  import { locationLock, demonScore, cultScore } from "$lib/store.js"
  import { goto } from "$app/navigation"

  switch ($locationLock) {
    case "cult":
      goto("/cultroute/cult1")
      $demonScore = 0
      break

    case "demon":
      goto("/demonroute/demon1")
      $cultScore = 0
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
