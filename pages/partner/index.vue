<template>
    <div>
        
    </div>
</template>
<script>
export default{
    layout:"chat",
    middleware:"partner",
    created(){
        this.$router.push("/partner");
    }
}
</script>