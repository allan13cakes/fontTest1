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
                                New Page
                            </div>
                        </div>
                    </button>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Import
                            </div>
                        </div>
                    </button>
                    <button class="uiButton uiButtonPrimaryFill uiButtonSmall">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Export
                            </div>
                        </div>
                    </button>

                    <div class="uiModal" v-show="isModalShow">
                        <div class="uiModalContent">
                            <div class="close" @click="isModalShow=!isModalShow">x</div>
                            <div class="form">
                                <div class="formHeader">
                                    New Page
                                </div>
                                <div class="formBody">
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Name</label>
                                        </div>
                                        <div class="column column-10">
                                            <input type="text" class="input" v-model="testPage.name">
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
                                            <div class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="saveTestPage()">
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
                    <tr v-for="item in listTestPage" @click="gotoTestElement(item.id)" :key="item.id">
                        <td>
                            <div class="tableCellContent">
                                <input type="checkbox">
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                {{item.name}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="editTestPage(item)">
                                    <i class="fa fa-pencil uiIcon"></i>
                                </div>
                                <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="deleteTestPage(item.id)">
                                    <i class="fa fa-trash uiIcon"></i>
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
      testPage: {
        id: "",
        name: ""
      },
      listTestPage: [],
      isModalShow: false
    };
  },
  created() {
    this.findAllTestPage();
  },
  methods: {
    findAllTestPage() {
      this.$api({
        url: "/findAllTestPage",
        method: "get"
      }).then(response => {
        this.listTestPage = response.data;
      });
    },
    saveTestPage() {
      this.message = "save...";
      this.$api({
        method: "post",
        url: "/saveTestPage",
        data: this.testPage
      }).then(response => {  
        this.message = response.data;
        this.testPage.name="";
        this.isModalShow=false;
        this.findAllTestPage();
      });
    },
    deleteTestPage(id) {
      this.$api({
        method: "get",
        url: "/deleteTestPage/" + id
      }).then(response => {
        this.message = response.data;
        this.findAllTestPage();
      });
    },
    gotoTestElement(pageId) {
      var projectId = this.$route.params.projectId;
      console.log(projectId + "," + pageId);
      this.$router.push({
        path: `/${projectId}/projectdetail/${pageId}/testelement`
      });
    },
    editTestPage(value){
        this.testPage.id = value.id;
        this.testPage.name = value.name;
        this.isModalShow = true;
    }
  }
};
</script>

