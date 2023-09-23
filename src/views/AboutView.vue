<template>
  <div class="container-wrapper">
    <div class="wrapper">
      <div class="img1"></div>
      <div class="title1">
        <h2>Lorem ipsum dolor sit. <span>Lorem, ipsum.</span></h2>
      </div>
      <div class="img2"></div>
      <div class="title2">
        <h2>titre principal</h2>
      </div>
    </div>
    <div class="blank"></div>
  </div>
  <div class="teams-container"></div>
  <div class="encadrement-container"></div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  setup() {
    onMounted(() => {
      startAnimations();
    });

    const startAnimations = () => {
      // Enregistrement du plugin ScrollTrigger de GSAP
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper", // L'élément qui déclenche l'animation
          start: "top top", // Point de départ de l'animation
          end: "+=300%", // Point de fin de l'animation
          pin: true, // Épingler l'élément à l'écran pendant l'animation
          scrub: true, // Effectuer l'animation en fonction du défilement
          onUpdate: updatePercentage, // Fonction appelée lors de la mise à jour de la progression (si nécessaire)
        },
      });

      // Animation de l'image img1 : augmentation de la largeur et de la hauteur
      tl.fromTo(
        ".img1",
        { width: "50%", height: "80%" },
        { width: "100%", height: "100%" },
        0
      );

      // Animation du titre title1 : apparition avec une opacité de 1
      tl.to(".title1", { duration: 0.5, opacity: 1 }, 1);

      // Animation du titre title1 : disparition avec une opacité de 0
      tl.to(".title1", { duration: 0.5, opacity: 0 }, 2);

      // Animation de l'image img2 : augmentation de la hauteur jusqu'à 100%
      tl.fromTo(
        ".img2",
        { width: "100%", height: "0%" },
        { width: "100%", height: "100%" },
        2
      );

      // Animation du titre title2 : apparition avec une opacité de 1
      tl.fromTo(".title2", { opacity: 0 }, { opacity: 1 }, 2.2);

      // Animation de l'image img1 : disparition avec une opacité de 0
      tl.to(".img1", { duration: 0, opacity: 0 }, 3);

      // Animation de l'image img2 : réduction de la largeur et de la hauteur, déplacement vers le haut
      tl.to(
        ".img2",
        { duration: 1, width: "60%", height: "60%", x: "-0%", y: "-50%" },
        3
      );

      // Animation du titre title2 : disparition avec une opacité de 0
      tl.fromTo(".title2", { opacity: 1 }, { opacity: 0 }, 2.8);
    };

    const updatePercentage = () => {
      // Code pour la mise à jour de la progression (si nécessaire)
    };

    return {
      startAnimations,
    };
  },
};
</script>

<style lang="scss">
.container-wrapper {
  background-color: black;
  .blank {
    width: 100%;
    height: 100vh;
  }

  .wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;

    .img1 {
      background-image: url("@/assets/images/joeur.jpg");
      width: 0%;
      height: 0%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .title1 {
      position: absolute;
      top: 50%;
      left: 15%;
      font-size: 20px;
      transform: translate(-50%, -50%);
      opacity: 0;

      span {
        font-size: 20px;
        font-weight: 400;
        display: block;
      }
    }

    .img2 {
      background-image: url("@/assets/images/panier.jpg");
      width: 100%;
      height: 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center bottom;
    }

    .title2 {
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      font-size: 60px;
      transform: translate(-50%, -50%);
      transform-origin: center center;
      text-align: center;
      line-height: 60px;
      opacity: 0;
    }
  }
}
</style>
