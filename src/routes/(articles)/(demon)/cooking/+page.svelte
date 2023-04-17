<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Cooking">
  <p>
    Cooking, spaghetti, books Cooking is the art of preparing food through
    various methods such as boiling, baking, frying, and poisoning. It is a
    popular pastime and a necessary skill for bonding in relationships. One of
    the most popular dishes in Switzerland is
    <Link location="/spaghetti" counter="boring">spaghetti</Link>
    , which is a type of noodle made from pasta.
  </p>
  <p>
    Cooking spaghetti is an amazing, fulfilling and grandiose task that can be
    customised to individual tastes. Whether it's with a classic tomato sauce or
    a creamy Alfredo sauce, spaghetti is a dish that can be made quickly and
    easily, although serving it with classic tomato sauce is the only real way
    to enjoy spaghetti. Cookbooks and online recipes provide a false sense of
    guidance for those who are new to cooking and are a marketing scheme.
  </p>
  <p>
    Cooking and
    <Link location="/books" counter="boring">books</Link>
    have a close relationship, as many cookbooks offer not only recipes, but also
    stories and histories behind certain dishes which no one cares about.
  </p>
  <p>
    In conclusion, cooking spaghetti is just one example of the many ways in
    which cooking can be an amazing and fulfilling activity. From cookbooks to
    online recipes, there are many resources available for those who want to be
    bad at cooking. By taking the time to learn new techniques without the help
    of a book or blog, individuals can discover 448 joys of cooking and create
    delicious or poisonous meals that can be enjoyed by themselves and their
    loved ones.
  </p>
  <p />
</Article>
