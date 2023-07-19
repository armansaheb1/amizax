<template>
    <div>
        <div class="onphone" v-if="!notphone">
            <div class="card darkalert" v-if="(!price || !sym) && alert && false">
                <div class="card-body" style="text-align: right;">
                    <h5 class="lightertext">{{ alert.title }}</h5><br>
                    <p class="normaltext" style="font-size: 14px">{{ alert.text }}</p>
                </div>
            </div>
            <div class="card navdark" v-if="price && sym">
                <div class="card-body">
                    <h3 style=" color:rgba(150,150,150, .8); text-align: right" v-if="price && this.sym !== 'USDT'">قیمت :
                        <a style="font:20px ; font-family: 'UD'!important; text-decoration: none;" class="lightertext"
                            v-if="price.rial < 1000">{{
                                price.rial.toFixed(6)
                            }}</a><a style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                            class="lightertext" v-else>{{
                                parseInt(price.rial
                                ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</a>
                    </h3>
                    <h3 style=" color:rgba(150,150,150, .8); text-align: right" v-if="price && this.sym !== 'USDT'">قیمت
                        دلاری : <a style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                            class=" lightertext">{{
                                (price.buy).toFixed(6) }}</a>
                    </h3>

                    <h3 style=" color:rgba(150,150,150, .8); text-align: right" v-if="price && this.sym === 'USDT'">قیمت :
                        <a style="font:20px ; font-family: 'UD'!important; text-decoration: none;" class="lightertext">{{
                            parseInt(price.rial).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                ",") }}</a>
                    </h3>
                    <h3 style=" color:rgba(150,150,150, .8); text-align: right" v-if="price && this.sym === 'USDT'">قیمت
                        دلاری : <a style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                            class="lightertext">{{
                                (price.buy).toFixed(6) }}</a>
                    </h3>
                </div>
            </div>
            <div class="card navdark">
                <div class="card-header">
                    <h4>فروش</h4>
                </div>
                <b-card>
                    <div id="tradingview_1be21"></div>
                </b-card>


                <div style="clear:both"></div>
                <b-card>
                    <br><br>
                    <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>
                    <fieldset class="demo-vertical-spacing-sm">
                        <form @submit.prevent="submit()">
                            <h2 style="text-align:center; font-family:'UD'!important">{{ sym }}</h2>
                            <button type="button" @click="listshow()" v-if="sym" class="btn buttonblue">تغییر ارز</button>
                            <br><br>
                            <div class="list navdark" v-if="!hidelist">
                                <input @input="search()" type="text" class="form-control navdark list" v-if="!hidelist"
                                    placeholder="search" v-model="searchtxt"
                                    style="width: 80%;margin: auto;border-radius: 5px 5px 0 0; border-color:rgba(150,150,150, .8) !important; text-align: center;">
                                <div style="width: 80%;margin: auto;height:165px; overflow-x:hidden ;overflow-y:scroll ; border: solid rgba(150,150,150, .8) .2px ; border-radius: 0 0 5px 5px; font-size: 13px!important"
                                    id="my-list-id">
                                    <button id="USDT" v-if="'USDT'.includes(searchtxt.toUpperCase())" class=" curbtn"
                                        onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                        onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                                        style="height:55px; width: 100% ; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .8) ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                        @click="buttonchange('USDT')" selected><img
                                            style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/usdt.svg`"
                                            :onerror="`javascript:this.src='/color/usdt.png';`" alt=""><br>USDT
                                    </button>
                                    <button class=" curbtn" onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                        onMouseOut="this.style.background='rgba(0,0,0,0)'" v-for="(value, key) in leverage"
                                        v-bind:key="'n' + key" :id="key" type="button"
                                        style="height:55px; width: 100% ; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .8) ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                        @click="buttonchange(key.replace('USDT', ''))" selected><img
                                            style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${key
                                                .replace('USDT', '')
                                                .toLowerCase()}.svg`" :onerror="`javascript:this.src='/color/${key
        .replace('USDT', '')
        .toLowerCase()}.png';`" alt=""><br>{{ key.replace('USDT', '') }} </button>
                                </div>
                                <br><br>
                            </div>






                            <div v-if="sym">

                                <b-form-group label="">
                                    <h6 style="float:right; color:rgba(150,150,150, .8); width: 80%; margin-right: 10%; text-align: right"
                                        v-if="price">موجودی : <a @click="balanceset()" class="btn"
                                            style="font:12px 'UD'; padding:5px 20px;background:rgba(150,150,150,.2) ">{{
                                                rial
                                            }}</a> {{ sym }}
                                    </h6><br>

                                    <div style="width: 80%; margin:auto" class="card navdark">

                                        <div class="input-group mb-3" style="direction:ltr ; margin:0">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text buttonblue"
                                                    style="border-radius: 5px 0 0 5px;" id="basic-addon1">{{ sym }} <a
                                                        v-if="!sym">-</a></span>
                                            </div>
                                            <input class="form-control navdark" autocomplete="off" min="1000000" step="any"
                                                required id="amount" type="number" v-model="amount" />
                                        </div>
                                        <table style="width:98%;margin-left: 10px">
                                            <tr>
                                                <td
                                                    style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                    0%</td>
                                                <td
                                                    style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                    25%</td>
                                                <td
                                                    style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                    50%</td>
                                                <td
                                                    style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                    80%</td>
                                                <td
                                                    style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                    100%</td>
                                            </tr>
                                        </table>
                                        <input v-if="rial | rial === 0" style="width:85%; margin: auto" type="range"
                                            class="form-range" id="customRange1" :min="0" :max="rial" v-model="amount"><br>
                                    </div>

                                    <br>
                                    <h4 style="text-align:center; width:100% ; clear:both">معادل</h4><br>
                                    <div class="card navdark" style="width: 80%; margin:auto">
                                        <div class="input-group mb-3" style="direction:ltr ; margin-bottom: 0px!important;">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1">ریال</span>
                                            </div>
                                            <input class="form-control navdark" autocomplete="off" required id="amount2"
                                                type="text" v-model="getting" />
                                        </div>
                                    </div>
                                </b-form-group>
                                <div style="clear: both;"></div>
                                <div style="width: 80%; margin-right:10%; float: right;">
                                    <a style=";font-size:12px; float: right">حداقل میزان خرید ۱۰۰۰,۰۰۰ ریال میباشد</a><br>
                                    <h6 style="float:right; color:rgba(150,150,150, .8)" v-if="price">دریافتی : <a
                                            style="font:16px 'UD'; padding:5px 20px ">{{ getting }}</a></h6>
                                    <br><br>

                                </div>
                                <div style="clear: both;"></div>

                                <button class="btn buttonblue" style="margin:auto" id="submit" type="submit"
                                    variant="dark">درخواست
                                    خرید</button>
                                <br><br>
                            </div>
                        </form>
                    </fieldset>
                </b-card><br><br>
                <div>
                    <div id="tradingview_1be21"></div><br>

                </div><br>
            </div>
        </div>
        <div class="notphone" v-if="notphone">
            <div style="width: 68%; float: left" class="">
                <div class="card darkalert" v-if="(!price || !sym) && alert && false">
                    <div class="card-body" style="text-align: right;">
                        <h4>{{ alert.title }}</h4>
                        <p>{{ alert.text }}</p>
                    </div>
                </div>
                <div class="card navdark" v-if="price && sym">
                    <div class="card-body">
                        <h4 style="float:right; color:rgba(150,150,150, .8)" v-if="price && this.sym !== 'USDT'">قیمت : <a
                                style="font:20px ; font-family: 'UD'!important; text-decoration: none;" class="lightertext"
                                v-if="price.rial < 1000">{{
                                    price.rial.toFixed(6)
                                }}</a><a style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                                class="lightertext" v-else>{{
                                    parseInt(price.rial
                                    ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</a></h4>
                        <h4 style="float:left; color:rgba(150,150,150, .8)" v-if="price && this.sym !== 'USDT'">قیمت دلاری :
                            <a style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                                class=" lightertext">{{
                                    (price.buy).toFixed(6) }}</a>
                        </h4>

                        <h4 style="float:right; color:rgba(150,150,150, .8)" v-if="price && this.sym === 'USDT'">قیمت : <a
                                style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                                class="lightertext">{{
                                    parseInt(price.rial).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                        ",") }}</a></h4>
                        <h4 style="float:left; color:rgba(150,150,150, .8)" v-if="price && this.sym === 'USDT'">قیمت دلاری :
                            <a style="font:20px ; font-family: 'UD'!important; text-decoration: none;"
                                class="lightertext">{{
                                    (price.buy).toFixed(6) }}</a>
                        </h4>
                    </div>
                </div>
                <br v-if="price">
                <div class="card navdark">
                    <div id="tradingview_1be21"></div>
                </div>
            </div>
            <div style="width: 30%; float: right">

                <div class="card navdark">
                    <div v-if="sym" class="card-header">
                        <h4 style="text-align:center; font-family:'UD'!important">{{ sym }}</h4>
                    </div>
                    <b-card>
                        <div id="tradingview_1be21"></div>
                    </b-card>


                    <div style="clear:both"></div>
                    <b-card>


                        <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>
                        <fieldset class="demo-vertical-spacing-sm">
                            <form @submit.prevent="submit()">
                                <br>
                                <button type="button" @click="listshow()" style="margin: 6px" v-if="sym"
                                    class="btn buttonblue">تغییر
                                    ارز</button>
                                <br><br>

                                <div class="list navdark" v-if="!hidelist">
                                    <input @input="search()" type="text" class="form-control navdark list" v-if="!hidelist"
                                        placeholder="search ..." v-model="searchtxt"
                                        style="width: 80%;margin: auto;border-radius: 5px 5px 0 0; border-color:rgba(150,150,150, .8) !important; border: 0.2px solid rgba(150, 150, 150, 0.3) !important;">
                                    <div style="width: 80%;margin: auto;height:165px; overflow-x:hidden ;overflow-y:scroll ; border: solid rgba(150,150,150, .8) .2px ; border-radius: 0 0 5px 5px; font-size: 13px!important"
                                        id="my-list-id">
                                        <button id="USDT" v-if="'USDT'.includes(searchtxt.toUpperCase())" class=" curbtn"
                                            onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                            onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                                            style="height:55px; width: 100% ; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .8) ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                            @click="buttonchange('USDT')" selected><img
                                                style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/usdt.svg`"
                                                :onerror="`javascript:this.src='/color/usdt.png';`" alt=""><br>USDT
                                        </button>
                                        <button class=" curbtn"
                                            onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                            onMouseOut="this.style.background='rgba(0,0,0,0)'"
                                            v-for="(value, key) in leverage" v-bind:key="'n' + key" :id="key" type="button"
                                            style="height:55px; width: 100% ; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .8) ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                            @click="buttonchange(key.replace('USDT', ''))" selected><img
                                                style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${key
                                                    .replace('USDT', '')
                                                    .toLowerCase()}.svg`" :onerror="`javascript:this.src='/color/${key
        .replace('USDT', '')
        .toLowerCase()}.png';`" alt=""><br>{{ key.replace('USDT', '') }} </button>
                                    </div>
                                    <br><br>
                                </div>






                                <div v-if="sym">

                                    <b-form-group label="">
                                        <h6 style="float:right; color:rgba(150,150,150, .8); width: 80%; margin-right: 10%; text-align: right"
                                            v-if="price">موجودی : <a @click="balanceset()" class="btn"
                                                style="font:12px 'UD'; padding:5px 20px;background:rgba(150,150,150,.2) ">{{
                                                    rial
                                                }}</a> {{ sym }}
                                        </h6><br>

                                        <div style="width: 80%; margin:auto" class="card navdark">

                                            <div class="input-group mb-3" style="direction:ltr ; margin:0">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text buttonblue"
                                                        style="border-radius: 5px 0 0 5px;" id="basic-addon1">{{ sym }} <a
                                                            v-if="!sym">-</a></span>
                                                </div>
                                                <input class="form-control navdark" autocomplete="off" min="1000000"
                                                    step="any" required id="amount" type="number" v-model="amount" />
                                            </div>
                                            <table style="width:98%;margin-left: 10px">
                                                <tr>
                                                    <td
                                                        style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                        0%</td>
                                                    <td
                                                        style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                        25%</td>
                                                    <td
                                                        style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                        50%</td>
                                                    <td
                                                        style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                        80%</td>
                                                    <td
                                                        style="text-align:center; color:rgba(150,150,150, .8) ; font: 12px 'UD'">
                                                        100%</td>
                                                </tr>
                                            </table>
                                            <input v-if="rial | rial === 0" style="width:85%; margin: auto" type="range"
                                                class="form-range" id="customRange1" :min="0" :max="rial"
                                                v-model="amount"><br>
                                        </div>


                                        <h5 style="text-align:center; width:100% ; clear:both; margin: 5px 0">معادل</h5>
                                        <div class="card navdark" style="width: 80%; margin:auto">
                                            <div class="input-group mb-3"
                                                style="direction:ltr ; margin-bottom: 0px!important;">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1">ریال</span>
                                                </div>
                                                <input class="form-control navdark" autocomplete="off" required id="amount2"
                                                    type="text" v-model="getting" />
                                            </div>
                                        </div>
                                    </b-form-group>
                                    <div style="clear: both;"></div>
                                    <div style="width: 80%; margin-right:10%; float: right;">
                                        <a style=";font-size:10px; float: right">حداقل میزان خرید ۱۰۰۰,۰۰۰ ریال
                                            میباشد</a><br>
                                        <p style="font-size: 15px;float:right; color:rgba(150,150,150, .8)" v-if="price">
                                            دریافتی : <a style="font:16px 'UD'; padding:5px 20px ">{{ getting
                                            }}</a></p>
                                    </div>
                                    <div style="clear: both;"></div>

                                    <button class="btn buttonblue" style="margin-bottom: 14px" id="submit" type="submit"
                                        variant="dark">درخواست
                                        خرید</button>
                                </div>
                            </form>
                        </fieldset>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import bFormSlider from 'vue-bootstrap-slider/es/form-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
import './tv'
export default {
    name: 'pages-forums-list',
    metaInfo: {
        title: 'کیف ها'
    },
    updated() {
        this.getrial()
        this.gettings()
        this.getrial()
    },
    mounted() {
        this.start()
        this.getalert()
        this.getsellpercent()
        document.title = ' AMIZAX Exchange | فروش داخلی '
        this.checklevel()
        this.check()
        this.getc()
        this.getlev()
        this.getrial()
        this.getuserfee()
    },
    data: () => ({
        options: [],
        amount: '',
        hidelist: true,
        errors: [],
        leverage: [],
        leverageback: [],
        sellpercent: 0,
        searchtxt: '',
        alert: '',
        sym: '',
        rialprice: 0,
        userfee: 0,
        price: false,
        notphone: true,
        rial: 0,
        getting: 0
    }),
    methods: {
        start() {
            if (window.innerWidth > 899) {
                this.notphone = true
            } else {
                this.notphone = false
            }
            window.addEventListener('resize', () => {
                if (window.innerWidth > 899) {
                    this.notphone = true
                } else {
                    this.notphone = false
                }
            })
        },
        async getsellpercent() {
            await axios.get("/sellpercent").then((response) => {
                this.sellpercent = response.data
            });
        },
        checksym() {
            setTimeout(() => {
                if (this.$route.params.symbol) {
                    setTimeout(() => {
                        document.getElementById(this.$route.params.symbol).click()
                    }, 100)
                } else {
                    setTimeout(() => {
                        document.getElementById('USDT').click()
                    }, 100)
                }
            }, 100);
        },
        gettings() {
            if ((this.sym in this.leverage || this.sym === 'USDT')) {
                if (this.price) {
                    if (this.sym === 'USDT') {
                        var prices = parseFloat(this.price.rial) * this.userfee - (parseFloat(this.price.rial) * this.userfee * this.sellpercent / 100)
                        this.getting = BigInt(parseInt(this.amount * prices))
                    } else {
                        var prices = parseFloat(this.price.rial) * this.userfee
                        this.getting = BigInt(parseInt(this.amount * prices))
                    }

                }
            }
        },
        payings() {
            if ((this.sym in this.leverage || this.sym === 'USDT')) {
                if (this.price) {
                    if (this.sym === 'USDT') {
                        var price = parseFloat(this.price.rial) * this.userfee - (parseFloat(this.price.rial) * this.userfee * this.sellpercent / 100)
                        this.amount = Number(this.getting) / price
                    } else {
                        var price = parseFloat(this.price.rial) * this.userfee
                        this.amount = Number(this.getting) / price
                    }

                }
            }
        },
        tv(a) {
            if (this.notphone) {
                var height = 403
            } else {
                var height = 230
            }
            if (localStorage.getItem('vueuse-color-scheme') !== 'light') {
                var theme = 'dark'
            } else {
                var theme = 'light'
            }
            if ((this.sym in this.leverage || this.sym === 'USDT')) {
                this.getprice()
                if (a) {
                    if (this.sym == 'USDT') {
                        new TradingView.widget(
                            {
                                "width": screen.width * .7,
                                "height": height,
                                "symbol": `${this.sym}USD`,
                                "timezone": "Etc/UTC",
                                "theme": theme,
                                "style": "1",
                                "locale": "en",
                                "hide_side_toolbar": false,
                                "enable_publishing": false,
                                "allow_symbol_change": true,
                                "container_id": "tradingview_1be21"
                            })
                    } else {
                        new TradingView.widget(
                            {
                                "width": screen.width * .7,
                                "height": height,
                                "symbol": `COINEX:${this.sym}USDT`,
                                "timezone": "Etc/UTC",
                                "theme": theme,
                                "hide_side_toolbar": false,
                                "style": "1",
                                "locale": "en",
                                "enable_publishing": false,
                                "allow_symbol_change": true,
                                "container_id": "tradingview_1be21"
                            }
                        )
                    }
                }
            }
        },
        async getlev() {
            await axios
                .get('/cp_wallets2')
                .then(response => {
                    this.leverage = response.data
                    this.leverageback = response.data
                    setTimeout(() => {
                        this.checksym()
                        this.search()
                    }, 500);
                })
        },
        async getprice() {
            await axios
                .post('/cp_ticker', { sym: this.sym })
                .then(response => {
                    this.price = response.data
                    setTimeout(() => {
                        this.tv(false)
                    }, 10000);
                })
        },
        async getalert() {
            await axios
                .post('/alert', { page: 'sell' })
                .then(response => {
                    this.alert = response.data
                })
        },
        async getrialprice() {
            await axios
                .get('/price')
                .then(response => {
                    this.rialprice = response.data
                })
        },
        async getrial() {
            if (this.sym) {
                await axios
                    .post('/cp_mg_main', { sym: this.sym })
                    .then(response => {

                        this.rial = parseFloat(response.data)
                    })
            }
        },
        async getuserfee() {
            await axios
                .get('/levelfee')
                .then(response => {
                    this.userfee = 1 - (response.data[0].sell / 100)
                })
        },
        buttonchange(key) {
            this.hidelist = true
            this.sym = key
            this.tv(true)

        },
        listshow() {
            this.sym = ''
            this.hidelist = false
            document.querySelector('#tradingview_1be21').innerHTML = ''
        },
        search() {
            this.hidelist = false
            this.leverage = {}
            for (const [key, value] of Object.entries(this.leverageback)) {
                if (key.includes(this.searchtxt.toUpperCase())) {
                    this.leverage[key] = value
                }
            }
        },
        async checklevel() {
            await axios
                .get('/userinfo')
                .then(response => {
                    if (response.data.level === 0) {
                        this.$swal.fire({
                            title: 'توجه',
                            text: 'برای استفاده از این بخش ابتدا احراز هویت را کامل کنید',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'شروع تایید هویت',
                            cancelButtonText: 'بعدا انجام میدهم'
                        }).then(result => {
                            if (result.isConfirmed) {
                                const toPath = this.$route.query.to || '/user-level'
                                this.$router.push(toPath)
                            } else {
                                const toPath = this.$route.query.to || '/'
                                this.$router.push(toPath)
                            }
                        })
                    }
                })
        },
        check() {
            if (!this.$store.state.isAuthenticated) {
                const toPath = this.$route.query.to || '/login'
                this.$router.push(toPath)
            }
        },
        async getc() {
            var itemm
            await axios
                .get('/bankcards')
                .then(response => {
                    for (itemm of response.data) {
                        var no = String(itemm.number)
                        var result = no.slice(0, 4) + '-' + no.slice(4, 8) + '-' + no.slice(8, 12) + '-' + no.slice(12, 16)
                        this.options.push(result)
                    }
                })
        },
        async submit() {
            this.$loading(true)
            var realprice = parseFloat(this.price.rial)
            var pricess = parseFloat(this.price.rial) * this.userfee
            var ramount = parseFloat(this.amount * pricess)
            var rramount = parseFloat(this.amount * realprice)
            await axios
                .post('/sell', { ramount: ramount, camount: this.amount, currency: this.sym, rramount: rramount })
                .then(response => {
                    this.$loading(false)
                    if (response.data.error) {
                        document.getElementById('submit').disabled = false
                        this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${response.data.error}</h5>`)
                    } else {
                        document.getElementById('submit').disabled = false
                        this.$swal('<div class="swal2-header"><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div><img class="swal2-image" style="display: none;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button></div>' + '<h5>درخواست فروش شما با موفقیت ثبت شد</h5>')
                    }
                    this.getrial()
                })
                .catch(error => {
                    this.$loading(false)
                })
        },
        balanceset() {
            this.amount = parseFloat(this.rial)
        }
    },
    watch: {
        amount: {
            handler: function () {
                this.gettings();
            },
            deep: true
        },
        getting: {
            handler: function () {
                this.payings();
            },
            deep: true
        }
    },
}
</script>
<style>
.cent {
    text-align: center;
}

.btnfont {
    font-size: 12px;
    padding: 9px;
    margin: 2px;
}

.error {
    color: red
}
</style>
  