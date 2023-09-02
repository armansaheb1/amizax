<template>
    <div class="navlight"
        style="width: 100%; height: 56px; box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1); position: fixed; top: 0; left: 0; z-index: 1000000">
        <div id="phone">
            <div class="phonemenu navlight"
                :style="`position: absolute; width: 100%; height: ${winheight}px; z-index: 10;top: -${winheight}px; overflow: hidden;`">
                <div style="width: 100%; height: 56px; box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);">
                    <div>
                        <img style="height: 32px; float: left; margin: 18px; margin-top: 12px" src="/img/logo.png" alt="">
                        <h3
                            style="height: 22px; float: left; margin: 14px;margin-left: 25px font-size: 26px; font-family: 'BebasNeue-Regular'; color: rgb(138 184 52)">
                            AMIZAX</h3>
                    </div>
                    <div>
                        <button class="normaltext btn btn-secondary" @click="phonemenu()"
                            style="margin-top: 8px;margin-right: 16px; padding: inherit ; float:right; border: none;color: rgba(0, 0, 0, 0.54); border-radius: 8px;width: 40px; height: 44px">
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-10dohqv" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path d="M18 6l-6 6m0 0l-6 6m6-6l6 6m-6-6L6 6" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav style="width: 100%;box-sizing: border-box;padding: 0;">
                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div v-if="$store.state.isAuthenticated" style="padding: 2.5% 5%;text-align: right;">
                            <div><a style="; font-family: 'iranyekan-fanum';">پروفایل</a>
                            </div><span></span>
                        </div>
                        <router-link to="/dashboard" class="submobmenubtn" href="#">داشبورد</router-link>
                        <router-link to="/security" class="submobmenubtn" href="#">امنیت</router-link>
                        <router-link to="/verify" class="submobmenubtn" href="#">تایید هویت</router-link>
                        <router-link to="/refferals" class="submobmenubtn" href="#">زیر مجموعه ها</router-link>
                        <router-link to="/logout" class="submobmenubtn" href="#">خروج</router-link>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>
                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div><a style="; font-family: 'iranyekan-fanum';">P2P معاملات</a>
                            </div><span></span>



                        </div>
                        <a href="/p2p/buy" class="submobmenubtn">خرید</a>
                        <a href="/p2p/sell" class="submobmenubtn">فروش</a>
                        <a href="/p2p/my-orders" class="submobmenubtn">معاملات
                            من</a>
                        <a href="/p2p/my-sells" class="submobmenubtn">فروش های
                            من</a>

                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>
                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div><a style="; font-family: 'iranyekan-fanum';"> معاملات آنی </a>
                            </div><span></span>



                        </div>
                        <router-link to="/buy" class="submobmenubtn" href="#">خرید</router-link>
                        <router-link to="/sell" class="submobmenubtn" href="#">فروش</router-link>
                        <router-link to="/exchange" class="submobmenubtn" href="#">اکسچینج</router-link>

                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>
                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div><a style="; font-family: 'iranyekan-fanum';"> معاملات اهرمی </a>
                            </div><span></span>



                        </div>
                        <router-link to="/margin/BTCUSDT" class="submobmenubtn" href="#">مرجین</router-link>
                        <router-link to="/perpetual/BTCUSDT" class="submobmenubtn" href="#">پرپشوال</router-link>

                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>
                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div><a style="; font-family: 'iranyekan-fanum';"> ووچر پرفکت مانی </a>
                            </div><span></span>



                        </div>
                        <router-link to="/perfect/buy" class="submobmenubtn" href="#">خرید</router-link>
                        <router-link to="/perfect/sell" class="submobmenubtn" href="#">فروش</router-link>
                        <router-link to="/perfect/history" class="submobmenubtn" href="#">تاریخچه</router-link>
                        <router-link to="/perfect/inquiry" class="submobmenubtn" href="#">استعلام</router-link>

                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>
                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div><a style="; font-family: 'iranyekan-fanum';"> حسابداری </a>
                            </div><span></span>



                        </div>
                        <router-link to="/deposit" class="submobmenubtn" href="#">واریز</router-link>
                        <router-link to="/withdraw" class="submobmenubtn" href="#">برداشت</router-link>
                        <router-link to="/transactions" class="submobmenubtn" href="#">تاریخچه</router-link>
                        <router-link to="/addcard" class="submobmenubtn" href="#">اضافه کردن کارت</router-link>

                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>

                    <div style="text-decoration: none!important" class="mobmenubtn">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div><a href="/wallets" style="; font-family: 'iranyekan-fanum';text-decoration: none"> ولت
                                    ها(است) </a>
                            </div><span></span>
                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </div>

                    <a style="text-decoration: none!important">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div style="float: right; margin-left: 20px;"><svg width="24" height="24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.745 22c-.163 0-.326 0-.49-.01-5.368-.232-9.854-4.427-10.228-9.543-.326-4.39 2.291-8.492 6.51-10.213 1.198-.483 1.83-.111 2.099.159.268.26.642.865.144 1.971a7.428 7.428 0 00-.652 3.116c.019 4.121 3.546 7.618 7.85 7.786a8.533 8.533 0 001.832-.121c1.265-.223 1.792.27 1.994.586.2.316.431.995-.336 2C19.436 20.428 16.205 22 12.745 22zm-9.29-9.655c.327 4.428 4.219 8.055 8.858 8.25 3.154.15 6.145-1.246 7.986-3.683.143-.195.21-.335.24-.41a1.554 1.554 0 00-.48.029c-.7.12-1.428.167-2.147.14-5.062-.196-9.203-4.317-9.232-9.172 0-1.284.259-2.52.786-3.683.096-.205.115-.344.125-.419-.086 0-.24.019-.49.121C5.45 5.006 3.188 8.56 3.457 12.345z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div><span style="; font-family: 'iranyekan-fanum';">انتخاب تم</span>
                                <div style="float: left;">
                                    <img @click="toggleDark();" v-if="isDark" src="/day.png" style="cursor: pointer">
                                    <img @click="toggleDark();" v-if="!isDark" src="/night.png" style="cursor: pointer">
                                </div>
                            </div><span></span>

                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </a>
                </nav>
                <div v-if="!$store.state.isAuthenticated"
                    style="width: 100%; height: 64px; box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 4px 1px; position: absolute; bottom: 0;">
                    <div style="width: 50%; padding: 2.7% 1% 0 3.6%; float:left; box-sizing: border-box">
                        <button @click="loginisVisible = !loginisVisible" class="btn btn-danger" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px 16px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;">ثبت نام</button>
                    </div>

                    <div style="width: 50%; padding: 2.7% 1% 0 3.6%; float:left; box-sizing: border-box">
                        <button @click="loginisVisible = !loginisVisible" class="btn btn-success" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px 16px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;">ورود</button>
                    </div>

                </div>
                <div v-if="$store.state.isAuthenticated"
                    style="width: 100%; height: 64px; box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 4px 1px; position: absolute; bottom: 0;">
                    <div style="width: 100%; padding: 2.7% 1% 0 3.6%; float:left; box-sizing: border-box">
                        <a href="/logout" class="btn btn-dark" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px 16px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    color: white;
    min-width: initial;">خروج</a>
                    </div>

                </div>
            </div>
            <div class="phonenav" style="position: relative; height: 100%">
                <div>

                    <h3
                        style="height: 22px; float: left; margin: 14px; font-size: 26px; font-family: 'BebasNeue-Regular'; color: rgb(138 184 52)">
                        AMIZAX</h3><img style="height: 32px; float: left; margin: 18px; margin-top: 12px"
                        src="/img/logo.png" alt="">
                </div>
                <div>
                    <button @click="phonemenu()" class="normaltext"
                        style="margin-top: 15px; float:right; border: none;background-color: transparent">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-10dohqv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M2.25 7A.75.75 0 013 6.25h18a.75.75 0 010 1.5H3A.75.75 0 012.25 7zM2.25 12a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM3 16.25a.75.75 0 000 1.5h18a.75.75 0 000-1.5H3z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pcnav" style="position: relative; height: 100%; width: 100%">
                <div style="float: right; width: 100%; font-size: 20px; font-family: 'BebasNeue-Regular';margin-left: -5px">
                    <a href="/"><img style="height: 32px; float: right; margin: 15px; margin-top: 12px" src="/img/logo.png"
                            alt="">
                        <h3 style="height: 22px; float: right; margin: 0px;margin-top: 15px; font-size: 26px; margin-left:25px
                            font-family: 'BebasNeue-Regular' ;margin-left: -5px; color: rgb(138 184 52)">
                            AMIZAX</h3>

                    </a>
                    <div v-if="false" @mouseover="mainMenu = true" @mouseleave="mainMenu = false"
                        style="float: right;margin-right: 40px; margin: 10px;margin-bottom: 0; z-index: 1000;    padding-bottom: 6px;">
                        <a style="cursor: pointer">
                            <svg style="float: left;color:#8D9FB9; margin-right: 2px;margin-top:6px" width="20" height="20"
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-nqvzgt" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path
                                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                                    fill="currentColor"></path>
                            </svg><i class="material-symbols-outlined" style="width: 32px; font-size: 32px">apps</i>
                        </a>
                        <div class="navdark" v-if="mainMenu"
                            style="position: absolute; width: 84%;height: 390px;  margin:auto;margin-top: 5px;left: 8%;z-index: 100000;">
                            <div class="submenus">
                                <router-link @click="mainMenu = false" to="/exchange">
                                    <div style="width: 20%; float: right; margin-top: 6px">
                                        <i class="material-symbols-outlined">
                                            currency_exchange</i>
                                    </div>
                                    <div style="width: 80%; float: right">
                                        <h4>اکسچینج</h4>
                                        <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                    </div>
                                </router-link>

                            </div>
                            <div class="submenus">
                                <router-link @click="mainMenu = false" to="/buy">
                                    <div style="width: 20%; float: right; margin-top: 6px">
                                        <i class="material-symbols-outlined">
                                            shopping_cart</i>
                                    </div>
                                    <div style="width: 80%; float: right">
                                        <h4>خرید</h4>
                                        <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                    </div>
                                </router-link>
                            </div>
                            <div class="submenus">
                                <router-link @click="mainMenu = false" to="/sell">
                                    <div style="width: 20%; float: right; margin-top: 6px">
                                        <i class="material-symbols-outlined">
                                            storefront</i>
                                    </div>
                                    <div style="width: 80%; float: right">
                                        <h4>فروش</h4>
                                        <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                    </div>
                                </router-link>

                            </div>
                            <div class="submenus">
                                <router-link @click="mainMenu = false" to="/p2p">
                                    <div style="width: 20%; float: right; margin-top: 6px">
                                        <i class="material-symbols-outlined">
                                            monitoring</i>
                                    </div>
                                    <div style="width: 80%; float: right">
                                        <h4>معاملات P2P</h4>
                                        <h6 class="normaltext">معاملات کاربر به کاربر</h6>
                                    </div>
                                </router-link>


                            </div>
                            <div class="submenus">
                                <div style="width: 20%; float: right; margin-top: 6px">
                                    <i class="material-symbols-outlined">
                                        monitoring</i>
                                </div>
                                <div style="width: 80%; float: right">
                                    <h4>معاملات مرجین</h4>
                                    <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                </div>


                            </div>
                            <div class="submenus">
                                <div style="width: 20%; float: right; margin-top: 6px">
                                    <i class="material-symbols-outlined">
                                        monitoring</i>
                                </div>
                                <div style="width: 80%; float: right">
                                    <h4>معاملات فیوچرز</h4>
                                    <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                </div>


                            </div>
                            <div class="submenus">
                                <router-link @click="mainMenu = false" to="/deposit">
                                    <div style="width: 20%; float: right; margin-top: 6px">
                                        <i class="material-symbols-outlined">
                                            account_balance</i>
                                    </div>
                                    <div style="width: 80%; float: right">
                                        <h4>حسابداری</h4>
                                        <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                    </div>
                                </router-link>

                            </div>
                            <div class="submenus">

                                <router-link @click="mainMenu = false" to="/wallets">
                                    <div style="width: 20%; float: right; margin-top: 6px">
                                        <i class="material-symbols-outlined">
                                            wallet</i>
                                    </div>
                                    <div style="width: 80%; float: right">
                                        <h4>دارایی ها</h4>
                                        <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                    </div>
                                </router-link>

                            </div>
                            <div v-if="false" class="submenus">
                                <div style="width: 20%; float: right; margin-top: 6px">
                                    <i class="material-symbols-outlined">
                                        work_history</i>
                                </div>
                                <div style="width: 80%; float: right">
                                    <h4>تاریخچه</h4>
                                    <h6 class="normaltext">تبدیل ارزها به یک دیگر به صورت آنی</h6>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div style="float: right; margin: 10px;margin-right: 30px;direction: rtl" class="dropdown">
                        <a style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none"
                            class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            P2P معاملات
                        </a>
                        <div class="dropdown-menu navlight" aria-labelledby="dropdownMenuButton">
                            <router-link to="/p2p/buy" class="dropdown-item" href="#">خرید</router-link>
                            <router-link to="/p2p/sell" class="dropdown-item" href="#">فروش</router-link>
                            <router-link to="/p2p/my-orders" class="dropdown-item" href="#">معاملات من</router-link>
                            <router-link to="/p2p/my-sells" class="dropdown-item" href="#">فروش های من</router-link>

                        </div>
                    </div>

                    <div style="float: right;margin-right: 30px; margin: 8px;direction: rtl" class="dropdown">
                        <a style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none"
                            class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            معاملات آنی
                        </a>
                        <div class="dropdown-menu navlight" aria-labelledby="dropdownMenuButton">
                            <router-link to="/buy" class="dropdown-item" href="#">خرید</router-link>
                            <router-link to="/sell" class="dropdown-item" href="#">فروش</router-link>
                            <router-link to="/exchange" class="dropdown-item" href="#">اکسچینج</router-link>
                        </div>
                    </div>

                    <div style="float: right;margin-right: 30px; margin: 8px;direction: rtl" class="dropdown">
                        <a style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none"
                            class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            معاملات اهرمی
                        </a>
                        <div class="dropdown-menu navlight" aria-labelledby="dropdownMenuButton">
                            <router-link to="/margin/BTCUSDT" class="dropdown-item" href="#">مرجین</router-link>
                            <router-link to="/perpetual/BTCUSDT" class="dropdown-item" href="#">پرپشوال</router-link>
                        </div>
                    </div>


                    <div style="float: right;margin-right: 30px; margin: 8px;direction: rtl" class="dropdown">
                        <a style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none"
                            class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            حسابداری
                        </a>
                        <div class="dropdown-menu navlight" aria-labelledby="dropdownMenuButton">
                            <router-link to="/deposit" class="dropdown-item" href="#">واریز</router-link>
                            <router-link to="/withdraw" class="dropdown-item" href="#">برداشت</router-link>
                            <router-link to="/transactions" class="dropdown-item" href="#">تاریخچه</router-link>
                            <router-link to="/addcard" class="dropdown-item" href="#">اضافه کردن کارت</router-link>

                        </div>
                    </div>
                    <div style="float: right;margin-right: 30px; margin: 8px;">
                        <router-link to="/wallets"
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none">
                            ولت ها(است)
                        </router-link>
                    </div>



                    <div style="float: left;padding: 9px;border-right: solid 1.5px lightgrey;">
                        <div style="float: left;">
                            <img @click="toggleDark();" v-if="isDark" src="/day.png" style="cursor: pointer">
                            <img @click="toggleDark();" v-if="!isDark" src="/night.png" style="cursor: pointer">
                        </div>
                    </div>
                    <div style="float: left;margin: 10px; margin-right: 0">
                        <div style="float: left;">
                            <button v-if="!$store.state.isAuthenticated" class="btn btn-danger" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    margin-right: 10px;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    text-decoration: none;
    color: inherit;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum,sans-serif;
    text-transform: uppercase;
    min-width: 64px;
    padding: 4px 10px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;
    font-family: iranyekan-fanum,sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.75;
    padding: 4px 16px;" @click="signupisVisible = !signupisVisible">ثبت نام</button>
                        </div>
                    </div>
                    <div style="float: left;margin-right: 30px;margin: 10px; margin-left: 0">
                        <div style="float: left;">
                            <button v-if="!$store.state.isAuthenticated" class="btn btn-success" style="

    padding: 4px 16px;" @click="loginisVisible = !loginisVisible">ورود</button>


                            <div v-if="$store.state.isAuthenticated" style="float: left;margin-right: 5px;direction: rtl"
                                class="dropdown">
                                <a style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none"
                                    class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="material-symbols-outlined"
                                        style="width: 32px; font-size: 32px; margin: 0 5px">person</i>
                                </a>
                                <div class="dropdown-menu navlight" aria-labelledby="dropdownMenuButton">
                                    <router-link to="/dashboard" class="dropdown-item" href="#">داشبورد</router-link>
                                    <router-link to="/security" class="dropdown-item" href="#">امنیت</router-link>
                                    <router-link to="/verify" class="dropdown-item" href="#">تایید هویت</router-link>
                                    <router-link to="/refferals" class="dropdown-item" href="#">زیر مجموعه ها</router-link>
                                    <hr>
                                    <router-link to="/logout" class="dropdown-item" href="#">خروج</router-link>
                                </div>
                            </div>


                        </div>
                        <a v-if="$store.state.isAuthenticated"
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;background: none; border:none">
                            <i @click="$store.state.chatside = true" class="material-symbols-outlined"
                                style="width: 32px; font-size: 26px;margin: 4px 5px; font-weight: normal; cursor:pointer">chat</i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <div style="clear:both"></div>


    </div>
    <Modal v-model:visible="loginisVisible" title="Login" type="clean" width="65%" offsetTop="30px">
        <login />
    </Modal>

    <Modal v-model:visible="signupisVisible" title="Login" type="clean" width="65%" offsetTop="30px">
        <signup />
    </Modal>
</template>
<script setup>
import { ref } from 'vue';
import { Modal } from 'usemodal-vue3';
import { useDark, useToggle } from "@vueuse/core";
import login from './../components/modals/login.vue'
import signup from './../components/modals/signup.vue'

const isDark = useDark({
    selector: "body",
    attribute: "theme",
})
const toggleDark = useToggle(isDark);
</script>
<script>

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        login,
        signup
    },
    updated() {

    },
    beforeMount() {
        this.winheight = window.innerHeight
        document.addEventListener('scroll', () => {
            this.winheight = window.innerHeight
        })
    },
    data() {
        return {
            loginisVisible: ref(false),
            signupisVisible: ref(false),
            mainMenu: false,
            winheight: 0,
        }
    },
    methods: {
        phonemenu() {
            var element = document.querySelector('.phonemenu')
            if (element.className.includes('topmenuanimdown')) {
                document.querySelector('.phonemenu').classList.remove('topmenuanimdown')
                document.querySelector('.phonemenu').classList.add('topmenuanimtop')
            } else {
                if (element.className.includes('topmenuanimtop')) {
                    document.querySelector('.phonemenu').classList.remove('topmenuanimtop')
                }
                document.querySelector('.phonemenu').classList.add('topmenuanimdown')
            }
        },
    }
}
</script>

<style lang="scss">
@keyframes ttob {
    from {
        top: - v-bind('winheight');
    }

    to {
        top: 0%;
    }
}

@keyframes btot {
    from {
        top: 0%;
    }

    to {
        top: - v-bind('winheight');
        ;
    }
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

.phonenav {
    display: none
}

.pcnav {
    display: block
}

.topmenuanimdown {
    animation-name: ttob;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}

.topmenuanimtop {
    animation-name: btot;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}

@media only screen and (max-width: 899px) {
    .phonenav {
        display: block
    }

    .pcnav {
        display: none
    }
}

.mui-127q5co-paper {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 26, 63);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: none;
    box-shadow: none;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    z-index: 1200;
    position: fixed;
    top: 0px;
    outline: 0px;
    right: 0px;
    left: 0px;
    max-height: 100%;
    width: 100%;
    height: 100%;
}

.buttonblue {
    background-color: rgb(5, 43, 97) !important;
    color: rgb(226, 233, 243) !important
}

.dark .buttonblue {
    background-color: rgb(226, 233, 243) !important;
    color: rgb(5, 43, 97) !important;
}

.buttongrey {
    color: rgb(5, 43, 97) !important;
}

.navdark {
    background-color: white;
}

.dark .buttongrey {
    color: rgb(226, 233, 243) !important;
}

.dark .navdark {
    background-color: rgb(15, 28, 46);
    color: rgb(229, 240, 255);
}

.dark .navdark a {
    color: rgb(229, 240, 255);
}

.navdark a {
    color: #052B61;
}

.modal {
    margin-top: -30px;
}

.submenus {
    width: 30%;
    margin: 15px 1.5%;
    height: 100px;
    border-radius: 15px;
    float: right;
    padding: 2%;
    text-align: right;
}

.submenus h6 {
    font-size: 12px;
}

.submenus:hover {
    cursor: pointer;
    background-color: rgba(150, 150, 150, 0.2);

}

.dropdown-item {
    text-align: right;
}

.mobmenubtn:hover>.submobmenubtn {
    display: block;
}


.submobmenubtn {
    width: 100%;
    background: lightgrey;
    color: #444 !important;
    padding: 3%;
    display: none;
    text-decoration: none;
    text-align: right;
}
</style>
