<template id=app>
  <div class="loader">
    <div class="dots"></div>
    <div class="dots"></div>
    <div class="dots"></div>
    <div class="dots"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
    }
  };
</script>

<style scoped>
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .loader .dots {
    position: absolute;
    padding: 10px;
    border-radius: 50%;
    background: lightcoral;
    -webkit-animation: myani 1s ease-in-out 0s infinite;
    animation: myani 1s ease-in-out 0s infinite;
  }

  .loader .dots:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  .loader .dots:nth-child(2) {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  .loader .dots:nth-child(3) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .loader .dots:nth-child(4) {
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
  }

  @keyframes myani {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
      opacity: 0;
    }
</style>
