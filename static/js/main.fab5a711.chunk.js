(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(3),c=a.n(l),i=(a(9),a(10),a(1)),m=(a(11),a(12),function(e){var t=e.subtitles;return s.a.createElement("ul",{className:"nav__submenu"},t.map((function(e){return s.a.createElement("li",{key:e,className:"nav__item-submenu"},s.a.createElement("button",{type:"button",className:"nav__link-submenu"},e))})))});m.defaultProps={subtitles:[]};var r=function(e){var t=e.navItems,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],r=l[1],u=Object(n.useState)(null),o=Object(i.a)(u,2),_=o[0],v=o[1];return s.a.createElement("nav",{className:"nav header__nav"},s.a.createElement("button",{type:"button",onClick:function(){r(!c)},className:"nav__label",htmlFor:"checkbox-menu"},s.a.createElement("span",{className:c?"nav__icon-bar fas fa-times":"nav__icon-bar fas fa-bars"})),s.a.createElement("ul",{className:c?"nav__list nav__list-shown":"nav__list"},t.map((function(e){var t=e.id,a=e.title,n=e.subtitles,l=e.iconName;return s.a.createElement("li",{key:t,className:"nav__item"},s.a.createElement("button",{type:"button",onClick:function(){return function(e){v(_!==e?e:null)}(t)},onBlur:function(){return v(null)},className:"nav__link"},s.a.createElement("span",{className:"nav__icon fas fa-".concat(l)}),a,!!n.length&&s.a.createElement("div",{className:_===t?"nav__icon fas fa-minus":"nav__icon fas fa-plus"})),!!n.length&&_===t&&s.a.createElement(m,{subtitles:n}))}))))},u=(a(13),function(){return s.a.createElement("div",{className:"logo header__logo"},s.a.createElement("button",{type:"button",className:"logo__link"}))}),o=function(e){var t=e.navItems;return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"header__container"},s.a.createElement("div",{className:"header__left"},s.a.createElement(u,null)),s.a.createElement("div",{className:"header__right"},s.a.createElement(r,{navItems:t}),s.a.createElement("button",{type:"button",className:"header__login"},"LOG IN"),s.a.createElement("button",{type:"button",className:"header__signup"},"SIGN UP"))))},_=[{id:1,title:"one",iconName:"user-ninja",subtitles:["item 1","item 2","item 3"]},{id:2,title:"two",iconName:"money-check-alt",subtitles:["item 1","item 2","item 3"]},{id:3,title:"three",iconName:"university",subtitles:["item 1","item 2","item 3"]}],v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(o,{navItems:_})))};c.a.render(s.a.createElement(v,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.fab5a711.chunk.js.map