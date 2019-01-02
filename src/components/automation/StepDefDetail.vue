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
                                New Step Definition Detail
                            </div>
                        </div>
                    </button>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="startRunStep()" v-show="!isOpenRun">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Open Run
                            </div>
                        </div>
                    </button>
                    <select v-model="currentRunRoundId" v-show="isOpenRun">
                        <option v-for="item in listStepDefRound" :key="item.id" :value="item.id">{{item.roundName}}</option>
                    </select>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="endRunStep()" v-show="isOpenRun">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Close Run
                            </div>
                        </div>
                    </button>
                    <div class="uiModal" v-show="isModalShow">
                        <div class="uiModalContent">
                            <div class="close" @click="isModalShow=!isModalShow">x</div>
                            <div class="form">
                                <div class="formHeader">
                                    New Step Definition
                                </div>
                                <div class="formBody">
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Action</label>
                                        </div>
                                        <div class="column column-10">
                                            <div class="uiFormControlLayout">
                                                <select class="uiSelect" v-model="stepDefDetail.actionId">
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
                                    <div class="verticalLayoutItem" v-show="isElementShow">
                                        <div class="column column-2">
                                            <label class="label">Page</label>
                                        </div>
                                        <div class="column column-10">
                                            <div class="uiFormControlLayout">
                                                <select class="uiSelect" v-model="stepDefDetail.pageId">
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
                                    <div class="verticalLayoutItem" v-show="isElementShow">
                                        <div class="column column-2">
                                            <label class="label">Element</label>
                                        </div>
                                        <div class="column column-10">
                                            <div class="uiFormControlLayout">
                                                <select class="uiSelect" v-model="stepDefDetail.elementId">
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
                                    <div class="verticalLayoutItem" v-show="isParameterShow">
                                        <div class="column column-2">
                                            <label class="label">Parameter</label>
                                        </div>
                                        <div class="column column-10">
                                            <input class="uiFieldText" v-model="stepDefDetail.parameterName">
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
                                            <div class="uiButtonEmpty uiButtonEmptyPrimary">
                                                <div class="uiButtonContent">
                                                    <div class="uiButtonText">
                                                        Reset
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="uiButton uiButtonPrimaryFill" @click="saveStepDefDetail()">
                                                <div class="uiButtonContent">
                                                    <div class="uiButtonText">
                                                        Save
                                                    </div>
                                                </div>
                                            </div>
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
            <div class="col-sm-12 col-md-12">
                <table class="uiTable">
                    <thead>
                        <tr>
                            <th class="column-1">
                                <div class="tableCellContent">
                                    <input type="checkbox">
                                </div>
                            </th>
                            <th class="column-1">
                                <div class="tableCellContent">
                                    Order
                                </div>
                            </th>
                            <th>
                                <div class="tableCellContent">
                                    Action Name
                                </div>
                            </th>
                            <th>
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
                                    Parameter
                                </div>
                            </th>
                            <th class="column-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in stepDefDetailList">
                            <td>
                                <div class="tableCellContent">
                                    <input type="checkbox">
                                </div>
                            </td>
                            <td>
                                <div class="tableCellContent">
                                    {{item.stepOrder}}
                                </div>
                            </td>
                            <td>
                                <div class="tableCellContent">
                                    {{item.actionName}}
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
                                    {{item.parameterName}}
                                </div>
                            </td>
                            <td>
                                <div class="tableCellContent">
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="editStepDefDetail(item)">
                                        <i class="fa fa-pencil uiIcon"></i>
                                    </div>
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="deleteStepDefDetail(item.id)">
                                        <i class="fa fa-trash uiIcon"></i>
                                    </div>
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click="runTestStep(item.id)" v-show="isOpenRun">
                                        <i class="fa fa-play uiIcon"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="row">
                <table class="uiTable">
                    <thead>
                        <th class="column-1">
                            <div class="tableCellContent">
                                TestData 
                                <button class="uiButtonEmpty uiButtonEmptyPrimary" @click="addStepDefData()">
                                    <i class="fa fa-plus uiIcon"></i>
                                </button>
                            </div>
                        </th>
                        <th v-for="item in listStepDefParameter" :key="item.id" class="column-1">
                            <div class="tableCellContent">
                                {{item.parameterName}}
                            </div>
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="item in listStepDefRound" :key="item.id">
                            <td>
                                <input type="text" v-model="item.roundName">
                            </td>
                            <td v-for="data in item.stepDefinitionDataList">
                                <input type="text" v-model="data.value">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <button class="uiButton uiButtonPrimary uiButtonSmall" @click="saveStepDefData()">
                    <div class="uiButtonContent">
                        <div class="uiButtonText">
                            Save
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isModalShow: false,
      isOpenRun: false,
      isElementShow: false,
      isParameterShow: false,
      currentRunRoundId: "",
      stepDefDetail: {
        stepDefId: this.$route.params.stepDefId,
        stepOrder: "",
        pageId: ""
      },
      message: "",
      listTestAction: [],
      listTestPage: [],
      listTestElement: [],
      stepDefDetailList: [],
      listStepDefParameter: [],
      listStepDefRound: []
    };
  },
  created() {
    this.findAllTestAction();
    this.findAllTestPage();
    this.findAllStepDefDetail();
    this.findAllStepDefParameter();
    this.findAllStepDefinitionData();
    this.ishaveElementAndParameter();
  },
  watch: {
    "stepDefDetail.pageId": function() {
      this.findAllTestElement();
    },
    "stepDefDetail.actionId": function() {
      this.ishaveElementAndParameter();
    }
  },
  methods: {
    ishaveElementAndParameter() {
      console.log(this.listTestAction);
      for (var i = 0; i < this.listTestAction.length; i++) {
        if (this.stepDefDetail.actionId == this.listTestAction[i].id) {
          console.log(this.stepDefDetail.actionId);
          if (this.listTestAction[i].parameterOneType == "WebElement") {
            this.isElementShow = true;
          }
          if (
            this.listTestAction[i].parameterOneType == "String" ||
            this.listTestAction[i].parameterTwoType == "String"
          ) {
            this.isParameterShow = true;
          }
          break;
        }
      }
    },
    findAllStepDefinitionData() {
      this.$api({
        method: "get",
        url: "/findAllStepDefData/" + this.$route.params.stepDefId
      }).then(response => {
        this.listStepDefRound = response.data;
      });
    },
    findAllTestAction() {
      this.$api({
        url: "/findAllTestAction",
        method: "get"
      }).then(response => {
        this.listTestAction = response.data;
      });
    },
    addStepDefData() {
      var stepDefinitionDataList = [];
      for (var i = 0; i < this.listStepDefParameter.length; i++) {
        var stepDefData = {
          parameterId: this.listStepDefParameter[i].id,
          value: "",
          stepDefId: this.$route.params.stepDefId
        };
        stepDefinitionDataList.push(stepDefData);
      }
      var stepDefRound = {
        roundName: "",
        stepDefId: this.$route.params.stepDefId,
        stepDefinitionDataList: stepDefinitionDataList
      };
      this.listStepDefRound.push(stepDefRound);
      console.log(this.listStepDefRound);
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
      if (this.stepDefDetail.pageId != null) {
        this.$api({
          url: "/findAllTestElement/" + this.stepDefDetail.pageId,
          method: "get"
        }).then(response => {
          this.listTestElement = response.data;
        });
      }
    },
    saveStepDefDetail() {
      console.log("save step def detail");
      if (this.stepDefDetail.stepOrder == "") {
        this.stepDefDetail.stepOrder = this.stepDefDetailList.length + 1;
      }
      this.$api({
        method: "post",
        url: "/saveStepDefDetail",
        data: this.stepDefDetail
      }).then(response => {
        this.message = response.data;
        this.stepDefDetail.id = "";
        this.stepDefDetail.stepOrder = "";
        this.stepDefDetail.actionId = "";
        this.stepDefDetail.pageId = "";
        this.stepDefDetail.elementId = "";
        this.stepDefDetail.parameterId = "";
        this.stepDefDetail.parameterName = "";
        this.findAllStepDefDetail();
        this.findAllStepDefParameter();
        this.isModalShow = false;
      });
    },
    editStepDefDetail(value) {
      console.log(value);
      console.log(this.stepDefDetail);
      this.stepDefDetail.id = value.id;
      this.stepDefDetail.stepOrder = value.stepOrder;
      this.stepDefDetail.actionId = value.actionId;
      this.stepDefDetail.pageId = value.pageId;
      this.stepDefDetail.elementId = value.elementId;
      this.stepDefDetail.parameterId = value.parameterId;
      this.stepDefDetail.parameterName = value.parameterName;
      this.ishaveElementAndParameter();
      this.isModalShow = true;
    },
    saveStepDefData() {
      this.$api({
        method: "post",
        url: "/saveStepDefData",
        data: this.listStepDefRound
      }).then(response => {
        this.message = response.data;
      });
    },
    findAllStepDefDetail() {
      console.log("find all step def detail");
      this.$api({
        method: "get",
        url: "/findAllStepDefDetail/" + this.$route.params.stepDefId
      }).then(response => {
        this.stepDefDetailList = response.data;
      });
    },
    findAllStepDefParameter() {
      this.$api({
        method: "get",
        url: "/findAllStepDefinitionParameter/" + this.$route.params.stepDefId
      }).then(response => {
        this.listStepDefParameter = response.data;
      });
    },
    startRunStep() {
      console.log("start run step");
      console.log(this.listStepDefRound);
      this.$api({
        method: "get",
        url: "/startRunStep"
      }).then(response => {
        this.message = response.data;
        this.isOpenRun = true;
      });
    },
    endRunStep() {
      console.log("end run step");
      this.$api({
        method: "get",
        url: "/endRunStep"
      }).then(response => {
        this.message = response.data;
        this.isOpenRun = false;
      });
    },
    runAllStep() {
      console.log("run all step");
      this.$api({
        method: "get",
        url:
          "/runAllStepDefDetail/" +
          this.$route.params.stepDefId +
          "/" +
          this.currentRunRoundId
      }).then(response => {
        this.message = response.data;
      });
    },
    runTestStep(value) {
      console.log("run test step:" + value);
      this.$api({
        method: "get",
        url: "/runStepDefDetail/" + value + "/" + this.currentRunRoundId
      }).then(response => {
        this.message = response.data;
      });
    }
  }
};
</script>
