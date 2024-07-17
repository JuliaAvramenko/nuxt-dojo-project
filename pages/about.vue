<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, magnam. Cumque quaerat quo tempora,
            voluptatibus repellat iure nihil odit inventore, aperiam id corrupti similique! Voluptatum blanditiis ex at
            voluptas impedit?</p>
        <div>{{ data }}</div>
        <!-- <div>{{ data.message }}</div> -->
    </div>
</template>

<script setup>
// const { data } = await useFetch('/api/ninja')
// const { data } = await useFetch('/api/ninja?name=mario')
// const { data } = await useFetch('/api/ninja?name=mario', {
//     method: 'post',
//     body: { age: 30 }
// })

// const { data } = await useFetch('/api/ninja')

const { data } = await useFetch('/api/currency/GBP')

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>