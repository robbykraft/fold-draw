!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).FoldToSvg=r()}(this,(function(){"use strict";function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],t=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){u=!0,o=n}finally{try{t||null==c["return"]||c["return"]()}finally{if(u)throw o}}return e}(n,r)||t(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,r){if(n){if("string"==typeof n)return u(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,r):void 0}}function u(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var o="vertices",i="edges",c="faces",a="boundaries",l="boundary",f="mountain",s="valley",d="mark",h="unassigned",v="front",p="back",m="svg",g="class",y="index",b="object",S="string",w="undefined",_="black",j="white",E="lightgray",N="stroke-width",k="createElementNS",O="setAttributeNS",x="appendChild",G="vertices_coords",V="edges_vertices",A="faces_vertices",M="faces_edges",T="edges_assignment",z="faces_re:matrix",C="faces_re:layer",D="frame_classes",F="file_classes",P=("undefined"==typeof window?"undefined":n(window))!==w&&n(window.document)!==w,B=("undefined"==typeof process?"undefined":n(process))!==w&&null!=process.versions&&null!=process.versions.node,I=(("undefined"==typeof self?"undefined":n(self))===b&&self.constructor&&self.constructor.name,function(){var n={};if(B){var r=require("xmldom"),e=r.DOMParser,t=r.XMLSerializer;n.DOMParser=e,n.XMLSerializer=t,n.document=(new e).parseFromString("<!DOCTYPE html><title>.</title>","text/html")}else P&&(n=window);return n}());function L(n,r){for(var e=n.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").split("~::~"),t=e.length,u=!1,o=0,i="",c=null!=r&&"string"==typeof r?r:"\t",a=["\n"],l=0;l<100;l+=1)a.push(a[l]+c);for(var f=0;f<t;f+=1)e[f].search(/<!/)>-1?(i+=a[o]+e[f],u=!0,(e[f].search(/-->/)>-1||e[f].search(/\]>/)>-1||e[f].search(/!DOCTYPE/)>-1)&&(u=!1)):e[f].search(/-->/)>-1||e[f].search(/\]>/)>-1?(i+=e[f],u=!1):/^<\w/.exec(e[f-1])&&/^<\/\w/.exec(e[f])&&/^<[\w:\-\.\,]+/.exec(e[f-1])==/^<\/[\w:\-\.\,]+/.exec(e[f])[0].replace("/","")?(i+=e[f],u||(o-=1)):e[f].search(/<\w/)>-1&&-1===e[f].search(/<\//)&&-1===e[f].search(/\/>/)?i=i+=u?e[f]:a[o++]+e[f]:e[f].search(/<\w/)>-1&&e[f].search(/<\//)>-1?i=i+=u?e[f]:a[o]+e[f]:e[f].search(/<\//)>-1?i=i+=u?e[f]:a[--o]+e[f]:e[f].search(/\/>/)>-1?i=i+=u?e[f]:a[o]+e[f]:e[f].search(/<\?/)>-1||e[f].search(/xmlns\:/)>-1||e[f].search(/xmlns\=/)>-1?i+=a[o]+e[f]:i+=e[f];return"\n"===i[0]?i.slice(1):i}var U="http://www.w3.org/2000/svg",X={SVG:{NS:U,g:function(){return I.document[k](U,"g")},defs:function(){return I.document[k](U,"defs")},style:function(){var n=I.document[k](U,"style");return n[O](null,"type","text/css"),n},line:function(n,r,e,t){var u=I.document[k](U,"line");return u[O](null,"x1",n),u[O](null,"y1",r),u[O](null,"x2",e),u[O](null,"y2",t),u},circle:function(n,r,e){var t=I.document[k](U,"circle");return t[O](null,"cx",n),t[O](null,"cy",r),t[O](null,"r",e),t},polygon:function(n){var r=I.document[k](U,"polygon"),e=n.map((function(n){return"".concat(n[0],",").concat(n[1])})).join(" ");return r[O](null,"points",e),r},path:function(n){var r=I.document[k](U,"path");return r[O](null,"d",n),r}}},Y=function(n,r){if(G in n==!1)return[];var e=n[G].map((function(n){return X.SVG.circle(n[0],n[1],.01)}));return e.forEach((function(n,r){return n[O](null,y,r)})),e},q=function(n){if(n[A]){var r=n[A].length,e=Array.from(Array(r)).map((function(){return[]})),t={};return n[A].forEach((function(n,r){if(void 0!==n){var u=n.length;n.forEach((function(n,o,i){var c=i[(o+1)%u];if(c<n){var a=[c,n];n=a[0],c=a[1]}var l="".concat(n," ").concat(c);if(l in t){var f=t[l];e[r].push(f),e[f].push(r)}else t[l]=r}))}})),e}},J=function(n){if(!n[V])return{};var r={};return n[V].map((function(n){return n.sort((function(n,r){return n-r})).join(" ")})).forEach((function(n,e){r[n]=e})),r},$=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=J(n),t=q(n);if(t.length<=0)return[];var u=[r],o=[[{face:r,parent:void 0,edge:void 0,level:0}]];do{o[o.length]=o[o.length-1].map((function(r){var o=t[r.face].filter((function(n){return-1===u.indexOf(n)}));return u=u.concat(o),o.map((function(t){var u=n.faces_vertices[t].filter((function(e){return-1!==n.faces_vertices[r.face].indexOf(e)})).sort((function(n,r){return n-r})),o=e[u.join(" ")];return{face:t,parent:r.face,edge:o,edge_vertices:u}}))})).reduce((function(n,r){return n.concat(r)}),[])}while(o[o.length-1].length>0);return o.length>0&&0===o[o.length-1].length&&o.pop(),o},H=function(n){if(null==n[G]||n[G].length<=0)return[0,0,0,0];var r=n[G][0].length,e=Array(r).fill(1/0),t=Array(r).fill(-1/0);return n[G].forEach((function(n){return n.forEach((function(n,r){n<e[r]&&(e[r]=n),n>t[r]&&(t[r]=n)}))})),isNaN(e[0])||isNaN(e[1])||isNaN(t[0])||isNaN(t[1])?[0,0,0,0]:[e[0],e[1],t[0]-e[0],t[1]-e[1]]},K=function(n){if(null==n[T])return{vertices:[],edges:[]};for(var e=n[T].map((function(n){return"B"===n||"b"===n})),t=function(n){if(n[V]){var r=[];return n[V].forEach((function(n,e){return n.forEach((function(n){void 0===r[n]&&(r[n]=[]),r[n].push(e)}))})),r}}(n),u=[],o=[],i=-1,c=0;c<e.length;c+=1)if(e[c]){i=c;break}if(-1===i)return{vertices:[],edges:[]};e[i]=!1,u.push(i),o.push(n[V][i][0]);for(var a=n[V][i][1];o[0]!==a;){if(o.push(a),void 0===(i=t[a].filter((function(n){return e[n]})).shift()))return{vertices:[],edges:[]};if(n[V][i][0]===a)a=r(n[V][i],2)[1];else a=r(n[V][i],1)[0];e[i]=!1,u.push(i)}return{vertices:o,edges:u}},Q=function(n){if(G in n==!1||V in n==!1||T in n==!1)return[];var r=K(n).vertices.map((function(r){return n[G][r]}));if(0===r.length)return[];var e=X.SVG.polygon(r);return e[O](null,g,l),[e]},R={B:l,b:l,M:f,m:f,V:s,v:s,F:d,f:d,U:h,u:h},W={B:"b",b:"b",M:"m",m:"m",V:"v",v:"v",F:"f",f:"f",U:"u",u:"u"},Z=function(n){return null==n[V]||null==n[G]?[]:n[V].map((function(r){return r.map((function(r){return n[G][r]}))}))},nn=function(n){return"M".concat(n[0][0]," ").concat(n[0][1],"L").concat(n[1][0]," ").concat(n[1][1])},rn=function(n){var r=Z(n).map((function(n){return nn(n)})).join("");return""===r?void 0:r},en=function(n){if(null==n[V]||null==n[G]||null==n[T])return[];var r=Z(n),e=function(n){var r={u:[],f:[],v:[],m:[],b:[]};return n[T].map((function(n){return W[n]})).forEach((function(n,e){return r[n].push(e)})),r}(n),t=Object.keys(e).map((function(n){return e[n].map((function(n){return r[n]}))})).map((function(n){return n.map((function(n){return nn(n)})).join("")})),u={};return Object.keys(e).map((function(n,r){""!==t[r]&&(u[n]=t[r])})),u},tn=function(n){if(null==n[T]){var r=rn(n);return void 0===r?[]:[X.SVG.path(r)]}var e=en(n);return Object.keys(e).map((function(n){var r=X.SVG.path(e[n]);return r[O](null,g,R[n]),r}))},un=function(n){var r=n["faces_re:coloring"];return null==r&&(r=z in n?n[z].map((function(n){return n[0]*n[3]-n[1]*n[2]})).map((function(n){return n>=0})):function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[];return e[r]=!0,$(n,r).forEach((function(n,r){return n.forEach((function(n){e[n.face]=r%2==0}))})),e}(n,0)),r.map((function(n){return n?v:p}))},on=function(r,e){var t,u=n(r.frame_classes)===b&&null!==r.frame_classes&&!r.frame_classes.includes("creasePattern"),o=null!=r[C]&&r[C].length===r[A].length;return o&&u&&un(r).forEach((function(n,r){return e[r][O](null,g,n)})),o?(t=r[C],t.map((function(n,r){return{layer:n,i:r}})).sort((function(n,r){return n.layer-r.layer})).map((function(n){return n.i}))).map((function(n){return e[n]})):e},cn=function(n){if(A in n==!1||G in n==!1)return[];var r=n[A].map((function(r){return r.map((function(r){return n[G][r]}))})).map((function(n){return X.SVG.polygon(n)}));return r.forEach((function(n,r){return n[O](null,y,r)})),on(n,r)},an=function(n){if(M in n==!1||V in n==!1||G in n==!1)return[];var r=n[M].map((function(r){return r.map((function(r){return n[V][r]})).map((function(n,r,e){var t=e[(r+1)%e.length];return n[1]===t[0]||n[1]===t[1]?n[0]:n[1]})).map((function(r){return n[G][r]}))})).map((function(n){return X.SVG.polygon(n)}));return r.forEach((function(n,r){return n[O](null,y,r)})),on(n,r)},ln=function r(e){return Object.freeze(e),void 0===e||Object.getOwnPropertyNames(e).filter((function(r){return null!==e[r]&&(n(e[r])===b||"function"===n(e[r]))&&!Object.isFrozen(e[r])})).forEach((function(n){return r(e[n])})),e},fn=function r(e,t){return Object.keys(t).forEach((function(u){n(t[u])===b&&null!==t[u]?(u in e||(e[u]={}),r(e[u],t[u])):n(e)!==b||u in e||(e[u]=t[u])})),e},sn=function(r){if(null==r)return{};if(n(r)===b&&null!==r)return r;if(n(r)===S||r instanceof String)try{return JSON.parse(r)}catch(n){return{}}return{}},dn="none",hn="500px",vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return ln({input:S,output:S,padding:null,file_frame:null,stylesheet:null,shadows:null,boundaries:!0,faces:!0,edges:!0,vertices:!1,attributes:{svg:{width:hn,height:hn,stroke:_,fill:dn,"stroke-linejoin":"bevel","stroke-width":n/200},circle:{r:n/200},boundaries:{fill:j},faces:{stroke:dn,front:{stroke:_,fill:E},back:{stroke:_,fill:j}},edges:{boundary:{},mountain:{stroke:"red"},valley:{stroke:"blue"},mark:{stroke:E},unassigned:{stroke:E}},vertices:{stroke:dn,fill:_}}})},pn=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=H(n),t=Math.min(e[2],e[3]);return fn(r,vn(t)),r.shadows&&fn(r,{attributes:{faces:{front:{filter:"url(#shadow)"},back:{filter:"url(#shadow)"}}}}),r},mn={vertices:[],edges:[h,d,s,f,l],faces:[v,p],boundaries:[]},gn=function(n,r,e){var t=r.attributes,u=mn[e]||[];Array.from(n.childNodes).filter((function(n){return t[n.nodeName]})).forEach((function(n){return Object.keys(t[n.nodeName]).forEach((function(r){return n[O](null,r,t[n.nodeName][r])}))})),Object.keys(t[e]).filter((function(n){return!u.includes(n)})).forEach((function(r){return n[O](null,r,t[e][r])})),0!==u.length&&Array.from(n.childNodes).forEach((function(n){return Object.keys(t[e][n.getAttribute(g)]||{}).forEach((function(r){return n[O](null,r,t[e][n.getAttribute(g)][r])}))}))},yn={vertices:Y,edges:tn,faces:function(n){return null!=n[A]?cn(n):an(n)},boundaries:Q},bn=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.attributes||(r.attributes={}),[a,i,c,o].filter((function(n){return!0===r[n]})).map((function(e){var t=X.SVG.g();return t[O](null,g,e),yn[e](n,r).forEach((function(n){return t[x](n)})),gn(t,r,e),t})).filter((function(n){return n.childNodes.length>0}))},Sn=I.document,wn=Object.freeze({blur:.005,opacity:.3,color:_}),_n="result",jn="in",En="blur",Nn="offsetColor",kn="offsetBlur",On="feMergeNode",xn="200%",Gn=function(r,e){var t=H(r),u=Math.min(t[2],t[3]),o=X.SVG.defs();if(null!=e.stylesheet){var i=X.SVG.style();o[x](i);var c=e.attributes.svg[N]?e.attributes.svg[N]:u/200,a=(new I.DOMParser).parseFromString("<xml></xml>","application/xml").createCDATASection("\n* { --".concat(N,": ").concat(c,"; }\n").concat(e.stylesheet));i[x](a)}if(null!=e.shadows){var l=n(e.shadows)===b&&null!==e.shadows?e.shadows:{blur:u/200};o[x](function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wn,e="shadow";n(r)===b&&null!==r||(r={}),Object.keys(wn).filter((function(n){return!(n in r)})).forEach((function(n){r[n]=wn[n]}));var t=Sn[k](X.SVG.NS,"filter");t[O](null,"width",xn),t[O](null,"height",xn),t[O](null,"id",e);var u=Sn[k](X.SVG.NS,"feGaussianBlur");u[O](null,jn,"SourceAlpha"),u[O](null,"stdDeviation",r.blur),u[O](null,_n,En);var o=Sn[k](X.SVG.NS,"feOffset");o[O](null,jn,En),o[O](null,_n,kn);var i=Sn[k](X.SVG.NS,"feFlood");i[O](null,"flood-color",r.color),i[O](null,"flood-opacity",r.opacity),i[O](null,_n,Nn);var c=Sn[k](X.SVG.NS,"feComposite");c[O](null,jn,Nn),c[O](null,"in2",kn),c[O](null,"operator",jn),c[O](null,_n,kn);var a=Sn[k](X.SVG.NS,"feMerge"),l=Sn[k](X.SVG.NS,On),f=Sn[k](X.SVG.NS,On);return f[O](null,jn,"SourceGraphic"),a[x](l),a[x](f),t[x](u),t[x](o),t[x](i),t[x](c),t[x](a),t}(l))}return null!=e.stylesheet||null!=e.shadows?o:void 0},Vn=function(n,r,e,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=1,i=e/o-e,c=n-i-u,a=r-i-u,l=e+2*i+2*u,f=t+2*i+2*u;return[c,a,l,f].join(" ")},An=function(n,r){var t=H(n),u=(Math.min(t[2],t[3]),{viewBox:Vn.apply(void 0,e(t).concat([r.padding]))}),o=function(n){return[(null!=n[F]?n[F]:[]).join(" "),(null!=n[D]?n[D]:[]).join(" ")].filter((function(n){return""!==n})).join(" ")}(n);return""!==o&&(u[g]=o),Object.assign(u,r.attributes.svg),u},Mn=function(n,r,e){pn(r,e);var t=Gn(r,e);t&&n[x](t),bn(r,e).forEach((function(r){return n[x](r)}));var u=An(r,e);return Object.keys(u).forEach((function(r){return n[O](null,r,u[r])})),n},Tn=function(){var n=I.document[k](X.SVG.NS,m);return n.setAttribute("version","1.1"),n.setAttribute("xmlns",X.SVG.NS),n},zn=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=sn(n);pn(e,r);var t=Mn(Tn(),e,r);if(r.output===m)return t;var u=(new I.XMLSerializer).serializeToString(t),o=L(u);return o};return Object.assign(zn,{vertices_circle:Y,boundaries_polygon:Q,edges_path_data:rn,edges_by_assignment_paths_data:en,edges_path:tn,edges_line:function(n){var r=Z(n).map((function(n){return X.SVG.line(n[0][0],n[0][1],n[1][0],n[1][1])}));return r.forEach((function(n,r){return n[O](null,y,r)})),function(n){return null==n[V]||null==n[T]||n[V].length!==n[T].length?[]:n[T].map((function(n){return R[n]}))}(n).forEach((function(n,e){return r[e][O](null,g,n)})),r},faces_vertices_polygon:cn,faces_edges_polygon:an,render_components:bn,render_into_svg:Mn,linker:function(n){}.bind(zn),use:function(n){n.NS&&(X.SVG=n)}}),zn}));
