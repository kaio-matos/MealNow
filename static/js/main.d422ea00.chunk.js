(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(8),s=c.n(a),i=(c(15),c(4)),l=(c(16),c(3)),j=c.n(l),u=c(5),o=c(9),d=c(10),b=c(6),h=c(2);function p(e){for(var t={},c=[],n=[],r=/(strIngredient)/,a=/(strMeasure)/,s=0,i=Object.keys(e);s<i.length;s++){var l=i[s];l.match(r)?""!==e[l]&&" "!==e[l]&&c.push(e[l]):l.match(a)?""!==e[l]&&" "!==e[l]&&n.push(e[l]):t=Object(h.a)(Object(h.a)({},t),{},Object(b.a)({},l,e[l]))}var j=c.map((function(e,t){return{ingredient:e,measure:n[t]}}));t=Object(h.a)(Object(h.a)({},t),{},{ingredients:j});var u=new URL(t.strYoutube).searchParams.get("v");return t=Object(h.a)(Object(h.a)({},t),{},{strYoutube:"https://www.youtube.com/embed/".concat(u||"")})}var O=new(function(){function e(){Object(o.a)(this,e),this.baseURL="https://www.themealdb.com/api/json/v1/1"}return Object(d.a)(e,[{key:"getRamdom",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseURL,"/random.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,n=c.meals,r=p(n[0]),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),m=c(0),x=Object(n.createContext)({});function v(e){var t=Object(n.useState)({}),c=Object(i.a)(t,2),r=c[0],a=c[1];function s(){return(s=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getRamdom();case 3:return t=e.sent,a(t),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(m.jsx)(x.Provider,{value:{currentMeal:r,getRandomMeal:function(){return s.apply(this,arguments)}},children:e.children})}var g=function(){return Object(n.useContext)(x)};function f(){var e=g().getRandomMeal;return Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{src:"/MealNow.svg",alt:"Are you hungry? MealNow"}),Object(m.jsx)("p",{className:"title",children:"Feeling Hungry?"}),Object(m.jsx)("p",{className:"title subtitle",children:"Get a random meal by clicking below"}),Object(m.jsx)("button",{onClick:e,children:"Get Meal"})]})}c(19);var y=function(){var e,t,c=g().currentMeal,r=Object(n.useState)("hide"),a=Object(i.a)(r,2),s=a[0],l=a[1],j=Object(n.useState)({}),u=Object(i.a)(j,2),o=u[0],d=u[1];return Object(n.useEffect)((function(){Object.keys(c).length>0&&("active"===s?(l("hide"),setTimeout((function(){l("active"),d(c)}),1e3)):(l("active"),d(c)))}),[c]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{}),Object(m.jsxs)("main",{className:s,children:[Object(m.jsxs)("section",{className:"recipe_container",children:[Object(m.jsx)("h1",{className:"recipe_name",children:o.strMeal}),Object(m.jsxs)("div",{className:"recipe_additional_info",children:[Object(m.jsxs)("p",{children:["Category: ",o.strCategory]}),Object(m.jsxs)("p",{children:["Area: ",o.strArea]}),Object(m.jsxs)("p",{children:["Tags: ",o.strTags]})]}),Object(m.jsxs)("div",{className:"recipe_ingredients_image_container",children:[Object(m.jsx)("div",{className:"recipe_image_container",children:Object(m.jsx)("img",{src:o.strMealThumb,alt:c.strMeal})}),Object(m.jsxs)("div",{className:"recipe_ingredients",children:[Object(m.jsx)("h3",{children:"Ingredients"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("ul",{children:null===(e=o.ingredients)||void 0===e?void 0:e.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:e.ingredient})},e.ingredient+t)}))}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{children:null===(t=o.ingredients)||void 0===t?void 0:t.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:e.measure})},e.ingredient+t)}))})]})]})]}),Object(m.jsx)("article",{className:"recipe_content",children:Object(m.jsx)("p",{children:c.strInstructions})})]}),Object(m.jsxs)("div",{className:"recipe_youtube",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Still can't do it ?"}),Object(m.jsx)("p",{children:"Try watching this youtube video and start now your recipe!"})]}),Object(m.jsx)("iframe",{width:"560",height:"315",src:c.strYoutube,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})]})]})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{children:Object(m.jsx)(y,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d422ea00.chunk.js.map