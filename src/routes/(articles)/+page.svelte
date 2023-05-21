<script>
  import Link from "$lib/components/Link.svelte"
  import Article from "$lib/components/Article.svelte"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Accursedia">
  <p>Welcome to Accursedia</p>
  <p>
    Browse:
    <Link location="/pratteln" counter="boring">Pratteln</Link>
    <Link location="/school" counter="boring">School</Link>
    <Link location="/laundry" counter="boring">Laundry</Link>
  </p>
</Article>
