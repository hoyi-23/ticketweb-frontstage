"use strict";(self["webpackChunkticketweb_frontstage"]=self["webpackChunkticketweb_frontstage"]||[]).push([[350],{273:function(t,e,l){l.d(e,{Z:function(){return P}});var n=l(252),a=l(577);(0,n.dD)("data-v-df6a8056");const s={class:"cart__header d-flex justify-content-between"},c=(0,n._)("h2",{class:"fs-2 fw-bold text-white m-0"},"購物車",-1),i={class:"cart__body"},o={key:0,class:"emptyCart d-flex flex-column justify-content-center"},r=(0,n._)("iframe",{src:"https://giphy.com/embed/5toDkVpRmmqtWD0orR",width:"auto",height:"30%",frameBorder:"0",class:"giphy-embed",allowFullScreen:""},null,-1),d=[r],u={key:1,class:"cartList"},f={class:"bg-dark rounded"},v=["src","alt"],g={class:"recommend__content py-3 px-2"},_={class:"fs-5 text-white"},m={class:"small text-white"},x=(0,n.Uk)("看詳細資訊"),p={class:"cart__footer d-flex flex-column pt-2"},w=(0,n.Uk)("結帳去"),k={key:0,class:"cart__recommand d-flex flex-column mt-3"},b=(0,n._)("p",{class:"fs-5 text-white fw-bold"}," 猜你會喜歡 >> ",-1),h={class:"bg-dark rounded"},y={class:"d-flex"},C=["src","alt"],D={class:"recommend__content py-3 px-2"},q={class:"fs-5 text-white"},I={class:"small text-white"},W=(0,n.Uk)("看詳細資訊");function F(t,e,l,r,F,T){const z=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["cartcontent position-fixed top-0 py-4 px-3 d-flex flex-column",{slidein:r.showCartContent}])},[(0,n._)("div",s,[c,(0,n._)("span",{onClick:e[0]||(e[0]=(...t)=>r.closingCartContent&&r.closingCartContent(...t)),class:"closeIcon material-icons-outlined fs-2 fw-bold text-white"},"disabled_by_default")]),(0,n._)("div",i,[r.cartContent.length<=0?((0,n.wg)(),(0,n.iD)("div",o,d)):(0,n.kq)("",!0),r.cartContent.length>0?((0,n.wg)(),(0,n.iD)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.cartContent,(t=>((0,n.wg)(),(0,n.iD)("ul",{class:"d-flex flex-column",key:t.eventId},[(0,n._)("li",f,[(0,n.Wm)(z,{to:"/search",class:"d-flex"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:t.eventPhotos,alt:t.eventTitle,class:"recommend__img"},null,8,v),(0,n._)("div",g,[(0,n._)("h2",_,(0,a.zw)(t.eventTitle),1),(0,n._)("p",m,(0,a.zw)(`${t.eventDescription.substring(0,25)}...`),1),(0,n.Wm)(z,{to:`/eventdetail/${t.eventId}`,class:"btn btn-primary btn-sm"},{default:(0,n.w5)((()=>[x])),_:2},1032,["to"])])])),_:2},1024)])])))),128))])):(0,n.kq)("",!0)]),(0,n._)("div",p,[(0,n.Wm)(z,{to:"/checkout",class:"btn btn-secondary rounded"},{default:(0,n.w5)((()=>[w])),_:1}),r.cartContent.length<=0?((0,n.wg)(),(0,n.iD)("div",k,[b,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.recommendEventArray.slice(0,3),(t=>((0,n.wg)(),(0,n.iD)("ul",{class:"d-flex flex-column",key:t.eventId},[(0,n._)("li",h,[(0,n._)("div",y,[(0,n._)("img",{src:t.eventPhotos,alt:t.eventTitle,class:"recommend__img"},null,8,C),(0,n._)("div",D,[(0,n._)("h2",q,(0,a.zw)(t.eventTitle),1),(0,n._)("p",I,(0,a.zw)(`${t.eventDescription.substring(0,25)}...`),1),(0,n.Wm)(z,{to:`/eventdetail/${t.eventId}`,class:"btn btn-primary btn-sm"},{default:(0,n.w5)((()=>[W])),_:2},1032,["to"])])])])])))),128))])):(0,n.kq)("",!0)])],2)}(0,n.Cn)();var T=l(262),z=l(709),U={name:"CartContent",setup(){const t=(0,z.oR)(),e=(0,T.Fl)((()=>t.getters.cartContent)),l=(0,T.Fl)((()=>t.getters.showCartContent));function n(){t.dispatch("showingCartContent",!1)}const a=(0,T.Fl)((()=>t.getters.productData)),s=(0,T.Fl)((()=>a.value.filter((t=>"temp"===t.eventType))));return{cartContent:e,closingCartContent:n,showCartContent:l,productData:a,recommendEventArray:s}}};U.render=F,U.__scopeId="data-v-df6a8056";var P=U},994:function(t,e,l){l.d(e,{Z:function(){return r}});var n=l(252);(0,n.dD)("data-v-5d04789f");const a=(0,n._)("span",{class:"material-icons-outlined bg-secondary p-2 rounded text-white fs-1 "},"shopping_cart",-1),s=[a];function c(t,e,l,a,c,i){return(0,n.wg)(),(0,n.iD)("div",{class:"cartIcon position-fixed d-block",onClick:e[0]||(e[0]=(...t)=>a.showingCartContent&&a.showingCartContent(...t))},s)}(0,n.Cn)();var i=l(709),o={name:"CartOpenIcon",setup(){const t=(0,i.oR)();function e(){t.dispatch("showingCartContent",!0)}return{showingCartContent:e}}};o.render=c,o.__scopeId="data-v-5d04789f";var r=o},177:function(t,e,l){l.d(e,{Z:function(){return D}});var n=l(252);const a={class:"footer mt-5 d-flex flex-column"},s={class:"footer__body bg-primary py-5"},c={class:"container footer__content"},i={class:"row"},o={class:"col col-lg-4"},r=(0,n._)("div",{class:"text-lighter mb-2"},"參與活動",-1),d=(0,n.Uk)("探索所有活動"),u=(0,n.Uk)("購票流程說明"),f={class:"col col-lg-4"},v=(0,n._)("div",{class:"text-lighter mb-2"},"認識方格子",-1),g=(0,n.Uk)("常見問題"),_=(0,n.Uk)("聯絡我們"),m=(0,n.Uk)("隱私權政策"),x=(0,n.Uk)("服務條款"),p={class:"col col-lg-4"},w=(0,n._)("div",{class:"text-lighter mb-2"},"追蹤方格子",-1),k=(0,n.Uk)("Facebook"),b=(0,n.Uk)("Instagram"),h=(0,n._)("div",{class:"footer_bottom d-flex justify-content-center align-items-center flex-column flex-md-row py-3"},[(0,n._)("h1",{class:"fs-5 text-primary fw-bold pe-3 m-0 text-nowrap"},"方格子劇場"),(0,n._)("span",{class:"text-nowrap"},"Hoyi-23 © 2020. All Rights Reserved.")],-1);function y(t,e,l,y,C,D){const q=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[(0,n._)("div",c,[(0,n._)("div",i,[(0,n._)("div",o,[r,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(q,{to:"/search",class:"text-lighter"},{default:(0,n.w5)((()=>[d])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[u])),_:1})])])]),(0,n._)("div",f,[v,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[g])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[_])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[x])),_:1})])])]),(0,n._)("div",p,[w,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[k])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(q,{to:"#",class:"text-lighter"},{default:(0,n.w5)((()=>[b])),_:1})])])])])])]),h])}var C={name:"Footer"};C.render=y;var D=C},350:function(t,e,l){l.r(e),l.d(e,{default:function(){return ut}});var n=l(252),a=l(577);(0,n.dD)("data-v-f3191a1a");const s={class:"eventDetail"},c={class:"container pt-5 pb-lg-4"},i={class:"row align-items-center"},o={class:"col-12 col-lg-6"},r=["src","alt"],d={class:"col-12 col-lg-6 d-flex flex-column"},u={class:"text-center py-3 pt-lg-0  fw-bold"},f={class:"contentDetail border-top border-3 py-3"},v=(0,n._)("h2",{class:"fs-4 fw-bold"},"活動介紹",-1),g={class:"py-2"},_={class:"d-flex"},m={key:0,class:"fs-6 badge bg-light text-dark"},x={key:1,class:"fs-6 badge bg-light text-dark"},p={class:"ps-2"},w={key:0,class:"fs-6 badge bg-light text-dark"},k={key:1,class:"fs-6 badge bg-light text-dark"},b={key:2,class:"fs-6 badge bg-light text-dark"},h={key:3,class:"fs-6 badge bg-light text-dark"},y={key:4,class:"fs-6 badge bg-light text-dark"},C={key:5,class:"fs-6 badge bg-light text-dark"},D={key:6,class:"fs-6 badge bg-light text-dark"},q={key:7,class:"fs-6 badge bg-light text-dark"},I={key:8,class:"fs-6 badge bg-light text-dark"},W={class:"container"},F={class:"row"},T={class:"col-12 col-md-4 my-2 my-lg-0"},z={class:"priceDetail d-flex align-items-center border border-5 py-4 rounded"},U={class:"px-3"},P=(0,n._)("span",{class:"fs-6"},"全票",-1),R={class:"fs-3 m-0"},Z={class:"d-flex align-items-center flex-fill"},A={class:"fs-1 flex-grow-1 text-center"},H={class:"col-12 col-md-4 my-2 my-lg-0"},Q={class:"priceDetail d-flex align-items-center border border-5 py-4 rounded"},j={class:"px-3"},$=(0,n._)("span",{class:"fs-6"},"學生票",-1),E={class:"fs-3 m-0"},L={class:"d-flex align-items-center flex-fill"},O={class:"fs-1 flex-grow-1 text-center"},Y={class:"col-12 col-md-4 my-2 my-lg-0"},B={class:"priceDetail d-flex align-items-center border border-5 py-4 rounded"},K={class:"px-3"},S=(0,n._)("span",{class:"fs-6"},"優待票",-1),V={class:"fs-3 m-0"},G={class:"d-flex align-items-center flex-fill"},J={class:"fs-1 flex-grow-1 text-center"},M={class:"container py-4"},N=(0,n._)("h2",{class:"fs-3"},"活動地點 :",-1),X={key:0},tt=(0,n._)("img",{src:"#",alt:""},null,-1),et=[tt],lt={key:1};function nt(t,e,l,tt,nt,at){const st=(0,n.up)("CartOpenIcon"),ct=(0,n.up)("Footer"),it=(0,n.up)("CartContent");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",c,[(0,n._)("div",i,[(0,n._)("div",o,[(0,n._)("img",{src:tt.eventData.eventPhotos,alt:tt.eventData.eventTitle,class:"img",style:{"max-height":"500px"}},null,8,r)]),(0,n._)("div",d,[(0,n._)("h1",u,(0,a.zw)(tt.eventData.eventTitle),1),(0,n._)("div",f,[v,(0,n._)("p",g,(0,a.zw)(tt.eventData.eventDescription),1),(0,n._)("div",_,[(0,n._)("ul",null,["temp"===tt.eventData.eventType?((0,n.wg)(),(0,n.iD)("li",m,"短期活動")):(0,n.kq)("",!0),"regular"===tt.eventData.eventType?((0,n.wg)(),(0,n.iD)("li",x,"常設活動")):(0,n.kq)("",!0)]),(0,n._)("ul",p,["music"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",w,"音樂")):(0,n.kq)("",!0),"movie"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",k,"影劇")):(0,n.kq)("",!0),"dance"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",b,"舞蹈")):(0,n.kq)("",!0),"art"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",h,"藝術")):(0,n.kq)("",!0),"design"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",y,"設計")):(0,n.kq)("",!0),"food"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",C,"美食")):(0,n.kq)("",!0),"travel"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",D,"旅遊")):(0,n.kq)("",!0),"family"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",q,"親子")):(0,n.kq)("",!0),"drama"===tt.eventData.eventCategory?((0,n.wg)(),(0,n.iD)("li",I,"戲劇")):(0,n.kq)("",!0)])])]),(0,n._)("div",{class:"d-block btn addToCart py-2 text-center rounded",onClick:e[0]||(e[0]=t=>tt.addToCart())}," 加入購物車 ")])])]),(0,n._)("div",W,[(0,n._)("ul",F,[(0,n._)("li",T,[(0,n._)("div",z,[(0,n._)("div",U,[P,(0,n._)("p",R,(0,a.zw)(tt.eventData.eventFullPrice),1)]),(0,n._)("ul",Z,[(0,n._)("li",{class:"fs-2 flex-grow-1 text-center btn",onClick:e[1]||(e[1]=t=>tt.add("full"))},"+"),(0,n._)("li",A,(0,a.zw)(tt.ticketQuan.full),1),(0,n._)("li",{class:"fs-2 flex-grow-1 text-center btn",onClick:e[2]||(e[2]=t=>tt.minus("full"))},"-")])])]),(0,n._)("li",H,[(0,n._)("div",Q,[(0,n._)("div",j,[$,(0,n._)("p",E,(0,a.zw)(tt.eventData.eventStudentPrice),1)]),(0,n._)("ul",L,[(0,n._)("li",{class:"fs-2 flex-grow-1 text-center btn",onClick:e[3]||(e[3]=t=>tt.add("student"))},"+"),(0,n._)("li",O,(0,a.zw)(tt.ticketQuan.student),1),(0,n._)("li",{class:"fs-2 flex-grow-1 text-center btn",onClick:e[4]||(e[4]=t=>tt.minus("student"))},"-")])])]),(0,n._)("li",Y,[(0,n._)("div",B,[(0,n._)("div",K,[S,(0,n._)("p",V,(0,a.zw)(tt.eventData.eventDiscountPrice),1)]),(0,n._)("ul",G,[(0,n._)("li",{class:"fs-2 flex-grow-1 text-center btn",onClick:e[5]||(e[5]=t=>tt.add("discount"))},"+"),(0,n._)("li",J,(0,a.zw)(tt.ticketQuan.discount),1),(0,n._)("li",{class:"fs-2 flex-grow-1 text-center btn",onClick:e[6]||(e[6]=t=>tt.minus("discount"))},"-")])])])])]),(0,n._)("div",M,[N,"Aroom"==tt.eventData.eventLocation?((0,n.wg)(),(0,n.iD)("div",X,et)):(0,n.kq)("",!0),"Broom"==tt.eventData.eventLocation?((0,n.wg)(),(0,n.iD)("div",lt," 室外舞台 ")):(0,n.kq)("",!0)]),(0,n.Wm)(st),(0,n.Wm)(ct),(0,n.Wm)(it)])}(0,n.Cn)();var at=l(994),st=l(273),ct=l(177),it=l(262),ot=l(119),rt=l(709),dt={name:"EventDetail",components:{CartOpenIcon:at.Z,CartContent:st.Z,Footer:ct.Z},setup(){const t=(0,rt.oR)(),e=(0,ot.yj)(),l=(0,it.iH)([]),a=(0,it.Fl)((()=>e.params.eventId)),s=(0,it.Fl)((()=>t.getters.productData));function c(t){const e=s.value.filter((e=>e.eventId==t));return i.value.full=0,i.value.student=0,i.value.discount=0,e[0]}(0,n.wF)((()=>{l.value=c(a.value)})),(0,n.YP)(a,(t=>{l.value=c(t)}));const i=(0,it.iH)({full:0,student:0,discount:0});function o(t){"full"===t&&i.value.full++,"student"===t&&i.value.student++,"discount"===t&&i.value.discount++}function r(t){"full"===t&&i.value.full>0&&i.value.full--,"student"===t&&i.value.student>0&&i.value.student--,"discount"===t&&i.value.discount>0&&i.value.discount--}function d(){0==i.value.full&&0==i.value.student&&0==i.value.discount||t.dispatch("addToCart",{eventId:a,ticketQuan:i})}return{eventId:a,eventData:l,AllProduct:s,ticketQuan:i,addToCart:d,add:o,minus:r}}};dt.render=nt,dt.__scopeId="data-v-f3191a1a";var ut=dt}}]);
//# sourceMappingURL=350.e669b78b.js.map