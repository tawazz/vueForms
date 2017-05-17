<script>
    export default {
        props:["conditions","renderer","name"],
        mounted(){

        },
        render(h) {
            let vm =this;
            var conditions = vm.conditions;
            var values = Object.keys(conditions);
            if (!values) {
                return (
                    <div> no conditions </div>
                )
            }else{
                return (
                    <div id={"cons_"+vm.name} class="hidden">
                        {values.map(val =>{
                            {return conditions[val].map(c=>{
                                {return vm.renderer.renderChildren(h,c)}
                            })}
                        })}
                    </div>
                )
            }

        }
    }
</script>
