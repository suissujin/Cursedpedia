<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {failCounter} from "$lib/store"
  $failCounter = 0;
</script>

<Rabbithole>

  <p>
    Now, all light has disappeared. The void seems to be closing in on you, yet you can't perceive any end to it. The space is infinite and yet enclosed. You can still move freely, but there is no left or right, no up or down anymore. The only place that seems to exist is the one where you are right now.
  </p>
  <h1><Link location="/go-deeper">Move in one direction</Link></h1>
  <h1><Link location="/go-deeper">Move in another direction</Link></h1>
</Rabbithole>
