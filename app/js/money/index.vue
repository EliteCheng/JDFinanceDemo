<template>
    <div style="background: #f5f5f5">
        <Heador/>
        <Mslider/>
        <Daily/>
        <In/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Mslider from "./mslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"

export default {
    components: {
        Heador,
        Footor,
        Navbar,
        Mslider,
        Daily,
        In,
    },
}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';

    .home {
        color: red;
        font-size: 80px;
    }
</style>
