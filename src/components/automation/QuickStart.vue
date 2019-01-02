<template>
    <div>
        <div class="row">
            <div class="uiBreadCrumb">
                <a href="#" class="uiLink uiLinkSubdued uiBreadcrumb">
                    <i class="fa fa-angle-left uiIcon"></i> Back to UI Automation</a>
            </div>
        </div>
        <div class="row">
            <div class="uiStepsHorizontal">
                <div class="uiStepHorizontal" :class="item.status" v-for="item in stepList" :key="item.step">
                    <div class="uiStepNumber">
                        <i v-if="item.status=='uiStepHorizontalIsComplete'" class="fa fa-check uiIcon"></i>
                        <div v-else>{{item.step}}</div>
                    </div>
                    <div class="uiStepTitle">{{item.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      stepList: [
        {
          step: "1",
          title: "project",
          status: "uiStepHorizontalIsComplete"
        },
        {
          step: "2",
          title: "page",
          status: "uiStepHorizontalIsSelected"
        },
        {
          step: "3",
          title: "stepDefinition",
          status: "uiStepHorizontalInComplete"
        },
        {
          step: "4",
          title: "testCase",
          status: "uiStepHorizontalInComplete"
        },
        {
          step: "5",
          title: "report",
          status: "uiStepHorizontalInComplete"
        }
      ]
    };
  }
};
</script>

