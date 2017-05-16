<template lang="html">
    <div class="top-buffer bottom-buffer">
        <h4 class="inline">{{label}}</h4>
            <p :id="'description_'+name" v-if="help_text" >{{help_text}}</p>
        <div class="panel panel-default">
            <div class="panel-body">
                <a class="collapse-link-top pull-right"><span class="glyphicon glyphicon-chevron-down"></span></a>
                <div class="children-anchor-point collapse in" style="padding-left: 0px"></div>
                    <span :class={isRemovable:"hidden"}>
                        <a :id="'remove_'+name" >Remove {{label}}</a>
                    </span>
                <a class="collapse-link-bottom pull-right"><span class="glyphicon glyphicon-chevron-up"></span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"group",
    props:["label","name","help_text","isRemovable"]
}
</script>

<style lang="css">
</style>
