<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {playerPos, isReturning} from "$lib/store"
  $playerPos = 2;
  let returningText = "";
  if($isReturning){
   returningText = "As you get closer to the light, you realize, that this is infact the falcon that you left a short while ago."
  }
  else{
    returningText = ""
  }
  $isReturning = false;
</script>

<Rabbithole>

  <p>
    {returningText} As soon as you take a step towards the falcon, it turns around and flies away. But now it doesn't seem to be waiting for you anymore, as the light of the falcon rapidly becomes smaller in the distance. Suddenly, you feel uncertain. Somehow, it appears as though the light hasn't moved from its position, but has simply shrunk in size. However, a part of you is convinced that it is now a huge light in the far distance. In this emptiness where there are no shadows, and the light has no definite form, it is difficult to discern its size and how far away it is. At the same time, the emptiness is calling out to you more than ever before. It almost seems as if a part of it is reaching out to you. 
  </p>
  <h1><Link location="/follow-the-star">Follow the star</Link></h1>
  <h1><Link location="/go-into-the-void">Go into the void</Link></h1>
</Rabbithole>
