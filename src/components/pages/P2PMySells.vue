<template>
    <div>
        <div class="">
            <div style="width: 100%; float: left" class="">
                <div class="card darkalert" v-if="(!price || !sym) && alert">
                    <div class="card-body" style="text-align: right;">
                        <h5 class="lightertext">{{ alert.title }}</h5><br>
                        <p class="normaltext" style="font-size: 14px">{{ alert.text }}</p>
                    </div>
                </div><br>
                <div class="card navdark" style=";margin-bottom: -3px">
                    <div>
                        <table v-for="item in orders" class="navdark onphone"
                            style="direction: rtl; margin-bottom: 0; background: none!important; width: 100%">
                            <thead class="card-header">
                                <tr class="smalltext normaltext " style=";border-bottom: rgba(100,100,100, 0.5)">
                                    <th> ارز</th>
                                    <th style="width: 15%">قیمت</th>
                                    <th style="width: 10%">شبکه</th>
                                    <th style="width: 15%">موجودی</th>
                                    <th style="width: 10%">حداقل فروش</th>
                                    <th>تاریخ</th>
                                    <th> زمان انتقال</th>
                                    <th style="width: 20%" v-if="notphone"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="smalltext lightertext" v-bind:key="item"
                                    style="font-size: 11px;border-bottom: rgba(100,100,100, 0.5)">
                                    <td style="font-size: 8px;"><img class=""
                                            :src="`/color/${item.currency_name.toLowerCase()}.svg`"
                                            :onerror="`javascript:this.src='/color/${item.currency_name.toLowerCase()}.png';`"
                                            style="height: 30px" alt=""><br> {{ item.currency_name }}</td>
                                    <td>{{ item.price }}</td>
                                    <td>{{ item.chain }}</td>
                                    <td>{{ item.balance }}</td>
                                    <td>{{ item.minimum_amount }}</td>
                                    <td style="font-size: 8px; font-weight: bold;">{{ item.get_age }}</td>
                                    <td> {{ item.maximum_time }}</td>
                                    <td v-if="notphone" style="width: 20%">
                                        <a style="padding-top: 2px; padding-bottom: 2px; margin: 3px auto; width:80%; "
                                            class="btn btn-danger">لغو</a>
                                        <a :href="'/p2p/edit/' + item.rid"
                                            style="padding-top: 2px; padding-bottom: 2px; margin: 3px auto; width:80%; "
                                            class="btn btn-warning">ویرایش</a>
                                    </td>
                                </tr>
                                <tr v-if="!notphone" style="font-size: 10px;border-bottom: transparent;">
                                    <td colspan="8" style="width: 100%; padding: 5%;"> <a
                                            style="margin: 0 20px; padding: 2px 45px; " class="btn  btn-danger">لغو</a>
                                        <a :href="'/p2p/edit/' + item.rid" style="margin: 5px 0; padding: 2px 45px; "
                                            class="btn  btn-warning">ویرایش</a>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                        <table class="navdark notphone"
                            style="direction: rtl; margin-bottom: 0; background: none!important; width: 100%">
                            <thead class="card-header">
                                <tr class="smalltext normaltext " style=";border-bottom: rgba(100,100,100, 0.5)">
                                    <th> ارز</th>
                                    <th style="width: 15%">قیمت</th>
                                    <th style="width: 10%">شبکه</th>
                                    <th style="width: 15%">موجودی</th>
                                    <th style="width: 10%">حداقل فروش</th>
                                    <th>تاریخ</th>
                                    <th> زمان انتقال</th>
                                    <th style="width: 20%" v-if="notphone"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in orders" class="smalltext lightertext" v-bind:key="item"
                                    style="font-size: 11px;border-bottom: rgba(100,100,100, 0.5)">
                                    <td style="font-size: 8px;"><img class=""
                                            :src="`/color/${item.currency_name.toLowerCase()}.svg`"
                                            :onerror="`javascript:this.src='/color/${item.currency_name.toLowerCase()}.png';`"
                                            style="height: 30px" alt=""><br> {{ item.currency_name }}</td>
                                    <td>{{ item.price }}</td>
                                    <td>{{ item.chain }}</td>
                                    <td>{{ item.balance }}</td>
                                    <td>{{ item.minimum_amount }}</td>
                                    <td style="font-size: 8px; font-weight: bold;">{{ item.get_age }}</td>
                                    <td> {{ item.maximum_time }}</td>
                                    <td v-if="notphone" style="width: 20%">
                                        <button style="padding-top: 2px; padding-bottom: 2px; margin: 3px auto; width:80%; "
                                            class="btn btn-danger">لغو</button>
                                        <a :href="'/p2p/edit/' + item.rid"
                                            style="padding-top: 2px; padding-bottom: 2px; margin: 3px auto; width:80%; "
                                            class="btn btn-warning">ویرایش</a>
                                    </td>
                                </tr>
                                <tr v-if="!notphone" style="font-size: 10px;border-bottom: transparent;">
                                    <td colspan="8" style="width: 100%; padding: 5%;"> <button
                                            style="margin: 0 20px; padding: 2px 45px; " class="btn  btn-danger">لغو</button>
                                        <a :href="'/p2p/edit/' + item.rid" style="margin: 5px 0; padding: 2px 45px; "
                                            class="btn  btn-warning">ویرایش</a>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import './tv'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

export default {
    name: 'buy',
    metaInfo: {
        title: 'کیف ها'
    },
    mounted() {
        document.title = ' AMIZAX Exchange | شارژ حساب '
        this.get_orders()
        this.start()
        this.getalert()
    },
    data: () => ({
        orders: [],
        notphone: true,
        alert: '',

    }),

    methods: {
        async getalert() {
            await axios
                .post('/alert', { page: 'p2pbuy' })
                .then(response => {
                    this.alert = response.data
                })
        },
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
        async get_orders() {
            await axios
                .get('/p2pmyorders')
                .then(response => response.data)
                .then(response => {
                    this.orders = response
                })
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
        },
        sym: {
            handler: function () {
                this.tv(true)
            },
            deep: true
        },
    },
}
</script>
<style>
td {
    vertical-align: middle !important;
}

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

::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: darkgrey;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: grey;
}

.form-control:focus {
    box-shadow: none;
}

th,
td {
    padding: .2rem !important;
}
</style>
  