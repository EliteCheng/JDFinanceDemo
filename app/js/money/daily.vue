<template lang="html">
    <Panel title="每日签到" :class="$style.panel">
        <section :class="$style.content">
            <img
                src="//img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480"
                alt="">
            <img
                src="//img12.360buyimg.com/jrpmobile/jfs/t1/21943/31/9368/60477/5c7e1874E47298d34/3e6c51a51f63811e.png?width=750&height=480"
                alt="">
            <p>不抢白不抢</p>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";

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
        .content {
            @include flex(row);
            position: relative;
            justify-content: space-around;
            img {
                width: 400px;
                height: 230px;
            }
            p {
                position: absolute;
                margin-right: 30px;
                top: -112px;
                right: 20px;
                font-size: 28px;
                color: #999;
                height: 112px;
                line-height: 112px;
            }
        }
    }
</style>
