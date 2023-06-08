<template>
  <div class="bg">
    <router-view />
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import axios from 'axios'

const isDark = useDark();
const toggleDark = useToggle(isDark);


</script>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: 'Index',
    titleTemplate: '%s - Appwork'
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common.Authorization = 'Token ' + token
      this.$store.state.isAuthenticated = true
    } else {
      axios.defaults.headers.common.Authorization = ''
    }
  },
}
</script>

<style lang="scss">
a,
h1,
h2,
h3,
h4,
h5,
h6,
td,
th,
p,
span,
label,
button {
  font-family: 'iranyekan-fanum' !important;
}

[theme="dark"] {
  background: rgb(13, 23, 38);
  color: #fff;
}

html.dark {
  color-scheme: dark;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bg-mine {
  background-color: white;
  color: #444
}

.dark .bg-mine {
  background-color: rgb(13, 23, 38);
  color: white
}

::placeholder {
  color: #052B61;
  opacity: 1;
  /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #052B61;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #052B61;
}

.lightertext {
  color: #052B61
}

.normaltext {
  color: rgb(134, 158, 192);
}

.lightercard {
  background: white;
  border: solid 1px rgb(217, 229, 245);
}

.darkercard {
  background: #052B61;
  color: rgb(229, 240, 255);
}


.bg {
  background: rgb(244 247 251);
}

.dark .darkercard {
  background: rgb(229, 240, 255);
  color: #052B61;
}

.dark .bg {
  background: #0d1726;
}

.dark .lightertext {
  color: white
}

.dark .normaltext {
  color: rgb(134, 158, 192)
}

.dark ::placeholder {
  color: rgb(134, 158, 192);
  opacity: 1;
  /* Firefox */
}

.dark .lightercard {
  background: rgb(15, 28, 46);
  color: rgb(229, 240, 255);
  border: solid 2px rgb(11, 21, 36)
}



.dark :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(134, 158, 192);
}

.dark ::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(134, 158, 192);
}


.half {
  width: 50%;
  text-align: right;
}

.text-half {
  padding: 19% 6% 0 0;
}

.text-half input {
  width: 55%
}

.text-half button {
  width: 100px;
}

.mobimage {
  width: 495px;
  margin-left: 50px;
}


.onphone {
  display: none
}

.lists {
  width: 92%;
}

.modal-vue3-content {
  width: 50% !important;
  top: 4% !important;
}

@media only screen and (max-width: 1100px) {
  .lists {
    width: 100%;
  }


}

@media only screen and (max-width: 899px) {
  .half {
    width: 100%;
    text-align: center;
  }

  .modal-vue3-content {
    width: 90% !important;
    top: 10% !important;
  }

  .text-half {
    padding: 2%
  }

  .text-half input {
    width: 80%
  }

  .text-half button {
    width: 20%;
    text-align: center;
  }

  .mobimage {
    width: 100%;
    margin-left: 0px;
  }

  .notphone {
    display: none;
    width: 0
  }

  .onphone {
    display: block
  }

  .hundred {
    width: 95% !important;
    margin: auto
  }


}

@media only screen and (max-width:400px) {
  .half {
    width: 100%;
    text-align: center;
  }

  .text-half {
    padding: 2%
  }

  .text-half input {
    width: 70%
  }

  .text-half button {
    width: 30%;
  }


}


/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.dark ::-webkit-scrollbar-track {
  background: #888;
}

/* Handle */
.dark ::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}

/* Handle on hover */
.dark ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
