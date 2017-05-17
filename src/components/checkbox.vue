<template lang="html">
    <div>
        <div class="form-group">
            <div class="checkbox">
                <label>
                    <input :name="name" type="checkbox" data-parsley-required :data-conditions="options" @change="handleCheckBoxChange" />
                    {{ label }}
                </label>
            </div>
            <p class="help-block">{{ help_text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['name','label','help_text','conditions',"handleCheckBoxChange"],
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
