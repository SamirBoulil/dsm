(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1484:function(module,exports,__webpack_require__){"use strict";__webpack_require__(2),__webpack_require__(51),__webpack_require__(45),__webpack_require__(44),__webpack_require__(42),__webpack_require__(1485),__webpack_require__(1486),__webpack_require__(6),__webpack_require__(47);var _clientApi=__webpack_require__(61),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1496);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1487:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(166).configure)([__webpack_require__(1488),__webpack_require__(1490)],module,!1)}).call(this,__webpack_require__(113)(module))},1488:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1489};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1488},1489:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(12),__webpack_require__(3),__webpack_require__(6),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(336);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"src/storybook-examples")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"p"},{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",onClick:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_7__.linkTo)("Components/Dummy","Standard")},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Dummy component"),"The bumbest component ever")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/styling",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/data",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://discord.gg/UUt2PJb",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",{class:"tip"},"Tip"),"Edit the Markdown in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",null,"src/storybook-examples/welcome.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1490:function(module,exports,__webpack_require__){var map={"./components/Checkbox/Checkbox.stories.mdx":1495,"./components/Dummy/Dummy.stories.mdx":1497};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1490},1495:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"standard",(function(){return Checkbox_stories_standard}));__webpack_require__(2),__webpack_require__(12),__webpack_require__(3),__webpack_require__(6);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(1),blocks=__webpack_require__(40),styled_components_browser_esm=(__webpack_require__(58),__webpack_require__(89)),CheckIcon_CheckIcon=function CheckIcon(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?24:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?24:_ref$height;return react_default.a.createElement("svg",{width:width,height:height,viewBox:"0 0 24 24"},react_default.a.createElement("path",{stroke:"#A1A9B7",d:"M2.5 12l7.5 6.5L21.5 6",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))};CheckIcon_CheckIcon.displayName="CheckIcon";try{CheckIcon_CheckIcon.displayName="CheckIcon",CheckIcon_CheckIcon.__docgenInfo={description:"",displayName:"CheckIcon",props:{width:{defaultValue:{value:24},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:24},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/CheckIcon.tsx#CheckIcon"]={docgenInfo:CheckIcon_CheckIcon.__docgenInfo,name:"CheckIcon",path:"src/icons/CheckIcon.tsx#CheckIcon"})}catch(__react_docgen_typescript_loader_error){}var CheckboxContainer=styled_components_browser_esm.b.div.withConfig({displayName:"Checkbox__CheckboxContainer",componentId:"sc-1v8n48j-0"})(["background-color:transparent;height:20px;width:20px;border:1px solid #5992c7;border-radius:3px;display:inline-block;"," "," ",""],(function(props){return props.checked&&Object(styled_components_browser_esm.a)(["background-color:#5992c7"])}),(function(props){return props.checked&&props.readOnly&&Object(styled_components_browser_esm.a)(["background-color:#dee9f4 border-color:#bdd3e9"])}),(function(props){return!props.checked&&props.readOnly&&Object(styled_components_browser_esm.a)(["background-color:#f9f9fb border-color:#a1a9b7"])})),LabelContainer=styled_components_browser_esm.b.div.withConfig({displayName:"Checkbox__LabelContainer",componentId:"sc-1v8n48j-1"})(['font-color:"#11324d";font-weight:400;font-size:15px;padding-left:10px;display:inline-block;',""],(function(props){return props.readOnly&&'\n            font-color: "#a1a9b7";\n        '})),Checkbox_Checkbox=function Checkbox(_ref){var label=_ref.label,checked=_ref.checked,onChange=_ref.onChange,_ref$readOnly=_ref.readOnly,readOnly=void 0!==_ref$readOnly&&_ref$readOnly;return console.log(checked),console.log(readOnly),react_default.a.createElement("label",null,react_default.a.createElement(CheckboxContainer,{onClick:function handleChange(e){return onChange&&!readOnly&&onChange(!checked)},checked:checked,readOnly:readOnly},checked?react_default.a.createElement(CheckIcon_CheckIcon,{height:20,width:20}):null),label?react_default.a.createElement(LabelContainer,{readOnly:readOnly},label):null)};Checkbox_Checkbox.displayName="Checkbox";try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"The checkboxes are applied when users can select all, several, or none of the options from a given list.",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},readOnly:{defaultValue:{value:!1},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Components/Checkbox",component:Checkbox_Checkbox,argTypes:{readOnly:{control:{type:"boolean",default:"false"}},checked:{control:{type:"boolean",default:"false"}},label:"string"},mdxType:"Meta"}),Object(esm.mdx)("h1",{id:"checkbox"},"Checkbox"),Object(esm.mdx)("h2",{id:"playground"},"Playground"),Object(esm.mdx)("p",null,"Use this playground to test the checkbox component"),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Standard",mdxType:"Story"},(function(args){return Object(esm.mdx)(Checkbox_Checkbox,_extends({},args,{mdxType:"Checkbox"}))}))),Object(esm.mdx)(blocks.Props,{story:"Standard",mdxType:"Props"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var Checkbox_stories_standard=function standard(args){return Object(esm.mdx)(Checkbox_Checkbox,args)};Checkbox_stories_standard.displayName="standard",Checkbox_stories_standard.storyName="Standard",Checkbox_stories_standard.parameters={storySource:{source:"args => {\n  return <Checkbox {...args} />;\n}"}};var componentMeta={title:"Components/Checkbox",component:Checkbox_Checkbox,argTypes:{readOnly:{control:{type:"boolean",default:"false"}},checked:{control:{type:"boolean",default:"false"}},label:"string"},includeStories:["standard"]},mdxStoryNameToKey={Standard:"standard"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))}});__webpack_exports__.default=componentMeta},1496:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),client=__webpack_require__(166),StoryStyle=__webpack_require__(89).b.div.withConfig({displayName:"global__StoryStyle",componentId:"sc-15xd4b3-0"})(["@import url(",");font-family:'Lato','Helvetica Neue',Helvetica,Arial,sans-serif;color:#67768a;font-size:13px;line-height:20px;"],"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");Object(client.addDecorator)((function(story){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(StoryStyle,null,story()))})),Object(client.addParameters)({viewMode:"docs"})},1497:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"standard",(function(){return Dummy_stories_standard})),__webpack_require__.d(__webpack_exports__,"size",(function(){return Dummy_stories_size})),__webpack_require__.d(__webpack_exports__,"type",(function(){return Dummy_stories_type}));__webpack_require__(2),__webpack_require__(12),__webpack_require__(3),__webpack_require__(6);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(1),blocks=__webpack_require__(40),dist=__webpack_require__(58),DummyContainer=__webpack_require__(89).b.div.withConfig({displayName:"Dummy__DummyContainer",componentId:"sc-77ks0m-0"})(["font-size:","px;line-height:","px;color:",";font-weight:400;"],(function(_ref){return _ref.size}),(function(_ref2){return _ref2.size+5}),(function(_ref3){return"primary"===_ref3.type?"blue":"green"})),Dummy_Dummy=function Dummy(_ref4){var _ref4$size=_ref4.size,size=void 0===_ref4$size?12:_ref4$size,_ref4$type=_ref4.type,type=void 0===_ref4$type?"primary":_ref4$type,onClick=_ref4.onClick,children=_ref4.children;return react_default.a.createElement(DummyContainer,{size:size,onClick:onClick,type:type},children)};Dummy_Dummy.displayName="Dummy";try{Dummy_Dummy.displayName="Dummy",Dummy_Dummy.__docgenInfo={description:"This is a nice Dummy component to bootstrap Storybook",displayName:"Dummy",props:{type:{defaultValue:{value:"primary"},description:"Defines the type of the Dummy component",name:"type",required:!1,type:{name:'"primary" | "secondary"'}},size:{defaultValue:{value:12},description:"Defines the size of the Dummy component, in pixels",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"The handler called when clicking the component",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dummy/Dummy.tsx#Dummy"]={docgenInfo:Dummy_Dummy.__docgenInfo,name:"Dummy",path:"src/components/Dummy/Dummy.tsx#Dummy"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Components/Dummy",component:Dummy_Dummy,argTypes:{onClick:{action:"Dummy component clicked"},type:{control:{type:"select",options:["primary","secondary"]}},size:{control:{type:"select",options:[12,24,48]}}},mdxType:"Meta"}),Object(esm.mdx)("h1",{id:"dummy"},"Dummy"),Object(esm.mdx)("p",null,"The dummy component is a little bit dumb, but that's why it exists."),Object(esm.mdx)("h2",{id:"playground"},"Playground"),Object(esm.mdx)("p",null,"Use this playground to test the dummy component"),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Standard",mdxType:"Story"},(function(args){return Object(esm.mdx)(Dummy_Dummy,_extends({},args,{mdxType:"Dummy"}),"Coucou")}))),Object(esm.mdx)(blocks.Props,{story:"Standard",mdxType:"Props"}),Object(esm.mdx)("h2",{id:"variation-on-size"},"Variation on size"),Object(esm.mdx)(blocks.Story,{name:"Size",mdxType:"Story"},Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:12,onClick:Object(dist.action)("clicked"),mdxType:"Dummy"},"Size 12"),Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:24,onClick:Object(dist.action)("clicked"),mdxType:"Dummy"},"Size 24"),Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:48,onClick:Object(dist.action)("clicked"),mdxType:"Dummy"},"Size 48")),Object(esm.mdx)("h2",{id:"variation-on-type"},"Variation on type"),Object(esm.mdx)(blocks.Story,{name:"Type",mdxType:"Story"},Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:24,onClick:Object(dist.action)("clicked"),mdxType:"Dummy"},"Primary"),Object(esm.mdx)(Dummy_Dummy,{type:"secondary",size:24,onClick:Object(dist.action)("clicked"),mdxType:"Dummy"},"Secondary")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var Dummy_stories_standard=function standard(args){return Object(esm.mdx)(Dummy_Dummy,args,"Coucou")};Dummy_stories_standard.displayName="standard",Dummy_stories_standard.storyName="Standard",Dummy_stories_standard.parameters={storySource:{source:"args => <Dummy {...args}>Coucou</Dummy>"}};var Dummy_stories_size=function size(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:12,onClick:Object(dist.action)("clicked")},"Size 12"),Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:24,onClick:Object(dist.action)("clicked")},"Size 24"),Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:48,onClick:Object(dist.action)("clicked")},"Size 48"))};Dummy_stories_size.storyName="Size",Dummy_stories_size.parameters={storySource:{source:'<Dummy type="primary" size={12} onClick={action("clicked")}>\n      Size 12\n    </Dummy>\n<Dummy type="primary" size={24} onClick={action("clicked")}>\n      Size 24\n    </Dummy>\n<Dummy type="primary" size={48} onClick={action("clicked")}>\n      Size 48\n    </Dummy>'}};var Dummy_stories_type=function type(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)(Dummy_Dummy,{type:"primary",size:24,onClick:Object(dist.action)("clicked")},"Primary"),Object(esm.mdx)(Dummy_Dummy,{type:"secondary",size:24,onClick:Object(dist.action)("clicked")},"Secondary"))};Dummy_stories_type.storyName="Type",Dummy_stories_type.parameters={storySource:{source:'<Dummy type="primary" size={24} onClick={action("clicked")}>\n      Primary\n    </Dummy>\n<Dummy type="secondary" size={24} onClick={action("clicked")}>\n      Secondary\n    </Dummy>'}};var componentMeta={title:"Components/Dummy",component:Dummy_Dummy,argTypes:{onClick:{action:"Dummy component clicked"},type:{control:{type:"select",options:["primary","secondary"]}},size:{control:{type:"select",options:[12,24,48]}}},includeStories:["standard","size","type"]},mdxStoryNameToKey={Standard:"standard",Size:"size",Type:"type"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))}});__webpack_exports__.default=componentMeta},527:function(module,exports,__webpack_require__){__webpack_require__(528),__webpack_require__(674),__webpack_require__(675),__webpack_require__(826),__webpack_require__(1433),__webpack_require__(1464),__webpack_require__(1468),__webpack_require__(1480),__webpack_require__(1482),__webpack_require__(1484),module.exports=__webpack_require__(1487)},592:function(module,exports){},675:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(166)}},[[527,1,2]]]);
//# sourceMappingURL=main.cd2e28d4607eeca217e6.bundle.js.map