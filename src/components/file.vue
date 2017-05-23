<template lang="html">
    <div class="form-group">
        <label>{{label}}</label>
         <i data-toggle="tooltip" v-if="help_text" data-placement="right" class="fa fa-question-circle" :title="help_text"> &nbsp; </i>
        <div v-if="value">
            <p>
                Currently: <a :href="value" target="_blank">getURLFilename value</a>
            </p>
            <input :name="name+'-existing'" type="hidden" value="getURLFilename value"/>
        </div>
        <input :name="name" type="file" class="form-control" :accept="fileTypes"/>
    </div>
</template>

<script>
export default {
    props:['name','label','help_text',"value","fileTypes"],
    computed:{
    }
}

</script>

<style lang="css">
</style>
