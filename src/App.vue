<template>
    <div id="app">
        <md-app>
            <md-app-toolbar md-mode="fixed" class="md-primary">
                <span class="md-title">Die Roller</span>
            </md-app-toolbar>

            <md-app-content>
                <h1>{{ msg }}</h1>
            </md-app-content>
        </md-app>
        
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to die roller'
        }
    }
}
</script>

<style lang="scss">

</style>



