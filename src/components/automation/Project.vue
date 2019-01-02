<template>
    <div>
        <div class="uiCard">
            <div class="uiCardHeader uiCardHeaderPrimary">
                <div class="verticalLayoutItem">
                    <div class="uiTitle uiTitleSmall">
                        UI Automation
                    </div>
                </div>
            </div>
            <div class="uiCardBody">
                <div class="row">
                    <div class="flexGroupSpaceBetween">
                        <div class="uiFormControlLayout">
                            <input type="search" class="uiFieldSearch">
                            <div class="uiFormControlLayoutIcon">
                                <i class="fa fa-search uiIcon"></i>
                            </div>
                        </div>
                        <div class="verticalLayoutItem">
                            <button class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="isModalShow=!isModalShow">
                                <div class="uiButtonContent">
                                    <div class="uiButtonText">
                                        New Project
                                    </div>
                                </div>
                            </button>
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
                                    Created Date
                                </div>
                            </th>
                            <th class="column-4">
                                <div class="tableCellContent">
                                    Actions
                                </div>
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="item in listProject" @click="gotoProjectDetail(item.id)">
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
                                        {{item.createdDateStr}}
                                    </div>
                                </td>
                                <td>
                                    <div class="tableCellContent">
                                        <div class="column">
                                            <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="deleteProject(item.id)">
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
            <div class="uiCardFooter"></div>

            <div class="uiModal" v-show="isModalShow">
                <div class="uiModalContent">
                    <div class="close" @click="isModalShow=!isModalShow">X</div>
                    <div class="form">
                        <div class="formHeader">
                            New Project
                        </div>
                        <div class="formBody">
                            <div class="verticalLayoutItem">
                                <div class="column column-2">
                                    <label class="label">Name</label>
                                </div>
                                <div class="column column-10">
                                    <input type="text" class="input" v-model="project.name">
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
                                    <div class="uiButton uiButtonPrimaryFill" @click="saveProject()">
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
</template>
<script>
export default {
  data() {
    return {
      message: "",
      currentTab: 1,
      project: {
        id: "",
        name: "",
        createdDate: ""
      },
      listProject: [],
      isModalShow: false
    };
  },
  created() {
    this.findAllProject();
  },
  methods: {
    test() {
      this.$api({
        url: "/test",
        method: "get"
      }).then(response => {
        this.message = response.data;
      });
    },
    clickTab(value) {
      this.currentTab = value;
      if (value == 2) {
        this.findAllProject();
      }
    },
    findAllProject() {
      this.$api({
        url: "/findAllProject",
        method: "get"
      }).then(response => {
        this.listProject = response.data;
      });
    },
    saveProject() {
      this.message = "save...";
      this.$api({
        method: "post",
        url: "/saveProject",
        data: this.project
      }).then(response => {
        this.message = response.data;
      });
    },
    deleteProject(id) {
      if (confirm("Are you sure to delete?")) {
        this.$api({
          method: "get",
          url: "/deleteProject/" + id
        }).then(response => {
          this.message = response.data;
          this.findAllProject();
        });
      }
    },
    gotoTestCase(projectId) {
      this.$router.push({ name: "testcase", params: { projectId } });
    },
    gotoTestPage(projectId) {
      console.log("goto testpage:" + projectId);
      this.$router.push({ name: "testpage", params: { projectId } });
    },
    gotoStepdef(projectId) {
      console.log("goto stepdef:" + projectId);
      this.$router.push({ name: "stepdef", params: { projectId } });
    },
    gotoProjectDetail(projectId) {
        console.log("goto projectDetail:" + projectId);
      this.$router.push({ path: `/${projectId}/projectdetail`});
    }
  }
};
</script>

