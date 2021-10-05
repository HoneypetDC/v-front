<template>
    <header class="container-section-brand">
        <div class="section-brand mx-auto text-center">
            <h1 class="tc-tclaro">{{ title }}</h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeroHd',
        props: {
            title: String
        }
    }
</script>

<style scoped>

</style>

