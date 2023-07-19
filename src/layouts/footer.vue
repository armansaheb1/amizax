<template>
    <div>
        <footer class="d-none d-md-block " style="background: #222; color: white; text-align: right">
            <div class="col-12" style="height: 250px">
                <div class="col-4" style="height: 100%; float: right; padding: 2%">
                    <b-navbar-brand to="/">
                        <a style="
                color: white;
                font-size: 35px;
                font-weight: bold;
                margin-right: 10px;
              ">آمیزاکس</a><img loading="lazy" style="width: 60px; height: 70px" src="/img/logo.png" />
                    </b-navbar-brand><br /><br />
                </div>
                <div class="col-3" style="height: 100%; float: right; padding: 2%">
                    <h3 style="color: white; font-size: 25px">خدمات ما</h3>
                    <br />
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/margin-trade">
                        <h6 style="color: grey; font-size: 14px">
                            معاملات مرجین
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/perpetual-trade">
                        <h6 style="color: grey; font-size: 14px">
                            معاملات پرپشوال
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/exchange">
                        <h6 style="color: grey; font-size: 14px">اکسچینج</h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/buysell">
                        <h6 style="color: grey; font-size: 14px">
                            خرید و فروش
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/onlinetrading">
                        <h6 style="color: grey; font-size: 14px">
                            تریدینگ لحظه ای
                        </h6>
                    </router-link>
                </div>
                <div class="col-3" style="height: 100%; float: right; padding: 2%">
                    <h3 style="color: white; font-size: 25px">درباره ما</h3>
                    <br />
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/group">
                        <h6 style="color: grey; font-size: 14px">
                            اعضای شرکت
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/history">
                        <h6 style="color: grey; font-size: 14px">تاریخچه</h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/line">
                        <h6 style="color: grey; font-size: 14px">
                            زمینه فعالیت
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/rules">
                        <h6 style="color: grey; font-size: 14px">
                            قوانین و مقررات
                        </h6>
                    </router-link>
                </div>
                <div class="col-2" style="height: 100%; float: right; padding: 2%">
                    <h3 style="color: white; font-size: 25px">ارتباط با ما</h3>
                    <br />
                    <router-link class="normaltext" style="text-decoration:none" to="/ticketadd">
                        <h6 style="color: grey; font-size: 14px">
                            پشتیبانی آنلاین
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/contacts">
                        <h6 style="color: grey; font-size: 14px">
                            تماس با ما
                        </h6>
                    </router-link>
                </div>
            </div>
        </footer>

        <footer class="d-md-none" style="background: #222; color: white; text-align: center">
            <div class="col-12" style="height: auto">
                <div class="col-12" style="height: 100%; padding: 2%">
                    <b-navbar-brand to="/" style="margin: 0">
                        <img loading="lazy" style="width: 60px; height: 70px; margin: auto" src="/img/logo.png" />
                    </b-navbar-brand><br /><br />
                    <h3 style="color: white; font-size: 25px">بهترین مکان برای ترید</h3>
                </div>
                <div class="col-12" style="height: 100%; margin-top: 80px; padding: 2%">
                    <h3 style="color: white; font-size: 25px">خدمات ما</h3>
                    <br />
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/margin-trade">
                        <h6 style="color: grey; font-size: 14px">
                            معاملات مرجین
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/perpetual-trade">
                        <h6 style="color: grey; font-size: 14px">
                            معاملات پرپشوال
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/exchange">
                        <h6 style="color: grey; font-size: 14px">اکسچینج</h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/buysell">
                        <h6 style="color: grey; font-size: 14px">
                            خرید و فروش
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/onlinetrading">
                        <h6 style="color: grey; font-size: 14px">
                            تریدینگ لحظه ای
                        </h6>
                    </router-link>
                </div>
                <div class="col-12" style="height: 100%; margin-top: 80px; padding: 2%">
                    <h3 style="color: white; font-size: 25px">درباره ما</h3>
                    <br />
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/group">
                        <h6 style="color: grey; font-size: 14px">
                            اعضای شرکت
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/history">
                        <h6 style="color: grey; font-size: 14px">تاریخچه</h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/line">
                        <h6 style="color: grey; font-size: 14px">
                            زمینه فعالیت
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/pages/rules">
                        <h6 style="color: grey; font-size: 14px">
                            قوانین و مقررات
                        </h6>
                    </router-link>
                </div>
                <div class="col-12" style="height: 100%; margin-top: 80px; padding: 2%">
                    <h3 style="color: white; font-size: 25px">ارتباط با ما</h3>
                    <br />
                    <router-link class="normaltext" style="text-decoration:none" to="/ticketadd">
                        <h6 style="color: grey; font-size: 14px">
                            پشتیبانی آنلاین
                        </h6>
                    </router-link>
                    <router-link class="normaltext" style="text-decoration:none" to="/contacts">
                        <h6 style="color: grey; font-size: 14px">
                            تماس با ما
                        </h6>
                    </router-link>
                </div>
            </div>
        </footer>
    </div>
</template>
  
<script>
export default {
    name: 'app-layout-footer',

    methods: {
        getLayoutFooterBg() {
            return `bg-${this.layoutFooterBg}`
        }
    }
}
</script>