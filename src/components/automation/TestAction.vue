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
                                New Action
                            </div>
                        </div>
                    </button>
                    <div class="uiModal" v-show="isModalShow">
                        <div class="uiModalContent">
                            <div class="close" @click="isModalShow=!isModalShow">x</div>
                            <div class="form">
                                <div class="formHeader">
                                    New Action
                                </div>
                                <div class="formBody">
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Name</label>
                                        </div>
                                        <div class="column column-6">
                                            <input type="text" class="input" v-model="testAction.name">
                                        </div>
                                    </div>
                                    <div class="vertivalLayoutItem">
                                        <div class="column column-4">
                                            <button class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall">
                                                add parameter
                                            </button>
                                        </div>
                                    </div>
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Parameter1</label>
                                        </div>
                                        <div class="column column-6">
                                            <select type="text" class="uiSelect" v-model="testAction.parameterOneType">
                                                <option value="String">String</option>
                                                <option value="WebElement">WebElement</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Parameter2</label>
                                        </div>
                                        <div class="column column-6">
                                            <select type="text" class="uiSelect" v-model="testAction.parameterTwoType">
                                                <option value="String">String</option>
                                                <option value="WebElement">WebElement</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Description</label>
                                        </div>
                                        <div class="column column-10">
                                            <input type="text" class="input" v-model="testAction.description">
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
                                            <div class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="saveTestAction()">
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
                    <th>
                        <div class="tableCellContent">
                            Name
                        </div>
                    </th>
                    <th>
                        <div class="tableCellContent">
                            Parameters
                        </div>
                    </th>
                    <th class="column-3">
                        <div class="tableCellContent">
                            Description
                        </div>
                    </th>
                    <th class="column-3">
                        <div class="tableCellContent">
                            Actions
                        </div>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="item in listTestAction">
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
                            <div class="tableCellContent" v-show="item.parameterOneType!=null">
                                {{item.parameterOneType}}
                            </div>
                            <div class="tableCellContent" v-show="item.parameterTwoType!=null">
                                {{item.parameterTwoType}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.description}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                <div class="column">
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="editTestAction(item)">
                                        <i class="fa fa-pencil uiIcon"></i>
                                    </div>
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="deleteTestAction(item.id)">
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
      testAction: {
        id: "",
        name: "",
        description: ""
      },
      listTestAction: [],
      isModalShow:false
    };
  },
  created() {
      this.findAllTestAction();
  },
  methods: {
    clickTab(value) {
      this.currentTab = value;
      if (value == 2) {
        this.findAllTestAction();
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
    saveTestAction() {
      this.message = "save...";
      this.$api({
        method: "post",
        url: "/saveTestAction",
        data: this.testAction
      }).then(response => {
        this.message = response.data;
        this.testAction.name="";
        this.testAction.description="";
        this.testAction.testData="";
        this.testAction.parameterOneType="";
        this.testAction.parameterTwoType="";
        this.findAllTestAction();
        this.isModalShow=false;
      });
    },
    deleteTestAction(id) {
      this.$api({
        method: "get",
        url: "/deleteTestAction/" + id
      }).then(response => {
        this.message = response.data;
        this.findAllTestAction();
      });
    },
    editTestAction(value){
        console.log("edit Test Action");
        this.testAction.id = value.id;
        this.testAction.name = value.name;
        this.testAction.description = value.description;
        this.testAction.parameterOneType = value.parameterOneType;
        this.testAction.parameterTwoType = value.parameterTwoType;
        this.isModalShow=!this.isModalShow;
    }
  }
};
</script>

