<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

export default {
  setup() {
    onMounted(() => {
      // Effets gsap
      gsap.registerEffect({
        name: "AnimeImg",
        effect: (targets, config) => {
          return gsap.to(targets, {
            duration: config.duration,
            y: 200,
            x: 300,
            scale: 1.4,
            rotation: 360,
          });
        },
        defaults: { duration: 2 },
      });

      gsap.effects.AnimeImg(".charly");

      // ça remet à 0, = réinitialiser
      gsap.set(".elise", {
        opacity: 0.5,
        duration: 1,
      });

      //effet yoyo = revient à la position initiale qd terminé
      gsap.to(".elise", { y: 250, repeat: 1, yoyo: true });

      //les méthodes tween
      const anim = gsap.to(".elise", { x: 250, repeat: 1, yoyo: true });

      //ça va permettre de modifier anim qui fait bouger sur la gauche
      anim.duration(1);
      //on peut stopper l'anim avec pause, elle n'a plus d'effet
      anim.pause();
      //relanceer l'animation
      anim.resume();
      //jouer l'animation
      anim.play();
      //methode kill tue le tween
      //anim.kill()
      // Sauter à 2 secondes dans l'animation
      anim.seek(2);
      setTimeout(() => {
        anim.restart();
      }, 3000);

      //time line
      // permet de gèrer une durée, ici elle se jouent chacune à la suite de l'autre
      const tl = gsap.timeline({
        //paramètre par défault des timeline
        //on peut ajouter des paramètres par défaut
        defaults: {
          duration: 1,
          ease: "bounce",
          repeat: "2",
          // on peut continuer avec tout ce qu'on a vu
          //on peut utiliser une fonction
          onComplete: () => console.log("animation terminée"),
        },
      });
      tl.to(".france", {
        y: 0,
        autoAlpha: 1,
        //SUPER UTILE
        //propriété pour gèrer l'opacity et la visibilité
      });
      // si je rajoute à ceci 1 :    tl.to(".france", { y: 50 });
      // ça donnera position absolue !
      //   tl.to(".france", { y: 50 },1);
      // attention à la chronologie
      //on peut faire relative :
      //   tl.to(".france", { y: 50 }, '-=50');
      // Ou on peut dire deirectemnt à la fin de l'anim précédente
      //    tl.to(".gaga", { y: 50 }, '>');
      // démarrer en meme temps
      //    tl.to(".gaga", { y: 50 }, '<');
      //    tl.to(".gaga", { y: 50 }, '<0.5');
      tl.to(".france", { y: 50 }, 1);
      tl.to(".gaga", { x: 50 });
      tl.to(".homer", { x: 50 });

      // on peut encore utiliser un settimeout
      setTimeout(() => {
        tl.play();
      }, 10000);

      //LABEL
      // on peut ajouter des label
      tl.addLabel("endFrance", "-=0.75");
    });
  },
};
</script>

<template>
  <div class="doco1">
    <div class="bro"></div>
    <div class="bro1">
      <div class="charly"></div>
      <div class="elise"></div>
    </div>
    <div class="bro2">
      <div class="france"></div>
      <div class="gaga"></div>
      <div class="homer"></div>
    </div>
  </div>
</template>
<style lang="scss">
.doco1 {
  background-color: fuchsia;
  height: 100vh;
  width: 100%;
  .bro {
    background-color: wheat;
    height: 10vh;
  }
  .bro1 {
    background-color: white;
    height: 10vh;
    .charly {
      height: 10vh;
      background-color: green;
      width: 20vh;
    }
    .elise {
      background-color: rosybrown;
      height: 10vh;
      width: 10vh;
    }
  }
  .bro2 {
    margin-top: 30vh;
    background-color: yellow;
    height: 10vh;
    .france {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-50px);
      width: 10vh;
      height: 10vh;
      background-color: aqua;
    }
    .gaga {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-50px);
      width: 10vh;
      height: 10vh;
      background-color: blanchedalmond;
    }
    .homer {
      width: 10vh;
      height: 10vh;
      background-color: chocolate;
    }
  }
}
</style>
