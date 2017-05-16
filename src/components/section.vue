<template lang="html" id="section">
    <div class="panel panel-default" >
      <div class="panel-heading">
        <h3 class="panel-title">{{label}}</h3>
      </div>
      <div class="panel-body">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    name:"section",
    props:["label"],
    data:function () {
        return {
            title:"Section title"
        }
    }
}
</script>

<style lang="css">
</style>
