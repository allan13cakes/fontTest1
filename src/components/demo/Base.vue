<template>
  <div>
    <div class="row">
      <div class="uiAccordion">
        <div class="uiAccordionContent">
          <button class="uiAccordionButton" @click="isButtonAccordionOpen=!isButtonAccordionOpen">
            <div class="uiFlexGroup">
              <div class="uiFlexItemFlexGrowZero">
                <i class="fa" :class="[isButtonAccordionOpen?'fa-angle-down':'fa-angle-right']"></i>
              </div>
              <div class="uiFlexItem">click me to open button demo</div>
            </div>
          </button>
        </div>
        <div class="uiAccordionChildWrapper" v-show="isButtonAccordionOpen">
          <div class="row" v-for="item in buttonList" :key="item.id">
            <button class="uiButton" :class="item.className" :disabled="item.isDisabled">
              <div class="uiButtonContent">
                <div class="uiButtonText">uiButton</div>
              </div>
            </button>
            <button class="uiButton" :class="item.fillClassName" :disabled="item.isDisabled">
              <div class="uiButtonContent">
                <div class="uiButtonText">uiButton Fill</div>
              </div>
            </button>
            <button
              class="uiButton uiButtonSmall"
              :class="item.className"
              :disabled="item.isDisabled"
            >
              <div class="uiButtonContent">
                <div class="uiButtonText">uiButton Small</div>
              </div>
            </button>
            <button
              class="uiButton uiButtonSmall"
              :class="item.fillClassName"
              :disabled="item.isDisabled"
            >
              <div class="uiButtonContent">
                <div class="uiButtonText">uiButton Fill Small</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="uiAccordion">
        <div class="uiAccordionContent">
          <button class="uiAccordionButton" @click="isLinkAccordionOpen=!isLinkAccordionOpen">
            <div class="uiFlexGroup">
              <div class="uiFlexItemFlexGrowZero">
                <i class="fa" :class="[isLinkAccordionOpen?'fa-angle-down':'fa-angle-right']"></i>
              </div>
              <div class="uiFlexItem">click me to open link demo</div>
            </div>
          </button>
        </div>
        <div class="uiAccordionChildWrapper" v-show="isLinkAccordionOpen">
          <div class="row">
            <a class="uiButton uiButtonPrimary" href="#">
              <div class="uiButtonContent">
                <div class="uiButtonText">Link Demo</div>
              </div>
            </a>
            <a class="uiButtonEmpty uiButtonEmptyPrimary" href="#">
              <div class="uiButtonContent">
                <div class="uiButtonText">Link Demo</div>
              </div>
            </a>
            <a class="uiButtonEmpty uiButtonEmptyPrimary" href="#">
              <div class="uiButtonContent">
                <div class="uiButtonText">
                  <i class="fa fa-trash-o"></i>
                </div>
              </div>
            </a>
          </div>
          <div class="row">
            <button disabled class="uiButton uiButtonPrimary" href="#">
              <div class="uiButtonContent">
                <div class="uiButtonText">Link disabled Demo</div>
              </div>
            </button>
            <button disabled class="uiButtonEmpty uiButtonEmptyPrimary" href="#">
              <div class="uiButtonContent">
                <div class="uiButtonText">Link disabled Demo</div>
              </div>
            </button>
            <button disabled class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonText">
                  <i class="fa fa-trash-o"></i>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="uiAccordion">
        <div class="uiAccordionContent">
          <button
            class="uiAccordionButton"
            @click="isButtonIconAccordionOpen=!isButtonIconAccordionOpen"
          >
            <div class="uiFlexGroup">
              <div class="uiFlexItemFlexGrowZero">
                <i class="fa" :class="[isButtonIconAccordionOpen?'fa-angle-down':'fa-angle-right']"></i>
              </div>
              <div class="uiFlexItem">click me to open button icon demo</div>
            </div>
          </button>
        </div>
        <div class="uiAccordionChildWrapper" v-show="isButtonIconAccordionOpen">
          <div class="row">
            <button class="uiButton uiButtonPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="uiIcon uiIconMedium fa fa-angle-down"></i>
                </div>
                <div class="uiButtonText">Primary</div>
              </div>
            </button>
            <button class="uiButton uiButtonPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonText">Primary</div>
                <div class="uiButtonIcon">
                  <i class="uiIcon uiIconMedium fa fa-angle-down"></i>
                </div>
              </div>
            </button>
          </div>
          <div class="row">
            <button disabled class="uiButton uiButtonPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <div class="uiLoadingSpinner uiLoadingSpinnerMedium"></div>
                </div>
                <div class="uiButtonText">Loading...</div>
              </div>
            </button>
          </div>
          <div class="row">
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonText">Primary</div>
              </div>
            </button>
          </div>
          <div class="row">
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-down uiIconMedium"></i>
                </div>
                <div class="uiButtonText">Primary</div>
              </div>
            </button>
          </div>
          <div class="row">
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-right uiIconMedium"></i>
                </div>
              </div>
            </button>
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-right uiIconMedium"></i>
                </div>
              </div>
            </button>
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-right uiIconMedium"></i>
                </div>
              </div>
            </button>
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-right uiIconMedium"></i>
                </div>
              </div>
            </button>
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-right uiIconMedium"></i>
                </div>
              </div>
            </button>
            <button class="uiButtonEmpty uiButtonEmptyPrimary">
              <div class="uiButtonContent">
                <div class="uiButtonIcon">
                  <i class="fa fa-angle-right uiIconMedium"></i>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
        <div class="uiPanel">This is panel</div>
        <div class="uiSpacer"></div>
        <div class="uiPanel uiPaddingSmall">This is panel</div>
        <div class="uiSpacer"></div>
        <div class="uiPanel uiPaddingMedium">This is panel</div>
        <div class="uiSpacer"></div>
        <div class="uiPanel uiPaddingLarge">This is panel</div>
        <div class="uiSpacer"></div>
        <div class="uiPanel uiPaddingLarge isClickable">This is panel</div>
        <div class="uiSpacer"></div>
        <div class="uiPanel uiPaddingMedium">
          <div class="uiPanelBadgeWrapper">
            <div class="uiBadge">test</div>
          </div>
          This is panel
        </div>
    </div>

    <div class="row">
      <div class="uiBreadCrumb">
        <a href="#" class="uiLink uiLinkSubdued uiBreadcrumb">level1</a>
        <div class="uiBreadCrumbLine"></div>
        <a href="#" class="uiLink uiLinkSubdued uiBreadcrumb">level2</a>
        <div class="uiBreadCrumbLine"></div>
        <a href="#" class="uiLink uiLinkSubdued uiBreadcrumb">level2</a>
        <div class="uiBreadCrumbLine"></div>
        <span class="uiBreadcrumbLast">level2</span>
      </div>
    </div>

    <div class="row">
      <div class="uiCard">
        <div class="uiCardHeader uiCardHeaderPrimary">
          <div class="verticalLayoutItem">
            <div class="uiTitle">Test</div>
          </div>
          <div class="verticalLayoutItem">
            <button class="uiButton uiButtonPrimaryFill uiButtonSmall">
              <div class="uiButtonContext">
                <div class="uiButtonText">
                  Add Test
                </div>
              </div>
            </button>
          </div>
        </div>
        <div class="uiCardBody"></div>
        <div class="uiCardFooter"></div>
      </div>
    </div>

    <div class="row">
      <button class="uiButton uiButtonPrimary" @click="isModalShow=!isModalShow">
        <div class="uiButtonContent">
          <div class="uiButtonText">
            Open Modal
          </div>
        </div>
      </button>
      <div class="uiModal" v-show="isModalShow">
          <div class="uiModalContent">
            <div class="close" @click="isModalShow=false">X</div>
            <div class="uiForm">
              test
            </div>
          </div>
        </div>
    </div>

    <div class="row">
      <table class="uiTable">
        <thead>
          <tr>
            <th width="24px">
              <input type="checkbox">
            </th>
            <th>column2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox">
            </td>
            <td>value2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
        <table class="uiTable">
          <thead>
            <th>Demo</th>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id" draggable="true" 
              @dragenter="dragEnter(item)" @dragleave="dragLeave(item)"
              @dragstart="dragStart(item)" @dragend="dragEnd(item)">
              <td>{{item.name}}</td>  
            </tr>
          </tbody>
        </table>
    </div>

    <div class="row">
      <div class="uiStepsHorizontal">
        <div class="uiStepHorizontal uiStepHorizontalIsComplete">
          <div class="uiStepNumber">
            <i class="fa fa-check uiIcon"></i>
          </div>
          <div class="uiStepTitle">Step 1</div>
        </div>
        <div class="uiStepHorizontal uiStepHorizontalIsSelected">
          <div class="uiStepNumber">2</div>
          <div class="uiStepTitle">Step 2</div>
        </div>
        <div class="uiStepHorizontal uiStepHorizontalInComplete">
          <div class="uiStepNumber">3</div>
          <div class="uiStepTitle">Step 3</div>
        </div>
        <div class="uiStepHorizontal uiStepHorizontalInComplete">
          <div class="uiStepNumber">4</div>
          <div class="uiStepTitle">Step 4</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isModalShow:false,
      isButtonAccordionOpen: false,
      isLinkAccordionOpen: false,
      isButtonIconAccordionOpen: false,
      buttonList: [
        {
          className: "uiButtonPrimary",
          fillClassName: "uiButtonPrimaryFill",
          isDisabled: false
        },
        {
          className: "uiButtonSecondary",
          fillClassName: "uiButtonSecondaryFill",
          isDisabled: false
        },
        {
          className: "uiButtonWarning",
          fillClassName: "uiButtonWarningFill",
          isDisabled: false
        },
        {
          className: "uiButtonDanger",
          fillClassName: "uiButtonDangerFill",
          isDisabled: false
        },
        {
          className: "uiButtonPrimary",
          fillClassName: "uiButtonPrimaryFill",
          isDisabled: true
        }
      ],
      items:[
        {
          id:1,
          name:"test1"
        },
        {
          id:2,
          name:"test2"
        },
        {
          id:3,
          name:"test3"
        }
      ]
    };
  },
  methods: {
    dragStart(value){
      this.dragValue = value;
    },
    dragEnd(value){
      var dropIndex=0;
      var dragIndex=0;
      for(var i=0;i<this.items.length;i++){
        if(this.items[i]==this.dropValue){
          dropIndex=i;
        }
        if(this.items[i]==this.dragValue){
          dragIndex=i;
        }
      }
      this.items.splice(dropIndex,1,this.dragValue);
      this.items.splice(dragIndex,1,this.dropValue);
    },
    dragEnter(value){
      this.dropValue = value;
    },
    dragLeave(value){

    }
  }
};
</script>
