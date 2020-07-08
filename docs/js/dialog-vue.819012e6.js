(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog-vue"],{f029:function(o,a,t){"use strict";t.r(a);var i=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",[o._m(0),t("p",[o._v("This dialog contains some basic options to toggle on and off.")]),t("w-button",{staticClass:"px-4 mr-6 shrink",attrs:{"bg-color":"primary",dark:""},on:{click:function(a){o.dialog1.show=!0}}},[o._v("Open dialog")]),t("w-dialog",{attrs:{fullscreen:o.dialog1.fullscreen,"max-width":o.dialog1.maxWidth,persistent:o.dialog1.persistent,"persistent-no-animation":o.dialog1.persistentNoAnimation},scopedSlots:o._u([{key:"title",fn:function(){return[t("w-icon",{staticClass:"mr-2"},[o._v("mdi mdi-tune")]),o._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{on:{click:function(a){o.dialog1.show=!1}}},[o._v("Close")])]},proxy:!0}]),model:{value:o.dialog1.show,callback:function(a){o.$set(o.dialog1,"show",a)},expression:"dialog1.show"}},[t("w-checkbox",{staticClass:"mt-2",attrs:{label:"Fullscreen"},model:{value:o.dialog1.fullscreen,callback:function(a){o.$set(o.dialog1,"fullscreen",a)},expression:"dialog1.fullscreen"}}),t("w-checkbox",{staticClass:"mt-2",attrs:{label:"Persistent (try to click outside)"},model:{value:o.dialog1.persistent,callback:function(a){o.$set(o.dialog1,"persistent",a)},expression:"dialog1.persistent"}}),t("w-checkbox",{staticClass:"mt-2",attrs:{disabled:!o.dialog1.persistent,label:"Persistent with no animation"},model:{value:o.dialog1.persistentNoAnimation,callback:function(a){o.$set(o.dialog1,"persistentNoAnimation",a)},expression:"dialog1.persistentNoAnimation"}}),t("div",{staticClass:"w-flex mt-6 no-grow"},[t("span",{staticClass:"mr-2"},[o._v("Max width:")]),t("w-radios",{attrs:{items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},model:{value:o.dialog1.maxWidth,callback:function(a){o.$set(o.dialog1,"maxWidth",a)},expression:"dialog1.maxWidth"}})],1)],1),t("h2",[o._v("Persistent prompt dialog")]),t("w-button",{staticClass:"px-4",attrs:{"bg-color":"primary",dark:""},on:{click:function(a){o.dialog2.show=!0}}},[o._v("Open dialog")]),t("w-dialog",{attrs:{persistent:"","max-width":550},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Terms and conditions")]},proxy:!0},{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{staticClass:"mr-2",attrs:{"bg-color":"error"},on:{click:function(a){o.dialog2.show=!1}}},[o._v("I disagree")]),t("w-button",{attrs:{"bg-color":"success"},on:{click:function(a){o.dialog2.show=!1}}},[o._v("I agree")])]},proxy:!0}]),model:{value:o.dialog2.show,callback:function(a){o.$set(o.dialog2,"show",a)},expression:"dialog2.show"}},[t("p",[o._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus, quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas odit dolor labore eveniet at vel sequi nostrum."),t("br"),t("br"),o._v(" Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.")])]),t("h2",[o._v("Nesting")]),t("w-button",{staticClass:"px-4",attrs:{"bg-color":"primary",dark:""},on:{click:function(a){o.dialog3.show=!0}}},[o._v("Open dialog")]),t("w-dialog",{attrs:{"max-width":600},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Dialog 1")]},proxy:!0},{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(a){o.dialog3.show=!1}}},[o._v("Close")])]},proxy:!0}]),model:{value:o.dialog3.show,callback:function(a){o.$set(o.dialog3,"show",a)},expression:"dialog3.show"}},[t("p",[o._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit...")]),t("w-button",{staticClass:"mt-6",attrs:{"bg-color":"indigo-lighter-1",dark:""},on:{click:function(a){o.dialog4.show=!0}}},[o._v("Open dialog 2")])],1),t("w-dialog",{attrs:{"max-width":250},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Dialog 2")]},proxy:!0}]),model:{value:o.dialog4.show,callback:function(a){o.$set(o.dialog4,"show",a)},expression:"dialog4.show"}},[t("w-button",{staticClass:"my-6",attrs:{"bg-color":"error",dark:""},on:{click:function(a){o.dialog4.show=!1}}},[o._v("Close")])],1),t("h2",[o._v("Transitions")]),t("div",{staticClass:"w-flex"},[t("w-button",{staticClass:"px-4 mr-6",attrs:{"bg-color":"primary",dark:""},on:{click:function(a){o.dialog5.show=!0}}},[o._v("Open dialog")]),t("div",{staticClass:"w-flex wrap"},[t("div",{staticClass:"ma-2"},[t("div",{staticClass:"subtitle mb-2"},[o._v("Transition names")]),t("w-radios",{attrs:{items:o.transitions,"item-value":"label"},on:{change:function(a){o.dialog5.fullscreen=null}},scopedSlots:o._u([{key:"label",fn:function(a){var i=a.item;return[t("code",[o._v(o._s(i.label))])]}}]),model:{value:o.dialog5.transition,callback:function(a){o.$set(o.dialog5,"transition",a)},expression:"dialog5.transition"}})],1),t("div",{staticClass:"ma-2"},[t("div",{staticClass:"subtitle mb-2"},[o._v("Slide transitions for fullscreen")]),t("w-radios",{attrs:{items:o.transitionsForFullscreen,"item-value":"label"},on:{change:function(a){o.dialog5.fullscreen=null}},scopedSlots:o._u([{key:"label",fn:function(a){var i=a.item;return[t("code",[o._v(o._s(i.label))])]}}]),model:{value:o.dialog5.transition,callback:function(a){o.$set(o.dialog5,"transition",a)},expression:"dialog5.transition"}}),t("w-checkbox",{staticClass:"mt-2",attrs:{value:null===o.dialog5.fullscreen?o.fullscreenTransition:o.dialog5.fullscreen,label:"Fullscreen dialog"},on:{change:function(a){o.dialog5.fullscreen=a}}})],1)])],1),t("w-dialog",{attrs:{"max-width":(null===o.dialog5.fullscreen?o.fullscreenTransition:o.dialog5.fullscreen)?0:400,fullscreen:null===o.dialog5.fullscreen?o.fullscreenTransition:o.dialog5.fullscreen,transition:o.dialog5.transition},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Dialog with custom transition")]},proxy:!0}]),model:{value:o.dialog5.show,callback:function(a){o.$set(o.dialog5,"show",a)},expression:"dialog5.show"}},[t("div",{staticClass:"w-flex fill-height align-center justify-center"},[t("w-button",{staticClass:"my-6",attrs:{"bg-color":"error",dark:""},on:{click:function(a){o.dialog5.show=!1}}},[o._v("Close")])],1)]),t("h2",[o._v("Overlay opacity and color")]),t("w-button",{staticClass:"px-4",attrs:{"bg-color":"primary",dark:""},on:{click:function(a){o.dialog6.show=!0}}},[o._v("Open control panel")]),t("w-dialog",{attrs:{"max-width":500,"overlay-opacity":"opacity"===o.dialog6.overlayChoice&&o.dialog6.overlayOpacity,"overlay-color":"opacity"!==o.dialog6.overlayChoice&&o.dialog6.overlayChoice},scopedSlots:o._u([{key:"title",fn:function(){return[t("w-icon",{staticClass:"mr-2"},[o._v("mdi mdi-tune")]),o._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(a){o.dialog6.show=!1}}},[o._v("Close")])]},proxy:!0}]),model:{value:o.dialog6.show,callback:function(a){o.$set(o.dialog6,"show",a)},expression:"dialog6.show"}},[t("w-radio",{staticClass:"mt-1",attrs:{"return-value":"opacity"},model:{value:o.dialog6.overlayChoice,callback:function(a){o.$set(o.dialog6,"overlayChoice",a)},expression:"dialog6.overlayChoice"}},[o._v("Overlay opacity"),t("input",{directives:[{name:"model",rawName:"v-model",value:o.dialog6.overlayOpacity,expression:"dialog6.overlayOpacity"}],staticClass:"ml-2",attrs:{type:"number",step:"0.1",min:"0",max:"1"},domProps:{value:o.dialog6.overlayOpacity},on:{input:function(a){a.target.composing||o.$set(o.dialog6,"overlayOpacity",a.target.value)}}})]),t("w-radio",{staticClass:"mt-1",attrs:{"return-value":"rgba(35, 71, 129, 0.5)"},model:{value:o.dialog6.overlayChoice,callback:function(a){o.$set(o.dialog6,"overlayChoice",a)},expression:"dialog6.overlayChoice"}},[o._v("Custom color: transparent blue")]),t("w-radio",{staticClass:"mt-1",attrs:{"return-value":"#e91e63"},model:{value:o.dialog6.overlayChoice,callback:function(a){o.$set(o.dialog6,"overlayChoice",a)},expression:"dialog6.overlayChoice"}},[o._v("Custom color: opaque pink")]),t("w-radio",{staticClass:"mt-1",attrs:{"return-value":"transparent"},model:{value:o.dialog6.overlayChoice,callback:function(a){o.$set(o.dialog6,"overlayChoice",a)},expression:"dialog6.overlayChoice"}},[o._v("Custom color: transparent")])],1)],1)},e=[function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("h1",{staticClass:"headline mt-4"},[t("span",{staticClass:"code"},[o._v("w-dialog")])])}],l=(t("caad"),t("d81d"),t("2532"),{data:function(){return{dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,maxWidth:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-top"},{label:"slide-fade-bottom"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"}],transitionsForFullscreen:[{label:"slide-top"},{label:"slide-bottom"},{label:"slide-left"},{label:"slide-right"}]}},computed:{fullscreenTransition:function(){return this.transitionsForFullscreen.map((function(o){return o.label})).includes(this.dialog5.transition)}}}),s=l,n=t("2877"),r=Object(n["a"])(s,i,e,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=dialog-vue.819012e6.js.map