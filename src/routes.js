import Project from "./components/automation/Project.vue";
import Demo from "./components/demo/Demo.vue";
import TestCase from "./components/automation/TestCase.vue";
import TestStep from "./components/automation/TestStep.vue";
import TestPage from "./components/automation/TestPage.vue";
import TestElement from "./components/automation/TestElement.vue";
import TestAction from "./components/automation/TestAction.vue";
import Base from "./components/demo/Base.vue";
import UiAutomation from "./components/automation/UiAutomation.vue";
import AutomationConfig from "./components/automation/AutomationConfig.vue";
import StepDef from "./components/automation/StepDef.vue";
import StepDefDetail from "./components/automation/StepDefDetail.vue";
import ProjectDetail from "./components/automation/ProjectDetail.vue";
import ProjectSummary from "./components/automation/ProjectSummary.vue";
import QuickStart from "./components/automation/QuickStart.vue";
export const routes = [
    {
        path:'/',redirect:'/uiautomation'
    },
    {
        path:'/quickstart',name:'quickstart',components:{
            default:QuickStart
        }
    },
    {
        path:'/project',name:'project',components:{
            default:Project
        },
        children:[
            
        ]
    },
    {
        path:'/:projectId/projectdetail',name:'projectdetail',components:{
            default:ProjectDetail
        },
        children:[
            {
                path:'projectsummary',components:{
                    default:ProjectSummary
                }
            },
            {
                path:'testcase',components:{
                    default:TestCase
                }
            },
            {
                path:':testCaseId/teststep',components:{
                    default:TestStep
                }
            },
            {
                path:'teststep',components:{
                    default:TestStep
                }
            },
            {
                path:'testpage',components:{
                    default:TestPage
                }
            },
            {
                path:'stepdef',components:{
                    default:StepDef
                }
            },
            {
                path:':pageId/testelement',components:{
                    default:TestElement
                }
            },
            {
                path:':stepDefId/stepDefDetail',components:{
                    default: StepDefDetail
                }
            }
        ]
    },
    {
        path:'/demo',name:'demo',components:{
            default:Demo
        }
    },{
        path:'/:projectId/testcase',name:'testcase',components:{
            default:TestCase
        }
    },
    {
        path:'/:testCaseId/teststep',name:'teststep',components:{
            default:TestStep
        }
    },
    {
        path:'/:projectId/testpage',name:'testpage',components:{
            default:TestPage
        }
    },
    {
        path:'/:projectId/stepdef',name:'stepdef',components:{
            default:StepDef
        }
    },
    {
        path:'/:pageId/testelement',name:'testelement',components:{
            default:TestElement
        }
    },
    {
        path:'/testaction',name:'testaction',components:{
            default:TestAction
        }
    },
    {
        path:'/base',name:'base',components:{
            default:Base
        }
    },
    {
        path:'/uiautomation',name:'uiautomation',components:{
            default:UiAutomation
        }
    },
    {
        path:'/automationconfig',name:'automationconfig',components:{
            default: AutomationConfig
        }
    }
];