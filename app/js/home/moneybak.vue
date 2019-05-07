<template>
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <ul>
                    <li>
                        <h4>长乐盈<span :class="$style.redBorder">180天可质押</span></h4>
                        <p :class="$style.red">5.80%</p>
                        <p :class="$style.gray">近1年历史年化投资回报率</p>
                    </li>
                    <li>
                        <h4>建信养老飞益鑫</h4>
                        <p :class="$style.red">4.57%</p>
                        <p :class="$style.gray">近7日年化收益</p>
                    </li>
                </ul>
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <h4>京智0号<span :class="$style.redBorder">大数据赋能</span></h4>
                        <p :class="$style.red">6.00%</p>
                        <p :class="$style.gray">近1月历史年化投资回报率</p>
                    </li>
                    <li>
                        <h4>小白基金<span :class="$style.redBorder">超短期</span></h4>
                        <p :class="$style.red">4.50%</p>
                        <p :class="$style.gray">7日年化收益率</p>
                    </li>
                </ul>
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
            ccc: "",
        }
    },
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        @include panel();
        > h4 {
            font-weight: 600;
            font-size: 46px;
        }
        font-family: PingFangSC-Regular, Arial, "Helvetica Neue", Helvetica, sans-serif;
        .content {
            @include list(row);
            .item {
                width: 50%;
                box-sizing: border-box;
                margin-top: 30px;
                &:first-child {
                    border-right: 1px solid #ddd;
                }
                li {
                    padding: 32px;
                    h4 {
                        margin-bottom: 36px;
                        font-weight: bold;
                        font-size: 38px;
                        .red-border {
                            margin-left: 10px;
                            padding: 6px 16px;
                            border: 1px solid #FF515550;
                            color: red;
                            font-size: 30px;
                            line-height: 30px;
                        }
                    }
                    .red {
                        margin-top: 20px;
                        color: #F04752;
                        font-weight: 600;
                        font-size: 60px;
                        line-height: 60px;
                    }
                    .gray {
                        margin-top: 10px;
                        color: #999;
                        font-size: 10px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                li:first-child {
                    border-bottom: 1px solid #ddd;
                }
            }
        }
    }
</style>
