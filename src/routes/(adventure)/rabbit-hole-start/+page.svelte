<script>
  import Link from "$lib/components/Link.svelte"
  import Rabbithole from "$lib/components/Rabbithole.svelte"
  import {playerPos} from "$lib/store"
  $playerPos = 0;
</script>

<Rabbithole>
  <p>
    As you enter, the brightness of the outside world gives way to the darkness within the rabbit hole. You proceed further, expecting that an exit will soon appear before you. But the darkness does not disappear. The black void around you may have no shape, but it seems to have a structure. A structure that moves, flows. like ink. After a brief period in this flowing emptiness, you catch sight of the light at the end of the tunnel. As you get closer, you realize that this light is not actually light, but the white rabbit, moving around as if it was inviting you to follow it. But the rabbit is not the only way. Around you, there is an empty void opening up. The entrance has disappeared. You can´t go back. So you have two choices.
  </p>
<h1><Link location="/follow-the-rabbit">Follow the rabbit</Link></h1>
<h1><Link location="/go-into-the-void">Go into the void</Link></h1>
</Rabbithole>
