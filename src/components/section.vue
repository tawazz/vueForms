<template lang="html" id="section">
    <div class="panel panel-default" >
      <div class="panel-heading">
        <h3 class="panel-title">{{label}}
            <a :href="'#'+Key" data-toggle="collapse" expanded="true" :aria-controls="Key">
                <span class="glyphicon glyphicon-chevron-down pull-right "></span>
            </a>
        </h3>
      </div>
      <div class="panel-body collapse in" :id="Key">
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
    },
    mounted:function () {
        $("a[data-toggle]").on('click',function () {
            console.log(this);
        });
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
