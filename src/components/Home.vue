<template>
<div>
    <div class="uiWrapper">
        <div class="uiSidebar">
            <side-bar></side-bar>
        </div>
        <div class="uiMainPanel">
            <nav-bar></nav-bar>
            <div class="uiMainPanelContent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import NavBar from "./navbar/NavBar.vue";
import SideBar from "./navbar/SideBar.vue";
export default {
  components:{
      NavBar: NavBar,
      SideBar: SideBar
  }
};
</script>
<style>
</style>


