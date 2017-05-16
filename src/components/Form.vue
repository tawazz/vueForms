<script>
    import Vue from 'vue'
    import Section from './section.vue'
    import Group from './group.vue'
    const jdata = [
    {
        "children": [
            {
                "type": "text",
                "name": "project_title",
                "label": "Project title"
            },
            {
                "help_text": "This is the actual entire length of time expected for the project to be completed. It is not the duration that the licence will be issued for.  A licence will be issued for a maximum of 12 months/1 year, however renewal may be granted according to the total duration as indicated in response to this question, e.g. 3 - 4 years if the project is a PhD; the number of years required for compliance or \u2018life of mine\u2019 for mine related monitoring; ongoing may be used for monitoring that has no completion time.",
                "type": "text",
                "name": "project_duration",
                "label": "Total duration of the project"
            },
            {
                "type": "text_area",
                "name": "background_summary",
                "label": "Background summary"
            },
            {
                "type": "text_area",
                "name": "main_objectives",
                "label": "Main Objectives"
            },
            {
                "type": "text_area",
                "name": "conservation_outcomes",
                "label": "Conservation outcomes"
            }
        ],
        "type": "section",
        "name": "project_details",
        "label": "Project Details"
    },
    {
        "children": [
            {
                "type": "text_area",
                "name": "financial_basis_q1",
                "label": "Provide details of other organisations or institutions associated with this project, and provide details of any associated projects"
            },
            {
                "type": "text_area",
                "name": "financial_basis_q2",
                "label": "Has your project or the proposed activities been discussed with experts, land holders / managers, and / or Department staff? Provide details"
            }
        ],
        "type": "section",
        "name": "financial_basis_section",
        "label": "Affiliations"
    },
    {
        "children": [
            {
                "type": "text_area",
                "name": "qualifications",
                "label": "Provide details of your involvement in proposed activities and any relevant experience and / or qualifications"
            },
            {
                "type": "label",
                "name": "ap_label",
                "label": "Everyone involved in the fauna related activities of this project must be added as an authorised person."
            },
            {
                "conditions": {
                    "yes": [
                        {
                            "name": "authorised_persons",
                            "isLicenceField": "true",
                            "isRepeatable": true,
                            "label": "Authorised Person",
                            "type": "group",
                            "children": [
                                {
                                    "isLicenceField": "true",
                                    "type": "text",
                                    "name": "ap_surname",
                                    "label": "Surname"
                                },
                                {
                                    "isLicenceField": "true",
                                    "type": "text",
                                    "name": "ap_given_names",
                                    "label": "Given name(s)"
                                },
                                {
                                    "type": "date",
                                    "name": "ap_dob",
                                    "label": "Date of birth"
                                },
                                {
                                    "type": "text_area",
                                    "name": "ap_associations",
                                    "label": "Provide details of involvement and experience related to the proposed activities"
                                },
                                {
                                    "type": "text_area",
                                    "name": "ap_qualification",
                                    "label": "Provide relevant qualification / experience (relative to activity)"
                                }
                            ]
                        },
                        {
                            "type": "text_area",
                            "name": "ap_unavailable_explanation",
                            "label": "If a list of authorised persons is not currently available, explain below"
                        }
                    ]
                },
                "options": [
                    {
                        "value": "yes",
                        "label": "Yes"
                    },
                    {
                        "value": "no",
                        "label": "No"
                    }
                ],
                "type": "radiobuttons",
                "name": "other_authorised perons",
                "label": "Will other people be involved in conducting the proposed activities?"
            },
            {
                "type": "label",
                "name": "ap_change_acknowledgement",
                "label": "By submitting this application you acknowledge that you are legally responsible for the actions of anyone involved in the taking of fauna under this licence. You must apply to amend the authorised persons listed on your licence to reflect any changes that are made to personnel throughout the licence period."
            }
        ],
        "type": "section",
        "name": "personnel_details",
        "label": "Personnel Details"
    }
];

    export default {
        methods:{
            renderChildren(c) {
                switch (c.type) {
                    case 'text':
                        return (
                            <div class="form-group">
                              <label for={c.label} >{c.label}</label>
                              <input type="text" class="form-control" name={c.name} />
                              <p class="help-block">{c.help_text}</p>
                            </div>
                        )
                        break;
                    case 'text_area':
                        return (
                            <div class="form-group">
                              <label for="">{c.label}</label>
                              <textarea class="form-control" rows="5" name={c.name} /><br/>
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
                            console.log(c.conditions);
                            return (
                                <div class="form-group">
                                    <label>{c.label}</label>
                                        {c.options.map(op =>{
                                            return(
                                                <div class="radio">
                                                    <label>
                                                        {op.required &&
                                                            <input name={c.name} type="radio" value={op.value} required checked={op.value == c.value ? "checked" :"" }/>
                                                        }
                                                        {!op.required &&
                                                            <input name={c.name} type="radio" value={op.value} />
                                                        }
                                                        {op.label}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                        <p class="help-block">{c.help_text}</p>
                                </div>
                            )
                            break;

                    default:
                    return "";
                }
            }

        },
        render(h) {
            let vm =this;
            return (
                <div>
                    {jdata.map(d =>{
                        if (d.type === 'section') {
                            return (
                                <Section label={d.label} Key={d.name}>
                                    {d.children.map(c=>{
                                        return (
                                            <div>
                                                {this.renderChildren(c)}
                                            </div>
                                        )
                                    })}
                                </Section>
                            )
                        }else{
                            return (
                                <Group label={d.label} name={d.name} help_text={d.help_text} isRemovable={d.isRemovable}/>
                            )
                        }

                    })}
                </div>
            )
        }
    }
</script>
