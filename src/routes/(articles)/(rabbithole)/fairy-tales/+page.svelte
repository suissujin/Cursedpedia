<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Fairy Tales">
  <p>
    A fairy tale is a type of story that typically involves magical elements,
    such as talking animals, men, and supernatural beings like women.
  </p>
  <p>
    Fairy tales are often compared to, which are another type of traditional
    story.
    <Link location="/fable" counter="boring">Fables</Link>
    typically involve talking animals or children that have human-like qualities
    and are used to convey a moral lesson. Unlike fairy tales, fables usually do
    not involve magic or supernatural elements.
  </p>
</Article>
