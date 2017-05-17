<template lang="html">
    <div>
        <div class="form-group">
          <label>{{ label }}</label>
          <select :name="name" class="form-control" v-model="selected" :multiple="isMultiple">
              <option v-for="op in options" :value="op.value" :selected="op.value == value">{{ op.label }}</option>
          </select>
          <p class="help-block">{{ help_text }}</p>
      </div>
  </div>
</template>

<script>
var select2 = require('select2');
require("select2/dist/css/select2.min.css");
require("select2-bootstrap-theme/dist/select2-bootstrap.min.css");
export default {
    props:['name','label','help_text',"value","options","isMultiple"],
    data:function () {
        return{
            selected: (this.isMultiple) ? [] : "",
        }
    },
    methods:{
        init:function () {
            let vm =this;
            setTimeout(function (e) {
                   $('select').select2({
                       "theme": "bootstrap",
                       allowClear: true,
                       placeholder:"Select..."
                   }).
                   on("select2:select",function (e) {
                       var selected = $(e.currentTarget);
                       vm.selected = selected.val();
                   }).
                   on("select2:unselect",function (e) {
                       var selected = $(e.currentTarget);
                       vm.selected = "";
                   });
               },100);
        }
    },
    mounted:function () {
        this.init();
    }
}
</script>

<style lang="css">
</style>
