import{a0 as $,n as T,o as i,d as u,g as e,F as D,N as W,t as l,c as j,w as R,f as b,K as C,u as t,a1 as K,s as ee,i as x,a2 as te,M as se,a3 as ae,R as oe,k as S,e as w,y as ne,J as Z,q as H,a4 as re,G as ie,z as le}from"./vendor-UVL3l2rb.js";import{d as ce,u as de}from"./loading--qckEkbY.js";import{_ as O,b as N,A as M,s as ue}from"./index-CyZ_tLuT.js";import{u as he}from"./bookStore-O1g6rLjj.js";const pe={class:"books-wrapper"},ge={class:"wrapper"},me=["onClick"],ve={class:"cover-img"},fe=["src"],_e={class:"info"},we={class:"name"},Ae={class:"sub"},Ie={class:"author"},ke={key:0,class:"tags"},ye={key:1,class:"update-info"},Be={class:"size"},Ce={class:"date"},xe={key:0,class:"intro"},Se={key:1,class:"dur-chapter"},Re={class:"last-chapter"},be={__name:"BookItems",props:["books","isSearch"],emits:["bookClick"],setup(v,{emit:n}){$(c=>({b777fdf2:t(V)}));const z=v,E=n,P=c=>E("bookClick",c),k=c=>/^data:/.test(c)?c:N()+"/cover?path="+encodeURIComponent(c),V=T(()=>z.isSearch?"space-between":"flex-start");return(c,o)=>{const y=K;return i(),u("div",pe,[e("div",ge,[(i(!0),u(D,null,W(v.books,r=>{var A;return i(),u("div",{class:"book",key:r.bookUrl,onClick:I=>P(r)},[e("div",ve,[(i(),u("img",{class:"cover",src:k(r.coverUrl),key:r.coverUrl,alt:"",loading:"lazy"},null,8,fe))]),e("div",_e,[e("div",we,l(r.name),1),e("div",Ae,[e("div",Ie,l(r.author),1),v.isSearch?(i(),u("div",ke,[(i(!0),u(D,null,W((A=r.kind)==null?void 0:A.split(",").slice(0,2),I=>(i(),j(y,{key:I},{default:R(()=>[b(l(I),1)]),_:2},1024))),128))])):C("",!0),v.isSearch?C("",!0):(i(),u("div",ye,[o[0]||(o[0]=e("div",{class:"dot"},"•",-1)),e("div",Be,"共"+l(r.totalChapterNum)+"章",1),o[1]||(o[1]=e("div",{class:"dot"},"•",-1)),e("div",Ce,l(t(ce)(r.lastCheckTime)),1)]))]),v.isSearch?(i(),u("div",xe,l(r.intro),1)):C("",!0),v.isSearch?C("",!0):(i(),u("div",Se," 已读："+l(r.durChapterTitle),1)),e("div",Re,"最新："+l(r.latestChapterTitle),1)])],8,me)}),128))])])}}},ze=O(be,[["__scopeId","data-v-52a7a450"]]),Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg==",Ve={class:"navigation-wrapper"},Me={class:"search-wrapper"},Te={class:"bottom-wrapper"},Ne={class:"recent-wrapper"},Pe={class:"reading-recent"},Le={class:"setting-wrapper"},Je={class:"setting-ip"},De={class:"setting-item"},We={class:"bottom-icons"},Ze={href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"},He={class:"bottom-icon"},Ke=["src"],Oe={__name:"BookShelf",setup(v){const n=he(),{connectStatus:z,connectType:E,newConnect:P,shelf:k}=ee(n),V=T(()=>n.config.theme),c=T(()=>V.value==6),o=x({name:"尚无阅读记录",author:"",url:"",chapterIndex:0,chapterPos:0}),y=x(null),{showLoading:r,closeLoading:A,loadingWrapper:I,isLoading:F}=de(y,"正在获取书籍信息"),f=te([]),h=x(""),B=x(!1);se(()=>{if(!(B.value&&h.value!="")){if(B.value=!1,f.value=[],h.value==""){f.value=k.value;return}f.value=k.value.filter(a=>a.name.includes(h.value)||a.author.includes(h.value))}});const U=()=>{h.value!=""&&(f.value=[],n.clearSearchBooks(),r(),B.value=!0,M.search(h.value,a=>{F&&A();try{n.setSearchBooks(JSON.parse(a)),f.value=n.searchBooks}catch(s){throw S.error("后端数据错误"),s}},()=>{A(),f.value.length==0&&S.info("搜索结果为空")}))},p=ae({ip:N(),disable:!0}),Y=()=>{p.ip=N(),p.disable=!p.disable},Q=()=>{ue(p.ip),p.disable=!0,J()},q=re(),G=async a=>{const{bookUrl:s,name:g,author:d,durChapterIndex:m=0,durChapterPos:_=0}=a;a.durChapterIndex===void 0&&await M.saveBook(a),L(s,g,d,m,_)},L=(a,s,g,d,m)=>{s!=="尚无阅读记录"&&(sessionStorage.setItem("bookUrl",a),sessionStorage.setItem("bookName",s),sessionStorage.setItem("bookAuthor",g),sessionStorage.setItem("chapterIndex",d),sessionStorage.setItem("chapterPos",m),o.value={name:s,author:g,url:a,chapterIndex:d,chapterPos:m},localStorage.setItem("readingRecent",JSON.stringify(o.value)),q.push({path:"/chapter"}))};oe(()=>{let a=localStorage.getItem("readingRecent");a!=null&&(o.value=JSON.parse(a),typeof o.value.chapterIndex>"u"&&(o.value.chapterIndex=0)),J()});const J=()=>{n.resetConnect(),I(n.saveBookProgress().finally(X))},X=()=>M.getBookShelf().then(a=>{n.setConnectType("success"),a.data.isSuccess?n.addBooks(a.data.data.sort(function(s,g){var d=s.durChapterTime||0,m=g.durChapterTime||0;return m-d})):S.error(a.data.errorMsg),n.setConnectStatus("已连接 "),n.setNewConnect(!1)}).catch(function(a){throw n.setConnectType("danger"),n.setConnectStatus("连接失败"),S.error("后端连接失败"),n.setNewConnect(!1),a});return(a,s)=>{const g=ie,d=K,m=ze;return i(),u("div",{class:H({"index-wrapper":!0,night:t(c),day:!t(c)})},[e("div",Ve,[s[5]||(s[5]=e("div",{class:"navigation-title-wrapper"},[e("div",{class:"navigation-title"},"阅读"),e("div",{class:"navigation-sub-title"},"清风不识字，何故乱翻书")],-1)),e("div",Me,[w(g,{placeholder:"搜索书籍，在线书籍自动加入书架",modelValue:t(h),"onUpdate:modelValue":s[0]||(s[0]=_=>ne(h)?h.value=_:null),class:"search-input","prefix-icon":t(le),onKeyup:Z(U,["enter"])},null,8,["modelValue","prefix-icon"])]),e("div",Te,[e("div",Ne,[s[3]||(s[3]=e("div",{class:"recent-title"},"最近阅读",-1)),e("div",Pe,[w(d,{type:t(o).name=="尚无阅读记录"?"warning":"",class:H(["recent-book",{"no-point":t(o).url==""}]),size:"large",onClick:s[1]||(s[1]=_=>L(t(o).url,t(o).name,t(o).author,t(o).chapterIndex,t(o).chapterPos))},{default:R(()=>[b(l(t(o).name),1)]),_:1},8,["type","class"])])]),e("div",Le,[s[4]||(s[4]=e("div",{class:"setting-title"},"基本设定",-1)),e("div",Je,[w(g,{class:"setting-input",size:"small",disabled:t(p).disable,modelValue:t(p).ip,"onUpdate:modelValue":s[2]||(s[2]=_=>t(p).ip=_),onKeydown:Z(Q,["enter"])},null,8,["disabled","modelValue"]),w(d,{type:"primary",class:"setting-toggle",onClick:Y},{default:R(()=>[b(l(t(p).disable?"修改":"取消"),1)]),_:1})]),e("div",De,[w(d,{type:t(E),size:"large",class:"setting-connect"},{default:R(()=>[b(l(t(z)),1)]),_:1},8,["type"])])])]),e("div",We,[e("a",Ze,[e("div",He,[e("img",{src:t(Ee),alt:""},null,8,Ke)])])])]),e("div",{class:"shelf-wrapper",ref_key:"shelfWrapper",ref:y},[w(m,{books:t(f),onBookClick:G,isSearch:t(B)},null,8,["books","isSearch"])],512)],2)}}},qe=O(Oe,[["__scopeId","data-v-3355089b"]]);export{qe as default};