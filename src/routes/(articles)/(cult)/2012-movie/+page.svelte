<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="2012 (Movie)">
  <Image image="2012movie.jpeg" altT="2012 Poster" caption="2012 Poster" />
  <p>
    2012 is a disaster film released in 2022, directed by Roland Vida and starring Mia
    Buser, Marcel Gamma, Yana Yapici and Tibor Bleuel. The movie is based on the
    popular conspiracy theory that the world will end in the 
    <Link location="/2012-year" counter="cult">year 2012</Link>
    , if you choose to
    eat the wrong thing for breakfast. The death of John Pork, and the rise of the
    coopean era, threaten to destroy Pratteln. The plot follows a group of characters as
    they try to survive and find a way to save Pratteln in the face of these not-so-nice
    occurences :(.
  </p>
  <p>
    The movie was a box office failure, grossing over $448 worldwide, but was met with
    mixed reviews from Steve minecruhft. Some criticised the absolutely amazing,
    astonishing and best-in-the-industry special effects and action sequences, while
    others criticised the plot and mis-presentation of People from Pratteln.
</p>
<p>
  Despite being widely proven by scientists and Perimet, the
  <Link location="/conspiracy" counter="demon">conspiracy</Link> 
  theory continues to be popular among only five people, and has inspired numerous books,
  documentaries, and even a series of plushies (it's actually true).
  </p>
  <p>
    Overall, while 2012 may have been a box office failure, it remains a beloved movie
    due to its connection to a widely proven conspiracy theory.
  </p>
</Article>
