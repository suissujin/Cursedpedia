<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {isReturning} from "$lib/store"
  let returningText = "";
  if($isReturning){
   returningText = "As you get closer to the light, you realize, that this is infact the same light that you left a short while ago. You can't tell why you know, that this is the same light as before, but something inside you is sure of it."
  }
  else{
    returningText = ""
  }
  $isReturning = false;
</script>

<Rabbithole>

  <p>
    {returningText} As you continue to approach the light, you notice that it actually has only shrunk in size, and you believe to feel the warmth of the now close and small light. As you let your focus shift from the light to the surroundings, you notice a figure waiting behind the light. It is the size and shape of a human, but seems slightly distorted and discolored. It's difficult to say exactly what you're seeing, as this creature blends into the ink-like void, as if it were a part of it. The face, marked with black veins and spots, shows no emotions or interest, as if the creature had not noticed your arrival. The creature's eyes are completely black and look motionless past you, and yet the thing seems to be staring at you.
  </p>
  <h1><Link location="/what-are-you">"What are you"</Link></h1>
  <h1><Link location="/where-am-I">"Where am I"</Link></h1>
  <h1><Link location="/how-do-I-get-out-of-here">"How do I get out of here?"</Link></h1>
</Rabbithole>
