<template>
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.catory">
                <img :src="item.catory" alt="">
                <section :class="$style.list">
                    <div :class="$style.product" v-for="product in item.list" :key="product.img" >
                        <img :src="product.img">
                        <p :class="$style.title">{{ product.title }}</p>
                        <p :class="$style.price"><em>{{ product.price }}</em>起</p>
                        <article>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width:product.progress+'%'}"/>
                            </div>
                            <p>{{ product.progress }}%</p>
                        </article>
                        <!--<label>精选</label>-->
                    </div>
                </section>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [
                {
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200",
                    list: [
                        {
                            img: "//img30.360buyimg.com/cf/jfs/t1/33266/13/3597/40721/5cb570c9E79e3bdbe/d27a220eedba9ef2.jpg!q70.dpg",
                            title: "阿拉灯水晶神灯 原创星座灯",
                            price: "52.00",
                            progress: 25,
                        },
                        {
                            img: "//img30.360buyimg.com/cf/jfs/t1/36488/28/2261/46066/5cb5ba2aEa3ac8c35/072de0b20aef4235.jpg!q70.dpg",
                            title: "时尚高颜值负离子太阳镜",
                            price: "29.00",
                            progress: 59,
                        },
                    ],
                },
                {
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200",
                    list: [
                        {
                            img: "//img30.360buyimg.com/cf/jfs/t1/33266/13/3597/40721/5cb570c9E79e3bdbe/d27a220eedba9ef2.jpg!q70.dpg",
                            title: "阿拉灯水晶神灯 原创星座灯",
                            price: "52.00",
                            progress: 25,
                        },
                        {
                            img: "//img30.360buyimg.com/cf/jfs/t1/36488/28/2261/46066/5cb5ba2aEa3ac8c35/072de0b20aef4235.jpg!q70.dpg",
                            title: "时尚高颜值负离子太阳镜",
                            price: "29.00",
                            progress: 59,
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        @include panel();
        .content {
            @include flex();
            .item {
                > img {
                    width: 100%;
                }
                margin-bottom: 40px;
                .list {
                    @include flex(row);
                    .product {
                        width: 50%;
                        box-sizing: border-box;
                        background: rgba(0, 0, 0, .02);
                        text-align: center;
                        position: relative;
                        img {
                            width: 300px;
                            height: 230px;
                            margin: 44px auto 20px;
                        }
                        .title {
                            font-family: PingFangSC-Regular;
                            font-size: 38px;
                            color: #444;
                            overflow: hidden;
                            margin-left: 30px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .price {
                            margin: 20px 30px;
                            text-align: left;
                            font-size: 16px;
                            color: #999;
                            height: 48px;
                            line-height: 48px;
                            em {
                                font-size: 46px;
                                font-weight: bold;
                                color: #f92;
                                margin-right: 4px;
                                &:before {
                                    content: "￥";
                                    font-size: 28px;
                                }
                            }
                        }
                        article {
                            @include flex(row);
                            align-items: center;
                            justify-content: space-around;
                            padding: 0 20px;
                            .wrapper {
                                width: 196px;
                                height: 13px;
                                background: #F6E6E6;
                                border-radius: 22px;
                                .inner {
                                    height: 13px;
                                    background-image: linear-gradient(270deg, #f55 1%, #ff9c31);
                                    border-radius: 22px;
                                }
                            }
                            p {
                                font-size: 24px;
                                color: #999;
                            }
                        }
                        label {
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                    }
                }
            }
        }
    }
</style>
