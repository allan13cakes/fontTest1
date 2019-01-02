<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
  import Home from "./components/Home.vue";
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
      Home:Home
    }
  }
</script>

<style lang="scss">
@import url("./css/font-awesome.min.css");
@import url("./css/basic.css");
@import url("./css/layout.css");
@import url("./css/uiButton.css");
@import url("./css/uiCard.css");
@import url("./css/uiTitle.css");
@import url("./css/uiAccordion.css");
@import url("./css/uiPanel.css");
@import url("./css/uiPrompt.css");
@import url("./css/uiSidebar.css");
@import url("./css/uiNav.css");
@import url("./css/uiClear.css");
@import url("./css/uiBreadCrumb.css");
@import url("./css/uiForm.css");
@import url("./css/uiModal.css");
@import url("./css/uiTable.css");
@import url("./css/uiTabs.css");
@import url("./css/uiStep.css");
</style>
