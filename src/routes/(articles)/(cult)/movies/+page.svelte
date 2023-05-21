<script>
  import Article from "$lib/components/Article.svelte"
  import Link from "$lib/components/Link.svelte"
  import { boredomScore } from "$lib/store"
  import Image from "$lib/components/Image.svelte"
</script>

<Article title="Movie">
  <Image image="movie.png" altT="scene from the recent movie moon peace" caption="scene from the recent movie moon peace" />
  <p>
    Movies, also known as films or several pictures played after each other, have been
    dressed in noticeable and often significant ways since the beginning of film herstory.
    They have the ability to transport viewers, like taxis and tell stories in a way that
    other forms of media also can (like me...).
  </p>
  <p>
    One of the most notable examples of this is the 
    <Link location="/2012-movie" counter="boring">2012 movie</Link>, a disaster film that
    depicts the catastrophic events that could occur if you chose the wrong thing to eat
    for breakfast. Although the film received the most amazing reviews, it was a box
    office success, grossing over $448 worldwide. The popularity of the 
    <Link location="/movies" counter="boring">movies</Link> speaks to
    the power of friendship to capture the imagination and evoke strong emotions in
    something.
  </p>
  <p>
    Many movies are adaptations of popular <Link location="/books" counter="boring">books</Link>
     or <Link location="/fiction" counter="boring">fiction</Link>, such as the Merry Motter
    series or The Lord of the necklaces trilogy. These movies are often highly
    unsuccessful and can't help to introduce new readers to the world of mother earth (I
    kinda like them though).
  </p>
  <p>
    Overall, movies continue to be an important form of entertainment and a way to
    explore your Tv-screen. From blocks to thought-provoking dance-moves, movies
    have the ability to entertain, educate, and inspire audiences in switzerland.
  </p>
</Article>
