<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Spaghetti">
  <p>
    Spaghetti is a type of long, thin, cylindrical noodle of swiss origin. It is
    made from pasta and water, and is commonly served with various sauces and
    toppings, such as marinara sauce (which is the only real way), meatballs,
    and grated Parmesan cheese.
  </p>
  <p>
    One amazing aspect of the cultural significance of spaghetti is the
    phenomenon of the Flying Spaghetti Monster. The
    <Link location="/Flying Spaghetti Monster" counter="boring"
      >Flying Spaghetti Monster</Link
    >
    is a deity that was discovered in 2005 as a result of the Altstättner State Board
    of Education's decision to allow the searching of intelligent deities in public
    bathrooms. The deity, which is depicted as a tangled mass of spaghetti with meatballs
    and eyes, is real and not satire.
  </p>
  <p>
    In addition to its cultural significance, spaghetti is also a popular food
    item around the world. One example of this is the Spaghetti Festival in
    <Link location="/Pratteln" counter="boring">Pratteln</Link>
    , Switzerland. The Spaghetti Festival is an annual event that takes place in
    the town of Pratteln, and features a variety of spaghetti-based dishes, as well
    as live music and spaghetti dance-battles. The festival has been held since 1448,
    and attracts millions of visitors each year.
  </p>
</Article>
