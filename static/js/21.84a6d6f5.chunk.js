(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[21],{1367:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var i=n(38),c=n(3),a=n.n(c),r=n(12),o=n(18),l=n(9),s=n(7),d=n(1),u=n(4),b=n(5),j=n(8),O=n(2),v=n(55),x=n(13),m=n(34),p=n(178),h=n(203),C=n(369),f=n(191),y=n(25),R=n(103),I=n(109),E=n(57),g=n(36),T=n(22),U=n(58),w=n(40),Y=n(269),N=n(105),_=n(860),k=n(35),S=n(161);var B=n(59),A=n(63),D=n(218),P=n(31),q=n(129),L=n(225),Q=n(116),W=n(98),V=n(333);function z(){return Object(P.c)((function(e){return e.burn}))}var M,F=n(53),H=n(247),G=n(0),J=u.e.div(M||(M=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function X(e){var t,n,c,s,u,M,X,K,Z,$,ee,te,ne,ie,ce,ae,re,oe,le,se=e.history,de=e.match.params,ue=de.currencyIdA,be=de.currencyIdB,je=null!==(t=Object(U.c)(ue))&&void 0!==t?t:void 0,Oe=null!==(n=Object(U.c)(be))&&void 0!==n?n:void 0,ve=Object(T.a)(),xe=ve.account,me=ve.chainId,pe=ve.library,he=Object(d.useMemo)((function(){return[Object(B.b)(je,me),Object(B.b)(Oe,me)]}),[je,Oe,me]),Ce=Object(l.a)(he,2),fe=Ce[0],ye=Ce[1],Re=Object(x.b)().t,Ie=z(),Ee=Ie.independentField,ge=Ie.typedValue,Te=function(e,t){var n,i,c,a,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=z(),O=b.independentField,v=b.typedValue,x=Object(q.b)(e,t),m=Object(l.a)(x,2)[1],p=Object(W.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(B.b)(e,u),Object(B.b)(t,u)],f=C[0],y=C[1],R=(c={},Object(o.a)(c,V.a.CURRENCY_A,f),Object(o.a)(c,V.a.CURRENCY_B,y),Object(o.a)(c,V.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),c),I=Object(L.a)(null===m||void 0===m?void 0:m.liquidityToken),E=m&&I&&h&&f&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(f,m.getLiquidityValue(f,I,h,!1).raw):void 0,g=m&&I&&h&&y&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(y,m.getLiquidityValue(y,I,h,!1).raw):void 0,U=(a={},Object(o.a)(a,V.a.CURRENCY_A,E),Object(o.a)(a,V.a.CURRENCY_B,g),a),w=new j.g("0","100");if(O===V.a.LIQUIDITY_PERCENT)w=new j.g(v,"100");else if(O===V.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(Q.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new j.g(Y.raw,h.raw))}}else if(R[O]){var N=Object(Q.a)(v,R[O]),_=U[O];N&&_&&!N.greaterThan(_)&&(w=new j.g(N.raw,_.raw))}var k,S,A=(r={},Object(o.a)(r,V.a.LIQUIDITY_PERCENT,w),Object(o.a)(r,V.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new j.k(h.token,w.multiply(h.raw).quotient):void 0),Object(o.a)(r,V.a.CURRENCY_A,f&&w&&w.greaterThan("0")&&E?new j.k(f,w.multiply(E.raw).quotient):void 0),Object(o.a)(r,V.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new j.k(y,w.multiply(g.raw).quotient):void 0),r);return d||(k="Connect Wallet"),A[V.a.LIQUIDITY]&&A[V.a.CURRENCY_A]&&A[V.a.CURRENCY_B]||(k=null!==(S=k)&&void 0!==S?S:"Enter an amount"),{pair:m,parsedAmounts:A,error:k}}(null!==je&&void 0!==je?je:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),Ue=Te.pair,we=Te.parsedAmounts,Ye=Te.error,Ne=function(){var e=Object(P.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(V.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,_e=!Ye,ke=Object(d.useState)(!1),Se=Object(l.a)(ke,2),Be=Se[0],Ae=Se[1],De=Object(d.useState)(!1),Pe=Object(l.a)(De,2),qe=Pe[0],Le=Pe[1],Qe=Object(d.useState)(""),We=Object(l.a)(Qe,2),Ve=We[0],ze=We[1],Me=Object(Y.a)(),Fe=Object(F.l)(),He=Object(l.a)(Fe,1)[0],Ge=(Z={},Object(o.a)(Z,V.a.LIQUIDITY_PERCENT,we[V.a.LIQUIDITY_PERCENT].equalTo("0")?"0":we[V.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":we[V.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,V.a.LIQUIDITY,Ee===V.a.LIQUIDITY?ge:null!==(c=null===(s=we[V.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(Z,V.a.CURRENCY_A,Ee===V.a.CURRENCY_A?ge:null!==(u=null===(M=we[V.a.CURRENCY_A])||void 0===M?void 0:M.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,V.a.CURRENCY_B,Ee===V.a.CURRENCY_B?ge:null!==(X=null===(K=we[V.a.CURRENCY_B])||void 0===K?void 0:K.toSignificant(6))&&void 0!==X?X:""),Z),Je=null===($=we[V.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),Xe=Object(w.q)(null===Ue||void 0===Ue||null===(ee=Ue.liquidityToken)||void 0===ee?void 0:ee.address),Ke=Object(d.useState)(null),Ze=Object(l.a)(Ke,2),$e=Ze[0],et=Ze[1],tt=Object(A.b)(we[V.a.LIQUIDITY],g.t),nt=Object(l.a)(tt,2),it=nt[0],ct=nt[1];function at(){return(at=Object(r.a)(a.a.mark((function e(){var t,n,i,c,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Xe&&Ue&&pe&&Me){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=we[V.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Xe.nonces(xe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"ADEX LPs",version:"1",chainId:me,verifyingContract:Ue.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:xe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Me.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),pe.send("eth_signTypedData_v4",[xe,l]).then(b.splitSignature).then((function(e){et({v:e.v,r:e.r,s:e.s,deadline:Me.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&ct()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var rt=Object(d.useCallback)((function(e,t){return et(null),Ne(e,t)}),[Ne]),ot=Object(d.useCallback)((function(e){return rt(V.a.LIQUIDITY,e)}),[rt]),lt=Object(d.useCallback)((function(e){return rt(V.a.CURRENCY_A,e)}),[rt]),st=Object(d.useCallback)((function(e){return rt(V.a.CURRENCY_B,e)}),[rt]),dt=Object(N.d)();function ut(){return bt.apply(this,arguments)}function bt(){return(bt=Object(r.a)(a.a.mark((function e(){var t,n,c,r,l,s,d,u,b,O,x,m,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me&&pe&&xe&&Me){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=we[V.a.CURRENCY_A],c=we[V.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.g)(me,pe,xe),t={},Object(o.a)(t,V.a.CURRENCY_A,Object(k.c)(n,He)[0]),Object(o.a)(t,V.a.CURRENCY_B,Object(k.c)(c,He)[0]),l=t,je&&Oe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=we[V.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=Oe===j.d,u=je===j.d||d,fe&&ye){e.next=16;break}throw new Error("could not wrap");case 16:if(it!==A.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,Me.toHexString()]):(b=["removeLiquidity"],O=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,Me.toHexString()]),e.next=25;break;case 20:if(null===$e){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,$e.deadline,!1,$e.v,$e.r,$e.s]):(b=["removeLiquidityWithPermit"],O=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,$e.deadline,!1,$e.v,$e.r,$e.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=x[m],Le(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h}])).then((function(e){var t,n;Le(!1),dt(e,{summary:"Remove ".concat(null===(t=we[V.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===(n=we[V.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),ze(e.hash)})).catch((function(e){Le(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.ic,{fontSize:"24px",children:null===(e=we[V.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:je,size:"24px"}),Object(G.jsx)(O.ic,{fontSize:"24px",ml:"10px",children:null===je||void 0===je?void 0:je.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(O.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.ic,{fontSize:"24px",children:null===(t=we[V.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:Oe,size:"24px"}),Object(G.jsx)(O.ic,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(O.ic,{small:!0,textAlign:"left",pt:"12px",children:Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:He/100})})]})}function Ot(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ic,{children:Re("%assetA%/%assetB% Burned",{assetA:null!==(e=null===je||void 0===je?void 0:je.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(E.b,{currency0:je,currency1:Oe,margin:!0}),Object(G.jsx)(O.ic,{children:null===(n=we[V.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ue&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ic,{children:Re("Price")}),Object(G.jsxs)(O.ic,{children:["1 ",null===je||void 0===je?void 0:je.symbol," = ",fe?Ue.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(O.ic,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?Ue.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]}),Object(G.jsx)(O.q,{disabled:!(it===A.a.APPROVED||null!==$e),onClick:ut,children:Re("Confirm")})]})}var vt=Re("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=we[V.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===je||void 0===je?void 0:je.symbol)&&void 0!==ie?ie:"",amountB:null!==(ce=null===(ae=we[V.a.CURRENCY_B])||void 0===ae?void 0:ae.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(re=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==re?re:""}),xt=Object(d.useCallback)((function(e){rt(V.a.LIQUIDITY_PERCENT,e.toString())}),[rt]),mt=je===j.d||Oe===j.d,pt=Boolean(me&&(je&&Object(j.o)(j.n[me],je)||Oe&&Object(j.o)(j.n[me],Oe))),ht=Object(d.useCallback)((function(e){be&&Object(S.a)(e)===be?se.push("/remove/".concat(Object(S.a)(e),"/").concat(ue)):se.push("/remove/".concat(Object(S.a)(e),"/").concat(be))}),[ue,be,se]),Ct=Object(d.useCallback)((function(e){ue&&Object(S.a)(e)===ue?se.push("/remove/".concat(be,"/").concat(Object(S.a)(e))):se.push("/remove/".concat(ue,"/").concat(Object(S.a)(e)))}),[ue,be,se]),ft=Object(d.useCallback)((function(){et(null),Ve&&rt(V.a.LIQUIDITY_PERCENT,"0"),ze("")}),[rt,Ve]),yt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(we[V.a.LIQUIDITY_PERCENT].toFixed(0)),xt),Rt=Object(l.a)(yt,2),It=Rt[0],Et=Rt[1],gt=Object(O.Hc)(Object(G.jsx)(p.c,{title:Re("You will receive"),customOnDismiss:ft,attemptingTxn:qe,hash:Ve||"",content:function(){return Object(G.jsx)(p.a,{topContent:jt,bottomContent:Ot})},pendingText:vt}),!0,!0,"removeLiquidityModal"),Tt=Object(l.a)(gt,1)[0];return Object(G.jsxs)(H.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Re("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===je||void 0===je?void 0:je.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:""}),subtitle:"To receive ".concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(G.jsxs)(O.v,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ic,{children:Re("Amount")}),Object(G.jsx)(O.q,{variant:"text",scale:"sm",onClick:function(){return Ae(!Be)},children:Re(Be?"Simple":"Detailed")})]}),!Be&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(O.ic,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ge[V.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(O.Ub,{name:"lp-amount",min:0,max:100,value:It,onValueChanged:function(e){return Et(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(O.W,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(O.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(V.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(O.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(V.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(O.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(V.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(O.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(V.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Be&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(O.c,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(O.ic,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("You will receive")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.W,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(O.W,{children:[Object(G.jsx)(E.a,{currency:je}),Object(G.jsx)(O.ic,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===je||void 0===je?void 0:je.symbol})]}),Object(G.jsx)(O.ic,{small:!0,children:Ge[V.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(O.W,{justifyContent:"space-between",children:[Object(G.jsxs)(O.W,{children:[Object(G.jsx)(E.a,{currency:Oe}),Object(G.jsx)(O.ic,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(O.ic,{small:!0,children:Ge[V.a.CURRENCY_B]||"-"})]}),me&&(pt||mt)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:mt?Object(G.jsx)(_.a,{to:"/remove/".concat(je===j.d?j.n[me].address:ue,"/").concat(Oe===j.d?j.n[me].address:be),children:Re("Receive WBNB")}):pt?Object(G.jsx)(_.a,{to:"/remove/".concat(je&&Object(j.o)(je,j.n[me])?"BNB":ue,"/").concat(Oe&&Object(j.o)(Oe,j.n[me])?"BNB":be),children:Re("Receive BNB")}):null}):null]})]})]}),Be&&Object(G.jsxs)(O.m,{my:"16px",children:[Object(G.jsx)(h.a,{value:Ge[V.a.LIQUIDITY],onUserInput:ot,onMax:function(){rt(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,disableCurrencySelect:!0,currency:null===Ue||void 0===Ue?void 0:Ue.liquidityToken,pair:Ue,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.c,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[V.a.CURRENCY_A],onUserInput:lt,onMax:function(){return rt(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:je,label:Re("Output"),onCurrencySelect:ht,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[V.a.CURRENCY_B],onUserInput:st,onMax:function(){return rt(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:Oe,label:Re("Output"),onCurrencySelect:Ct,id:"remove-liquidity-tokenb"})]}),Ue&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(O.ic,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("Prices")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.W,{justifyContent:"space-between",children:[Object(G.jsxs)(O.ic,{small:!0,color:"textSubtle",children:["1 ",null===je||void 0===je?void 0:je.symbol," ="]}),Object(G.jsxs)(O.ic,{small:!0,children:[fe?Ue.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(O.W,{justifyContent:"space-between",children:[Object(G.jsxs)(O.ic,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(O.ic,{small:!0,children:[ye?Ue.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]})]}),Object(G.jsx)(O.m,{position:"relative",mt:"16px",children:xe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.q,{variant:it===A.a.APPROVED||null!==$e?"success":"primary",onClick:function(){return at.apply(this,arguments)},disabled:it!==A.a.NOT_APPROVED||null!==$e,width:"100%",mr:"0.5rem",children:it===A.a.PENDING?Object(G.jsx)(D.a,{children:Re("Enabling")}):it===A.a.APPROVED||null!==$e?Re("Enabled"):Re("Enable")}),Object(G.jsx)(O.q,{variant:!_e&&we[V.a.CURRENCY_A]&&we[V.a.CURRENCY_B]?"danger":"primary",onClick:function(){Tt()},width:"100%",disabled:!_e||null===$e&&it!==A.a.APPROVED,children:Ye||Re("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),Ue?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:pt,pair:Ue})}):null]})}},860:function(e,t,n){"use strict";var i,c=n(7),a=n(87),r=n(4),o=Object(r.e)(a.a)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=21.84a6d6f5.chunk.js.map