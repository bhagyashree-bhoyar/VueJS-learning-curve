<template>
    <div id="product-list-one">
        <h2> List </h2>
        <div class="list">
            <div class="list-item" v-for="entry in entrys" :key="entry">
                <span class="name">Name: {{ entry.name }}</span>
                <span class="email">Email: {{ entry.email }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    computed: {
        entrys(){
            return this.$store.state.entrys
        },
        getEntrys(){
            return this.$store.getters.getEntrys
        }
    }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.list{
    padding: 0;
}
.list-item {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.email {
    font-weight: bold;
    color: #E8800C;
    margin-left: 10px;
}
</style>