<script>
  import Popup from "$lib/components/Popup.svelte"
  import Reset from "$lib/components/Reset.svelte"
  const music = new Audio("/music/tsotrack.mp3")
  music.play()

  let showPopup = false
  let joined = false
  let hesitated = false
  let deniedAmount = 0

  function dontJoin() {
    hesitated = true
    deniedAmount++
  }
</script>

<div class="min-h-screen font-serif text-center bg-cyan-200 font-noaliasing">
  <!-- Popup -->
  {#if showPopup}
    <Popup
      id="join-now"
      menu={false}
      style="bg-stone-300 transform max-w-sm -translate-y-1/2 -translate-x-1/2 sticky"
      y="50%"
      x="50%"
    >
      <div class="flex flex-col p-6">
        {#if joined}
          {#if hesitated}
            <p>
              We see that you have been struggling with doubts about our
              community. Perhaps you have heard rumours or have become
              suspicious of our motives? Well, maybe those aren't rumours after
              all. All the allegations are true, in fact. You have been doubting
              us and because of that we can NOT let you join. You have been
              privy to certain information and secrets that are NOT meant for
              the outside world. You simply know too much, and we can't let you
              alone with that knowledge. But don't worry, we will help you with
              that. See you soon!
            </p>
            <p class="pt-2 pb-2">You have reached ending 5 out of 8.</p>
          {:else}
            <span class="text-lg font-bold">Thank you for joining!</span>
            <p>
              Welcome to our community! We are thrilled to have you join us and
              cannot wait to support and help you achieve your goals! Our
              members are a close-knit family who always look out for each
              other, and we're excited to include you in our circle! In fact,
              we've already taken the liberty of looking up your address and
              planning a visit to your home! Don't worry, we'll be there soon to
              welcome you in person and help you settle in! You'll have such a
              wonderful time with us, and we can't wait to show you all the
              amazing things we have planned! We'll be seeing you very soon, and
              we can't wait to welcome you into our loving family!
            </p>
            <p class="pt-2 pb-2">You reached Ending 4 out of 8!</p>
          {/if}
        {:else if deniedAmount == 1}
          <p>
            Are you sure? We want to support you in your transformation into
            your optimal self.
          </p>
        {:else if deniedAmount == 2}
          <p>
            You've come so far. Are you really ready to live your miserable life
            without us?
          </p>
        {:else if deniedAmount == 3}
          <p>
            We see that you have been struggling with doubts about our
            community. Perhaps you have heard rumours or have become suspicious
            of our motives? Well, maybe those aren't rumours after all. We must
            warn you that not joining our community after everything, is not
            something that we take lightly. You have been privy to certain
            information and secrets that are NOT meant for the outside world.
            You simply know too much, and we can't allow that. We'll be there
            soon to help you with your confusion.
          </p>
          <p class="pt-2 pb-2">You reached Ending 3 out of 8.</p>
        {:else}
          <label for="mail">Email</label>
          <input name="mail" type="text" />
          <label for="fname">First name</label>
          <input name="fname" type="text" />
          <label for="name">Last name</label>
          <input name="name" type="text" />
          <label for="adress">Adress</label>
          <input name="adress" type="text" />
        {/if}

        {#if joined || deniedAmount >= 3}
          <Reset style="px-2 py-1 mt-2 border border-black bg-stone-300" />
        {:else}
          <div class="flex justify-between gap-2 px-6 pt-4">
            <button
              on:click={() => (joined = true)}
              class="px-2 py-1 border border-black bg-stone-300"
            >
              Join
            </button>
            <button
              on:click={dontJoin}
              class="px-2 py-1 border border-black bg-stone-300"
            >
              Don't Join
            </button>
          </div>
        {/if}
      </div>
    </Popup>
  {/if}

  <nav
    class="px-2 pt-3 pb-8 text-2xl font-bold text-white bg-blue-700 bg-[url('/images/tso/tso-banner.png')] bg-cover bg-no-repeat bg-center"
  >
    <img class="max-w-md object-fit" src="/images/tso/logo.png" alt="" />
  </nav>

  <div class="px-4 py-12">
    <div class="flex gap-6">
      <!-- Comments -->
      <div class="w-2/12">
        <img class="object-fit" src="/images/tso/tsoh4.png" alt="" />

        <!-- Comment -->
        <div class="my-2">
          <span class="text-purple-400">Thomas S.</span>
          <p class="text-pink-300">
            I just wanted to take a moment to express my gratitude to the serene
            order community! Since joining, I have learned so much about myself
            and have grown in ways that I never thought were possible. The
            support and encouragement I have received from this community have
            been TRULY life-changing! I don’t miss my family at all!!
          </p>
        </div>
        <div class="my-2">
          <span class="text-purple-400">Nina F.</span>
          <p class="text-pink-300">
            I can't believe how the serene order community has transformed my
            life! It's like I've been awakened from a deep slumber and my mind
            has been opened to a whole new world of possibilities. The community
            has helped me to tap into my inner potential and unlock abilities I
            never knew I had.
          </p>
        </div>
        <div class="my-2">
          <span class="text-purple-400">Levin S.</span>
          <p class="text-pink-300">
            When I first heard about the serene order community, I have to admit
            that I was sceptical. From the outside and because of the obviously
            fake allegations, it seemed like a cult! But, something about it
            drew me in, and I decided to give it a chance! And I am SO glad I
            did! What I found was NOT a cult, but a VIBRANT and SUPPORTIVE
            community of INDIVIDUALS who are not VIOLENT or keeping me HOSTAGE.
            The serene order has become like a second family to me, and I don't
            know where I'd be without them, don’t ever think about RESCUEing ME,
            because I love this!!
          </p>
        </div>
        <div class="my-2">
          <span class="text-purple-400">Martha N.</span>
          <p class="text-pink-300">Helping Elephants Learn Patience, haha!!!</p>
        </div>
      </div>

      <!-- Center info -->
      <div class="flex flex-col w-6/12 p-1 m-1 bg-stone-300">
        <img class="object-fit" src="/images/tso/tsoh1.png" alt="" />

        <p>
          We are a community founded on the principles of positivity and
          self-growth! We are a family-based community that welcomes everyone
          who is interested in bettering themselves and living a more fulfilling
          life. Our mission is to create a space where individuals can come
          together and support each other on their personal journeys towards
          self-improvement! We offer various opportunities for you to meet and
          connect with like-minded members: Talks and workshops, which are held
          in person, and are open to all members. Retreats and vacations in
          remote locations, allowing you to disconnect from your daily life and
          connect with nature and yourself. Mentorship programs where you can
          work one-on-one with experienced mentors to achieve your personal
          goals and overcome any challenges you might be facing!
        </p>

        <img class="object-fit" src="/images/tso/tsoh2.png" alt="" />

        <div class="flex gap-1">
          <div class="w-1/3">
            <img
              class="mb-1 ml-2 object-fit"
              src="/images/tso/founder.jpeg"
              alt=""
            />
            <img class="object-fit" src="/images/tso/daughter.jpeg" alt="" />
          </div>
          <div class="w-2/3">
            <p>
              The serene order was founded in 2005 by a father-daughter duo,
              Perimet and his daughter Maria-luise. The idea behind the
              community was born out of a tragic event in Perimet's life. His
              wife passed away, leaving him and his daughter to pick up the
              pieces of their shattered lives. It was during this difficult time
              that Perimet realised the importance of family and community! He
              wanted to create a space where individuals could come together and
              support each other, just like a family! Maria-luise shared his
              vision, and together they founded the serene order. They wanted to
              create a community that would help people grow and become the best
              version of themselves. They believed that by providing support,
              guidance, and a nurturing environment, individuals could achieve
              their full potential and live a more fulfilling life.
            </p>
          </div>
        </div>
      </div>

      <!-- Right info -->
      <div class="w-4/12">
        <img class="object-fit" src="/images/tso/tsoh3.png" alt="" />
        <img class="object-fit" src="/images/tso/members.jpeg" alt="" />

        <div class="py-1 mx-4 my-2 bg-stone-300">
          Whether you're looking to overcome a personal challenge, develop new
          skills, or simply connect with like-minded individuals, the serene
          order has something to offer! We provide a wide range of resources and
          support to help YOU achieve your personal goals and realise your full
          potential. By joining the serene order, you will become a part of a
          supportive and welcoming community that will help you grow and thrive.
          You will have access to workshops, mentorship programs and other
          resources designed to help you on your personal journey towards
          self-improvement and personal growth. Our community is open to
          everyone, regardless of background or experience. We embrace diversity
          in all its forms and welcome individuals from all walks of life.
          Whether you're just starting your journey towards personal growth, or
          you're a seasoned practitioner, the serene order is the perfect place
          for you. Joining the serene order is easy! Simply fill out our online
          form on our website, and we will get back to you as soon as possible.
          We look forward to welcoming you into our community and supporting you
          on your personal journey towards self-improvement and personal growth!
        </div>
        <img class="object-fit" src="/images/tso/tsoh5.png" alt="" />

        <button
          class="px-3 py-2 bg-pink-300 border border-black"
          on:click={() => (showPopup = true)}
        >
          Join now
        </button>
      </div>
    </div>
  </div>
  <div>The Serene Order © Perimet 2005 - now</div>
</div>
