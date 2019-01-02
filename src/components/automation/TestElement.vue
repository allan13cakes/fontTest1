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
                                New Element
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
                                    New Element
                                </div>
                                <div class="formBody">
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Name</label>
                                        </div>
                                        <div class="column column-10">
                                            <input type="text" class="input" v-model="testElement.name">
                                        </div>
                                    </div>  
                                    <div class="verticalLayoutItem">
                                        <div class="column column-2">
                                            <label class="label">Value</label>
                                        </div>
                                        <div class="column column-10">
                                            <input type="text" class="input" v-model="testElement.value">
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
                                            <div class="uiButton uiButtonPrimaryFill uiButtonSmall" @click="saveTestElement()">
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
                    <th>
                        <div class="tableCellContent">
                            Name
                        </div>
                    </th>
                    <th>
                        <div class="tableCellContent">
                            Value
                        </div>
                    </th>
                    <th class="column-3">
                        <div class="tableCellContent">
                            Actions
                        </div>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="item in listTestElement">
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
                                {{item.value}}
                            </div>
                        </td>
                        <td>
                            <div class="tableCellContent">
                                <div class="column">
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="editTestElement(item)">
                                        <i class="fa fa-pencil uiIcon"></i>
                                    </div>
                                    <div class="uiButtonEmpty uiButtonEmptyPrimary uiButtonSmall" @click.stop="deleteTestElement(item.id)">
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
      testElement: {
        id: "",
        name: "",
        pageId: this.$route.params.pageId
      },
      listTestElement: [],
      isModalShow:false
    };
  },
  created() {
    this.findAllTestElement();
  },
  methods: {
    findAllTestElement() {
      this.$api({
        url: "/findAllTestElement/"+this.$route.params.pageId,
        method: "get"
      }).then(response => {
        this.listTestElement = response.data;
      });
    },
    saveTestElement() {
      this.message = "save...";
      this.$api({
        method: "post",
        url: "/saveTestElement",
        data: this.testElement
      }).then(response => {
        this.message = response.data;
        this.testElement.id="";
        this.testElement.name="";
        this.testElement.value="";
        this.isModalShow=false;
        this.findAllTestElement();
      });
    },
    deleteTestElement(id) {
      this.$api({
        method: "get",
        url: "/deleteTestElement/" + id
      }).then(response => {
        this.message = response.data;
        this.findAllTestElement();
      });
    },
    editTestElement(item){
        this.testElement.id = item.id;
        this.testElement.name = item.name;
        this.testElement.pageId = item.pageId;
        this.testElement.value = item.value;
        this.isModalShow = true;
    }
  }
};
</script>

