<template lang="html">
    <div>
        <div class="radio">
            <label>
                <input :name="name" type="radio" :value="value" @change="handleChange"  :required="isRequired" :data-conditions="options" :checked="isChecked"/>{{ label}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name:"radiobuttons",
    props:["value","label","name","isRequired","handleChange","conditions"],
    computed:{
        isChecked:function () {
            //TODO return value from database
            return false;
        },
        options:function () {
            return JSON.stringify(this.conditions);
        }
    }
}
</script>

<style lang="css">
</style>
