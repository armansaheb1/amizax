<template>
    <div>
        <div class="card navdark lightertext" v-if="allamount" id="all" style="padding: 0 !important">
            <div class="card-header bg2">
                <h4>مجموع دارایی</h4>
            </div>
            <div class="card-body">
                <GChart class="lightertext" style="width:30%;margin:right:30%" type="PieChart" :options="options"
                    :data="data" />
                <h2 style="text-align: center">
                    مجموع دارایی دیجیتال به دلار :
                    <a style="font-family: 'UD' !important">
                        {{
                            allamount
                                .toFixed(2)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }}</a>
                </h2>
                <h2 style="text-align: center">
                    مجموع دارایی ریالی :
                    <a style="font-family: 'UD' !important">
                        {{
                            allamountrial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }}</a>
                </h2>
            </div>
        </div>

        <br /><br />
        <div class="card navdark" no-body>
            <div class="card-header bg2">
                <h4>
                    موجودی ریالی </h4>
            </div>
            <div class="table-responsive">
                <table class="" style="width: 100%;direction: rtl !important">
                    <thead>
                        <tr>
                            <th class="col-3">موجودی</th>
                            <th class="w30-50">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="section in wallets2" v-bind:key="section.id">
                            <td style="
                    vertical-align: middle;
                    width: 15%;
                    font-wieght: bold;
                    font-family: 'UD' !important;
                    font-size: 20px;
                  ">
                                <router-link style="text-decoration: none;" :to="`#`" class="lightertext">
                                    <a style="font-family: 'UD' !important; text-decoration: none;">{{
                                        parseInt(section.amount)
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                    }}</a>
                                </router-link>
                            </td>
                            <td style="
                    vertical-align: middle;
                    padding: 0;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link :to="`/wallets/1/withdraw`" class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">برداشت</router-link><router-link
                                    :to="`/transactions`" class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    تاریخچه </router-link><router-link :to="`/deposit`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">واریز</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <br /><br />
        <div class="card navdark">
            <div class="card-header bg2">
                <h4> کیف های ترید </h4>
            </div>
            <input class="form-control navdark" placeholder="search..." type="search"
                style="outline:none; border: none; border-radius:0;textalign: left; direction: ltr; font-family: 'UD' !important"
                @input="search2()" v-model="searchtext" />

            <div class="table-responsive">
                <table style="direction: rtl !important ; width: 100%" class="lightertext">
                    <thead class="bg">
                        <tr>
                            <th style="padding: 10px">Currency</th>
                            <th style="padding: 10px">Available</th>
                            <th style="padding: 10px" class="notphone">Price</th>
                            <th style="padding: 10px" class="w30-50">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-if="wallets['USDT']" style="
                                vertical-align: middle;
                                width: 15%;
                                font-wieght: bold;
                                font-family: 'UD' !important;
                                font-size: 20px;
                                font-family: 'UD' !important;
                            ">
                                <router-link :to="`#`" class="lightertext">
                                    <img style="width: 48px" class="" :src="`/color/${wallets[
                                        'USDT'
                                    ].brand.toLowerCase()}.svg`" :onerror="`javascript:this.src='/color/${wallets[
    'USDT'
].brand.toLowerCase()}.png';`" alt="" /><br /><a style="font-size:14px">{{ wallets["USDT"].brand }}</a>
                                </router-link>
                            </td>
                            <td v-if="wallets['USDT']" style="
                    vertical-align: middle;
                    padding: 20px;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link class="lightertext" :to="`#`"><a v-if="parseFloat(
                                    parseFloat(wallets.balance).toFixed(6)
                                ) === 0
                                    " style="font-family: 'UD' !important">0</a>
                                    <a v-if="parseFloat(
                                        parseFloat(wallets.balance).toFixed(6)
                                    ) !== 0
                                        " style="font-family: 'UD' !important">{{
        parseFloat(wallets["USDT"].balance).toFixed(6)
    }}</a></router-link>
                            </td>
                            <td class="notphone" v-if="wallets['USDT']"
                                style="vertical-align: middle; font-family: 'UD' !important">
                                <a v-if="USDTprice" style="font-family: 'UD' !important">{{
                                    USDTprice.toFixed(4)
                                }}</a>
                            </td>
                            <td v-if="wallets['USDT']" style="
                    vertical-align: middle;
                    padding: 0;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link :to="`/cpwallets/${wallets.name}/withdraw`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">برداشت</router-link><router-link
                                    :to="`/cpwallets/${wallets.name}/history`" class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    تاریخچه </router-link><router-link :to="`/buy/${wallets.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    خرید </router-link><router-link :to="`/sell/${wallets.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    فروش </router-link><router-link :to="`/cpwallets/${wallets.name}/deposit`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">واریز</router-link>
                            </td>
                        </tr>
                        <tr v-for="section in wallets" v-bind:key="section.name">
                            <td v-if="section.brand !== 'USDT' &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                " style="
                    vertical-align: middle;
                    width: 15%;
                    font-wieght: bold;
                    font-family: 'UD' !important;
                    font-size: 20px;
                    font-family: 'UD' !important;
                  ">
                                <router-link :to="`#`" class="lightertext">
                                    <img style="width: 48px" class="" :src="`/color/${section.brand.toLowerCase()}.svg`"
                                        :onerror="`javascript:this.src='/color/${section.brand.toLowerCase()}.png';`"
                                        alt="" /><br /> <a style="font-size:14px">{{ section.brand }}</a>
                                </router-link>
                            </td>
                            <td v-if="section.brand !== 'USDT' &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                " style="
                    vertical-align: middle;
                    padding: 20px;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link class="lightertext" :to="`#`"><a v-if="parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                    " style="font-family: 'UD' !important">0</a>
                                    <a v-if="parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                        " style="font-family: 'UD' !important">{{
        parseFloat(section.balance).toFixed(6)
    }}</a></router-link>
                            </td>
                            <td class="notphone" v-if="section.brand !== 'USDT' &&
                                    parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                    " style="vertical-align: middle; font-family: 'UD' !important">
                                <a v-if="prices[section.brand + 'USDT']" style="font-family: 'UD' !important">{{
                                    prices[section.brand + "USDT"].buy }}</a>
                            </td>
                            <td v-if="section.brand !== 'USDT' &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                " style="
                    vertical-align: middle;
                    padding: 0;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link :to="`/cpwallets/${section.name}/withdraw`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">برداشت</router-link><router-link
                                    :to="`/cpwallets/${section.name}/history`" class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    تاریخچه </router-link><router-link :to="`/buy/${section.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    خرید </router-link><router-link :to="`/sell/${section.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    فروش </router-link><router-link :to="`/cpwallets/${section.name}/deposit`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">واریز</router-link>
                            </td>
                        </tr>
                        <tr v-for="section in wallets" v-bind:key="section.name">
                            <td v-if="section.brand !== 'USDT' &&
                                (section.brand == 'BTC') |
                                (section.brand == 'ETH') |
                                (section.brand == 'TRX') &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                " style="
                    vertical-align: middle;
                    width: 15%;
                    font-wieght: bold;
                    font-family: 'UD' !important;
                    font-size: 20px;
                    font-family: 'UD' !important;
                  ">
                                <router-link :to="`#`" class="lightertext">
                                    <img style="width: 48px" class="" :src="`/color/${section.brand.toLowerCase()}.svg`"
                                        :onerror="`javascript:this.src='/color/${section.brand.toLowerCase()}.png';`"
                                        alt="" /><br /><a style="font-size:14px">{{ section.brand }}</a>
                                </router-link>
                            </td>
                            <td v-if="section.brand !== 'USDT' &&
                                (section.brand == 'BTC') |
                                (section.brand == 'ETH') |
                                (section.brand == 'TRX') &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                " style="
                    vertical-align: middle;
                    padding: 20px;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link class="lightertext" :to="`#`"><a v-if="parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                    " style="font-family: 'UD' !important">0</a>
                                    <a v-if="parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                        " style="font-family: 'UD' !important">{{
        parseFloat(section.balance).toFixed(6)
    }}</a></router-link>
                            </td>
                            <td class="notphone" v-if="section.brand !== 'USDT' &&
                                    (section.brand == 'BTC') |
                                    (section.brand == 'ETH') |
                                    (section.brand == 'TRX') &&
                                    parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                    " style="vertical-align: middle; font-family: 'UD' !important">
                                <a v-if="prices[section.brand + 'USDT']" style="font-family: 'UD' !important">{{
                                    prices[section.brand + "USDT"].buy }}</a>
                            </td>
                            <td v-if="section.brand !== 'USDT' &&
                                (section.brand == 'BTC') |
                                (section.brand == 'ETH') |
                                (section.brand == 'TRX') &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                " style="
                    vertical-align: middle;
                    padding: 0;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link :to="`/cpwallets/${section.name}/withdraw`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">برداشت</router-link><router-link
                                    :to="`/cpwallets/${section.name}/history`" class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    تاریخچه </router-link><router-link :to="`/buy/${section.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    خرید </router-link><router-link :to="`/sell/${section.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    فروش </router-link><router-link :to="`/cpwallets/${section.name}/deposit`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">واریز</router-link>
                            </td>

                            <td v-if="section.brand !== 'USDT' &&
                                !(
                                    (section.brand == 'BTC') |
                                    (section.brand == 'ETH') |
                                    (section.brand == 'TRX')
                                ) &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                " style="
                    vertical-align: middle;
                    width: 15%;
                    font-wieght: bold;
                    font-family: 'UD' !important;
                    font-size: 20px;
                    font-family: 'UD' !important;
                  ">
                                <router-link :to="`#`" class="lightertext">
                                    <img style="width: 48px" class="" :src="`/color/${section.brand.toLowerCase()}.svg`"
                                        :onerror="`javascript:this.src='/color/${section.brand.toLowerCase()}.png';`"
                                        alt="" /><br /><a style="font-size:14px">{{ section.brand }}</a>
                                </router-link>
                            </td>
                            <td v-if="section.brand !== 'USDT' &&
                                !(
                                    (section.brand == 'BTC') |
                                    (section.brand == 'ETH') |
                                    (section.brand == 'TRX')
                                ) &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                " style="
                    vertical-align: middle;
                    padding: 20px;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link class="lightertext" :to="`#`"><a v-if="parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                    " style="font-family: 'UD' !important">0</a>
                                    <a v-if="parseFloat(parseFloat(section.balance).toFixed(6)) !== 0
                                        " style="font-family: 'UD' !important">{{
        parseFloat(section.balance).toFixed(6)
    }}</a></router-link>
                            </td>
                            <td class="notphone" v-if="section.brand !== 'USDT' &&
                                    !(
                                        (section.brand == 'BTC') |
                                        (section.brand == 'ETH') |
                                        (section.brand == 'TRX')
                                    ) &&
                                    parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                    " style="vertical-align: middle; font-family: 'UD' !important">
                                <a v-if="prices[section.brand + 'USDT']" style="font-family: 'UD' !important">{{
                                    prices[section.brand + "USDT"].buy }}</a>
                            </td>
                            <td v-if="section.brand !== 'USDT' &&
                                !(
                                    (section.brand == 'BTC') |
                                    (section.brand == 'ETH') |
                                    (section.brand == 'TRX')
                                ) &&
                                parseFloat(parseFloat(section.balance).toFixed(6)) === 0
                                " style="
                    vertical-align: middle;
                    padding: 0;
                    font-family: 'UD' !important;
                    font-size: 14px;
                  ">
                                <router-link :to="`/cpwallets/${section.name}/withdraw`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">برداشت</router-link><router-link
                                    :to="`/wallets/${section.name}/history`" class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    تاریخچه </router-link><router-link :to="`/buy/${section.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    خرید </router-link><router-link :to="`/sell/${section.brand}`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">
                                    فروش </router-link><router-link :to="`/cpwallets/${section.name}/deposit`"
                                    class="btnfont btn buttonblue walbtn"
                                    style="font: 16px 'Yekan'; position: relative; top: 0">واریز</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { GChart } from "vue-google-charts";
export default {
    name: "pages-forums-list",
    metaInfo: {
        title: "کیف ها",
    },
    components: {
        GChart,
    },
    mounted() {
        this.getprices();
        this.getprice();
        this.getw();
        this.getusdtprice();
        this.getprice2();
        this.getrialprice();
        this.inits();
    },
    data: () => ({
        currencies: [],
        withamount: [],
        allamount: 0,
        allamountrial: 0,
        wallets: [],
        wallets2: [],
        walletsback: [],
        usd: 250000,
        rialprice: 0,
        prices: [],
        prices2: [],
        searchtext: "",
        temp: {},
        data: [
            ["Currency", "Balance"],
            ["", 1],
        ],
        options: {
            is3D: true,
            width: window.innerWidth / 1.5,
            legendTextStyle: { color: '#777' },
            height: 400,
            pieHole: 0.6,
            backgroundColor: 'none'
        },
    }),
    forumPath: [{ text: "کیف ها", active: true }],
    methods: {
        inits() {
            if (window.innerWidth > 600) {
                this.options.width = parseInt(window.innerWidth / 1.5);
            } else {
                this.options.width = parseInt(window.innerWidth / 1.1);
            }
            window.addEventListener("resize", () => {
                if (window.innerWidth > 600) {
                    this.options.width = parseInt(window.innerWidth / 1.5);
                } else {
                    this.options.width = parseInt(window.innerWidth / 1.1);
                }
            });
        },
        async getrialprice() {
            window.addEventListener("resize", () => {
                this.options.width = window.innerWidth / 2;
            });
            await axios.get("/price").then((response) => {
                this.rialprice = response.data[0].rial;
            });
        },
        async checklevel(id) {
            await axios.get("/userinfo").then((response) => {
                if (response.data[0].level === 0) {
                    this.$swal
                        .fire({
                            title: "توجه",
                            text: "برای استفاده از این بخش ابتدا احراز هویت را کامل کنید",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "شروع تایید هویت",
                            cancelButtonText: "بعدا انجام میدهم",
                        })
                        .then((result) => {
                            if (result.isConfirmed) {
                                const toPath = this.$route.query.to || "/user-level";
                                this.$router.push(toPath);
                            } else {
                                const toPath = this.$route.query.to || "/dashboard";
                                this.$router.push(toPath);
                            }
                        });
                }
            });
        },
        async fasttorial(id) {
            await axios.get(`/fasttorial/${id}`).then((response) => {
                this.$swal
                    .fire({
                        title: "آیا از تبدیل کل دارایی به مبلغ زیر اطمینان دارید؟",
                        text: `مبلغ ریالی : ${response.data.price}‍‍‍`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: " تایید ",
                        cancelButtonText: " لغو",
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            this.fasttorialconf(id);
                        }
                    });
            });
        },
        async fasttorialconf(id) {
            await axios.post(`/fasttorial/${id}`).then((response) => {
                location.reload();
            });
        },
        async getprices() {
            await axios.get(`/oltradeinfo3`).then((response) => {
                this.prices = response.data;
                this.getw2();
            });
        },
        async getc() {
            await axios.get("/currencies").then((response) => {
                this.currencies = response.data;
                var itemm;
                for (itemm of this.currencies) {
                    itemm.amount = 0;
                }
                for (let index = 0; index < this.wallets2.length; index++) {
                    if (this.currencies[this.wallets2[index].currency - 1]) {
                        this.currencies[this.wallets2[index].currency - 1].amount =
                            this.wallets2[index].amount;
                        this.currencies[this.wallets2[index].currency - 1].address =
                            this.wallets2[index].address;
                    }
                }
            });
        },
        async getw() {
            await axios
                .get("/wallet")
                .then((response) => {
                    this.wallets2 = response.data;
                })
                .then(() => {
                    this.getc();
                });
        },
        async getprice() {
            await axios
                .get("/price")
                .then((response) => {
                    this.temp = response.data[0];
                })
                .catch(() => { });
        },
        getbrand(brand) {
            return this.temp[`${brand.toLowerCase()}`];
        },
        async getw2() {
            await axios
                .get("/cp_wallets")
                .then((response) => {
                    this.wallets = response.data;
                    this.walletsback = response.data;
                    this.allamount = 0;
                    this.allamountrial = 0;
                    this.data = [["Currency", "Balance"]];
                    for (const [key, value] of Object.entries(this.walletsback)) {
                        if (
                            value.balance > 0 &&
                            this.prices[value.brand + "USDT"] !== null &&
                            value.brand !== "USDT"
                        ) {
                            this.data.push([
                                key + "($)",
                                parseInt(
                                    Number(value.balance) *
                                    Number(this.prices[value.brand + "USDT"].last)
                                ),
                            ]);
                            this.allamount =
                                this.allamount +
                                Number(value.balance) *
                                Number(this.prices[value.brand + "USDT"].last);
                            this.allamountrial = parseInt(
                                this.allamountrial +
                                Number(value.balance) *
                                Number(this.prices[value.brand + "USDT"].last) *
                                this.rialprice
                            );
                        }
                        if (value.brand === "USDT") {
                            this.data.push([key + "($)", parseInt(Number(value.balance))]);
                            this.allamount = this.allamount + Number(value.balance);
                            this.allamountrial = parseInt(
                                this.allamountrial + Number(value.balance) * this.rialprice
                            );
                        }
                    }

                    var myEle = document.getElementById("all");
                    if (myEle) {
                        this.options.width =
                            document.querySelector("#all").clientWidth * 0.8;
                        window.addEventListener("resize", () => {
                            this.options.width =
                                document.querySelector("#all").clientWidth * 0.8;
                        });
                    }
                })
                .then(() => { });
        },
        async getprice2() {
            await axios
                .get("/price")
                .then((response) => {
                    this.temp = response.data[0];
                })
                .catch(() => { });
        },
        async getusdtprice() {
            await axios.post("/cp_ticker", { sym: "USDT" }).then((response) => {
                this.USDTprice = response.data.buy;
                setTimeout(() => { }, 5000);
            });
        },
        getbrand2(brand) {
            return this.temp[`${brand.toLowerCase()}`];
        },
        search2() {
            this.wallets = {};
            for (const [key, value] of Object.entries(this.walletsback)) {
                if (key.includes(this.searchtext.toUpperCase())) {
                    this.wallets[key] = value;
                }
            }
        },
    },
};
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

td {
    height: 90px;
    text-align: center;
}

th {
    text-align: center;
}

.wallets:hover {
    background: #efefff;
}

a {
    text-decoration: none
}

.w30-50 {
    width: 50%
}

@media only screen and (max-width: 899px) {
    .w30-50 {
        width: 25%
    }

}

@media only screen and (max-width: 1024px) {
    .nmobile {
        display: none;
    }

    .walbtn {
        height: 17%;
        width: 90%;
        min-height: 30px;
        float: left;
    }
}

@media only screen and (min-width: 1024px) {
    .walbtn {
        position: relative;
        top: 35%;
    }
}

@media only screen and (max-width: 1275px) {
    .nmobile {
        display: none;
    }
}
</style>