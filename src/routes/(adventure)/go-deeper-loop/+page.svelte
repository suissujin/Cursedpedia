<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {failCounter} from "$lib/store"
  let targetLink = "none"
   let failRole = Math.random();
  if(failRole >= 0.7){
    targetLink = "/return-to-the-light"
  }
  else{
    targetLink = "/go-deeper"
    $failCounter += 1
  }

  if($failCounter >= 7){
    targetLink = "/get-lost"
  }
</script>

<Rabbithole>

  <p>
      You walk resolutely in the chosen direction. After just a few steps, you starts to feel strange. As if you had intended to go in a different direction. Was this really the direction you wanted to take? You try to figure out where you came from. But it's hard to determine because everything looks exactly the same as before, and it feels the same too. As if you never moved from the spot.
  </p>
  <h1><Link location={targetLink}>Move in one direction</Link></h1>
  <h1><Link location={targetLink}>Move in another direction</Link></h1>
  </Rabbithole> 
