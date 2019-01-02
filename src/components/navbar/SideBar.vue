<template>
    <div class="uiSidebarWrapper">
        <div class="uiLogo">
            <div class="uiSimpleText">AutoTool</div>
        </div>
        <ul class="uiNav">
            <li class="uiNavItem">
                <router-link tag="a" class="uiNavLink" active-class="uiNavLinkActive" to="/uiautomation">
                    <i class="fa fa-magic uiNavIcon"></i>
                    <p class="uiNavContent">UI Automation</p>
                </router-link>
            </li>
            <li class="uiNavItem">
                <router-link tag="a" class="uiNavLink" active-class="uiNavLinkActive" to="/base">
                    <i class="fa fa-desktop uiNavIcon"></i>
                    <p class="uiNavContent">Base</p>
                </router-link>
            </li>
        </ul>
        
    </div>
</template>
