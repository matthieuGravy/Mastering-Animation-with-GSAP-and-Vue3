<template>
  <h1>scrollTrigger</h1>
  <div class="box box1">
    <h2>box1</h2>
  </div>
  <div class="box box2"><h2>box2</h2></div>
  <div class="box box3"><h2>box3</h2></div>
  <div class="box box4"><h2>box4</h2></div>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".box h2", {
        duration: 1,
        y: 0,
        scale: 1.5,
        autoAlpha: 1,

        //je peux ajouter le scrolltrigger dedans
        // je peux le définir sur les classes pour le lancer
        // je le défini en propriété
        //scrollTrigger: ".box2 h2",

        //je peux aussi le définir en objet
        /*
        scrollTrigger: {
          trigger: ".box2 h2",
          markers: true,
          //on peut modifier les markers de départ
          //start: "top center",
          //on peut aussi utiliser des valeurs pour pousser le start par ex
          start: "top+=50% 10%",
          // on peut faire la meme chose pour la fin de l'anim
          end: "bottom 10%",
          //utilisation des event
          // ici on rentre dans e tween
          onEnter: () => console.log("enter"),
          onLeave: () => console.log("sortie"),
          onEnterBack: () => console.log("revient à la sortie"),

          // on peut utiliser
          //toggleActions:"play pause resume complete none reverse reset"

          //scrub permet de jouer les animations en meme temps que le scroll
          scrub: true,
          //on peut utiliser aussi le temps
          // scrub : 1,
          scrub: 1,
        },*/
      });
      ScrollTrigger.create({
        trigger: ".box2",
        pin: true,
        markers: true,
        start: "top 50%",
        end: "bottom 50%",
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 50px;
}
.box1 {
  background-color: rosybrown;
}
.box2 {
  background-color: pink;
  h2 {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);
  }
}
.box3 {
  background-color: salmon;
}
.box4 {
  background-color: yellow;
}
</style>
