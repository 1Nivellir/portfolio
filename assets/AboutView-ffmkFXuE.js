import{_ as m,o as p,c as v,a as s,w as i,b as a,d as c,T as n,e as f,f as l,v as r,g as o,r as L,h as g}from"./index-hN__rTE7.js";const k={data(){return{bioList:!1,contactsList:!1}},methods:{}},w={class:"about__wrapper"},x=f('<aside class="about__aside"><ul class="about__list list"><li class="list__item list__item-1"></li><li class="list__item list__item-2"></li><li class="list__item list__item-3"></li></ul></aside>',1),$={class:"about__nav nav"},V={class:"nav__biografy"},y={class:"personal__list"},A=s("li",{class:"personal__item"},[s("span",{class:"personal__item-bg1"}),o("Обо мне")],-1),B=s("li",{class:"personal__item"},[s("span",{class:"personal__item-bg2"}),o("Интересы")],-1),C=s("li",{class:"personal__item"},[s("span",{class:"personal__item-bg3"}),o("Soft__skills")],-1),M=s("li",{class:"personal__item"},[s("span",{class:"personal__item-bg4"}),o("Hard__skills")],-1),N=[A,B,C,M],S={class:"contacts__list"},T=s("li",{class:"contacts__item contacts__item-tg"},"@slavavorobey",-1),D=s("li",{class:"contacts__item contacts__item-mail"},"slavavorobey@vk.com",-1),E=s("li",{class:"contacts__item contacts__item-number"},"+7-9138415347",-1),H=[T,D,E];function j(d,e,u,b,t,h){return p(),v("div",w,[x,s("nav",$,[s("div",V,[s("h2",{class:"biografy__title",onClick:e[0]||(e[0]=i(_=>t.bioList=!t.bioList,["prevent"]))}," Биография "),a(n,{name:"perList"},{default:c(()=>[l(s("ul",y,N,512),[[r,t.bioList]])]),_:1}),s("h2",{class:"contacts__title",onClick:e[1]||(e[1]=i(_=>t.contactsList=!t.contactsList,["prevent"]))},"Контакты"),a(n,{name:"perList"},{default:c(()=>[l(s("ul",S,H,512),[[r,t.contactsList]])]),_:1})])])])}const q=m(k,[["render",j]]),z={components:{AboutMe:q}};function F(d,e,u,b,t,h){const _=L("AboutMe");return p(),g(_)}const I=m(z,[["render",F]]);export{I as default};
