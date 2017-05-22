<script>
    import Vue from 'vue'
    import Section from './section.vue'
    import Group from './group.vue'
    import Radio from './radio.vue'
    import Renderer from '../utils/renderer'
    const jdata = require('@/assets/data')
    const jans = require('@/assets/ans')

    let fdata = {};
    for (var a in jans) {
        var key = Object.keys(jans[a])[0];
        fdata[key] = jans[a][key][0];
    }
    export default {
        methods:{

        },
        render(h) {
            let vm =this;
            return (
                <div>
                    {jdata.map(d =>{
                        return Renderer.renderChildren(h,d,fdata)
                    })}
                </div>
            )
        }
    }
</script>
