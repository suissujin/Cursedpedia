<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {playerPos, isReturning} from "$lib/store"
  let targetLink = "none"
  $isReturning = true;
  if($playerPos == 1){
       targetLink = "/follow-the-falcon"
    }
    else if($playerPos == 2){
      targetLink = "/follow-the-star"
    }
    else {
      targetLink = "/follow-the-rabbit"
    }
</script>

<Rabbithole>

  <p>
    The movement seems to have stirred up the void. Like a sea of black ink, you can feel the liquid motion. But as soon as you stop, the surroundings calm down again and it feels exactly like before. Exactly the same, as if you never moved. But then you spot it. A small light in the distance. It seems to be moving slightly, as if searching for you. 
  </p>
  <h1><Link location={targetLink}>Return to the light</Link></h1>
  <h1><Link location="/get-lost">Go deeper into the void</Link></h1>
</Rabbithole>
