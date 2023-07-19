<template>
    <div>
        <div class="card darkalert" v-if="(!sym || !sym2 || !price || !price2) && alert">
            <div class="card-body" style="text-align: right;">
                <h5 class="lightertext">{{ alert.title }}</h5><br>
                <p class="normaltext" style="font-size: 14px">{{ alert.text }}</p>
            </div>
        </div>
        <div class="card navdark" v-if="sym && sym2 && price && price2">

            <div class="card-body">
                <h3 v-if="sym && sym2 && price && price2" style="float:right; color:#888; width: 100%; text-align: right"> :  قیمت نسبی ارز ها<a
                        style="font:20px ; font-family: 'UD'!important; text-decoration: none; float: left"
                        class=" lightertext">{{
                            (this.price.buy / this.price2.buy).toFixed(8) }}</a>
                </h3>
            </div>
        </div>



        <div style="clear:both"></div><br>
        <div class="card navdark">
            <div class="card-header">
                <h4>اکسچینج</h4>
            </div>
            <br>
            <div class="card-body">
                <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>
                <fieldset class="demo-vertical-spacing-sm">



                    <button class=" curbtn" onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                        onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                        style="border-radius: 5px;width: 80%;margin: auto;height:55px; background: none ;border-style: none; border-bottom: solid .2px rgba(100,100,100, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                        @click="listshow()" selected>
                        <img style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${sym.toLowerCase()}.svg`
                            " :onerror="`javascript:this.src='/color/${sym.toLowerCase()}.png';`" alt=""><br>{{
        sym
    }}
                    </button><br><br>



                    <div class="list" hidden>
                        <div class=" navdark card-body"
                            style="position: absolute; width: 80%;background:rgb(244, 247, 251); margin: auto;overflow-y:scroll;height:245px; margin-left: 8%; z-index: 1000000;">
                            <input @input="search()" type="text" class="form-control navdark list" placeholder="نام ارز"
                                v-model="searchtxt"
                                style="width: 95%;margin: auto;border-radius: 5px ; border-color:#999!important; border: 0.2px solid rgba(150, 150, 150, 0.3) !important;text-align: center!important;margin: 2.5%">
                            <div style="width: 100%;margin: auto; overflow-x:hidden  ;  border-radius: 0 0 5px 5px; font-size: 13px!important"
                                id="my-list-id">
                                <button v-if="'USDT'.includes(searchtxt.toUpperCase())" class=" "
                                    onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                    onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                                    style="height:55px; width: 100% ;color: black; background: none ;border-style: none; border-bottom: solid .2px rgba(100,100,100, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                    @click="buttonchange('USDT')" selected><img
                                        style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/usdt.svg`"
                                        :onerror="`javascript:this.src='/color/usdt.png';`" alt=""><br>USDT
                                </button>
                                <button class=" " onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                    onMouseOut="this.style.background='rgba(0,0,0,0)'" v-for="( value, key ) in  leverage "
                                    v-bind:key="'n' + key" :id="key" type="button"
                                    style="height:55px; width: 100% ;color: black; background: none ;border-style: none; border-bottom: solid .2px rgba(100,100,100, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                    @click="buttonchange(key.replace('USDT', ''))" selected><img
                                        style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${key
                                            .replace('USDT', '')
                                            .toLowerCase()}.svg`
                                            " :onerror="`javascript:this.src='/color/${key
        .replace('USDT', '')
        .toLowerCase()}.png';`
        " alt=""><br>{{ key.replace('USDT', '') }} </button>
                            </div>
                            <br><br>
                        </div>
                    </div>

                    <br>


                    <div v-if="sym && sym2">


                        <b-form-group label="">

                            <div style="width: 80%; margin:auto; padding: 1%" class="card navdark">
                                <h6 style="float:right; color:#888; width: 100%; margin-right: 2%; text-align: center"
                                    v-if="price && sym">
                                    موجودی : <a @click="balanceset()" class="btn"
                                        style="font:12px 'UD'; padding:5px 20px;background:rgba(150,150,150,.2) ">{{ rial
                                        }}</a>
                                </h6>
                                <div class="input-group mb-3" style="direction:ltr ; margin:0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">{{ sym }}<a
                                                v-if="!sym">-</a></span>
                                    </div>
                                    <input class="form-control navdark" autocomplete="off" min="1000000" step="any" required
                                        id="amount" type="number" v-model="amount" />
                                </div>
                                <table style="width:98%;margin-left: 10px">
                                    <tr>
                                        <td style="text-align:center; color:#888 ; font: 12px 'UD'">0%</td>
                                        <td style="text-align:center; color:#888 ; font: 12px 'UD'">25%</td>
                                        <td style="text-align:center; color:#888 ; font: 12px 'UD'">50%</td>
                                        <td style="text-align:center; color:#888 ; font: 12px 'UD'">80%</td>
                                        <td style="text-align:center; color:#888 ; font: 12px 'UD'">100%</td>
                                    </tr>
                                </table>
                                <input v-if="rial | rial === 0" style="width:85%; margin: auto" type="range"
                                    class="form-range" id="customRange1" :min="0" :max="rial" v-model="amount"><br>
                            </div>

                            <br>
                            <button class=" curbtn" onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                                style="border-radius: 5px;width: 80%;margin: auto;height:55px; background: none ;border-style: none; border-bottom: solid .2px rgba(100,100,100, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                @click="listshow2()" selected>
                                <img style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${sym2.toLowerCase()}.svg`
                                    " :onerror="`javascript:this.src='/color/${sym2.toLowerCase()}.png';`"
                                    alt=""><br>{{
                                        sym2
                                    }}
                            </button>
                            <div class="listtwo" hidden>

                                <div class=" navdark card-body"
                                    style="position: absolute; width: 80%;background:rgb(244, 247, 251); margin: auto;overflow-y:scroll;height:245px; margin-left: 8%; z-index: 1000000;">
                                    <input @input="search2()" type="text" class="form-control navdark list"
                                        placeholder="search ..." v-model="searchtxt"
                                        style="width: 100%;margin: auto;border-radius: 5px 5px 0 0; border-color:#999!important; border: 0.2px solid rgba(150, 150, 150, 0.3) !important;">
                                    <div style="width: 100%;margin: auto;height:165px; overflow-x:hidden ;overflow-y:scroll ; border: solid rgba(100,100,100, .3) !important .2px ; border-radius: 0 0 5px 5px; font-size: 13px!important"
                                        id="my-list-id navdark">
                                        <button v-if="'USDT'.includes(searchtxt.toUpperCase())" class="  navdark"
                                            type="button"
                                            style="height:55px; width: 100% ;color: black; background: none!important ;border-style: none; border-bottom: solid .2px rgba(100,100,100, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                            @click="buttonchange2('USDT')" selected><img
                                                style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/usdt.svg`"
                                                :onerror="`javascript:this.src='/color/usdt.png';`" alt=""><br>USDT
                                        </button>
                                        <button class="  navdark" v-for="( value, key ) in  leverage "
                                            v-bind:key="'n' + key" :id="key" type="button"
                                            style="height:55px; width: 100% ;color: black; background: none!important ;border-style: none; border-bottom: solid .2px rgba(100,100,100, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                            @click="buttonchange2(key.replace('USDT', ''))" selected><img
                                                style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${key
                                                    .replace('USDT', '')
                                                    .toLowerCase()}.svg`
                                                    " :onerror="`javascript:this.src='/color/${key
        .replace('USDT', '')
        .toLowerCase()}.png';`
        " alt=""><br>{{ key.replace('USDT', '') }} </button>
                                    </div>
                                    <br><br>
                                </div>
                            </div>
                            <br><br>

                            <div class="card navdark" style="width: 80%; margin:auto">
                                <div class="input-group mb-3" style="direction:ltr ; margin-bottom: 0px!important;">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text buttonblue" style="border-radius: 5px 0 0 5px;"
                                            id="basic-addon1">{{ sym2 }} <a v-if="!sym">-</a></span>
                                    </div>
                                    <input class="form-control navdark" autocomplete="off" required id="amount2" type="text"
                                        v-model="getting" />
                                </div>
                            </div>

                        </b-form-group>
                        <div style="clear: both;"></div>
                        <div style="width: 80%; margin-right:10%; float: right;">
                            <a style=";font-size:12px; float: right">حداقل میزان خرید ۱۰۰۰,۰۰۰ ریال میباشد</a><br>
                            <h6 style="float:right; color:#888" v-if="price">دریافتی : <a
                                    style="font:16px 'UD'; padding:5px 20px ">{{ getting.toFixed(6) }}</a></h6>
                            <br><br>

                        </div>
                        <div style="clear: both;"></div>

                        <button class="btn buttonblue" style="margin:auto" id="submit" type="submit" variant="dark">درخواست
                            خرید</button>
                        <br><br>
                    </div>


                </fieldset>
            </div><br><br>
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
        this.tv(true)
    },
    mounted() {
        document.title = ' AMIZAX Exchange | شارژ حساب '
        this.getalert()
        this.checklevel()
        this.check()
        this.getc()
        this.getlev()
        this.getuserfee()

    },
    data: () => ({
        options: [],
        amount: 0,
        errors: [],
        leverage: [],
        leverageback: [],
        leverage2: [],
        leverageback2: [],
        searchtxt: '',
        alert: '',
        searchtxt2: '',
        sym: 'BTC',
        sym2: 'USDT',
        userfee: 0,
        price: [],
        rial: 0,
        price2: [],
        getting: 0,
        tvs: false,
    }),
    methods: {
        async getrial() {
            if (this.sym) {
                await axios
                    .post('/cp_mg_main', { sym: this.sym })
                    .then(response => {
                        this.rial = parseFloat(response.data)
                        if (parseFloat(response.data) < 0.0000001) {
                            this.rial = 0.0
                        }
                    })
            }
        },
        checksym() {
            if (this.$route.params.symbol) {
                setTimeout(() => {
                    document.getElementById(this.$route.params.symbol).click()
                }, 1000)
            }
        },
        gettings() {
            if (this.sym && this.sym2) {
                if ((this.sym in this.leverage || this.sym === 'USDT')) {
                    if (this.price) {
                        var prices = parseFloat(this.price.buy / this.price2.buy) * this.userfee
                        this.getting = parseFloat(this.amount * prices)
                    }
                }
            }
        },
        payings() {
            if (this.sym && this.sym2) {
                if ((this.sym in this.leverage || this.sym === 'USDT')) {
                    if (this.price) {

                        var price = parseFloat(this.price.buy / this.price2.buy) * this.userfee
                        this.amount = this.getting / price
                    }
                }
            }
        },
        tv(a) {
            this.tvs = true
            if ((this.sym in this.leverage || this.sym === 'USDT')) {
                this.getprice(true)
                this.getprice2()
            }
        },
        async getlev() {
            await axios
                .get('/cp_wallets2')
                .then(response => {
                    this.leverage = response.data
                    this.leverageback = response.data
                    this.leverage2 = response.data
                    this.leverageback2 = response.data
                    this.checksym()
                    this.search()
                    this.search2()
                })
        },
        async getprice(act) {
            if (!this.sym) {
                return
            }
            await axios
                .post('/cp_ticker', { sym: this.sym })
                .then(response => {
                    this.price = response.data
                    if (act) {
                        setTimeout(() => {
                            this.tv(false)
                            if (this.sym && this.sym2) {
                                this.gettings()
                            }
                        }, 10000);
                    }
                })
        },
        async getprice2() {
            if (!this.sym2) {
                return
            }
            await axios
                .post('/cp_ticker', { sym: this.sym2 })
                .then(response => {
                    this.price2 = response.data
                })
        },
        async getuserfee() {
            await axios
                .get('/levelfee')
                .then(response => {
                    this.userfee = 1 - (response.data[0].exchange / 100)
                })
        },
        async getalert() {
            await axios
                .post('/alert', { page: 'buy' })
                .then(response => {
                    this.alert = response.data
                })
        },
        buttonchange(key) {
            this.searchtxt = ''
            document.querySelector('.list').hidden = true
            this.sym = key
            if (this.sym2) {
                if (!this.tvs) {
                    this.tv(true)
                }
            }
            document.querySelectorAll('.curbtn').forEach(item => {
            })
            this.search2()
            this.getrial()
        },
        buttonchange2(key) {
            this.searchtxt2 = ''
            document.querySelector('.listtwo').hidden = true
            this.sym2 = key
            if (this.sym) {
                if (!this.tvs) {
                    this.tv(true)
                }
            }
            document.querySelectorAll('.curbtntwo').forEach(item => {
                item.style.background = '#ffffff'
            })
            this.search()
        },
        search() {
            if (this.searchtxt) {
                document.querySelector('.list').hidden = false
            }
            this.leverage = {}
            for (const [key, value] of Object.entries(this.leverageback)) {
                if (key !== this.sym2) {
                    if (key.includes(this.searchtxt.toUpperCase())) {
                        this.leverage[key] = value
                    }
                }
            }
        },
        search2() {
            if (this.searchtxt2) {
                document.querySelector('.listtwo').hidden = false
            }
            this.leverage2 = {}
            for (const [key, value] of Object.entries(this.leverageback2)) {
                if (key !== this.sym) {
                    if (key.includes(this.searchtxt2.toUpperCase())) {
                        this.leverage2[key] = value
                    }
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
            await axios
                .post('/exchange', { camount: this.amount, camount2: this.getting, currency: this.sym, currency2: this.sym2 })
                .then(response => {
                    this.$loading(false)
                    if (response.data.error) {
                        document.getElementById('submit').disabled = false
                        this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${response.data.error}</h5>`)
                    } else {
                        document.getElementById('submit').disabled = false
                        this.$swal('<div class="swal2-header"><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div><img class="swal2-image" style="display: none;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button></div>' + '<h5>درخواست فروش شما با موفقیت ثبت شد</h5>')
                    }
                })
                .catch(error => {
                    this.$loading(false)
                })
        },
        listshow() {
            if (document.querySelector('.list').hidden === false) {
                document.querySelector('.list').hidden = true
                return
            }
            document.querySelector('.list').hidden = false
            this.amount = 0
            this.getting = 0
            this.rial = 0
            this.price = []
        },
        listshow2() {
            if (document.querySelector('.listtwo').hidden === false) {
                document.querySelector('.listtwo').hidden = true
                return
            }
            document.querySelector('.listtwo').hidden = false
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
        sym: {
            handler: function () {
                this.gettings();
            },
            deep: true
        },
        sym2: {
            handler: function () {
                this.getprice(false)
                this.getprice2()
                this.gettings();
            },
            deep: true
        },
        getting: {
            handler: function () {
                this.getprice(false)
                this.getprice2()
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
  