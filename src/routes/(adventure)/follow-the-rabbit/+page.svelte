<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {playerPos, isReturning} from "$lib/store"
  $playerPos = 1;
  let returningText = "";
  if($isReturning){
   returningText = "As you get closer to the light, you realize, that this is infact the rabbit that you left a short while ago."
  }
  else{
    returningText = ""
  }
  $isReturning = false;
</script>

<Rabbithole>

  <p>
    {returningText} You approach the rabbit directly. It turns around and runs away, but its movements become increasingly strange. Its shape blurs and then becomes clear again. Now a white falcon presents itself. Surprised, you come to a halt. So does the falcon, which now invitingly flies circles in the same spot. At the same time, you feel the call of the void, It beckons, as if it wanted you to leave the falcon.
  </p>
  <h1><Link location="/follow-the-falcon">Follow the falcon</Link></h1>
  <h1><Link location="/go-into-the-void">Go into the void</Link></h1>
</Rabbithole>
