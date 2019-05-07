import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

function resolveView(path, name, component,
                     keepAlive = false, children = null) {
    return {
        path,
        name,
        component: () => {
            return component;
        },
        meta: {
            keepAlive,
        },
        children,
    }
}

export default new VueRouter({
    mode: false ? "history" : "hash",
    base: __dirname,
    routes:
        [
            resolveView("/", 'home', import('../home/index.vue')),
            resolveView("/money", 'money', import('../money/index.vue')),
            resolveView("/borrow", 'borrow', import('../home/index.vue')),
            resolveView("/app1", 'app1', import('../money/index.vue')),
            resolveView("/me", 'me', import('../home/index.vue')),
        ]
})
;

