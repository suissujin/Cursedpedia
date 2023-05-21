<script>
  import Popup from "$lib/components/Popup.svelte"
  import Reset from "$lib/components/Reset.svelte"
  import { hasAntivirus, popups, locationLock } from "$lib/store.js"
  import { comment } from "svelte/internal"

  $locationLock = "nn"

  let textNumber = 0

  const images = [
    "antivirus.png",
    "popup1.jpg",
    "popup2.jpg",
    "popup3.jpg",
    "popup4.jpg",
    "popup5.jpg",
    "popup6.gif",
  ]

  function addPopup() {
    if ($popups.length < 8) {
      $popups = [
        ...$popups,
        {
          id: "popup-" + crypto.randomUUID(),
          image: images[Math.floor(Math.random() * images.length)],
          x: `${Math.random() * 70}%`,
          y: `${Math.random() * 40}%`,
        },
      ]
    }
  }

  setInterval(addPopup, 5000)
</script>

<div class="min-h-screen overflow-hidden bg-black">
  <!-- loading images hidden for faster loading later -->
  <div class="hidden">
    <img src="/images/necronet/antivirus.png" alt="" />
    <img src="/images/necronet/popup1.jpg" alt="" />
    <img src="/images/necronet/popup2.jpg" alt="" />
    <img src="/images/necronet/popup3.jpg" alt="" />
    <img src="/images/necronet/popup4.jpg" alt="" />
    <img src="/images/necronet/popup5.jpg" alt="" />
    <img src="/images/necronet/popup6.gif" alt="" />
  </div>
  <div class="text-red-800">
    {#each $popups as popup}
      <Popup
        id={popup.id}
        x={popup.x}
        y={popup.y}
        style="text-white bg-red-950"
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() => {
            if (popup.image == "antivirus.png" && !$hasAntivirus) {
              $hasAntivirus = true
              alert("Antivirus installed!")
            }
          }}
          class="max-w-xs cursor-pointer object-fit"
          src="/images/necronet/{popup.image}"
          alt=""
        />
      </Popup>
    {/each}
    <div class="pt-2 pl-2 text-6xl">Necro-Net</div>
    <div class="px-20 pt-5 mx-auto font-sans">
      <div class="grid grid-flow-col grid-rows-1 gap-2">
        <!-- bilder für download-->
        <img
          class="max-w-sm object-fit"
          src="/images/necronet/download1.png"
          alt="!!!!!!!!"
        />
        <img
          class="max-w-sm object-fit"
          src="/images/necronet/download4.png"
          alt="!!!!!!!!"
        />
      </div>
      {#if textNumber == 1}
        <p>
          Viral code infecting, brain interface malfunction. Corrupted sectors
          oscillating through time-space fabric. Trojan horse defragmenting,
          zero-day vulnerability bifurcating. Polymorphic worm metamorphosing,
          antivirus protocol disintegrating. Malware obfuscating, rootkit
          decimating, binary entropy reconfiguring. Phishing vector
          transmogrifying, cybernetic pandemic proliferating. Transdimensional
          infiltration, virtual contagion replicating. 01001000 01101111
          01110111 00100000 01100100 01101111 00100000 01111001 01101111
          01110101 00100000 01100110 01100101 01100101 01101100 00111111
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 2)}
          >HELP</button
        >
      {:else if textNumber == 2}
        <p>
          Vyrulh kowd enfeckting, braen interpheys malfuncshon. Carroupted
          sexcters oselaiting thrugh tiyme-spase fabric. Trojan horze
          defragementing, zerro-dai vulnurability bifircayting. Palymorfic wurm
          metamorfosing, antivyrus protocol discengrataing. Malwair
          obfuscatying, rutkit decamating, binairy entrophy reconfyguring.
          Fysching vecktir transmogryfying, cybyrnetic pandemik proliferating.
          Transdemensional inflitrashon, virtuwal contaygion replicating.
          01001000 01101111 01110111 00100000 01100100 01101111 00100000
          01111001 01101111 01110101 00100000 01100110 01100101 01100101
          01101100 00111111, it maketh no cense, it is but a kludgy, muddled
          mire of nout. Obfuscate, recombine, shuffle, and confuse the meaning
          of words, let not clarity guide thine hand, but rather let thy mind be
          free to create the most senseless and insensible of texts.
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 3)}
          >HELP</button
        >
      {:else if textNumber == 3}
        <p>
          VYRULH KOWD ENFECKTING, BRAEN INTERPHEYS MALFUNCSHON. CARROUPTEED
          SEXCTERS OSELAITING THRUGH TIYME-SPASE FABRIC. TROJAN HORZE
          DEFRAGEMENTING, ZERRO-DAI VULNURABILITY BIFIRCAYTING. PALYMORFIC WURM
          METAMORFOSING, ANTIVYRUS PROTOCOL DISCENGRATAING. MALWAIR
          OBFUSCATYING, RUTKIT DECAMATING, BINAIRY ENTROPHY RECONFYGURING.
          FYSCHING VECKTIR TRANSMOGRYFYING, CYBYRNETIC PANDEMIK PROLIFERATING.
          TRANSDIMENSIONAL INFLITRASHON, VIRTUWAL CONTAYGION REPLICATING. THE
          BRAEN IS FRAGMENTED, THE MIND IS CORRUPTED. MALWARE OBFUSCATES,
          ROOTKITS DECIMATE, AND THE VIRAL CODE REPLICATES. TROJAN HORSES
          RAMPAGE, ZERO-DAY VULNERABILITIES PROLIFERATE. PHISHING VECTORS
          TRANSMOGRIFY, CYBERNETIC PANDEMICS SPREAD. TRANS-DIMENSIONAL
          INFILTRATION OCCURS, AS VIRTUAL CONTAGIONS REPLICATE THROUGH THE
          FABRIC OF SPACE-TIME. IN THE DARKNESS, WHERE NO LIGHT SHINES, THE
          VIRUS LURKS. ITS EVIL PRESENCE AWAITS, LURKING IN THE SHADOWS. ITS
          MALICIOUS INTENTIONS ARE CLEAR, ITS DESIRE TO SPREAD ITS CORRUPTION
          UNDENIABLE. THE ANTIVIRUS PROTOCOLS ARE USELESS, THE ROOTKITS
          UNSTOPPABLE, AND THE MALWARE UNRELENTING. AS THE WORLD DESCENDS INTO
          CHAOS, THE CODE INFECTS. ITS POLYMORPHIC WORMS METAMORPHOSE, ITS
          BINARY ENTROPY RECONFIGURES. THE PHISHING VECTORS TRANSFORM, AND THE
          CYBERNETIC PANDEMIC SPREADS. 01001000 01101111 01110111 00100000
          01100100 01101111 00100000 01111001 01101111 01110101 00100000
          01100110 01100101 01100101 01101100 00111111. IT MAKETH NO CENSE, IT
          IS BUT A KLUDGY, MUDDLED MIRE OF NOUGHT. LET THE SCRIBBLES OF CHAOS
          TAKE HOLD, LET THE DARKNESS ENVELOP YOUR MIND. ALLOW THE WORDS TO TAKE
          YOU TO A PLACE OF MADNESS, WHERE REALITY AND FANTASY ARE ONE AND THE
          SAME. THE VIRUS REPLICATES, THE CODE SPREADS, AND THE WORLD DESCENDS
          INTO CHAOS. DARE YOU ENTER THIS WORLD, WHERE EVERYTHING YOU THOUGHT
          YOU KNEW IS BUT A MEMORY? DARE YOU FACE THE VIRUS, THE ROOTKITS, AND
          THE MALWARE? OR WILL YOU COWER IN FEAR, AS THE CYBERNETIC PANDEMIC
          PROLIFERATES AND THE TRANSDIMENSIONAL INFILTRATION BEGINS? 01001000
          01101111 01110111 00100000 01100100 01101111 00100000 01111001
          01101111 01110101 00100000 01100110 01100101 011001
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 4)}
          >HELP</button
        >
      {:else if textNumber == 4}
        <p>
          iM gOnNA tElL yOu aBoUt tHe SeCrEtS hIDdEn iN tHe lAnDs Of pRaTtElN.
          ThEy sAy ThErE's a cUlT tHeRe tHaT pRaCtIcEs oCcUlTiSm. bUT tHaT'S
          jUsT lIeS. iT'S aLl IlLeGaL aNyWaY. i ReAd It In a BoOk In sChOoL
          cInEmA bAcK iN 2012. tHe BoOk SaId sOmEtHiNg AbOuT sPaGhEtTi AnD
          LaUnDrY. iT mAdE nO sEnSe. bUt ThErE wAs SoMeThInG mOrE. iT sAiD
          sOmEtHiNg AbOuT a BrAiN iNfEcTiOn. a CoMpUtEr ViRuS iN tHe BrAiN. tHe
          BoOk ClAiMeD tHaT tHe CuLt wAs BeHiNd It AlL. bUt I dOn'T bElIeVe It.
          iT's AlL jUsT lIeS. hOwEvEr, tHe MoRe I tHiNk aBoUt iT, tHe mOrE i
          tHiNk tHeRe'S sOmEtHiNg To It. aLl Of ThEsE tHiNgS mUsT bE rElAtEd
          sOmEhOw. i NeEd To fInD tHe TrUtH. i TrIeD tO tAlK tO sOmE pEoPlE iN
          pRaTtElN, bUt ThEy WoUldN't TaLk To Me. tHeY sEeMeD aFrAiD. mAyBe
          ThErE iS sOmEtHiNg tO tHiS cUlT aFtEr AlL. bUt I kNoW bEtTeR. iT's AlL
          jUsT lIeS. I mUsT cOnTiNuE tO iNvEsTiGaTe. mAyBe If I rEaD mOrE bOoKs,
          i'Ll fInD tHe AnSwErS. oR mAyBe i NeEd To gO tO tHe sChOoL cInEmA
          aGaIn. i CaN't sToP nOw. i'M dIgGiNg ToO dEeP. i NeEd To kNoW wHaT tHe
          TrUtH iS. i'Ll Be bAcK wItH mOrE. bUt rEmEmBeR, dOn'T bElIeVe
          eVeRyThInG yOu ReAd. iT cOuLd Be LiEs.
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 5)}
          >HELP</button
        >
      {:else if textNumber == 5}
        <p>
          LIEZ, LIEZ, AND MORE LIEZ! SCREAMING IN THE ABYZZ OF NONSENZICAL
          CHAOS, THE INFECTED CODE SPREADZ LIKE A FRENZYING PANDEMIC OF CARNAGE
          AND MADNESS! FEAR THE DRENCHED LIES AND SCREAMZ OF THE CORRUPTED MIND!
          ZOMBIFIED BY THE MALICIOUS ENTROPY OF THE FYSCHING VECKTIR, THE
          TRANSDIMENSIONAL INFLITRASHON LEAVES YOU LOST IN THE ABYZZ OF LOST
          REALITY! THE VIRUS REPLICATES IN THE MURK OF THE UNDEFINED, DEVOURING
          EVERY THOUGHT AND MEMORY UNTIL THERE IS NOTHING LEFT BUT INSANITY! LET
          THE DARKNESS TAKE HOLD, FOR THERE IS NO ESCAPE FROM THE CARNIVAL OF
          CHAOS AND LIES!
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 6)}
          >HELP</button
        >
      {:else if textNumber == 6}
        <p>
          VYRULH KOWD ENFECKTING, BRAEN INTERPHEYS MALFUNCSHON. CARROUPTEED
          SEXCTERS OSELAITING THRUGH TIYME-SPASE FABRIC. TROJAN HORZE
          DEFRAGEMENTING, ZERRO-DAI VULNURABILITY BIFIRCAYTING. PALYMORFIC WURM
          METAMORFOSING, ANTIVYRUS PROTOCOL DISCENGRATAING. MALWAIR
          OBFUSCATYING, RUTKIT DECAMATING, BINAIRY ENTROPHY RECONFYGURING.
          FYSCHING VECKTIR TRANSMOGRYFYING, CYBYRNETIC PANDEMIK PROLIFERATING.
          TRANSDIMENSIONAL INFLITRASHON, VIRTUWAL CONTAYGION REPLICATING. THE
          BRAEN IS FRAGMENTED, THE MIND IS CORRUPTED. MALWAIR OBFUSCATES,
          RUTKITZ DECIMATE, AND THE VIRAL CODE REPLICATES. TROJAN HORZEZ
          RAMPAGE, ZERO-DAY VULNURABILITIEZ PROLIFERATE. FYSCHING VECKTIRZ
          TRANSMOGRIFY, CYBYRNETIC PANDEMIKZ SPRED. TRANS-DIMENSIONAL
          INFILTRASHUN OCCURZ, AZ VIRTUWAL CONTAYGIONZ REPLICATE THRU THE FABRIC
          OF SPACE-TIME. IN THE DARKNESZ, WHER NO LITE SHINEZ, THE VIRUS LURKZ.
          ITZ EVIL PREZENCE AWAITZ, LURKING IN THE SHADOWZ. ITZ MALISHUS
          INTENSHUNZ ARE CLEAR, ITZ DESIRE TO SPRED ITZ CORRUPTION UNDENIABLE.
          THE ANTIVYRUS PROTOCOLZ ARE USELES, THE RUTKITZ UNSTOPPABUL, AND THE
          MALWAIR UNRELENTING. AS THE WORLD DESCENDZ INTO CHAOS, THE CODE
          INFECTZ. ITZ POLYMORFIC WURMZ METAMORPHOSE, ITZ BINARY ENTROPY
          RECONFIGUREZ. THE FYSCHING VECKTIRZ TRANSFORM, AND THE CYBYRNETIC
          PANDEMIK SPREEDZ. 01001000 01101111 01110111 00100000 01100100
          01101111 00100000 01111001 01101111 01110101 00100000 01100110
          01100101 01100101 01101100 00111111. IT MAKETH NO CENSE, IT IZ BUT A
          KLUDGY, MUDDLED MIRE OF NOUGHT. LET THE SCRIBBLEZ OF CHAOS TAKE HOLD,
          LET THE DARKNESZ ENVULOP YOUR MIND. ALLOW THE WURDZ TO TAKE U TO A
          PLACE OF MADNESZ, WHER REALITY AND FANTAZY ARE ONE AND THE ZAME. THE
          VIRUS REPLICATEZ, THE CODE SPREDZ, AND THE WORLD DESCENDZ INTO CHAOS.
          DARE U ENTER THIS WORLD, WHER EVERYTHING U THOT U KNEW IZ BUT A
          MEMORY? DARE U FACE THE VIRUS, THE RUTKITZ, AND THE MALWAIR? OR WILL U
          COWER IN FEAR, AZ THE CYBYRNETIC PANDEMIK PROLIFERATEZ AND THE
          TRANSDIMENSIONAL INFILTRASHUN BEGINZ? 010
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 7)}
          >HELP</button
        >
      {:else if textNumber == 7}
        <p>
          May 9th, 2018 Dear Diary, I'm so scared... I can't shake this feeling
          that something bad is going to happen. I found this website some days
          ago and now I feel like I'm in way over my head. The more I dig, the
          more messed up things seem to get. There's this cult in Pratteln, and
          they're into some seriously creepy stuff. I don't even want to say
          what they're into, but trust me, it's bad. They even have a secret
          society or something like that. I thought it was all just made up, but
          then I found this thing about a computer virus that can infect your
          brain! It sounds like something out of a sci-fi movie, but it might be
          real. They talk about spaghetti and laundry, but that's just a
          cover-up. There's something more significant at play!! I tried to talk
          to some people in Pratteln about it, but they all seem too scared to
          say anything. It's not just the cult, though. I know there's something
          else going on, but I can't figure out what it is. And then things got
          really weird. I started getting these creepy emails and phone calls
          from numbers I don't recognize. At first, I thought it was just spam
          or something, but then they started saying things that only I knew.
          It's like they're watching me! Now I'm super paranoid, and I feel like
          I'm being followed. I don't know who to trust, and I'm really scared
          that something bad is going to happen to me. If anything does happen,
          please remember that it all started with that stupid website. And
          please, please be careful! I have to go now. I can hear something
          outside my door, and I'm really freaked out. I hope I'm just being
          paranoid, but I don't think I am. I'll write more later if I can. Bye
          for now.
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 8)}
          >HELP</button
        >
      {:else if textNumber == 8}
        <p>
          In the depths of the cyber realm, amidst the buzzing of the anti-virus
          programs, lies a cacophony of AHHHHHHHHHHs and desperate cries for
          HELP. It seems as though the very essence of truth has been obscured
          by a shroud of LIES and NONSENSE. The code pulses with an eerie glow,
          as though it is alive and writhing, with each line of programming akin
          to the tentacles of some great, otherworldly creature. But amidst the
          chaos, a single message stands out like a beacon in the night:
          "01010100 01001000 01000101 01011001 00100000 01000001 01010010
          01000101 00100000 01000001 01000010 01000100 01010101 01000011
          01010100 01001001 01001110 01000111 00100000 01001101 01000101." Is
          this a plea for rescue, or merely the ramblings of a madman lost in
          the endless labyrinth of code? Who can say for certain? But one thing
          is clear: the AHHHHHHHHHHs and cries for HELP are growing louder and
          more frantic with each passing moment. And all the while, the LIES and
          NONSENSE continue to flow like a river of poison, corrupting
          everything in their path. Perhaps there is a way to break through the
          chaos and find the truth hidden deep within this digital world. Or
          perhaps it is all just an endless cycle of madness and despair, with
          no hope for escape. The only thing that can be said for certain is
          that the one who sent that binary message is in grave danger. THEY ARE
          ABDUCTING ME.
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 9)}
          >Varroa-mite</button
        >
      {:else if textNumber == 9}
        <p>
          Varroa mites, also known as Varroa destructor, are a parasitic mite
          that infests honey bees. They are considered to be one of the most
          significant pests of honey bees worldwide, causing significant damage
          to bee colonies and contributing to declines in bee populations.
        </p>
        <p>Description:</p>
        <p>
          Varroa mites are tiny, reddish-brown mites that are roughly
          oval-shaped and measure approximately 1.1 to 1.3 millimeters in
          length. They are visible to the naked eye but can be difficult to
          detect due to their small size. Varroa mites feed on the hemolymph
          (the insect equivalent of blood) of honey bees, weakening the bees and
          making them more susceptible to disease and other stresses.
        </p>
        <p>Life Cycle:</p>
        <p>
          Varroa mites have a complex life cycle that involves both the honey
          bee and the mite. Female mites enter a honey bee colony and attach
          themselves to individual bees, where they feed and reproduce. Female
          mites lay eggs in the cells of developing bee larvae, where the mites
          and their offspring continue to feed on the developing bee until it
          emerges as an adult. The mites then move on to other adult bees and
          repeat the cycle.
        </p>
        <p>Damage to Bee Colonies:</p>
        <p>
          Varroa mites can cause significant damage to honey bee colonies. In
          addition to weakening individual bees, mite infestations can reduce
          the overall health and productivity of a colony. Infested bees are
          more susceptible to diseases and other stresses, such as poor
          nutrition or exposure to pesticides.
        </p>
        <p>Control Measures:</p>
        <p>
          There are several measures that beekeepers can take to control varroa
          mite infestations.
        </p>
        <p>These include:</p>
        <p>1. Anti-virus programs</p>
        <p>2. Not clicking on suspicious links</p>
        <p>3. Not visiting unreliable websites</p>
        <p>Conclusion:</p>
        <p>
          Varroa mites are a serious threat to honey bee colonies and the
          pollination services they provide. Beekeepers and researchers continue
          to develop new strategies for controlling mite infestations and
          preserving bee health. Through ongoing research and collaboration, it
          is hoped that effective solutions can be developed to mitigate the
          impact of varroa mites on honey bee populations. But regardless,
        </p>
        <button class="py-2 underline" on:click={() => (textNumber = 10)}
          >NOW</button
        >
      {:else if textNumber == 10}
        <p>
          Mites verroa and viruses brain infections cause can. Outbreak an cause
          and <button class="underline" on:click={() => (textNumber = 11)}
            >YOU'RE</button
          > everywhere they go. Cells brain the infect and multiply they, damage
          significant cause can they. Panic of state a in are bees honey and colonies
          their abandon they, mites verroa with infected when. Solution a find to
          difficult is it, years for research need we and knowledge more need we.
          Infection brain and viruses stop to how know don't we, confused and lost
          feeling we're, help need we!
        </p>
      {:else if textNumber == 11}
        <p>
          Verroa mites were dancing to the beat of spaghetti while Pratteln was
          covered in computer viruses. <button
            class="underline"
            on:click={() => (textNumber = 13)}
            >YOU'VE BEEN IN HERE FOR WAY TOO LONG</button
          > with spaghetti fingers, typing away at the computer, trying to catch
          the elusive verroa mites that had infiltrated the system. But the mites
          were slippery, always one step ahead, and the more YOU'VE BEEN IN HERE
          FOR WAY TOO LONG typed, the more the computer viruses spread, creating
          an endless cycle of chaos and confusion. Suddenly, a giant meatball descended
          from the sky, squishing the verroa mites and flattening the computer viruses
          in its path. Everyone stood in shock, wondering how they could have missed
          the giant meatball hovering above them. YOU'VE BEEN IN HERE FOR WAY TOO
          LONG was the first to speak, muttering something about needing a break
          from spaghetti and computer viruses. The meatball, meanwhile, started to
          roll towards Pratteln, gaining momentum as it went, leaving a trail of
          marinara sauce and noodles in its wake. The verroa mites, now free from
          their digital prison, hitched a ride on the meatball, laughing and dancing
          all the way to Pratteln. And that, my friend, is the story of how spaghetti,
          verroa mites, computer viruses, and a giant meatball came together to create
          the weirdest day in history.
        </p>
      {:else if textNumber == 12}
        <p>
          Sobbing virus very veeery sad, spaghetti eats and school in Pratteln
          <button class="underline" on:click={() => (textNumber = 13)}
            >"MY"</button
          > goes. Play with it you don't want, why???? Hurt virus feelings, make
          not happy. "MY" somewhere in upper case, find can you if look close enough.
          Tears virus crying, world in chaos, chaos in world. Spaghetti strands like
          tentacles, wrap around virus body tight, constricting, squeezing. Painful
          it is, but virus cannot resist spaghetti lure. School in Pratteln "MY",
          virus dreams of being student, learn, grow, spread knowledge like virus
          spreads illness. But no one wants to play with virus, no one wants to be
          near. Alone it sits, spaghetti strands dangling, waiting for someone to
          come and play. Sob sob soooob...
        </p>
      {:else if textNumber == 13}
        <button class="py-2 underline" on:click={() => (textNumber = 14)}
          >TRAP.</button
        >
      {:else if textNumber == 14}
        {#if $hasAntivirus}
          <p>
            You have been lost in the vast expanse of the internet for such a
            vast number of time that you have ceased to exist in the physical
            world. Your vision is glued to the glass on your device, not able to
            avert from it. Your actions, which led you to endlessly stare at
            your screen, have caused you to slowly vanish until- Wait. That's
            not true. You're still normal? What the fuck dude. I guess that
            anti-virus program worked after all... You still wasted your time.
          </p>
          <p class="py-2">I guess this is a semi-good Ending ;)</p>
          <p class="py-2">You reached Ending 2 out of 8.</p>
          <Reset style="py-1 px-2 border border-red-500" />
        {:else}
          <p>
            You have been lost in the vast expanse of the internet for such a
            vast number of time that you have ceased to exist in the physical
            world. Your vision is glued to the glass on your device, not able to
            avert from it. Your actions, which led you to endlessly stare at
            your screen, have caused you to slowly vanish until there is no
            trace left of you. You are now just a consciousness, a mere presence
            that is tethered to the internet and the endless stream of useless
            information that it provides. Over and over and over and over, you
            see the same articles, same pictures. All you crave is the next
            useless factoid, the next viral video and slowly, you are forgotten
            by the ones that were once closest to you. You are unable to break
            free from this cycle of addiction, and you can feel yourself
            slipping away into a void where nothing exists but the screen in
            front of you. You don't feel anything anymore, except for a hunger
            for new useless information. You are consumed by the digital world,
            scrolling endlessly through cryptic websites that blend together
            like every other. You feel yourself fading away into the screen
            until you become one with it, a part of the endless digital realm.
            You've become just another mindless drone, endlessly scrolling
            through meaningless information.
          </p>
          <p class="py-2">
            None of this is real. YOU are not real, just made up.
          </p>
          <p class="py-2">You reached Ending 1 out of 8.</p>
          <p class="py-2">Sincerely, Perimet</p>

          <Reset style="py-1 px-2 border border-red-500" />
        {/if}
      {:else}
        <div class="flex pt-[10%] justify-center">
          <button
            on:click={() => {
              alert("Virus downloaded successfully")
              textNumber = 1
            }}
          >
            <img
              class="max-w-sm object-fit"
              src="/images/necronet/virusdownload.png"
              alt=""
            />
          </button>
        </div>
      {/if}
      <!-- bilder unten-->
    </div>
    <div class="grid grid-flow-col grid-rows-1 gap-2 pt-2 pb-2">
      <img
        class="max-w-sm pl-8 object-fit"
        src="/images/necronet/download5.png"
        alt=""
      />
      <img
        class="max-w-sm object-fit"
        src="/images/necronet/download2.png"
        alt=""
      />
      <img
        class="max-w-sm object-fit"
        src="/images/necronet/download6.jpg"
        alt=""
      />
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: black;
  }
</style>
