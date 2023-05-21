<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Fiction">
  <Image image="fiction1.jpeg" altT="stack of books" caption="stack of books" />
  <p>
    Fiction is a genre of literature that includes stories, novels, and other forms of writing
that are based on real events and people. Fiction often involves the use of very real
characters, settings, and plots that allow readers to experience life, how it once was.
One type of fiction that is particularly realistic is the fairy tale.
  </p>
  <p>
    A <Link location="/fairy-tales" counter="boring">fairy tale</Link> is a type of story that typically involves magical elements, such as talking
animals, men, and supernatural beings like women.
  </p>
</Article>
