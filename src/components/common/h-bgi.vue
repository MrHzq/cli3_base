/*
 * @Author: hzq
 * @Date: 2019-02-22 14:40:20
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-29 15:17:05
 * @文件说明: 背景图
 */
<template>
    <div :style="style" class="h-bgi" :class="{'h-bgi-hover':hover}" @click="$emit('click')">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'h-bgi',
        inheritAttrs: false,
        props: {
            // 背景图图片路径
            url: {
                type: String,
                default: 'logo'
            },
            // 宽度
            w: {
                type: String,
                default: '44'
            },
            // 高度
            h: {
                type: String,
                default: '44'
            },
            // 背景图尺寸
            size: {
                type: String,
                default: 'cover'
            },
            // 背景图x位置
            pX: {
                type: String,
                default: 'center'
            },
            // 背景图Y位置
            pY: {
                type: String,
                default: 'center'
            },
            // 是否显示hover背景
            hover: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            style() {
                let url = ''
                if (['logo', this.$osshost].includes(this.url)) {
                    url = `url(${require('@/assets/logo.png')})`
                } else {
                    url = `url(${this.url}?x-oss-process=image/resize,w_${this.w *
                        2}/format,jpg/quality,Q_80)`
                }
                return {
                    width: this.$tool.px(this.w),
                    height: this.$tool.px(this.h),
                    backgroundImage: url,
                    backgroundSize: this.size,
                    backgroundPosition: this.pX + ' ' + this.pY,
                    backgroundRepeat: 'no-repeat'
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .h-bgi {
        position: relative;
        overflow: hidden;
        line-height: normal;
    }
    // 背景可移入
    .h-bgi-hover {
        @include flex;
        & * {
            position: relative;
            z-index: 99;
            opacity: 0;
            transition: opacity 0.2s;
        }
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.2s;
            background-color: rgba(0, 0, 0, 0.6);
        }
        &:hover {
            &::after,
            & * {
                opacity: 1;
            }
        }
    }
</style>
