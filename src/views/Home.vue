<template>
    <div class="home">
        <img src="@/assets/logo.png" />
        <img src="~assets/img1.jpg" />
        <img :src="require('assets/img2.jpg')" />
        <div class="div bgi" />
        <div class="div1">primary</div>
        <div class="div2">success</div>
        <div class="div" :style="{'background-image': 'url('+require('assets/img2.jpg')+')'}" />
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.$api.GetImageCaptcha().then(res => {
                if (res.code === 1) {
                    console.log(res.data)
                }
            })
            const b = { name: '12' }
            console.log(this.$tool.copy(b)) // 深拷贝方法
            this.$setItem('id', '123456') // 往sessionStorage存入数据
        }
    }
</script>
<style lang="scss" scoped>
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
