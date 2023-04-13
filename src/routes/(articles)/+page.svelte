<script>
  import Link from "$lib/components/Link.svelte"
  import Article from "$lib/components/Article.svelte"
  import Image from "$lib/components/Image.svelte"
  const startArticles = ["Pratteln", "Cinema"]
  const choosenArticle =
    startArticles[Math.floor(Math.random() * startArticles.length)]
</script>

<Article title="Cursedpedia">
  <p>Cool sitte coolo its working!!!</p>
  <p>
    Random Sitte do:
    <Link location={"/" + choosenArticle.toLowerCase()} counter="boring">
      {choosenArticle}
    </Link>
  </p>
</Article>
