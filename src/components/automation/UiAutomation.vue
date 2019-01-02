<template>
    <div>
        <div class="row">
            <div class="uiCenteredPrompt">
                <div class="uiCenteredPromptItem uiCenteredPromptIcon">
                    <div class="fa fa-smile-o"></div>
                </div>
                <div class="uiCenteredPromptItem uiCenteredPromptLabel">Welcome to the UI Automation!</div>
                <div class="uiCenteredPromptItem uiCenteredPromptDetails">Let&rsquo;s take a look around.</div>
                <div class="uiCenteredPromptItem">
                    <router-link to="/quickstart" tag="button" class="uiButton uiButtonPrimary">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Quick Start
                            </div>
                        </div>
                    </router-link>
                </div>  
                <div class="uiCenteredPromptItem uiCenteredPromptDetails">or try</div>
                <div class="uiCenteredPromptItem">
                    <router-link to="/project" tag="div" class="uiButtonEmpty uiButtonEmptyPrimary">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Project
                            </div>
                        </div>
                    </router-link>
                    <div class="uiButtonEmpty uiButtonEmptyPrimary">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Execution
                            </div>
                        </div>
                    </div>
                    <router-link to="/automationconfig" tag="div" class="uiButtonEmpty uiButtonEmptyPrimary">
                        <div class="uiButtonContent">
                            <div class="uiButtonText">
                                Configuration
                            </div>
                        </div>
                    </router-link>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
