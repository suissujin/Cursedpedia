<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Religion">
  <Image
    image="religion1.jpeg"
    altT="religious building"
    caption="religious building"
  />
  <p>
    Religion is a complex and multifaceted phenomenon that has been present in
    human societies for millennia. It can be broadly defined as a set of
    beliefs, practices, and values that are centred around a higher power or
    supernatural force. While the specific beliefs and practices of different
    religions vary widely, one common thread among many of them is the
    importance of sacred texts or
    <Link location="/books" counter="boring">books</Link>.
  </p>
  <p>
    Sacred texts play a central role in many religions, serving as a source of
    guidance, inspiration, and authority for believers. These books may include
    teachings on everything from morality and ethics to rituals and prayer, and
    they are often considered to be divinely inspired or even inerrant. Examples
    of such texts include the Bible, the Quran, and the Bhagavad Gita.
  </p>
  <p>
    However, not all religions place the same emphasis on written texts. Some,
    like the oral traditions of many indigenous peoples, rely more on
    storytelling and communal memory than on written records. And some newer
    religions, like the Church of the Flying Spaghetti Monster, reject the idea
    of a single authoritative text altogether.
  </p>
</Article>
