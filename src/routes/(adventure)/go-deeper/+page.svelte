<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {failCounter} from "$lib/store"
  let targetLink = "none"
  let failRole = Math.random();
  if(failRole >= 0.85){
    targetLink = "/return-to-the-light"
  }
  else{
    targetLink = "/go-deeper-loop"
    $failCounter += 1
  }

  if($failCounter >= 7){
    targetLink = "/get-lost"
  }
</script>

<Rabbithole>

  <p>
      The movement seems to have stirred up the void. Like a sea of black ink, you can feel the liquid motion. But as soon as you stop, the surroundings calm down again and it feels exactly like before. Exactly the same.
  </p>
  <h1><Link location={targetLink}>Move in one direction</Link></h1>
  <h1><Link location={targetLink}>Move in another direction</Link></h1>
  </Rabbithole> 
