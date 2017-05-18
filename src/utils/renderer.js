import Section from '../components/section.vue'
import Group from '../components/group.vue'
import Radio from '../components/radio.vue'
import Conditions from '../components/conditions.vue'
import SelectConditions from '../components/select-conditions.vue'
import Checkbox from '../components/checkbox.vue'
import Declaration from '../components/declarations.vue'
import File from '../components/file.vue'
import Select from '../components/select.vue'
import DateField from '../components/date-field.vue'
module.exports = {
    renderChildren(h,c,data) {
        if(data !== undefined && c.name in data) {
              c.value = data[c.name];
        }
        switch (c.type) {
            case 'text':
                return (
                    <div class="form-group">
                      <label for={c.label} >{c.label}</label>
                      <i data-toggle="tooltip" data-placement="right" title="" class="fa fa-question-circle" data-original-title={c.help_text}>&nbsp;</i>
                      <input type="text" class="form-control" name={c.name} value={c.value} />
                    </div>
                )
                break;
            case 'number':
                return (
                    <div class="form-group">
                      <label for={c.label} >{c.label}</label>
                      <i data-toggle="tooltip" data-placement="right" title="" class="fa fa-question-circle" data-original-title={c.help_text}>&nbsp;</i>
                      <input type="number" class="form-control" name={c.name} value={c.value} />
                    </div>
                )
                break;
            case 'email':
                return (
                    <div class="form-group">
                      <label for={c.label} >{c.label}</label>
                      <i data-toggle="tooltip" data-placement="right" title="" class="fa fa-question-circle" data-original-title={c.help_text}>&nbsp;</i>
                      <input type="email" class="form-control" name={c.name} value={c.value} />
                    </div>
                )
                break;
            case 'select':
                return (
                    <div>
                        <Select name={c.name} label={c.label} value={c.value} options={c.options} value={c.value} handleChange={this.selectionChanged}  conditions={c.conditions}/>
                        <SelectConditions conditions={c.conditions} renderer={this} name={c.name} />
                    </div>
                )
                break;
            case 'multi-select':
                return (
                    <Select name={c.name} label={c.label} value={c.value} options={c.options} value={c.value} isMultiple={true} />
                )
                break;
            case 'text_area':
                return (
                    <div class="form-group">
                      <label for="">{c.label}</label>
                      <textarea class="form-control" rows="5" name={c.name} value={c.value}  /><br/>
                      <p class="help-block">{c.help_text}</p>
                    </div>
                )
                break;
            case 'label':
                return (
                    <label>{c.label}</label>
                )
                break;
            case 'radiobuttons':
                return (
                    <div class="form-group">
                        <label>{c.label}</label>
                            {c.options.map(op =>{
                                return(
                                    <Radio name={c.name} label={op.label} value={op.value} savedValue={c.value} handleChange={this.handleRadioChange} conditions={c.conditions} />
                                )
                            })}
                            <p class="help-block">{c.help_text}</p>
                            <Conditions conditions={c.conditions} renderer={this} name={c.name}/>
                    </div>
                )
                break;
            case 'group':
                return (
                    <Group label={c.label} name={c.name} help_text={c.help_text} isRemovable={c.isRemovable}>
                        {c.children.map(c=>{
                            return (
                                <div>
                                    {this.renderChildren(h,c)}
                                </div>
                            )
                        })}
                    </Group>
                )
                break;
            case 'section':
                return (
                    <Section label={c.label} Key={c.name}>
                        {c.children.map(d=>{
                            return (
                                <div>
                                    {this.renderChildren(h,d)}
                                </div>
                            )
                        })}
                    </Section>
                )
                break;

            case 'checkbox':
                return (
                    <div class="form-group">
                        <Checkbox name={c.name} label={c.label} help_text={c.help_text} value={c.value} handleChange={this.handleCheckBoxChange} conditions={c.conditions} />
                        <Conditions conditions={c.conditions} renderer={this} name={c.name}/>
                    </div>
                )
                break;
            case 'declaration':
                return (
                    <div class="form-group">
                        <label>{c.label}</label>
                        <Checkbox name={c.name} label={c.label} value={c.value} help_text={c.help_text} handleChange={this.handleCheckBoxChange} conditions={c.conditions} />
                        <Conditions conditions={c.conditions} renderer={this} name={c.name}/>
                    </div>
                )
                break;
            case 'file':
                return (
                    <File name={c.name} label={c.label} value={c.value} repeatable={c.isRepeatable} handleChange={this.handleFileChange}/>
                )
                break;
            case 'date':
                return (
                    <DateField name={c.name} label={c.label} value={c.value}  handleChange={this.handleFileChange}/>
                )
                break;
            default:
            return "";
        }
    },
    handleRadioChange(e){
        var conditions = $(e.target).data('conditions');
        if (conditions && conditions !== undefined) {
            var cons = Object.keys(conditions);
            var found = false;
            for (var i = 0; i < cons.length; i++) {
                if (cons[i] == e.target.value) {
                    $("#cons_"+e.target.name).toggleClass('hidden ');
                    found = true;
                }
            }
            if (!found) {
                $("#cons_"+e.target.name).toggleClass(' hidden');

            }
        }
    },
    handleCheckBoxChange(e){
        var conditions = $(e.target).data('conditions');
        var cons = Object.keys(conditions);
        $("#cons_"+e.target.name).toggleClass('hidden');

    },
    handleDeclaration(e){
        return true;
    },
    selectionChanged(target){
        var conditions = $(target).data('conditions');

        if (conditions) {
            var cons = Object.keys(conditions);
            for (var i = 0; i < cons.length; i++) {
                if (cons[i] == target.value) {
                    $("#cons_"+target.value).removeClass('hidden');
                }else{
                    $("#cons_"+cons[i]).addClass('hidden');
                }
            }
        }
    }
}
