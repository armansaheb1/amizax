<template>
    <topbanner />
    <navbar />
    <div style=" overflow: hidden;width: 100%; position: relative; top: -5px; height: 100%" class="noscrollbar">
        <div style="width: 250px;border-left: solid 1px rgba(150,150,150, 0.4);float: right; height: 100%; position: fixed; right: 0; z-index: 100;"
            class="navdark side not600">
            <a href="/p2p/buy" :class='$route.fullPath === "/p2p/buy" ? "lightertext" : ""'
                style="height: 60px;display: block;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);"
                :style="[$route.fullPath === '/p2p/buy' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]">
                <i style="float: right; margin-top: -1px;
                    margin-left: 10px;font-size: 32px" class="material-symbols-outlined">
                    person
                </i>
                <div style="float: right ; font-size: 18px;">خرید</div>
            </a>
            <a href="/p2p/sell" style="height: 60px;display: block;"
                :class='$route.fullPath === "/p2p/sell" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/p2p/sell' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        shield
                    </i>
                    <div style="float: right ; font-size: 18px;">فروش</div>
                </div>
            </a>

            <a href="/p2p/my-orders" style="height: 60px;display: block;"
                :class='$route.fullPath === "/p2p/my-orders" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/p2p/my-orders' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        check_circle
                    </i>
                    <div style="float: right ; font-size: 18px;"> معاملات من</div>
                </div>
            </a>
            <a href="/p2p/my-sells" style="height: 60px;display: block;"
                :class='$route.fullPath === "/p2p/my-sells" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/p2p/my-sells' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        check_circle
                    </i>
                    <div style="float: right ; font-size: 18px;">فروش های من</div>
                </div>
            </a>
        </div>
        <div style="width: 100%; height: 54px;margin-bottom: 30px;overflow-x: auto; position: relative; right: 0; direction: rtl;"
            class="navdark on600 noscrollbar">
            <div class="css-vurnku" style=";
    height: 100%;
    position: relative;
    right: 0px;">
                <a style=" float: right ; font-size: 18px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100%  "
                    :style="[$route.fullPath === '/p2p/buy' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/p2p/buy">
                    <div style="">خرید</div>

                </a>
                <a style=" float: right ; font-size: 18px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/p2p/sell' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/p2p/sell" :class="{}">
                    <div style="text-decoration: none;">فروش</div>

                </a>
                <a style=" float: right ; font-size: 18px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/p2p/my-orders' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/p2p/my-orders" :class="{}">
                    <div style="text-decoration: none;"> معاملات من</div>

                </a>
                <a style=" float: right ; font-size: 18px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/p2p/my-sells' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/p2p/my-sells" :class="{}">
                    <div style="text-decoration: none;"> فروش های من</div>

                </a>


            </div>

        </div>
        <div style="clear: both;" class="on600"></div>
        <div style="width: 100%;border-right: 1px solid rgb(234, 236, 239);float: right; height: 100%; position: relative"
            class="rightmenu">
            <h4 class="lightertext" style="text-align: right;margin: 5px 20px ;">معاملات کاربر به کاربر</h4><br>

            <router-view />

        </div>


    </div>
</template>
    
<script>

import navbar from '../layouts/Navbar.vue'
import topbanner from '../layouts/topbanner.vue'
import axios from 'axios';
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
                    console.log(response)
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