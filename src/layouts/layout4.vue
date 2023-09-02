<template>
    <topbanner />
    <navbar />
    <div style="margin-top: 56px; overflow: hidden;width: 100%; position: relative; top: -5px; height: 100%"
        class="noscrollbar">
        <div style="width: 200px;border-left: solid 1px rgba(150,150,150, 0.4);float: right; height: 100%; position: fixed; right: 0; z-index: 100;"
            class="navdark side not600">
            <a href="/deposit" :class='$route.fullPath === "/deposit" ? "lightertext" : ""'
                style="height: 60px;display: block;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);"
                :style="[$route.fullPath === '/deposit' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]">
                <i style="float: right; margin-top: -1px;
                    margin-left: 10px;font-size: 32px" class="material-symbols-outlined">
                    person
                </i>
                <div style="float: right ; font-size: 20px;">واریز</div>
            </a>
            <a href="/withdraw" style="height: 60px;display: block;"
                :class='$route.fullPath === "/withdraw" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/withdraw' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        shield
                    </i>
                    <div style="float: right ; font-size: 20px;">برداشت</div>
                </div>
            </a>

            <a href="/transactions" style="height: 60px;display: block;"
                :class='$route.fullPath === "/transactions" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/transactions' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        check_circle
                    </i>
                    <div style="float: right ; font-size: 20px;">تاریخچه</div>
                </div>
            </a>
            <a href="/addcard" style="height: 60px;display: block;"
                :class='$route.fullPath === "/addcard" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/addcard' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        check_circle
                    </i>
                    <div style="float: right ; font-size: 20px;">کارت جدید</div>
                </div>
            </a>
        </div>
        <div style="width: 100%; height: 54px;margin-bottom: 30px;overflow-x: auto; position: relative; right: 0; direction: rtl;"
            class="navdark on600 noscrollbar">
            <div class="css-vurnku" style=";
    height: 100%;
    position: relative;
    right: 0px;">
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100%  "
                    :style="[$route.fullPath === '/deposit' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/deposit">
                    <div style="">واریز</div>

                </a>
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/withdraw' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/withdraw" :class="{}">
                    <div style="text-decoration: none;">برداشت</div>

                </a>
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/transactions' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/transactions" :class="{}">
                    <div style="text-decoration: none;">تاریخچه</div>

                </a>
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/addcard' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/addcard" :class="{}">
                    <div style="text-decoration: none;"> کارت جدید</div>

                </a>


            </div>

        </div>
        <div style="clear: both;" class="on600"></div>
        <div style="width: 100%;border-right: 1px solid rgb(234, 236, 239);float: right; height: 100%; position: relative"
            class="rightmenu">
            <router-view />

        </div>


    </div>
</template>
    
<script>

import navbar from '../layouts/Navbar.vue'
import topbanner from '../layouts/topbanner.vue'
import axios from 'axios';
import "bootstrap";

export default {
    components: {
        navbar,
        topbanner
    },
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            user: [],
        }
    },
    methods: {
        async getUSer() {
            await axios
                .get('userinfo')
                .then(response => response.data)
                .then(response => {
                    this.user = response
                })
        },

    },
    created() {
        this.getUSer()


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

.nodec {
    text-decoration: none;
}
</style>