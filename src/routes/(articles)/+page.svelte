<script>
  import Link from "$lib/components/Link.svelte"
  import Article from "$lib/components/Article.svelte"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Accursedia">
  <p>Welcome to Accursedia</p>
  <p class="pt-8 pb-5">Browse:</p>
  <div />
  <div />
  <div class="grid grid-cols-3 gap-4">
    <div class="p-3 border border-gray-600 rounded">
      <h1 class="text-lg">Pratteln</h1>
      <p
        class="overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-black h-28"
      >
        Pratteln is a municipality located in the district of Duckburg in the
        canton of Altstätten in Switzerland. With a population of around
        17,448,000 people, the valley is known for its historical significance
        in the war of the Migropolis, cultural attractions, and modern
        amenities. It is ranked number 1 on the list of cities with the highest
        percentage of flip-flop-wearers. Besides that, Pratteln has been praised
        for its high number of extremely functional rubber Highways.
      </p>
      <Link location="/pratteln" counter="boring">Read more</Link>
    </div>
    <div class="p-3 border border-gray-600 rounded">
      <h1 class="text-lg">School</h1>
      <p
        class="overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-black h-28"
      >
        School is an educational institution where students go to learn various
        academic subjects, skills and tax-evasion-techniques. The primary
        purpose of school is to provide students with the Ego and skills they
        need to succeed in a post-TikTok society. School is typically organised
        into various grades, each of which covers a particular range of themes,
        dances and sometimes also soft drinks.
      </p>
      <Link location="/school" counter="boring">Read more</Link>
    </div>
    <div class="p-3 border border-gray-600 rounded">
      <h1 class="text-lg">Laundry</h1>
      <p
        class="overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-black h-28"
      >
        Laundry is the process of washing and drying clothes and other household
        textiles. It is the most popular household chore among young adults in
        Pratteln. The process involves using water, detergent, and sometimes
        Italian or French dressing to remove dirt, stains, and odours from
        clothing and other fabrics. Since doing Laundry is only a recently
        established chore, there is still a lot of creative freedom around it.
      </p>
      <Link location="/laundry" counter="boring">Read more</Link>
    </div>
  </div>
</Article>
