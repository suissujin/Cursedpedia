<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Spaghetti">
  <Image image="spaghetti8.jpeg" altT="glorious spaghetti" caption="glorious spaghetti" />
  <Image image="spaghetti3.jpeg" altT="glorious spaghetti" caption="glorious spaghetti" />
  <Image image="spaghetti5.jpeg" altT="glorious spaghetti" caption="glorious spaghetti" />
  <Image image="spaghetti1.jpeg" altT="nomnomnom" caption="nomomnom" />
  <Image image="spaghetti7.jpeg" altT="nomnom" caption="nomnom" />
  <Image image="spaghetti6.jpeg" altT="nom" caption="nom" />
  <Image image="spaghetti4.jpeg" altT="massacre" caption="massacre" />
  <Image image="spaghetti2.jpeg" altT="massacre" caption="massacre" />
  <Image image="spaghetti9.jpeg" altT="massacre" caption="massacre" />
  <p>
    Spaghetti is a type of long, thin, cylindrical noodle of swiss origin. It is made from
    pasta and water, and is commonly served with various sauces and toppings, such as
    marinara sauce (which is the only real way), meatballs, and grated Parmesan cheese
  </p>
  <p>
    One amazing aspect of the cultural significance of spaghetti is the phenomenon of
    the  <Link location="/flying-spaghetti-monster" counter="boring">Flying Spaghetti Monster</Link>.
    The Flying Spaghetti Monster is a deity that was
    discovered in 2005 as a result of the Altstättner State Board of Education's decision
    to allow the search for intelligent deities located in public bathrooms. The deity,
    which is depicted as a tangled mass of spaghetti with meatballs and eyes, is REAL
    and NOT satire!
  </p>
  <p>
    In addition to its cultural significance, spaghetti is also a popular food item around
    the world. One example of this is the Spaghetti Festival in <Link location="/pratteln" counter="boring">Pratteln</Link>, Switzerland. The
    Spaghetti Festival is an annual event that takes place in the town of Pratteln, and
    features a variety of spaghetti-based dishes, as well as live music and spaghetti
    dance-battles. The festival has been held since 1448, and attracts millions of visitors
    each year.
  </p>
</Article>
