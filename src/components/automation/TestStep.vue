<template>
    <div>
        <div class="row">
            <div class="flexGroupSpaceBetween">
                <div class="verticalLayoutItem">
                    <div class="uiFormControlLayout">
                        <input type="search" class="uiFieldSearch">
                        <div class="uiFormControlLayoutIcon">
                            <i class="fa fa-search uiIcon"></i>
                        </div>
                    </div>
                </div>
                <div class="verticalLayoutItem">
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="isModalShow=!isModalShow">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                New TestStep
                            </div>
                        </div>
                    </button>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="startRunStep()">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Start Run
                            </div>
                        </div>
                    </button>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="runAllStep()">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Run All Step
                            </div>
                        </div>
                    </button>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="endRunStep()">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                End Run
                            </div>
                        </div>
                    </button>
                    <div class="uiModal" v-show="isModalShow">
                        <div class="uiModalContent">
                            <div class="close" @click="isModalShow=!isModalShow">x</div>
                            <div class="form">
                                <div class="formHeader">
                                    New Step
                                </div>
                                <div class="formBody">
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Action</label>
                                        </div>
                                        <div class="column column-10">
                                            <div class="uiFormControlLayout">
                                                <select class="uiSelect" v-model="testStep.actionId">
                                                    <option v-for="item in listTestAction" :key="item.id" :value="item.id">
                                                        {{item.name}}
                                                    </option>
                                                </select>
                                                <div class="uiFormControlLayoutIconRight">
                                                    <i class="fa fa-angle-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Page</label>
                                        </div>
                                        <div class="column column-10">
                                            <div class="uiFormControlLayout">
                                                <select class="uiSelect" v-model="testStep.pageId">
                                                    <option v-for="item in listTestPage" :key="item.id" :value="item.id">
                                                        {{item.name}}
                                                    </option>
                                                </select>
                                                <div class="uiFormControlLayoutIconRight">
                                                    <i class="fa fa-angle-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Element</label>
                                        </div>
                                        <div class="column column-10">
                                            <div class="uiFormControlLayout">
                                                <select class="uiSelect" v-model="testStep.elementId">
                                                    <option v-for="item in listTestElement" :key="item.id" :value="item.id">
                                                        {{item.name}}
                                                    </option>
                                                </select>
                                                <div class="uiFormControlLayoutIconRight">
                                                    <i class="fa fa-angle-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">TestData</label>
                                        </div>
                                        <div class="column column-10">
                                            <input class="uiFieldText" v-model="testStep.testData">
                                        </div>
                                    </div>             
                                </div>
                                <div class="formFooter">
                                    <div class="panel">
                                        <div class="formFooterFeedback">
                                            <div class="fa fa-spinner formFooterSpinner"></div>&nbsp;{{message}}
                                        </div>
                                    </div>
                                    <div class="panel">
                                        <div class="column">
                                            <div class="button button--clear">Reset</div>
                                        </div>
                                        <div class="column">
                                            <div class="button" @click="saveTestStep()">Save</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <table class="table">
                <thead>
                    <th class="column-1">
                        <div class="tableCellContent">
                            <input type="checkbox">
                        </div>
                    </th>
                    <th class="column-1">
                        <div class="tableCellContent">
                            ID
                        </div>
                    </th>
                    <th class="column-3">
                        <div class="tableCellContent">
                            Action
                        </div>
                    </th>
                    <th class="column-1">
                        <div class="tableCellContent">
                            Page
                        </div>
                    </th>
                    <th>
                        <div class="tableCellContent">
                            Element
                        </div>
                    </th>
                    <th>
                        <div class="tableCellContent">
                            TestData
                        </div>
                    </th>
                    <th class="column-1">
                        <div class="tableCellContent">
                            Actions
                        </div>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="item in listTestStep">
                        <td>
                            <div class="tableCellContent">
                                <input type="checkbox">
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.id}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.actionDescription}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.pageName}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.elementName}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.testData}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                <div class="column">
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click="deleteTestStep(item.id)">
                                        <i class="fa fa-trash uiIcon"></i>
                                    </div>
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click="runTestStep(item.id)">
                                        <i class="fa fa-play uiIcon"></i>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      currentTab: 2,
      testStep: {
        id: "",
        actionId: "",
        pageId: "",
        elementId: ""
      },
      listTestStep: [],
      listTestAction:[],
      listTestPage:[],
      listTestElement:[],
      isModalShow:false
    };
  },
  created() {
      this.findAllTestAction();
      this.findAllTestPage();
      this.findAllTestStep();
  },
  watch:{
      "testStep.pageId":function(){
          this.findAllTestElement();
      }
  },
  methods: {
    clickTab(value) {
      this.currentTab = value;
      if (value == 2) {
        this.findAllTestStep();
      }
    },
    findAllTestAction() {
      this.$api({
        url: "/findAllTestAction",
        method: "get"
      }).then(response => {
        this.listTestAction = response.data;
      });
    },
    findAllTestPage() {
      this.$api({
        url: "/findAllTestPage",
        method: "get"
      }).then(response => {
        this.listTestPage = response.data;
      });
    },
    findAllTestElement() {
      this.$api({
        url: "/findAllTestElement/" + this.testStep.pageId,
        method: "get"
      }).then(response => {
        this.listTestElement = response.data;
      });
    },
    findAllTestStep() {
      this.$api({
        url: "/findAllTestStep/" + this.$route.params.testCaseId,
        method: "get"
      }).then(response => {
        this.listTestStep = response.data;
      });
    },
    saveTestStep() {
      this.message = "save...";
      this.$api({
        method: "post",
        url: "/saveTestStep/" + this.$route.params.testCaseId,
        data: this.testStep
      }).then(response => {
        this.message = response.data;
        this.testStep.actionId="";
        this.testStep.pageId="";
        this.testStep.elementId="";
        this.testStep.testData="";
      });
    },
    deleteTestStep(id) {
      this.$api({
        method: "get",
        url: "/deleteTestStep/" + id
      }).then(response => {
        this.message = response.data;
        this.findAllTestStep();
      });
    },
    startRunStep(){
        console.log("start run step");
        this.$api({
            method:"get",
            url:"/startRunStep"
        }).then(response=>{
            this.message=response.data;
        });
    },
    endRunStep(){
        console.log("end run step");
        this.$api({
            method:"get",
            url:"/endRunStep"
        }).then(response=>{
            this.message=response.data;
        });
    },
    runAllStep(){
        console.log("run all step");
        this.$api({
            method:"get",
            url:"/runAllStep/" + this.$route.params.testCaseId
        }).then(response=>{
            this.message=response.data;
        });
    },
    runTestStep(value){
        console.log("run test step:"+value);
        this.$api({
            method:"get",
            url:"/runStep/" + value
        }).then(response=>{
            this.message=response.data;
        });
    }
  }
};
</script>

