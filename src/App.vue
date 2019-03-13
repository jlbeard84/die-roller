<template>
    <div id="app">
        <md-app>
            <md-app-toolbar md-mode="fixed" class="md-primary">
                <span class="md-title">Die Roller</span>
            </md-app-toolbar>
            
            <md-app-content>
                <app-tabbed-router/>

                <router-view/>
            </md-app-content>
        </md-app>
        
    </div>
</template>

<script>
import TabbedRouter from "./TabbedRouter.vue";

export default {
    name: 'app',
    components: {
        'app-tabbed-router': TabbedRouter
    },
    data () {
        return {
            msg: 'Welcome to die roller'
        }
    }
}
</script>

<style lang="scss">

</style>



