<template>
    <div>
        <md-tabs md-sync-route>
            <md-tab id="tab-dice" md-label="Die Roller" to="/"></md-tab>
            <md-tab id="tab-coin" md-label="Coin Flipper" to="/coin"></md-tab>
        </md-tabs>
    </div>
</template>

<script>

export default {
    name: 'TabbedRouter',
    data: {
        currentRoute: window.location.pathname
    }
}
</script>
