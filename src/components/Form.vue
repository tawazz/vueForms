<script>
    import Vue from 'vue'
    import Section from './section.vue'
    import Group from './group.vue'
    import Radio from './radio.vue'
    import Renderer from '../utils/renderer'
    const jdata = require('@/assets/data')

    export default {
        methods:{

        },
        render(h) {
            let vm =this;
            return (
                <div>
                    {jdata.map(d =>{
                        return Renderer.renderChildren(h,d)
                    })}
                </div>
            )
        }
    }
</script>
