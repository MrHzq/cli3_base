/*
 * @Author: hzq
 * @Date: 2019-07-29 11:38:28
 * @Last Modified by: hzq
 * @Last Modified time: 2019-08-02 16:40:57
 * @文件说明: 首页
 */
<template>
    <div class='home'>
        <img src="@/assets/logo.png" />
        <img src="~assets/img1.jpg" />
        <img :src="require('assets/img2.jpg')" />
        <div class="div bgi" />
        <div class="div" :style="{'background-image': 'url('+require('assets/img2.jpg')+')'}" />
        <div class="div1">primary</div>
        <div class="div2">success</div>
        <div class="f24">使用scss循环生成的类名（.f12 ~ .f30）f代表：font-size</div>
        <div>{{$store.state.token}}</div>
        <hello-world/>
        <h-bgi/>
        <h-hover>h-hover</h-hover>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {}
        },
        created() {
            console.log(this.$api)
            const b = { name: '12' }
            const a = this.$tool.copy(b)
            console.log(a)
            console.log(this.$tool.to)
            console.log(this.$tool.fprice(96544125))
            console.log(this.$tool.fdate())
            this.$tool.setItem('id', '111111')
            this.GetImageCaptcha()
        },
        methods: {
            GetImageCaptcha() {
                this.$api.GetImageCaptcha().then(res => {
                    if (res.Code === 1) {
                        console.log(res.data)
                        setTimeout(() => {
                            this.$tool.to('/about')
                        }, 5000)
                    }
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .home {
        img {
            height: 50px;
        }
        .div {
            width: 50px;
            height: 50px;
        }
        .bgi {
            background-image: url('~assets/img1.jpg');
        }
        .div1 {
            color: $primary;
        }
        .div2 {
            color: $success;
        }
    }
</style>
