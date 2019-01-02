<template>
    <div>
        <div class="uiTitle uiTitleMedium">
            Configuration
        </div>
        <div class="uiXLine"></div>
        <div class="uiSpacerMedium"></div>
        <test-action></test-action>
    </div>
</template>
<script>
import TestAction from "./TestAction.vue";
export default {
    components:{
        TestAction: TestAction
    }
}
</script>
