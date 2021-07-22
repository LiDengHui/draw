(()=>{var t={792:function(t){t.exports=function(){"use strict";var t=function(){var e=0,n=document.createElement("div");function r(t){return n.appendChild(t.dom),t}function o(t){for(var r=0;r<n.children.length;r++)n.children[r].style.display=r===t?"block":"none";e=t}n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",(function(t){t.preventDefault(),o(++e%n.children.length)}),!1);var i=(performance||Date).now(),a=i,s=0,u=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=r(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:r,showPanel:o,begin:function(){i=(performance||Date).now()},end:function(){s++;var t=(performance||Date).now();if(c.update(t-i,200),a+1e3<=t&&(u.update(1e3*s/(t-a),100),a=t,s=0,l)){var e=performance.memory;l.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){i=this.end()},domElement:n,setMode:o}};return t.Panel=function(t,e,n){var r=1/0,o=0,i=Math.round,a=i(window.devicePixelRatio||1),s=80*a,u=48*a,c=3*a,l=2*a,f=3*a,h=15*a,d=74*a,v=30*a,p=document.createElement("canvas");p.width=s,p.height=u,p.style.cssText="width:80px;height:48px";var y=p.getContext("2d");return y.font="bold "+9*a+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=n,y.fillRect(0,0,s,u),y.fillStyle=e,y.fillText(t,c,l),y.fillRect(f,h,d,v),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(f,h,d,v),{dom:p,update:function(u,w){r=Math.min(r,u),o=Math.max(o,u),y.fillStyle=n,y.globalAlpha=1,y.fillRect(0,0,s,h),y.fillStyle=e,y.fillText(i(u)+" "+t+" ("+i(r)+"-"+i(o)+")",c,l),y.drawImage(p,f+a,h,d-a,v,f,h,d-a,v),y.fillRect(f+d-a,h,a,v),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(f+d-a,h,a,i((1-u/w)*v))}}},t}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t,e;function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(e=t||(t={}))[e.hot=0]="hot",e[e.select=1]="select";var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"setColorId",value:function(t){this.colorId=t}},{key:"getColorId",value:function(){return this.colorId}}])&&r(e.prototype,n),t}();function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,n){return(a=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}var h=function(e){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=function(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,u(n).call(this))).moveStatus=!1,e.x=t.x,e.y=t.y,e.width=t.width||80,e.height=t.height||40,e}var r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,e),r=n,(o=[{key:"setPosition",value:function(t,e){this.x=t,this.y=e}},{key:"getPosition",value:function(){return{x:this.x,y:this.y}}},{key:"getCenter",value:function(){return{x:this.x+this.width/2,y:this.y+this.height/2}}},{key:"getLinkPointer",value:function(t){var e,n,r=this.getCenter(),o=r.x,i=r.y,a=t.getCenter(),s=a.x,u=a.y,c=this.width+2,l=this.height+2,f=l/c,h=-l/c,d=u-i,v=s-o,p=-d/v;if(p<=h&&d>=0&&v>=0||p>=f&&d>=0&&v<=0?(e=o+v/d*l/2,n=i+l/2):p>=f&&d<=0&&v>=0||p<=h&&d<=0&&v<=0?(e=o-v/d*l/2,n=i-l/2):p>=h&&d<=0&&v<=0||p<=f&&d>=0&&v<=0?(n=i-d/v*c/2,e=o-c/2):(n=i+d/v*l/2,e=o+c/2),!(s-t.width/2<=e&&e<=s+t.width/2&&u-t.height/2<=n&&n<=u+t.height/2))return{x:e,y:n}}},{key:"draw",value:function(e,n){switch(n){case t.hot:this.drawHot(e);break;case t.select:this.drawSelect(e)}}},{key:"drawHot",value:function(t){var e=this.getColorId();e&&(t.fillStyle=e),t.fillRect(this.x,this.y,this.width,this.height)}},{key:"drawSelect",value:function(t){this.drawHot(t),t.strokeStyle="blue",t.lineWidth=1,t.strokeRect(this.x-1,this.y-1,this.width+2,this.height+2)}},{key:"startMove",value:function(t){this.startMousePosition=t,this.startPosition={x:this.x,y:this.y},this.moveStatus=!0}},{key:"move",value:function(t,e){if(this.moveStatus&&this.startMousePosition&&this.startPosition){var n=this.startMousePosition.x,r=this.startMousePosition.y,o=this.startPosition.x+t-n,i=this.startPosition.y+e-r;this.setPosition(o,i)}}},{key:"endMove",value:function(){this.moveStatus=!1,this.startPosition=void 0,this.startMousePosition=void 0}}])&&s(r.prototype,o),n}(f(o));function d(){for(var t=[],e=0;e<3;++e){var n=Math.floor(256*Math.random()).toString(16);n=1==n.length?"0"+n:n,t.push(n)}return"#"+t.join("")}var v=n(792),p=n.n(v);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t,e,n){return(w=y()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&m(o,n.prototype),o}).apply(null,arguments)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var x=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function k(t){var e="function"==typeof Map?new Map:void 0;return(k=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return w(t,arguments,b(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),m(r,t)})(t)}var P=function(e){function n(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=function(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,b(n).call(this))).source=t,r.target=e,r}var r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(n,e),r=n,(o=[{key:"getStartAndEndPostion",value:function(){var t=this.source.getLinkPointer(this.target),e=this.target.getLinkPointer(this.source);if(void 0!==t&&void 0!==e)return{start:t,end:e}}},{key:"drawHot",value:function(t){var e=this.getStartAndEndPostion();if(e){var n=e.start,r=e.end;t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(r.x,r.y),t.lineWidth=1,t.strokeStyle="red",t.stroke()}}},{key:"drawSelect",value:function(t){}},{key:"draw",value:function(e,n){switch(n){case t.hot:this.drawHot(e);break;case t.select:this.drawSelect(e)}}}])&&g(r.prototype,o),n}(k(o));function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](t):t instanceof e}var M=new(p());M.showPanel(0),document.body.appendChild(M.dom);var O=new(function(){function e(t){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.elementMap=new Map,this.dpr=1,this.nodes=[],this.edges=[],this.select=[],this.running=!1,this.options=t||{},!t.el)throw new Error("parent el is ".concat(t.el));this.$el=t.el,this.createCanvas(),this.addClickEvent()}var n,r;return n=e,(r=[{key:"createCanvas",value:function(){this.$canvas=document.createElement("canvas");var t=this.$el.offsetWidth,e=this.$el.offsetHeight;this.$canvas.width=t,this.$canvas.height=e,this.$el.append(this.$canvas),this.$ctx=this.$canvas.getContext("2d")}},{key:"getElement",value:function(){return this.$el}},{key:"getColorId",value:function(){for(var t=d(),e=0;this.elementMap.has(t);){if(e>1e3)throw new Error("color is not enought usage");t=d(),e++}return t}},{key:"setNodeColorId",value:function(t){var e=this.getColorId();t.setColorId(e),this.elementMap.set(e,t)}},{key:"setEdgeColorId",value:function(t){var e=this.getColorId();t.setColorId(e),this.elementMap.set(e,t)}},{key:"addNode",value:function(t){this.setNodeColorId(t),this.nodes.push(t)}},{key:"addEdge",value:function(t){this.setEdgeColorId(t),this.edges.push(t)}},{key:"selectNodes",value:function(t){this.select=t}},{key:"clearDraw",value:function(){this.$ctx.save(),this.$ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height),this.$ctx.restore()}},{key:"_draw",value:function(){M.begin(),this.clearDraw(),this.$ctx.save(),this.elementMap.forEach(function(e){var n;n=this.select.includes(e)?t.select:t.hot,e.draw(this.$ctx,n)}.bind(this)),this.$ctx.restore(),M.end(),this.running=!1}},{key:"draw",value:function(){this.running||(this.running=!0,this._draw())}},{key:"addClickEvent",value:function(){var t=function(t){var e=this.getEventColor(t),n=this.elementMap.get(e);E(n,h)&&(this.selectNodes([n]),n.startMove({x:t.offsetX,y:t.offsetY}),this.draw())}.bind(this),e=function(t){var e=this.select[0];E(e,h)&&e.moveStatus&&(e.move(t.offsetX,t.offsetY),this.draw()),e=void 0}.bind(this),n=function(t){var e=this.select[0];E(e,h)&&e.endMove()}.bind(this);this.$canvas.addEventListener("mousedown",t),this.$canvas.addEventListener("mousemove",e),this.$canvas.addEventListener("mouseup",n),this.$canvas.addEventListener("mouseout",n)}},{key:"getEventColor",value:function(t){var e=t.offsetX,n=t.offsetY,r=this.$ctx.getImageData(e,n,1,1).data;return function(t){for(var e=[],n=0;n<3;++n){var r=Math.floor(t[n]).toString(16);r=1==r.length?"0"+r:r,e.push(r)}return"#"+e.join("")}(Array.from(r))}}])&&S(n.prototype,r),e}())({el:document.getElementById("draw")}),C=new h({x:0,y:0});O.addNode(C);var $=new h({x:300,y:300});O.addNode($),O.selectNodes([C]);var j=new P(C,$);O.addEdge(j),O.draw()})()})();