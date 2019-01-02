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
                                New TestCase
                            </div>
                        </div>
                    </button>
                    <div class="uiModal" v-show="isModalShow">
                        <div class="uiModalContent">
                            <div class="close" @click="isModalShow=!isModalShow">x</div>
                            <div class="form">
                                <div class="formHeader">
                                    New Case
                                </div>
                                <div class="formBody">
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Name</label>
                                        </div>
                                        <div class="column column-10">
                                            <input type="text" class="input" v-model="testCase.name">
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
                                            <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall">
                                                <div class="uiButtonContent">
                                                    <div class="uiButtonText">
                                                        Reset
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="saveTestCase()">
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
                    <th>
                        <div class="tableCellContent">
                            Name
                        </div>
                    </th>
                    <th class="column-3">
                        <div class="tableCellContent">
                            Actions
                        </div>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="item in listTestCase" @click="gotoTestElement(item.id)">
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
                                {{item.name}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                <div class="column">
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary" @click.stop="deleteTestElement(item.id)">
                                        <i class="fa fa-trash uiIcon"></i>
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
      currentTab: 1,
      testCase: {
        id: "",
        name: "",
        projectId: this.$route.params.projectId
      },
      listTestCase: [],
      isModalShow:false
    };
  },
  created() {
      this.findAllTestCase();
  },
  methods: {
    clickTab(value) {
      this.currentTab = value;
      if (value == 2) {
        this.findAllTestCase();
      }
    },
    findAllTestCase() {
      this.$api({
        url: "/findAllTestCase/"+this.$route.params.projectId,
        method: "get"
      }).then(response => {
        this.listTestCase = response.data;
      });
    },
    saveTestCase() {
      this.message = "save...";
      this.$api({
        method: "post",
        url: "/saveTestCase",
        data: this.testCase
      }).then(response => {
        this.message = response.data;
      });
    },
    deleteTestCase(id) {
      this.$api({
        method: "get",
        url: "/deleteTestCase/" + id
      }).then(response => {
        this.message = response.data;
        this.findAllTestCase();
      });
    },
    gotoTestElement(testCaseId){
        var projectId = this.$route.params.projectId;
        this.$router.push({path:`/${projectId}/projectdetail/${testCaseId}/teststep`});
    }
  }
};
</script>

