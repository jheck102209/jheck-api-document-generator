(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"54a5":function(t,e,s){"use strict";var a=s("f6ce"),i=s.n(a);i.a},"58df":function(t,e,s){},"5b0b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"preview-page"}},[s("aside",{attrs:{id:"left-sidebar"}},[s("button",{staticClass:"button is-success is-fullwidth",on:{click:function(e){return t.importJson()}}},[t._m(0),s("span",[t._v("Import")])]),s("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"import-json",accept:".json,application/json"}}),s("hr"),s("aside",{staticClass:"menu",attrs:{id:"group-collection"}},[s("p",{staticClass:"menu-label"},[t._v("Requests")]),s("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],staticClass:"menu-list"},t._l(t.requests,function(e,a){return s("li",[s("a",{attrs:{href:"#"+e.id}},[t._v(t._s(e.information.name))])])}),0)])]),s("main",{attrs:{id:"main-content"}},[s("div",{staticClass:"container"},[0==t.requests.length?s("div",[s("p",[t._v("Import your .json file")])]):s("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}],attrs:{id:"request-content-api"}},t._l(t.requests,function(e,a){return s("div",[s("div",{staticClass:"break-line",attrs:{id:e.id}}),s("h1",{staticClass:"title is-3"},[t._v(t._s(e.information.name))]),s("h2",{staticClass:"subtitle"},[t._v(t._s(e.information.description))]),s("br"),s("h3",{staticClass:"title is-5"},[t._v("Endpoint")]),s("br"),s("div",{staticClass:"notification is-primary"},[s("span",{staticClass:"tag is-light"},[t._v(t._s(e.details.method))]),t._v(" - "+t._s(e.details.endpoint)+"\n      \t\t\t  ")]),e.request_headers.length?[s("h3",{staticClass:"title is-5"},[t._v("Headers")]),s("div",{staticClass:"table-container"},[s("table",{staticClass:"table is-bordered is-striped is-hoverable is-fullwidth"},[t._m(1,!0),s("tbody",t._l(e.request_headers,function(e,a){return s("tr",[s("td",[t._v("\n                  \t\t\t\t"+t._s(e.name)+"\n                  \t\t\t")]),s("td",[t._v("\n                  \t\t\t\t"+t._s(e.value)+"\n                  \t\t\t")])])}),0)])]),s("br")]:t._e(),e.parameters.length?[s("h3",{staticClass:"title is-5"},[t._v("Parameters")]),s("div",{staticClass:"table-container"},[s("table",{staticClass:"table is-bordered is-striped is-hoverable is-fullwidth"},[t._m(2,!0),s("tbody",t._l(e.parameters,function(e,a){return s("tr",[s("td",[t._v("\n\t  \t            \t\t\t\t"+t._s(e.type)+"\n\t  \t            \t\t\t")]),s("td",[t._v("\n\t  \t            \t\t\t\t"+t._s(e.name)+"\n\t  \t            \t\t\t")]),s("td",[t._v("\n\t  \t            \t\t\t\t"+t._s(e.values||"-")+"\n\t  \t            \t\t\t")]),s("td",[t._v("\n\t  \t            \t\t\t\t"+t._s(e.default_value||"-")+"\n\t  \t            \t\t\t")]),s("td",[t._v("\n\t  \t            \t\t\t\t"+t._s(e.description||"-")+"\n\t  \t            \t\t\t")])])}),0)])]),s("br")]:t._e()],2)}),0)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"mdi mdi-cloud-upload"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Header name")]),s("th",[t._v("Header value")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Type")]),s("th",[t._v("Name")]),s("th",[t._v("Values")]),s("th",[t._v("Default values")]),s("th",{staticStyle:{"max-width":"120px"}},[t._v("Description")])])])}],r={data:function(){return{activeId:"",showImportButton:!0,requests:[]}},watch:{requests:function(t){this.showImportButton=0==t.length}},methods:{importJson:function(){document.getElementById("import-json").addEventListener("change",this.readJson,!1),document.getElementById("import-json").click()},readJson:function(t){var e=t.target.files[0],s=new FileReader,a=this;s.onload=function(t){return function(t){try{var e=t.currentTarget.result;a.$toast.success({title:"Success",message:"JSON imported"}),window.setCookie("preview_data",e),a.requests=JSON.parse(e),a.showImportButton=!1}catch(s){a.$toast.error({title:"Error",message:"Sorry we cannot read this json file"})}}}(),s.readAsText(e)}},mounted:function(){this.requests=""!=window.getCookie("preview_data")?JSON.parse(window.getCookie("preview_data")):[]}},n=r,o=(s("7f7a"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,"345769bd",null);e["default"]=l.exports},"70c6":function(t,e,s){},"7f7a":function(t,e,s){"use strict";var a=s("58df"),i=s.n(a);i.a},"918c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"create-page"}},[s("aside",{attrs:{id:"left-sidebar"}},[s("LeftSideBar")],1),s("main",{attrs:{id:"main-content"}},[s("div",{staticClass:"container"},[s("div",{attrs:{id:"form-wrapper"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",{staticClass:"subtitle"},[t._v("Request information")]),s("div",{staticClass:"form-input"},[s("label",{staticClass:"label",attrs:{for:"request_name"}},[t._v("Request Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.information.name,expression:"information.name"}],staticClass:"input",attrs:{id:"request_name",type:"text"},domProps:{value:t.information.name},on:{input:function(e){e.target.composing||t.$set(t.information,"name",e.target.value)}}}),s("span",{staticClass:"helper-text"},[t._v("Label your request action")])]),s("div",{staticClass:"form-input"},[s("label",{staticClass:"label",attrs:{for:"request_description"}},[t._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.information.description,expression:"information.description"}],staticClass:"input",attrs:{id:"request_description"},domProps:{value:t.information.description},on:{input:function(e){e.target.composing||t.$set(t.information,"description",e.target.value)}}})]),s("hr"),s("h3",{staticClass:"subtitle"},[t._v("Request details")]),s("div",{staticClass:"form-input"},[s("label",{staticClass:"label",attrs:{for:"request_endpoint"}},[t._v("Endpoint")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("div",{staticClass:"select parameters-type"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.details.method,expression:"details.method"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.details,"method",e.target.multiple?s:s[0])}}},t._l(t.form_options.methods,function(e,a){return s("option",[t._v("\n                            "+t._s(e)+"\n                          ")])}),0)])]),s("div",{staticClass:"column"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.details.endpoint,expression:"details.endpoint"}],staticClass:"input",attrs:{id:"request_endpoint",type:"text"},domProps:{value:t.details.endpoint},on:{input:function(e){e.target.composing||t.$set(t.details,"endpoint",e.target.value)}}}),s("span",{staticClass:"helper-text"},[t._v("Sample: /user/create")])])])]),s("hr"),s("div",{staticClass:"buttons"},[s("button",{staticClass:"button is-primary is-medium",on:{click:function(e){return t.saveRequest()}}},[t._m(0),s("span",[t._v("Save")])]),t.showDelete?s("button",{staticClass:"button is-danger is-medium",on:{click:function(e){return t.deleteRequest()}}},[t._m(1),s("span",[t._v("Delete")])]):t._e()])]),s("div",{staticClass:"column"},[s("h3",{staticClass:"subtitle"},[t._v("Headers")]),s("div",{staticClass:"form-input"},[t.request_headers.length?s("div",{staticClass:"table-container"},[s("table",{staticClass:"table is-bordered is-striped is-hoverable is-fullwidth"},[t._m(2),s("tbody",t._l(t.request_headers,function(e,a){return s("tr",[s("td",[s("button",{staticClass:"button is-small is-danger btn-delete",on:{click:function(e){return t.removeHeader(a)}}},[t._m(3,!0)])]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.request_headers[a].name,expression:"request_headers[index].name"}],staticClass:"input",attrs:{type:"text",placeholder:"New header"},domProps:{value:t.request_headers[a].name},on:{input:function(e){e.target.composing||t.$set(t.request_headers[a],"name",e.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.request_headers[a].value,expression:"request_headers[index].value"}],staticClass:"input",attrs:{type:"text",placeholder:"Value"},domProps:{value:t.request_headers[a].value},on:{input:function(e){e.target.composing||t.$set(t.request_headers[a],"value",e.target.value)}}})])])}),0)])]):t._e(),s("button",{staticClass:"button is-small",on:{click:function(e){return t.addHeader()}}},[t._v("Add header")])]),s("hr"),s("h3",{staticClass:"subtitle"},[t._v("Parameters")]),s("div",{staticClass:"form-input"},[t.parameters.length?s("div",{staticClass:"table-container"},t._l(t.parameters,function(e,a){return s("table",{staticClass:"table is-bordered is-striped is-hoverable is-fullwidth"},[s("tbody",[s("tr",[s("td",[t._v("Type")]),s("td",[s("div",{staticClass:"select parameters-type"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.parameters[a].type,expression:"parameters[index].type"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.parameters[a],"type",e.target.multiple?s:s[0])}}},t._l(t.form_options.parameter.type,function(e,a){return s("option",[t._v("\n                                  "+t._s(e)+"\n                                ")])}),0)])])]),s("tr",[s("td",[t._v("Name")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.parameters[a].name,expression:"parameters[index].name"}],staticClass:"input",attrs:{type:"text",placeholder:"Input field"},domProps:{value:t.parameters[a].name},on:{input:function(e){e.target.composing||t.$set(t.parameters[a],"name",e.target.value)}}})])]),s("tr",[t._m(4,!0),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.parameters[a].values,expression:"parameters[index].values"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter available values in parameter"},domProps:{value:t.parameters[a].values},on:{input:function(e){e.target.composing||t.$set(t.parameters[a],"values",e.target.value)}}})])]),s("tr",[t._m(5,!0),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.parameters[a].default_value,expression:"parameters[index].default_value"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter default value if this field is empty"},domProps:{value:t.parameters[a].default_value},on:{input:function(e){e.target.composing||t.$set(t.parameters[a],"default_value",e.target.value)}}})])]),s("tr",[t._m(6,!0),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.parameters[a].description,expression:"parameters[index].description"}],staticClass:"input",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.parameters[a].description},on:{input:function(e){e.target.composing||t.$set(t.parameters[a],"description",e.target.value)}}})])]),s("tr",[s("td",{attrs:{colspan:"2"}},[s("button",{staticClass:"button is-danger btn-delete",on:{click:function(e){return t.removeParameter(a)}}},[s("i",{staticClass:"mdi mdi-delete"}),t._v(" Delete")])])])])])}),0):t._e(),s("button",{staticClass:"button is-small",on:{click:function(e){return t.addParameter()}}},[t._v("Add parameter")])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"mdi mdi-content-save"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"mdi mdi-delete"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticStyle:{width:"50px"}}),s("th",[t._v("Header name")]),s("th",[t._v("Value")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"mdi mdi-delete"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[t._v("Values "),s("small",[t._v("(Optional)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[t._v("Default value "),s("small",[t._v("(Optional)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[t._v("Description "),s("small",[t._v("(Optional)")])])}],r=(s("ac6a"),s("2133")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"buttons"},[t.showImportButton?[s("button",{staticClass:"button is-success is-fullwidth",on:{click:function(e){return t.importJson()}}},[t._m(0),s("span",[t._v("Import")])]),s("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"import-json",accept:".json,application/json"}})]:t._e(),t.showExportButton?[s("button",{staticClass:"button is-info is-fullwidth is-outlined",on:{click:function(e){return t.exportJson()}}},[t._m(1),s("span",[t._v("Export")])]),s("a",{staticStyle:{display:"none"},attrs:{id:"export-json",download:"jheck-api-export.json"}},[t._v("Export")])]:t._e()],2),s("hr"),s("aside",{staticClass:"menu",attrs:{id:"group-collection"}},[s("p",{staticClass:"menu-label"},[t._v("Requests")]),s("ul",{staticClass:"menu-list"},t._l(t.requests,function(e,a){return s("li",[s("router-link",{attrs:{"active-class":"is-active",to:{name:"app",params:{id:e.id}}}},[t._v(t._s(e.information.name))])],1)}),0)]),s("router-link",{staticClass:"button is-secondary is-fullwidth",attrs:{to:{name:"app"}}},[t._v("Create new request")])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"mdi mdi-cloud-upload"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"mdi mdi-cloud-download"})])}],l={data:function(){return{showImportButton:!0,showExportButton:!1,requests:this.$store.getters.data}},watch:{requests:function(t){this.showImportButton=0==t.length,this.showExportButton=t.length>0}},methods:{importJson:function(){document.getElementById("import-json").addEventListener("change",this.readJson,!1),document.getElementById("import-json").click()},readJson:function(t){var e=t.target.files[0],s=new FileReader,a=this;s.onload=function(t){return function(t){try{var e=JSON.parse(t.currentTarget.result);a.$toast.success({title:"Success",message:"JSON imported"}),a.$store.commit("importCookie",e),a.requests=a.$store.state.data,a.showImportButton=!1}catch(s){a.$toast.error({title:"Error",message:"Sorry we cannot read this json file"})}}}(),s.readAsText(e)},exportJson:function(){var t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.$store.state.data)),e=document.getElementById("export-json");e.setAttribute("href",t),e.click(),this.$toast.success({title:"Success",message:"JSON exported"})}},mounted:function(){this.requests=this.$store.state.data,this.showImportButton=0==this.requests.length,this.showExportButton=this.requests.length>0}},u=l,c=(s("54a5"),s("2877")),d=Object(c["a"])(u,n,o,!1,null,"96845b04",null),m=d.exports,p={components:{MainContent:r["default"],LeftSideBar:m},data:function(){return{form_options:{methods:["GET","POST","PUT","PATCH","DELETE","OPTION"],parameter:{type:["MIXED","STRING","NUMERIC"]}},showDelete:!1,information:{name:"",description:""},details:{endpoint:"",method:"GET"},request_headers:[],parameters:[]}},methods:{successAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Success";this.$toast.success({title:"Success",message:t})},errorAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error";this.$toast.error({title:"Error",message:t})},clearForm:function(){this.information={name:"",description:""},this.details={endpoint:"",method:"GET"},this.request_headers=[],this.parameters=[]},saveRequest:function(){var t=this.$route.params.id;"undefined"!=typeof t&&""!=t?this.updateData():(store.commit("createRequest",{information:this.information,details:this.details,request_headers:this.request_headers,parameters:this.parameters}),this.$router.push({name:"app"}),this.clearForm(),this.successAlert("New request created"))},deleteRequest:function(){var t=""!=window.getCookie("data")?JSON.parse(window.getCookie("data")):[],e=this.$route.params.id,s="",a="";"undefined"!=typeof e&&""!=e&&t.length&&t.forEach(function(i,r){i.id===e&&(s=r,a=t[r])}),""!=a&&(store.commit("deleteRequest",s),this.$router.push({name:"app"}),this.clearForm(),this.successAlert("Request deleted"))},updateData:function(){var t=""!=window.getCookie("data")?JSON.parse(window.getCookie("data")):[],e=this.$route.params.id,s="",a="";"undefined"!=typeof e&&""!=e&&t.length&&t.forEach(function(i,r){i.id===e&&(s=r,a=t[r])}),""!=a&&(store.commit("updateData",{idx:s,id:a.id,information:this.information,details:this.details,request_headers:this.request_headers,parameters:this.parameters}),this.successAlert("Data saved"))},populateData:function(){var t=""!=window.getCookie("data")?JSON.parse(window.getCookie("data")):[],e=this.$route.params.id,s="";"undefined"!=typeof e&&""!=e&&t.length&&t.forEach(function(a,i){a.id===e&&(s=t[i])}),""!=s?(this.information=s.information,this.details=s.details,this.request_headers=s.request_headers,this.parameters=s.parameters,this.showDelete=!0):"undefined"!=typeof e&&""!=e?(this.$router.push({name:"app"}),this.errorAlert("ID: ".concat(e," Not found"))):(this.clearForm(),this.showDelete=!1)},addHeader:function(){0==this.request_headers.length?this.request_headers.push({name:"Content-Type",value:"application/x-www-form-urlencoded"}):this.request_headers.push({name:"",value:""})},addParameter:function(){this.parameters.push({name:"",type:"MIXED",description:""})},removeHeader:function(t){this.request_headers.splice(t,1)},removeParameter:function(t){this.parameters.splice(t,1)}},watch:{$route:function(t,e){this.populateData()}},mounted:function(){console.log("mounted"),this.populateData()}},v=p,h=(s("e88f"),Object(c["a"])(v,a,i,!1,null,"85e47f9e",null));e["default"]=h.exports},ac6a:function(t,e,s){for(var a=s("cadf"),i=s("0d58"),r=s("2aba"),n=s("7726"),o=s("32e9"),l=s("84f2"),u=s("2b4c"),c=u("iterator"),d=u("toStringTag"),m=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),h=0;h<v.length;h++){var f,_=v[h],C=p[_],g=n[_],w=g&&g.prototype;if(w&&(w[c]||o(w,c,m),w[d]||o(w,d,_),l[_]=m,C))for(f in a)w[f]||r(w,f,a[f],!0)}},e88f:function(t,e,s){"use strict";var a=s("70c6"),i=s.n(a);i.a},f6ce:function(t,e,s){}}]);
//# sourceMappingURL=about.a5e63b90.js.map