/*
 * @Author: hzq
 * @Date: 2019-07-29 11:38:28
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-30 13:57:11
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
            console.log(this.$to)
            this.$setItem('id', '111111')
            this.GetImageCaptcha()
        },
        methods: {
            needarr() {
                setTimeout(() => {
                    this.$store.commit('save', ['token', 'token2'])
                }, 5000)
                // 原始数据
                const oldarr = [
                    {
                        id: 2,
                        parentId: 1,
                        child: []
                    },
                    {
                        id: 3,
                        parentId: 1,
                        child: []
                    },
                    {
                        id: 4,
                        parentId: 1,
                        child: []
                    },
                    {
                        id: 1,
                        parentId: null,
                        child: []
                    },
                    {
                        id: 89,
                        parentId: 10,
                        child: []
                    },
                    {
                        id: 10,
                        parentId: null,
                        child: []
                    }
                ]
                // 需要的数据
                const needarr = []
                oldarr.map(o => {
                    if (o.parentId) {
                        // 通过 子级的 parentId，在 needarr 查找 父级
                        const fobj = needarr.find(n => n.id === o.parentId)
                        if (fobj) fobj.child.push(o)
                        else {
                            // 未找到父级，则再通过子级的 parentId，在 oldarr 查找 父级
                            const fobj = oldarr.find(n => n.id === o.parentId)
                            fobj.child.push(o)
                            needarr.push(fobj)
                        }
                    } else {
                        const isInNeedarr = !!needarr.find(n => n.id === o.id)
                        if (!isInNeedarr) needarr.push(o)
                    }
                })
                console.log(needarr)
            },
            GetImageCaptcha() {
                this.$api.GetImageCaptcha().then(res => {
                    if (res.code === 1) {
                        console.log(res.data)
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
