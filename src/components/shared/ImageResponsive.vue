<template>
    <img :src="url" :alt="title" />
</template>

<script>
export default {
    props: [
        "url",
        "title"
    ]
}
</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
}
</style>