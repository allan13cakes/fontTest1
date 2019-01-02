<template>
    <div>
        <div class="uiCard">
            <div class="uiCardHeader uiCardHeaderPrimary">
                <div class="verticalLayoutItem">
                    <div class="uiTitle uiTitleSmall">
                        {{project.name}}
                    </div>
                </div>
            </div>
            <div class="uiCardBody">
                <a href="#" class="uiLink uiLinkSubdued uiBreadcrumb">UI Automation</a>
                <div class="uiBreadCrumbLine"></div>
                <span class="uiBreadcrumbLast">{{project.name}}</span>
                <div class="uiTabs">
                    <div class="uiTab" :class="{'uiTabIsSelected':currentTab==1}" @click="gotoProjectSummary()">
                        <div class="uiTabContent">summary</div>
                    </div>
                    <div class="uiTab" :class="{'uiTabIsSelected':currentTab==2}" @click="gotoTestPage()">
                        <div class="uiTabContent">pages</div>
                    </div>
                    <div class="uiTab" :class="{'uiTabIsSelected':currentTab==3}" @click="gotoStepdef()">
                        <div class="uiTabContent">step defenition</div>
                    </div>
                    <div class="uiTab" :class="{'uiTabIsSelected':currentTab==4}" @click="gotoTestCase()">
                        <div class="uiTabContent">test cases</div>
                    </div>
                </div>
                <router-view></router-view>
            </div>
            <div class="uiCardFooter"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        currentTab:1,
        project:''
    };
  },
  created(){
      this.findProject();
  },
  methods: {
    findProject(){
        this.$api({
            method:"get",
            url:"/findProject/"+this.$route.params.projectId
        }).then(response=>{
            this.project = response.data;
        });
    },
    gotoProjectSummary() {
      var projectId = this.$route.params.projectId;
      this.$router.push({ path: `/${projectId}/projectdetail/projectsummary` });
      this.currentTab=1;
    },
    gotoTestPage() {
      var projectId = this.$route.params.projectId;
      this.$router.push({ path: `/${projectId}/projectdetail/testpage` });
      this.currentTab=2;
    },
    gotoStepdef() {
      var projectId = this.$route.params.projectId;
      this.$router.push({ path: `/${projectId}/projectdetail/stepdef` });
      this.currentTab=3;
    },
    gotoTestCase() {
      var projectId = this.$route.params.projectId;
      this.$router.push({ path: `/${projectId}/projectdetail/testcase` });
      this.currentTab=4;
    }
  }
};
</script>
