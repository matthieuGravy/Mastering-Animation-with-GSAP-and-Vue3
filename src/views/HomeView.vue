<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

export default {
  setup() {
    const square = ref(null);
    const square3 = ref(null);

    onMounted(() => {
      gsap.to(square.value, {
        x: 100,
        y: 0,
        duration: 10,
      });
      gsap.to("h1", {
        color: "yellow",
        fontSize: "2vh",
        duration: 5,
      });
      gsap.from(".square2", {
        opacity: 0,
        x: 300,
        duration: 3,
      });
      gsap.to(".joueur", {
        y: 200,
        ease: "power4",
        delay: 2,
        repeatDelay: 2,
      });
      //stagger pour les décalages de temps
      gsap.to(".joueur2", {
        x: 200,
        ease: "expo.on",
        stagger: {
          //se partager le temps avec amount
          amount: 1,
          //from: "start",
          from: "end",
        },
      });
      //keyframes pour animation
      gsap.to(".rond1", {
        keyframes: [
          { duration: 0.3, y: 100 },
          { duration: 0.3, scale: 0.5 },
          { duration: 0.3, y: 300 },
        ],
      });

      gsap.to(".rond2", {
        keyframes: [
          { duration: 0.5, x: 200 },
          { duration: 0.5, scale: 1.2 },
          { duration: 0.5, x: 0 },
        ],
      });

      gsap.to(".rond3", {
        keyframes: [
          { duration: 0.8, rotation: 180 },
          { duration: 0.8, scale: 0.8 },
          { duration: 0.8, rotation: 0 },
        ],
      });
      //utilisation de fonction flèchée
      gsap.to(".jour2", {
        y: 100,
        repeat: 1,
        onComplete: () => console.log("animation terminée"),
        onStart: () => console.log("animation début d'animation"),
        onUpdate: () => console.log("animation en cours"),
        onRepeat: () => console.log("animation repetée"),
      });

      gsap.to(".joueur3", {
        x: 300,
        //random ça permet de choisir une position au hasard aléatoire
        // on pourrait utiliser des vlauers aléatoire pour un tableau x:"random[(50,20, -40, 60)]" pratique pour un jeux vidéo
        y: "random(-100, 100)",
        ease: "expo.on",
        stagger: 0.5,
        duration: 0.2,
      });
    });
    const handleClick = () => {
      //       gsap.to(square.value, {
      //fromto pour éviter les bug sur le bouton
      gsap.fromTo(
        square3.value,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
        }
      );

      //Insérer un délai par exemple après le clic sur une div
      gsap.to(".square2", {
        x: 150,
        y: 200,
        opacity: 1,
        duration: 2,
        delay: 2,
        repeatDelay: 2,
      });
    };

    return {
      handleClick,
      square,
      square3,
    };
  },
};
</script>
<template>
  <main>
    <div class="div1">
      <h1>test je modifie titre</h1>
      <div class="square" ref="square"></div>
      <div class="square2" ref="square2"></div>
      <div class="square3" ref="square3"></div>
      <button class="btn" @click="handleClick">Cliquez ici</button>
      <h2>les ease</h2>
      <div class="joueur" ref="joueur"></div>
    </div>
    <div class="div2">
      <div class="joueur2" ref="joueur2"></div>
      <div class="joueur2" ref="joueur2"></div>
      <div class="joueur3"></div>
      <div class="circle rond1"></div>
      <div class="circle rond2"></div>
      <div class="circle rond3"></div>
    </div>
    <div class="div3"></div>
  </main>
</template>

<style lang="scss">
main {
  background-color: blue;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-column: 1fr;
  grid:
    "bloc1" 100vh
    "bloc2" 100vh;

  .div1 {
    grid-area: bloc1;
    background-color: red;
    padding-top: 10vh;
    .square {
      background-image: url(../assets/images/walker.jpeg);
      background-size: contain;
      width: 150px;
      height: 150px;
    }
    .square2 {
      height: 20px;
      width: 20px;
      margin: auto;
      background-color: orange;
    }
    .square3 {
      margin: auto;
      height: 20px;
      width: 20px;
      margin: auto;
      background-color: violet;
    }
    .button {
      display: block;
      margin: auto;
    }
    .joueur {
      height: 5rem;
      width: 5rem;
      background-image: url(../assets/images/joeur.jpg);
      background-size: contain;
    }
  }
  .div2 {
    grid-area: bloc2;
    background-color: purple;

    .joueur2 {
      background-color: white;
      height: 10rem;
      width: 10rem;
    }
    .joueur3 {
      background-color: orange;
      height: 10rem;
      width: 10rem;
    }
    .circle {
      margin: auto;
      border-radius: 50%;
      background-color: white;
      height: 10rem;
      width: 10rem;
    }
  }
}
</style>
