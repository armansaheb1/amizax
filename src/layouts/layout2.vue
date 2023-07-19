<template>
    <topbanner />
    <navbar />
    <div style="margin-top: -56px; overflow: hidden;width: 100%; position: relative; top: -5px; height: 100%" class="noscrollbar">
        <div style="width: 200px;border-left: solid 1px rgba(150,150,150, 0.4);float: right; height: 100%; position: fixed; right: 0; z-index: 100;"
            class="navdark side not600">
            <a href="/dashboard" :class='$route.fullPath === "/dashboard" ? "lightertext" : ""'
                style="height: 60px;display: block;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);"
                :style="[$route.fullPath === '/dashboard' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]">
                <i style="float: right; margin-top: -1px;
                    margin-left: 10px;font-size: 32px" class="material-symbols-outlined">
                    person
                </i>
                <div style="float: right ; font-size: 20px;">داشبورد</div>
            </a>
            <a href="/security" style="height: 60px;display: block;"
                :class='$route.fullPath === "/security" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/security' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        shield
                    </i>
                    <div style="float: right ; font-size: 20px;">امنیت</div>
                </div>
            </a>

            <a href="/verify" style="height: 60px;display: block;"
                :class='$route.fullPath === "/verify" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/verify' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 10px;font-size: 32px"
                        class="material-symbols-outlined">
                        check_circle
                    </i>
                    <div style="float: right ; font-size: 20px;">تایید هویت</div>
                </div>
            </a>
            <a href="/refferals" style="height: 60px;display: block;"
                :class='$route.fullPath === "/refferals" ? "lightertext" : ""'>
                <div :style="[$route.fullPath === '/refferals' ? { 'background': 'rgba(150,150,150, 0.3)' } : {
                    'border-bottom'
                        : 'none'
                }]"
                    style=" height: 60px;display: block; box-sizing: border-box;margin: 0;padding: 8%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156);">
                    <i style="float: right; margin-top: -1px; margin-left: 12px;font-size: 30px"
                        class="material-symbols-outlined">
                        hub
                    </i>
                    <div style="float: right ; font-size: 20px;">زیر مجموعه ها</div>
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
                    :style="[$route.fullPath === '/dashboard' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/dashboard">
                    <div style="">داشبورد</div>

                </a>
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/security' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/security" :class="{}">
                    <div style="text-decoration: none;">امنیت</div>

                </a>
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/verify' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/verify" :class="{}">
                    <div style="text-decoration: none;">تایید هویت</div>

                </a>
                <a style=" float: right ; font-size: 20px; box-sizing: border-box;margin: 0;padding: 1%;outline: 0;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);color: rgb(132, 142, 156);font-size: 24px;fill: rgb(132, 142, 156); margin-left: 25px!important; height: 100% ; "
                    :style="[$route.fullPath === '/refferals' ? { 'border-bottom': 'solid 3px grey' } : {
                        'border-bottom'
                            : 'none'
                    }]" class="nodec" href="/refferals" :class="{}">
                    <div style="text-decoration: none;">زیرمجموعه ها</div>

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
import footers from './footer.vue'
import axios from 'axios';
import "bootstrap";

export default {
    components: {
        navbar,
        topbanner,
        footers
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