<template>
    <div style="padding: 2%">
        <div class="card darkalert" v-if="alert">
            <div class="card-body" style="text-align: right;">
                <h5 class="lightertext">{{ alert.title }}</h5><br>
                <p class="normaltext" style="font-size: 14px">{{ alert.text }}</p>
            </div>
        </div>

        <div class="card navdark">

            <div class="card-body" style="padding: 3%;">
                <table style="width: 100%; direction: rtl;">
                    <tr v-if="request" style="">
                        <td style="font-size: 8px; width: 5%;text-align: center;">
                            <img class="" :src="`/color/${request.currency_name.toLowerCase()}.svg`"
                                :onerror="`javascript:this.src='/color/${request.currency_name.toLowerCase()}.png';`"
                                style="height: 30px" alt="">

                        </td>
                        <td style="font-size: 8px; text-align: right;;padding-right: 15px">
                            <h6 style="font-size: 12px" class="normaltext"> حداقل فروش </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">4 USDT</h6>

                        </td>
                        <td style="font-size: 8px; text-align: right;;padding-right: 15px">
                            <h6 style="font-size: 12px" class="normaltext">قیمت واحد </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">65,513 <a class="notphone">تومان</a></h6>

                        </td>
                    </tr>
                    <tr v-if="request" style="">
                        <td style="font-size: 10px; width: 5%;text-align: center;">

                            {{ request.get_user }}
                        </td>
                        <td style="font-size: 8px;text-align: right;;padding-right: 15px">
                            <h6 style="font-size: 12px" class="normaltext">موجودی </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">747 USDT</h6>

                        </td>
                        <td style="font-size: 8px; text-align: right;padding-right: 15px;">
                            <h6 style="font-size: 12px" class="normaltext">نوع شبکه </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">BEP20</h6>

                        </td>
                    </tr>
                    <tr>
                        <th style="width: 100%;text-align: center;" colspan="6">
                            <hr style="margin: 5px">
                            حداکثر زمان انتقال
                            15 دقیقه
                        </th>
                    </tr>


                </table>
                <hr style="margin: 5px">
                <step-progress style="font-size: 20px!important;direction: rtl;" size="small" :steps="mySteps"
                    :current-step="currentStep" active-color="#333399" passive-color="grey" active-thickness="2"
                    passive-thickness="2" line-thickness="2" icon-class="fa fa-check"></step-progress>

            </div>
        </div><br><br>




        <div class="card navdark" v-if="currentStep === 0">


            <div class="card-header">
                <h5>شماره درخواست </h5>
                <h5>
                    {{ $route.params.id }}
                </h5>
            </div>
            <div class="card-body" style="padding: 3%;">
                <div style="width: 30% ; margin: auto">
                    <div class="alert bg lightertext">
                        ‌ در انتظار تایید
                    </div>
                </div><br><br>
                <p class="lightertext" style="text-align: justify;direction: rtl;">خریداری با نام کاربری درخواست خرید شما
                    برای فروشنده ارسال شد در حال حاضر منتظر تایید فروشنده هستیم در صورت طولانی شدن تایید توسط فروشنده هر
                    زمان که مایل باشید می توانید درخواست خود را لغو کنید. </p>

                <br><br>
                <table class="bg2" style="width :100%; direction: rtl;">
                    <thead>
                        <tr style="border-bottom: solid grey 2px;">
                            <th style="padding: 10px;">مقدار ارز درخواستی</th>
                            <th style="padding: 10px;">قیمت واحد</th>
                            <th style="padding: 10px;">کل مبلغ ارز</th>
                            <th style="padding: 10px;">کمیسیون بیدارز</th>
                            <th style="padding: 10px;">دریافت خالص شما</th>
                        </tr>
                    </thead>
                    <tbody class="bg">
                        <tr>
                            <td style="padding: 10px;">{{ brequest.amount }}</td>
                            <td style="padding: 10px;">{{ request.price }}</td>
                            <td style="padding: 10px;">{{ brequest.amount * request.price }}</td>
                            <td style="padding: 10px;">{{ brequest.amount * request.price * 0.02 }}</td>
                            <td style="padding: 10px;">{{ brequest.amount * request.price - (brequest.amount *
                                request.price * 0.02) }}</td>
                        </tr>
                    </tbody>
                </table><br><br>

                <button @click="$store.state.chatting = brequest.get_user2; $store.state.chatside = true"
                    style="margin: 20px" class="btn btn-warning">پیام</button>
                <button @click="cancel()" style="margin: 20px" class="btn btn-danger">لغو</button>
            </div>
        </div>


        <div class="card navdark" v-if="currentStep === 1">
            <div v-if="payprocess === 0">




                <div class="card-header">
                    <h5>شماره درخواست </h5>
                    <h5>
                        {{ $route.params.id }}
                    </h5>
                </div>
                <div class="card-body" style="padding: 3%;">
                    <form @submit.prevent="send_wallet()">
                        <div style="width: 30% ; margin: auto">
                            <div class="alert bg lightertext">
                                پرداخت امن
                            </div>
                        </div><br><br>
                        <p class="lightertext" style="text-align: justify;direction: rtl;">خریداری با نام کاربری درخواست
                            درخواست
                            خرید شما توسط فروشنده تائید شد, لطفا هر چه سریع تر مشخصات و آدرس والت ارز دیجیتال خود را وارد
                            کرده و
                            پرداخت امن را ایجاد کنید. اگر در اسرع وقت پرداخت امن را ایجاد نکنید ممکن است درخواست توسط
                            فروشنده
                            لغو
                            شود.. </p>

                        <br><br>

                        <div style="width: 40%;text-align: right; float: right" class="alert bg lightertext">
                            ارسال به ولت آمیزاکس <input type="radio" name="receiver" disabled id="">

                            <p style="font-size: 10px;">اگر این گزینه را انتخاب کنید ارز دیجیتالی که خریداری کرده‌اید به
                                والت
                                بیدارز
                                شما منتقل می شود. شما می
                                توانید ارز خریداری شده را در والت خود نگهداری کنید یا هر زمان که مایل باشید آن را به آدرس
                                دیگری
                                خارج
                                از بیدارز انتقال دهید.</p>
                        </div>

                        <div style="width: 40%;text-align: right; float: left" class="alert bg lightertext">
                            ارسال به سایر ولت ها <input checked type="radio" name="receiver" id="">
                            <p style="font-size: 10px;">
                                اگر مایلید ارز دیجیتال خریداری شده به آدرس والت دیگری ارسال شود لطفا این گزینه را انتخاب
                                کرده و
                                آدرس
                                والت گیرنده را وارد نمائید.
                            </p>
                        </div>
                        <div style="clear: both"></div>
                        <div class="lightertext" style="width: 40%;text-align: right; float: right">
                            <label for="">آدرس والت </label>
                            <textarea v-model="wallet" required class="form-control bg lightertext" name="" id="" cols="30"
                                rows="1"></textarea>

                        </div>

                        <div class="lightertext" style="width: 40%;text-align: right; float: left">
                            <label for="">
                                کد تگ / ممو </label>
                            <textarea v-if="memo" disabled class="form-control bg lightertext" name="" id="" cols="30"
                                rows="1"></textarea>
                            <textarea v-if="!memo" v-model="memo_code" required class="form-control bg lightertext" name=""
                                id="" cols="30" rows="1"></textarea>
                            <div class="form-check">
                                <label class="form-check-label" for="flexCheckDefault">
                                    ولت من ممو ندارد
                                </label>
                                <input v-model="memo" class="form-check-input" type="checkbox" value=""
                                    id="flexCheckDefault">

                            </div>
                        </div>

                        <div style="clear: both"></div><br><br>
                        <div style="text-align: right;" class="lightertext">

                            <label for="">
                                توضیحات</label>
                            <textarea v-model="details" class="form-control bg lightertext" name="" id="" cols="30"
                                rows="3"></textarea>
                            <br><br>
                        </div>

                        <button type="button"
                            @click="$store.state.chatting = brequest.get_user2; $store.state.chatside = true"
                            style="margin: 20px" class="btn btn-warning">پیام</button>
                        <button type="button" @click="cancel()" style="margin: 20px" class="btn btn-danger">لغو</button>
                        <button style="margin: 20px" class="btn buttonblue">ادامه</button>
                    </form>
                </div>
            </div>

            <div v-if="payprocess === 1">
                <div class="card-header">
                    <h5>شماره درخواست </h5>
                    <h5>
                        {{ $route.params.id }}
                    </h5>
                </div>
                <div class="card-body" style="padding: 3%;">
                    <div style="width: 30% ; margin: auto">
                        <div class="alert bg lightertext">
                            پرداخت امن
                        </div>
                    </div><br><br>
                    <div style="width: 70%; margin: auto">
                        <label for="">نمایش اطلاعات جهت ارسال</label>
                    </div>
                    <div style="width: 70%; margin: auto; border-radius: 10px">





                        <table style="width :100%;margin: auto; direction: rtl">
                            <thead class="bg2">
                                <tr>
                                    <td style="padding: 10px;width: 50%; text-align: right;">آدرس کیف پول شما
                                    </td>
                                    <td style="padding: 10px;width: 50%; text-align: left;">{{ wallet }}</td>
                                </tr>
                            </thead>
                            <tbody class="bg">
                                <tr>
                                    <td style="padding: 10px;width: 50%; text-align: right;">کد تگ / ممو</td>
                                    <td style="padding: 10px;width: 50%; text-align: left;">{{ memo_code }}
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="bg2">
                                <tr>
                                    <td style="padding: 10px;width: 50%; text-align: right;">توضیحات</td>
                                    <td style="padding: 10px;width: 50%; text-align: left;">{{ details }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <button @click="remove_wallet()" class="btn btn-outline-warning"
                            style="width: 20%; margin-right: 40%;margin-left: 40%;">ویرایش</button>


                    </div><br><br>



                    <div style="width: 70%; margin: auto; border-radius: 10px">

                        <table class="bg2" style="width :100%; direction: rtl;">
                            <thead>
                                <tr style="border-bottom: solid grey 2px;">
                                    <th style="padding: 10px; ">کل مبلغ ارز</th>
                                    <th style="padding: 10px; ">موجودی</th>
                                    <th style="padding: 10px; ">مانده قابل پرداخت</th>
                                </tr>
                            </thead>
                            <tbody class="bg">
                                <tr>
                                    <td style="padding: 10px; ">{{ brequest.amount *
                                        request.price }}</td>
                                    <td style="padding: 10px; ">{{ rial }}</td>
                                    <td style="padding: 10px; "><a v-if="rial >= brequest.amount * request.price">0</a><a
                                            v-else>{{
                                                (brequest.amount * request.price) - rial }}</a> </td>

                                </tr>
                            </tbody>
                        </table><br><br>
                    </div>
                    <form @submit.prevent="pay()">
                        <div style="width: 30%; margin: auto">
                            <input v-model="smscode" required style="text-align: center" type="text"
                                placeholder="کد اس ام اس شده" class="form-control"><br><br>
                            <button @click="createsms()" type="button" class="btn btn-outline-success">ارسال کد</button>
                        </div>


                        <div style="clear: both"></div><br><br>
                        <button type="button"
                            @click="$store.state.chatting = brequest.get_user2; $store.state.chatside = true"
                            style="margin: 20px" class="btn btn-warning">پیام</button>
                        <button type="button" @click="cancel()" style="margin: 20px" class="btn btn-danger">لغو</button>
                        <button style="margin: 20px" class="btn buttonblue">پرداخت</button>
                    </form>
                </div>
            </div>
        </div>



        <div class="card navdark" v-if="currentStep === 2">


            <div class="card-header">
                <h5>شماره درخواست </h5>
                <h5>
                    {{ $route.params.id }}
                </h5>
            </div>
            <div class="card-body" style="padding: 3%;">
                <div style="width: 30% ; margin: auto">
                    <div class="alert bg lightertext">
                        ‌ در انتظار انتقال ارز دیجیتال
                    </div>
                </div><br><br>
                <p class="lightertext" style="text-align: justify;direction: rtl;">خریداری با نام کاربری
                    {{ brequest.get_user2 }} درخواست
                    خرید {{ brequest.amount }} USDT به قیمت واحد {{ request.price }} ریال را دارد، خواهشمندیم در حداکثر
                    زمان
                    مشخص شده به
                    این درخواست پاسخ
                    دهید. اگر مایلید این درخواست را قبول کنید دکمه (تایید درخواست) و در غیر این صورت دکمه (لغو درخواست) را
                    کلیک نمایید.</p>

                <br><br>
                <table class="bg2" style="width :100%; direction: rtl;">
                    <thead>
                        <tr style="border-bottom: solid grey 2px;">
                            <th style="padding: 0.5%; font-size: 12px;">مقدار ارز </th>
                            <th style="padding: 0.5%; font-size: 12px;">قیمت واحد</th>
                            <th style="padding: 0.5%; font-size: 12px;">کل مبلغ </th>
                            <th style="padding: 0.5%; font-size: 12px;">کمیسیون </th>
                            <th style="padding: 0.5%; font-size: 12px;">دریافت خالص </th>
                        </tr>
                    </thead>
                    <tbody class="bg">
                        <tr>
                            <td style="padding: 1%; font-size: 12px;">{{ brequest.amount }}</td>
                            <td style="padding: 1%; font-size: 12px;">{{ request.price }}</td>
                            <td style="padding: 1%; font-size: 12px;">{{ parseInt(brequest.amount * request.price) }}</td>
                            <td style="padding: 1%; font-size: 12px;">{{ parseInt(brequest.amount * request.price * 0.02) }}
                            </td>
                            <td style="padding: 1%; font-size: 12px;">{{ parseInt(brequest.amount * request.price -
                                (brequest.amount
                                    *
                                    request.price * 0.02)) }}</td>
                        </tr>
                    </tbody>
                </table><br><br>

                <button @click="$store.state.chatting = brequest.get_user2; $store.state.chatside = true"
                    style="margin: 20px; min-width: 25%" class="btn btn-warning">پیام</button>
                <button @click="cancel()" style="margin: 20px; min-width: 25%" class="btn btn-danger">لغو</button>
                <button @click="acceptget()" style="margin: 20px; min-width: 25%" class="btn buttonblue">تایید دریافت
                    ارز</button>
            </div>
        </div>
        <div class="card navdark" v-if="currentStep === 3">


            <div class="card-header">
                <h5>شماره درخواست </h5>
                <h5>
                    {{ $route.params.id }}
                </h5>
            </div>
            <div class="card-body" style="padding: 3%;">
                <div style="width: 30% ; margin: auto">
                    <div class="alert bg lightertext">
                        ‌ در انتظار انتقال ارز دیجیتال
                    </div>
                </div><br><br>
                <p class="lightertext" style="text-align: justify;direction: rtl;">خریداری با نام کاربری
                    {{ brequest.get_user2 }} درخواست
                    خرید {{ brequest.amount }} USDT به قیمت واحد {{ request.price }} ریال را دارد، خواهشمندیم در حداکثر
                    زمان
                    مشخص شده به
                    این درخواست پاسخ
                    دهید. اگر مایلید این درخواست را قبول کنید دکمه (تایید درخواست) و در غیر این صورت دکمه (لغو درخواست) را
                    کلیک نمایید.</p>

                <br><br>
                <table class="bg2" style="width :100%; direction: rtl;">
                    <thead>
                        <tr style="border-bottom: solid grey 2px;">
                            <th style="padding: 0.5%; font-size: 12px;">مقدار ارز </th>
                            <th style="padding: 0.5%; font-size: 12px;">قیمت واحد</th>
                            <th style="padding: 0.5%; font-size: 12px;">کل مبلغ </th>
                            <th style="padding: 0.5%; font-size: 12px;">کمیسیون </th>
                            <th style="padding: 0.5%; font-size: 12px;">دریافت خالص </th>
                        </tr>
                    </thead>
                    <tbody class="bg">
                        <tr>
                            <td style="padding: 1%; font-size: 12px;">{{ brequest.amount }}</td>
                            <td style="padding: 1%; font-size: 12px;">{{ request.price }}</td>
                            <td style="padding: 1%; font-size: 12px;">{{ parseInt(brequest.amount * request.price) }}</td>
                            <td style="padding: 1%; font-size: 12px;">{{ parseInt(brequest.amount * request.price * 0.02) }}
                            </td>
                            <td style="padding: 1%; font-size: 12px;">{{ parseInt(brequest.amount * request.price -
                                (brequest.amount
                                    *
                                    request.price * 0.02)) }}</td>
                        </tr>
                    </tbody>
                </table><br><br>

                <button @click="$store.state.chatting = brequest.get_user2; $store.state.chatside = true"
                    style="margin: 20px; min-width: 25%" class="btn btn-warning">پیام</button>
                <button @click="cancel()" style="margin: 20px; min-width: 25%" class="btn btn-danger">لغو</button>
                <button @click="acceptget()" style="margin: 20px; min-width: 25%" class="btn buttonblue">تایید دریافت
                    ارز</button>
            </div>
        </div>


        <div class="card navdark" v-if="currentStep === 4">


            <div class="card-header">
                <h5>شماره درخواست </h5>
                <h5>
                    {{ $route.params.id }}
                </h5>
            </div>
            <div class="card-body" style="padding: 3%;">
                <div style="width: 30% ; margin: auto">
                    <div class="alert bg lightertext">
                        ‌ تکمیل شده
                    </div>
                </div><br><br>

                <p class="lightertext" style="text-align: justify;direction: rtl;">
                    مشخصات معامله</p>

                <table style="width :100%;margin: auto; direction: rtl">
                    <thead class="bg2">
                        <tr>
                            <td style="padding: 10px;width: 50%; text-align: right;">آدرس کیف پول خریدار
                            </td>
                            <td style="padding: 10px;width: 50%; text-align: left;">{{ brequest.wallet }}</td>
                        </tr>
                    </thead>
                    <tbody class="bg">
                        <tr>
                            <td style="padding: 10px;width: 50%; text-align: right;">کد تگ / ممو</td>
                            <td style="padding: 10px;width: 50%; text-align: left;">{{ brequest.memo }}
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="bg2">
                        <tr>
                            <td style="padding: 10px;width: 50%; text-align: right;">مقدار ارز</td>
                            <td style="padding: 10px;width: 50%; text-align: left;">{{ brequest.amount }}
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="bg">
                        <tr>
                            <td style="padding: 10px;width: 50%; text-align: right;">پرداختی خریدار</td>
                            <td style="padding: 10px;width: 50%; text-align: left;">{{ parseInt(brequest.amount *
                                request.price) }}
                            </td>
                        </tr>
                    </tbody>
                </table><br><br>
            </div>
        </div>



    </div>
</template>
  
<script>
import axios from 'axios'
import StepProgress from 'vue-step-progress';

export default {
    name: 'pages-forums-list',
    metaInfo: {
        title: 'کیف ها'
    },
    mounted() {
        this.checklevel()
        this.get_request()
        this.get_rial()
    },
    components: {
        'step-progress': StepProgress
    },
    data: () => ({
        mySteps: ['درخواست خرید', 'پرداخت امن', 'انتقال ارز دیجیتال', 'تایید نهایی'],
        currentStep: 0,
        value: '',
        min_amount_error: '',
        sym: 'USDT',
        alert: '',
        maximum_time: 15,
        balance: '',
        minimum_amount: '',
        process: 0,
        payprocess: 0,
        chain: '',
        memo: false,
        details: '',
        wallet: '',
        memo_code: '',
        chains: [],
        chain_error: '',
        price_type: 'auto',
        change_world: false,
        limit_world: false,
        request: '',
        brequest: [],
        smscode: '',
        rial: 0
    }),
    forumPath: [
        { text: 'کیف ها', active: true }
    ],

    methods: {
        async get_rial() {
            await axios
                .get(`/wallet/1`)
                .then(response => {
                    this.rial = parseInt(response.data[0].amount)
                })
        },
        async createsms() {
            await axios
                .get(`/createsmscode`)
                .then(response => {
                })
        },
        async cancel() {
            if (this.$route.params.id) {
                await axios
                    .delete(`/p2pbuy/${this.$route.params.id}`)
                    .then(response => response.data)
                    .then(response => {
                        this.$router.push('/p2p')
                    })
            }
        },
        async getalert() {
            await axios
                .post('/alert', { page: 'p2psell' })
                .then(response => {
                    this.alert = response.data
                })
        },
        async get_request() {
            if (this.$route.params.id) {
                await axios
                    .get(`/p2pbuy/${this.$route.params.id}`)
                    .then(response => response.data)
                    .then(response => {
                        this.wallet = response.wallet
                        this.memo_code = response.memo
                        this.details = response.details
                        this.request = response.get_request
                        this.brequest = response
                        this.currentStep = response.status
                        if (this.wallet) {
                            this.payprocess = 1
                        }
                    })
            }
        },
        async send_wallet() {
            if (this.$route.params.id) {
                await axios
                    .put(`/p2pbuy/${this.$route.params.id}`, { wallet: this.wallet, memo: this.memo_code, details: this.details })
                    .then(response => response.data)
                    .then(response => {
                        this.request = response.get_request
                        this.brequest = response
                        this.currentStep = response.status
                        this.wallet = response.wallet
                        this.memo_code = response.memo
                        this.details = response.details
                        this.payprocess = 1
                    })
            }
        },
        async acceptget() {
            if (this.$route.params.id) {
                await axios
                    .post(`/p2pacceptget/${this.$route.params.id}`)
                    .then(response => response.data)
                    .then(response => {
                        this.request = response.get_request
                        this.brequest = response
                        this.currentStep = response.status
                        this.wallet = response.wallet
                        this.memo_code = response.memo
                        this.details = response.details
                        this.payprocess = 1
                    })
            }
        },
        async pay() {
            if (this.$route.params.id) {
                await axios
                    .post(`/p2pbuypay/${this.$route.params.id}`, { code: this.smscode })
                    .then(response => response.data)
                    .then(response => {
                        if ('get_request' in response) {
                            this.request = response.get_request
                            this.brequest = response
                            this.currentStep = response.status
                            this.wallet = response.wallet
                            this.memo_code = response.memo
                            this.details = response.details
                            this.payprocess = 1
                        }
                        else {
                            this.link = response.data
                            let a = document.createElement("a");
                            document.body.appendChild(a);
                            a.style = "display: none";
                            a.href = this.link;
                            a.click();
                        }
                    }).catch(response => {
                        this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>کد وارد شده اشتباه است</h5>`)
                    })
            }
        },
        async remove_wallet() {
            if (this.$route.params.id) {
                await axios
                    .put(`/p2pbuy/${this.$route.params.id}`, { wallet: '', memo: '', details: '' })
                    .then(response => response.data)
                    .then(response => {
                        this.request = response.get_request
                        this.brequest = response
                        this.currentStep = response.status
                        this.wallet = response.wallet
                        this.memo_code = response.memo
                        this.details = response.details
                        this.payprocess = 0
                    })
            }
        },
        async checklevel(id) {
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
                                const toPath = this.$route.query.to || '/dashboard'
                                this.$router.push(toPath)
                            }
                        })
                    }
                })
        },
    },
    watch: {
        minimum_amount: {
            handler: function () {
                if (this.minimum_amount === 0) { this.min_amount_error = 'مقدار قابل فروش نمیتواند 0 باشد' }
                else {
                    if (this.minimum_amount > this.balance) { this.min_amount_error = 'حداقل مقدار قابل فروش نمیتواند از موجودی بیشتر باشد' }
                    else { this.min_amount_error = '' }
                }
            },
            deep: true
        },
        balance: {
            handler: function () {
                if (this.balance === 0) { this.balance_error = 'مقدار موجودی فروش نمیتواند 0 باشد' }
                else { this.balance_error = '' }
                if (this.minimum_amount > this.balance) { this.min_amount_error = 'حداقل مقدار قابل فروش نمیتواند از موجودی بیشتر باشد' }
                else { this.min_amount_error = '' }
            },
            deep: true
        },

    }
}

</script>
<style>
.cent {
    text-align: center;
}

label {
    font-size: 14px;
}

.btnfont {
    font-size: 12px;
    padding: 9px;
    margin: 2px;
}

.wallets:hover {
    background: #efefff;
}

.qr {
    width: 20%;
    margin-right: 40%;
    margin-top: 20px;
}

.address {
    margin: auto;
    text-align: center;
    margin-top: 10px;
    height: 65px;
    padding: 0;
}

.address h3 {
    padding: 14px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
}

.addressbtn {
    float: left;
    height: 100%;
}

.address h3::-webkit-scrollbar {
    width: 1px;
}

.address h3::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    width: 3px;
    border-radius: 1px;
}

.address h3::-webkit-scrollbar-thumb {
    border-radius: 1px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    width: 3px;
}

.cent {
    margin: auto;
    text-align: center;
}

.step-progress__wrapper {
    margin: 0 auto;
    position: relative;
    width: 90%
}

.step-progress__wrapper-before {
    background-color: gray;
    transform: translateY(-50%) perspective(1000px)
}

.step-progress__wrapper-after,
.step-progress__wrapper-before {
    content: "";
    height: 12px;
    left: 0;
    position: absolute;
    top: 50%;
    width: 100%
}

.step-progress__wrapper-after {
    background-color: red;
    transform: scaleX(0) translateY(-50%) perspective(1000px);
    transform-origin: left center;
    transition: transform .5s ease
}

.step-progress__bar {
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;
    direction: ltr;
}

.step-progress__step {
    --activeColor: red;
    --passiveColor: gray;
    --activeBorder: 5px;
    --passiveBorder: 5px;
    position: relative;
    z-index: 2
}

.step-progress__step span {
    color: var(--passiveColor);
    display: block;
    font-size: 18px;
    font-weight: 900;
    opacity: 1;
    text-align: center;
    transform: translateZ(0) scale(1) perspective(1000px);
    transition: .3s ease
}

@media(max-width:767px) {
    .step-progress__step span {
        font-size: 22px
    }
}

.step-progress__step--active .step-progress__step-label,
.step-progress__step--active span {
    color: var(--activeColor)
}

.step-progress__step--active .step-progress__step-icon {
    opacity: 1
}

.step-progress__step--valid .step-progress__step-icon {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scale(1) perspective(1000px)
}

.step-progress__step--valid span {
    color: var(--activeColor);
    opacity: 0;
    transform: translateZ(0) scale(2) perspective(1000px)
}

.step-progress__step--valid .step-progress__step-label {
    color: var(--activeColor)
}

.step-progress__step:after {
    background-color: #fff;
    border: var(--passiveBorder) solid var(--passiveColor);
    border-radius: 50%;
    content: "";
    height: 35px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) perspective(1000px);
    transition: .3s ease;
    width: 35px;
    z-index: -1
}

@media(max-width:767px) {
    .step-progress__step:after {
        height: 40px;
        width: 40px
    }
}

.step-progress__step--active:after,
.step-progress__step--valid:after {
    border: var(--activeBorder) solid var(--activeColor)
}

.step-progress__step--valid:after {
    background-color: var(--activeColor)
}

.step-progress__step-label {
    color: gray;
    font-size: 10px;
    font-weight: 600;
    left: 50%;
    position: absolute;
    top: calc(100% + 25px);
    transform: translateX(-50%) perspective(1000px);
    transition: .3s ease;
    white-space: nowrap
}

.step-progress__step-icon {
    color: #fff;
    font-size: 30px;
    left: 50%;
    opacity: 0;
    font-size: 20px;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale(0) perspective(1000px);
    transition: transform .3s ease
}

@media(max-width:767px) {
    .step-progress__step-icon {
        font-size: 22px
    }
}

/*# sourceMappingURL=main.css.map*/
</style>
  