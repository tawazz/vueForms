<template lang="html" id="section">
    <div class="panel panel-default" >
      <div class="panel-heading">
        <h3 class="panel-title">{{label}}
            <a :href="'#pdbody'+Key" data-toggle="collapse" expanded="true" :aria-controls="'pdbody'+Key">
                <span class="glyphicon glyphicon-chevron-down pull-right "></span>
            </a>
        </h3>
      </div>
      <div class="panel-body collapse in" :id="'pbody'+Key">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    name:"section",
    props:["label","Key"],
    data:function () {
        return {
            title:"Section title"
        }
    }
}
</script>

<style lang="css">
    h3.panel-title{
        font-weight: bold;
        font-size: 25px;
        padding:20px;
    }
</style>
