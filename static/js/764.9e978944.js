"use strict";(self["webpackChunkticketweb_frontstage"]=self["webpackChunkticketweb_frontstage"]||[]).push([[764],{411:function(t,e,n){n.d(e,{Z:function(){return $}});var l=n(252),s=n(577),o=n(963);(0,l.dD)("data-v-3c2f8f57");const a={class:"cart__header d-flex justify-content-between"},c=(0,l._)("h2",{class:"fs-2 fw-bold text-white m-0"},"購物車",-1),r={class:"cart__body"},i={key:0,class:"emptyCart d-flex flex-column justify-content-center"},d=(0,l._)("iframe",{src:"https://giphy.com/embed/5toDkVpRmmqtWD0orR",width:"auto",height:"30%",frameBorder:"0",class:"giphy-embed",allowFullScreen:""},null,-1),u=[d],f={key:1,class:"cartList mt-2"},_={class:"bg-dark rounded d-flex flex-column py-3"},m={class:"fs-5 text-white text-nowrap text-center border-bottom border-1 pb-2"},v={class:"align-items-center justify-content-evenly d-flex"},w={class:"d-flex flex-column"},p={key:0,class:"m-0 text-white"},h={key:1,class:"m-0 text-white"},g={key:2,class:"m-0 text-white"},x={class:"m-0 text-white"},C=["onClick"],k=(0,l._)("span",{class:"fs-1 material-icons-outlined text-white"},"delete_forever",-1),b=[k],y={class:"fs-3 text-white"},D={class:"cart__footer d-flex flex-column pt-2"},z=(0,l.Uk)("結帳去"),F={key:0,class:"cart__recommand d-flex flex-column mt-3"},W=(0,l._)("p",{class:"fs-5 text-white fw-bold"}," 猜你會喜歡 >> ",-1),U={class:"bg-dark rounded"},E={class:"d-flex"},I=["src","alt"],T={class:"recommend__content py-3 px-2"},q={class:"fs-5 text-white"},R={class:"small text-white"},j=(0,l.Uk)("看詳細資訊");function Z(t,e,n,d,k,Z){const A=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",{class:(0,s.C_)(["cartcontent position-fixed top-0 py-4 px-3 d-flex flex-column",{slidein:d.showCartContent}])},[(0,l._)("div",a,[c,(0,l._)("span",{onClick:e[0]||(e[0]=(...t)=>d.closingCartContent&&d.closingCartContent(...t)),class:"closeIcon material-icons-outlined fs-2 fw-bold text-white"},"disabled_by_default")]),(0,l._)("div",r,[d.cartContent.length<=0?((0,l.wg)(),(0,l.iD)("div",i,u)):(0,l.kq)("",!0),d.cartContent.length>0?((0,l.wg)(),(0,l.iD)("div",f,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.cartContent,((t,e)=>((0,l.wg)(),(0,l.iD)("ul",{class:"d-flex flex-column",key:e},[(0,l._)("li",_,[(0,l._)("h2",m,(0,s.zw)(t.title),1),(0,l._)("div",v,[(0,l._)("div",w,[t.num.full>0?((0,l.wg)(),(0,l.iD)("p",p,"全票 X "+(0,s.zw)(t.num.full)+" 張",1)):(0,l.kq)("",!0),t.num.student>0?((0,l.wg)(),(0,l.iD)("p",h,"學生票 X "+(0,s.zw)(t.num.student)+" 張",1)):(0,l.kq)("",!0),t.num.discount>0?((0,l.wg)(),(0,l.iD)("p",g,"優待票 X "+(0,s.zw)(t.num.discount)+" 張",1)):(0,l.kq)("",!0)]),(0,l._)("p",x,"小計: "+(0,s.zw)(t.subTotal),1),(0,l._)("a",{href:"#",onClick:(0,o.iM)((n=>d.deleteFromCart(e,t.subTotal)),["prevent"])},b,8,C)])])])))),128)),(0,l._)("p",y,"總計: "+(0,s.zw)(d.total),1)])):(0,l.kq)("",!0)]),(0,l._)("div",D,[(0,l.Wm)(A,{to:"/checkout",onClick:e[1]||(e[1]=e=>t.checkout()),class:"btn btn-secondary rounded"},{default:(0,l.w5)((()=>[z])),_:1}),d.cartContent.length<=0?((0,l.wg)(),(0,l.iD)("div",F,[W,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.recommendEventArray.slice(0,3),(t=>((0,l.wg)(),(0,l.iD)("ul",{class:"d-flex flex-column",key:t.eventId},[(0,l._)("li",U,[(0,l._)("div",E,[(0,l._)("img",{src:t.eventPhotos,alt:t.eventTitle,class:"recommend__img"},null,8,I),(0,l._)("div",T,[(0,l._)("h2",q,(0,s.zw)(t.eventTitle),1),(0,l._)("p",R,(0,s.zw)(`${t.eventDescription.substring(0,25)}...`),1),(0,l.Wm)(A,{to:`/eventdetail/${t.eventId}`,class:"btn btn-primary btn-sm"},{default:(0,l.w5)((()=>[j])),_:2},1032,["to"])])])])])))),128))])):(0,l.kq)("",!0)])],2)}(0,l.Cn)();var A=n(262),H=n(709),X={name:"CartContent",setup(){const t=(0,H.oR)(),e=(0,A.Fl)((()=>t.getters.cartContent)),n=(0,A.Fl)((()=>t.getters.showCartContent));function s(){t.dispatch("showingCartContent",!1)}const o=(0,A.Fl)((()=>t.getters.productData)),a=(0,A.Fl)((()=>o.value.filter((t=>"temp"===t.eventType))));function c(e,n){t.dispatch("deleteFromCart",{index:e,subTotal:n})}const r=(0,A.Fl)((()=>t.getters.total));return(0,l.wF)((()=>{t.dispatch("getCartContent")})),{cartContent:e,closingCartContent:s,showCartContent:n,productData:o,recommendEventArray:a,deleteFromCart:c,total:r}}};X.render=Z,X.__scopeId="data-v-3c2f8f57";var $=X},994:function(t,e,n){n.d(e,{Z:function(){return i}});var l=n(252);(0,l.dD)("data-v-5d04789f");const s=(0,l._)("span",{class:"material-icons-outlined bg-secondary p-2 rounded text-white fs-1 "},"shopping_cart",-1),o=[s];function a(t,e,n,s,a,c){return(0,l.wg)(),(0,l.iD)("div",{class:"cartIcon position-fixed d-block",onClick:e[0]||(e[0]=(...t)=>s.showingCartContent&&s.showingCartContent(...t))},o)}(0,l.Cn)();var c=n(709),r={name:"CartOpenIcon",setup(){const t=(0,c.oR)();function e(){t.dispatch("showingCartContent",!0)}return{showingCartContent:e}}};r.render=a,r.__scopeId="data-v-5d04789f";var i=r},67:function(t,e,n){n.d(e,{Z:function(){return g}});var l=n(252),s=n(577);const o={class:"eventCard col-md-6 col-lg-4"},a={class:"card wrapper \r\n            d-flex flex-column justify-content-between\r\n            position-relative\r\n            overflow-hidden"},c=["src","alt"],r={class:"header p-2"},i={class:"date"},d={class:"data position-absolute p-2"},u={class:"content"},f={class:"eventCate fs-6"},_={href:"#"},m={class:"eventTitle"},v={class:"eventDescript text-white"},w=(0,l.Uk)("Read more");function p(t,e,n,p,h,g){const x=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("li",o,[(0,l._)("div",a,[(0,l._)("img",{src:n.Event.eventPhotos,alt:n.Event.eventTitle,class:"img position-absolute"},null,8,c),(0,l._)("div",r,[(0,l._)("div",i,(0,s.zw)(n.Event.eventStartDate),1)]),(0,l._)("div",d,[(0,l._)("div",u,[(0,l._)("span",f,(0,s.zw)(n.Event.eventCategory),1),(0,l._)("a",_,[(0,l._)("h1",m,(0,s.zw)(n.Event.eventTitle),1)]),(0,l._)("p",v,(0,s.zw)(n.Event.eventDescription),1),(0,l.Wm)(x,{to:`/eventdetail/${n.Event.eventId}`,class:"btn-primary py-1 px-2 rounded"},{default:(0,l.w5)((()=>[w])),_:1},8,["to"])])])])])}var h={name:"card",props:["Event"]};h.render=p;var g=h},177:function(t,e,n){n.d(e,{Z:function(){return D}});var l=n(252);const s={class:"footer mt-5 d-flex flex-column"},o={class:"footer__body bg-primary py-5"},a={class:"container footer__content"},c={class:"row"},r={class:"col col-lg-4"},i=(0,l._)("div",{class:"text-lighter mb-2"},"參與活動",-1),d=(0,l.Uk)("探索所有活動"),u=(0,l.Uk)("購票流程說明"),f={class:"col col-lg-4"},_=(0,l._)("div",{class:"text-lighter mb-2"},"認識方格子",-1),m=(0,l.Uk)("常見問題"),v=(0,l.Uk)("聯絡我們"),w=(0,l.Uk)("隱私權政策"),p=(0,l.Uk)("服務條款"),h={class:"col col-lg-4"},g=(0,l._)("div",{class:"text-lighter mb-2"},"追蹤方格子",-1),x=(0,l.Uk)("Facebook"),C=(0,l.Uk)("Instagram"),k=(0,l._)("div",{class:"footer_bottom d-flex justify-content-center align-items-center flex-column flex-md-row py-3"},[(0,l._)("h1",{class:"fs-5 text-primary fw-bold pe-3 m-0 text-nowrap"},"方格子劇場"),(0,l._)("span",{class:"text-nowrap"},"Hoyi-23 © 2020. All Rights Reserved.")],-1);function b(t,e,n,b,y,D){const z=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",o,[(0,l._)("div",a,[(0,l._)("div",c,[(0,l._)("div",r,[i,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(z,{to:"/search",class:"text-lighter"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[u])),_:1})])])]),(0,l._)("div",f,[_,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[v])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[w])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[p])),_:1})])])]),(0,l._)("div",h,[g,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[x])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(z,{to:"#",class:"text-lighter"},{default:(0,l.w5)((()=>[C])),_:1})])])])])])]),k])}var y={name:"Footer"};y.render=b;var D=y}}]);
//# sourceMappingURL=764.9e978944.js.map