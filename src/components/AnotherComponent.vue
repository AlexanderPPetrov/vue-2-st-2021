<template>
    <div id="another-component">
        {{ title }}
        <div>
            {{ subtitle }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'another-component',
    props: {
        title: String,
        subtitle: {
            default: 'A',
            type: String,
        },
    },
    created(){
        console.log(this.title);
    }
}
</script>

<style scoped>

</style>