<template>
  <div style=" overflow: hidden;width: 100%; position: relative; top: -5px; height: 100%">
    <div
      style="width: 200px;border-left: solid 1px rgba(150,150,150, 0.4);float: right; height: 100%; position: fixed; right: 0"
      class="navdark side">
      <div class="css-vurnku"><a data-bn-type="link" class="css-1gufj2j" href="/en/my/dashboard">
          <router-link to="/dashboard" :class="{}">
            <div
              style="  box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
              <i style="float: right; margin-top: -5px; margin-left: 15px;font-size: 22px" class="far fa-user">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                </svg>
              </i>
              <div style="float: right ; font-size: 20px;">داشبورد</div>
            </div>
          </router-link>
        </a></div>
    </div>
    <div
      style="width: 100%;border-right: 1px solid rgb(234, 236, 239);float: right; height: 100%; right: 200px; position: relative">
      <div style="height: 120px;width: 100%">
        <div style="float: left; width: 100px; height: 100px">
          <img src="/person.png" style="width: 70%; height: 70%; margin: 10%" alt="">
        </div>
      </div>

      <div style="height: 550px;width: 100%;" class="navdark"></div>


    </div>

  </div>
</template>
  
<script>
window.onscroll = function () { myFunction() };

function myFunction() {
  var pos = 113 - parseInt(document.documentElement.scrollTop)
  if (pos < 0) {
    pos = 0
  }
  document.querySelector('.side').style.top = pos + 'px'
}

import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      general: [],
      topsticker: [],
      bottomsticker: [],
      markets: [],
      USDTprice: 0,
      USDTrial: 0,
      posts: [],
      counter: 0,
      board: [],
    }
  },
  methods: {
    async getGeneral() {
      await axios
        .get('general')
        .then(response => response.data)
        .then(response => {
          this.general = response
        })
    },
    async getTopSticker() {
      await axios
        .get('topsticker')
        .then(response => response.data)
        .then(response => {
          this.topsticker = response
        })
    },
    async getBottomSticker() {
      await axios
        .get('bottomsticker')
        .then(response => response.data)
        .then(response => {
          this.bottomsticker = response
        })
    },
    async getMarkets() {
      await axios
        .get('oltradeinfo4')
        .then(response => response.data)
        .then(response => {
          this.markets = response
          this.count()
        })
    },
    async getUsdtPrice() {
      await axios.post("/cp_ticker", { sym: "USDT" }).then((response) => {
        this.USDTprice = response.data.buy;
        this.USDTrial = response.data.rial
        setTimeout(() => { }, 5000);
      });
    },
    async getPosts() {
      await axios.get("/mainpageposts")
        .then(response => response.data)
        .then((response) => {
          this.posts = response;
          setTimeout(() => { }, 5000);
        });
    },
    count() {
      this.board = this.markets.slice(this.counter, this.counter + 4)
      if (this.counter > this.markets.length - 4) {
        this.counter = 0
      } else {
        this.counter = this.counter + 4
      }
      setTimeout(() => {
        this.count()
      }, 5000);
    },
  },
  created() {
    this.getGeneral()
    this.getTopSticker()
    this.getBottomSticker()
    this.getMarkets()
    this.getUsdtPrice()
    this.getPosts()

  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.svgs {
  fill: currentColor
}

.positive {
  background: #E5FAF3;
  text-decoration: none !important
}

.dark .positive {
  background: rgb(33, 34, 52);
  text-decoration: none !important
}

.negative {
  background: #FFEBEE;
  text-decoration: none !important
}

.dark .negative {
  background: rgb(22, 42, 56);
  text-decoration: none !important
}

.dark .h1 {
  color: rgb(229, 240, 255)
}
</style>