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
                                New Step Definition
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
                                            <label class="label">Description</label>
                                        </div>
                                        <div class="column column-10">
                                            <textarea type="text" class="uiTextArea" v-model="stepdef.description"></textarea>
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
                                            <div class="uiButton uiButtonPrimaryFill" @click="saveStepDef()">
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
            <table class="uiTable">
                <thead>
                    <tr>
                        <th class="column-1">
                            <div class="tableCellContent">
                                <input type="checkbox">
                            </div>
                        </th>
                        <th>
                            <div class="tableCellContent">
                                Description
                            </div>
                        </th>
                        <th>
                            <div class="tableCellContent">
                                Action
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in stepdefList" :key="item.id" @click="gotoStepDefDetail(item.id)">
                        <td>
                            <div class="tableCellContent">
                                <input type="checkbox">
                            </div>
                        </td>
                        <td>{{item.description}}</td>
                        <td>
                            <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="deleteStepDef(item.id)">
                                <i class="fa fa-trash uiIcon"></i>
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
      isModalShow: false,
      stepdef: {
        projectId: this.$route.params.projectId
      },
      stepdefList: [],
      message: ""
    };
  },
  created() {
    this.findAllStepDef();
  },
  methods: {
    saveStepDef() {
      console.log("save step def");
      this.$api({
        method: "post",
        url: "/saveStepDef",
        data: this.stepdef
      }).then(response => {
        this.message = response.data;
        this.findAllStepDef();
        this.isModalShow=false;
        this.stepdef.id="";
        this.stepdef.name="";
      });
    },
    findAllStepDef() {
      console.log("find all step def");
      this.$api({
        method: "get",
        url: "/findAllStepDef/" + this.$route.params.projectId
      }).then(response => {
        this.stepdefList = response.data;
      });
    },
    deleteStepDef(){
        if(confirm("Are you sure to delete?")){
            console.log("delete step def");
        }
    },
    gotoStepDefDetail(stepDefId){
        console.log("go to step def detail");
        var projectId = this.$route.params.projectId;
        this.$router.push({path:`/${projectId}/projectdetail/${stepDefId}/stepDefDetail`});
    }
  }
};
</script>

