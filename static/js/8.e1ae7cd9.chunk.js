(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{1362:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(3),i=n.n(a),s=n(12),l=n(1),b=n(2),j=n(41),u=n(73),d=n(87),x=n(69),p=n(64),O=n(813),h=n(370),f=n(13),m=n(239),v=n(892),g=n(366),w=n(784),k=n(828),S=n(857),y=n(7),C=n(4),B=n(757),I=n(35),A=n(781),L=n(786),V=n(0),D=Object(C.e)(b.m)(c||(c=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),E=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(V.jsxs)(b.u,{mb:"16px",children:[Object(V.jsx)(b.x,{children:Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:n("Details")})}),Object(V.jsxs)(b.v,{children:[Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(b.ic,{color:"textSubtle",children:n("Identifier")}),Object(V.jsx)(b.ib,{href:"".concat(L.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(b.ic,{color:"textSubtle",children:n("Creator")}),Object(V.jsx)(b.ib,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(V.jsxs)(b.W,{alignItems:"center",mb:"16px",children:[Object(V.jsx)(b.ic,{color:"textSubtle",children:n("Snapshot")}),Object(V.jsx)(b.ib,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(V.jsxs)(D,{p:"16px",children:[Object(V.jsx)(k.a,{proposalState:t.state,mb:"8px"}),Object(V.jsxs)(b.W,{alignItems:"center",children:[Object(V.jsx)(b.ic,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(V.jsx)(b.ic,{ml:"8px",children:Object(B.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(V.jsxs)(b.W,{alignItems:"center",children:[Object(V.jsx)(b.ic,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(V.jsx)(b.ic,{ml:"8px",children:Object(B.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},P=n(814),N=n.n(P),T=Object(C.e)(b.ic)(r||(r=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),W=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(w.a)(n),o=Object(O.e)(),a=Object(j.c)().account,i=Object(w.f)(n);return Object(V.jsxs)(b.u,{children:[Object(V.jsx)(b.x,{children:Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:c("Current Results")})}),Object(V.jsxs)(b.v,{children:[o===p.g.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(w.f)(n),s=i.eq(0)?0:o.div(i).times(100).toNumber(),l=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(V.jsxs)(b.m,{mt:t>0?"24px":"0px",children:[Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(T,{mb:"4px",title:e,children:e}),l&&Object(V.jsxs)(b.gc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(b.E,{mr:"4px"})," ",c("Voted")]})]}),Object(V.jsx)(b.m,{mb:"4px",children:Object(V.jsx)(b.Ob,{primaryStep:s,scale:"sm"})}),Object(V.jsxs)(b.W,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(b.ic,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(V.jsxs)(b.ic,{children:[s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.g.LOADING&&N()(t.length).map((function(e,t){return Object(V.jsx)(b.m,{mt:t>0?"24px":"0px",children:Object(V.jsx)(b.Tb,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(6),F=n(9),H=n(49),M=n(93),Y=n(103),q=n(18),J=n(190),K=n(22),G=n(95);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var Q,R,_,U,X,Z,$,ee,te=n(835),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,i=e.onDismiss,s=Object(f.b)().t;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(te.a,{children:[Object(V.jsx)(b.ic,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:s("Voting For")}),Object(V.jsx)(T,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(V.jsx)(b.ic,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:s("Your Voting Power")}),r?Object(V.jsx)(b.Tb,{height:"64px",mb:"24px"}):Object(V.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(V.jsx)(b.ic,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(V.jsx)(b.bb,{scale:"sm",variant:"text",children:Object(V.jsx)(b.I,{width:"24px"})})]}),Object(V.jsx)(b.ic,{as:"p",color:"textSubtle",fontSize:"14px",children:s("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(V.jsx)(b.q,{isLoading:c,endIcon:c?Object(V.jsx)(b.h,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:s("Confirm Vote")}),Object(V.jsx)(b.q,{variant:"secondary",width:"100%",onClick:i,children:s("Cancel")})]})},ce=n(858),re=n(859),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(l.useState)(o.MAIN),x=Object(F.a)(d,2),O=x[0],h=x[1],m=Object(l.useState)(!0),v=Object(F.a)(m,2),g=v[0],k=v[1],S=Object(l.useState)(!1),y=Object(F.a)(S,2),C=y[0],B=y[1],I=Object(j.c)().account,A=Object(f.b)().t,L=Object(M.a)().toastError,D=Object(K.a)().library,E=Object(G.a)().theme,P=Object(re.a)(a,g),N=P.isLoading,T=P.total,W=P.cakeBalance,H=P.cakeVaultBalance,Y=P.cakePoolBalance,Q=P.poolsBalance,R=P.cakeBnbLpBalance,_=P.verificationHash,U=O===o.MAIN,X=U?null:function(){return h(o.MAIN)},Z=(t={},Object(q.a)(t,o.MAIN,A("Confirm Vote")),Object(q.a)(t,o.DETAILS,A("Voting Power")),t),$=function(){k(!1),u()},ee=function(){var e=Object(s.a)(i.a.mark((function e(){var t,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(w.e)()),{},{type:p.f.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:T.toString(),verificationHash:_}}})),e.next=5,Object(J.c)(D,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(w.i)(a);case 9:return B(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),B(!1),L(A("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(V.jsx)(b.vb,{title:Z[O],onBack:X,onDismiss:u,hideCloseButton:!U,headerBackground:E.colors.gradients.cardHeader,children:Object(V.jsxs)(b.m,{mb:"24px",width:"320px",children:[O===o.MAIN&&Object(V.jsx)(ne,{vote:r,isLoading:N,isPending:C,total:T,onConfirm:ee,onViewDetails:function(){return h(o.DETAILS)},onDismiss:$}),O===o.DETAILS&&Object(V.jsx)(ce.a,{total:T,cakeBalance:W,cakeVaultBalance:H,cakePoolBalance:Y,poolsBalance:Q,cakeBnbLpBalance:R})]})})},ae=["proposal"],ie=C.e.label(Q||(Q=Object(y.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),se=C.e.div(R||(R=Object(y.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),le=function(e){var t=e.proposal,n=Object(H.a)(e,ae),c=Object(l.useState)(null),r=Object(F.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(M.a)().toastSuccess,p=Object(x.b)(),O=Object(j.c)().account,m=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(h.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(b.Hc)(Object(V.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(F.a)(v,1)[0];return Object(V.jsxs)(b.u,Object(z.a)(Object(z.a)({},n),{},{children:[Object(V.jsx)(b.x,{children:Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(V.jsxs)(b.v,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(V.jsxs)(ie,{isChecked:n,isDisabled:!O,children:[Object(V.jsx)("div",{style:{flexShrink:0},children:Object(V.jsx)(b.Qb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!O})}),Object(V.jsx)(se,{children:Object(V.jsx)(b.ic,{as:"span",title:e,children:e})})]},e)})),O?Object(V.jsx)(b.q,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(V.jsx)(Y.a,{})]})]}))},be=n(261),je=n.n(be),ue=Object(C.e)(b.W)(_||(_=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(C.e)(b.Tb)(U||(U=Object(y.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(V.jsx)(b.m,{children:N()(10).map((function(e){return Object(V.jsxs)(ue,{children:[Object(V.jsx)(b.Tb,{height:"21px",mr:"32px",width:"100px"}),Object(V.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(V.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=n(14),Oe=n.n(pe),he=Object(C.e)(b.m).attrs({alignItems:"center"})(X||(X=Object(y.a)(["\n  grid-area: address;\n"]))),fe=Object(C.e)(b.m)(Z||(Z=Object(y.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(C.e)(b.m)($||($=Object(y.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(C.e)(b.X)(ee||(ee=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas: 'address choice vote';\n  grid-template-columns: minmax(110px, 200px) 1fr 1fr;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?new Oe.a(n.metadata.votingPower).toFormat(3):"--";return Object(V.jsxs)(ve,{children:[Object(V.jsx)(he,{children:Object(V.jsxs)(b.W,{alignItems:"center",children:[Object(V.jsx)(b.ib,{href:Object(I.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(V.jsxs)(b.gc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(b.E,{mr:"4px"})," ",r("Voted")]})]})}),Object(V.jsx)(fe,{children:Object(V.jsx)(T,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(V.jsx)(me,{children:Object(V.jsxs)(b.W,{alignItems:"center",justifyContent:"end",children:[Object(V.jsx)(b.ic,{title:n.metadata.votingPower,children:a}),o&&Object(V.jsx)(b.ib,{href:"".concat(L.b,"/").concat(n.id)})]})})]})},we=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},ke=function(e){var t=e.votes,n=Object(l.useState)(!1),c=Object(F.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,i=Object(j.c)().account,s=je()(t,[we,"created"],["desc","desc"]),u=r?s:s.slice(0,20),d=Object(O.e)()===p.g.IDLE;return Object(V.jsxs)(b.u,{children:[Object(V.jsx)(b.x,{children:Object(V.jsxs)(b.W,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(V.jsx)(b.h,{spin:!0,width:"22px"})]})}),!d&&Object(V.jsx)(xe,{}),d&&u.length>0&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(ve,{children:[Object(V.jsx)(he,{children:Object(V.jsx)(b.ic,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Voter")})}),Object(V.jsx)(fe,{children:Object(V.jsx)(b.ic,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Decision")})}),Object(V.jsx)(me,{children:Object(V.jsx)(b.ic,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Vote Weight")})})]}),u.map((function(e){var t=i&&e.voter.toLowerCase()===i.toLowerCase();return Object(V.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(V.jsx)(b.W,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(V.jsx)(b.q,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(V.jsx)(b.J,{color:"primary",width:"21px"}):Object(V.jsx)(b.G,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(V.jsx)(b.W,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(V.jsx)(b.Y,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(O.a)(e),n=Object(f.b)().t,c=Object(j.c)().account,r=Object(x.b)(),o=Object(O.d)(e),a=Object(O.e)(),y=Object(O.b)(),C=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),B=null!==t&&void 0!==t?t:{},I=B.id,A=void 0===I?null:I,L=B.snapshot,D=void 0===L?null:L,P=a===p.g.LOADING||y===p.g.LOADING;return Object(l.useEffect)((function(){r(Object(h.b)(e))}),[e,r]),Object(l.useEffect)((function(){A&&D&&function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(h.d)({proposalId:A,block:Number(D)}));case 2:r(Object(h.e)({proposalId:A,snapshot:D}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,D,r]),t?Object(V.jsxs)(m.a,{py:"40px",children:[Object(V.jsx)(b.m,{mb:"40px",children:Object(V.jsx)(b.q,{as:d.a,to:"/voting",variant:"text",startIcon:Object(V.jsx)(b.b,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(V.jsxs)(S.a,{children:[Object(V.jsxs)(b.m,{children:[Object(V.jsxs)(b.m,{mb:"32px",children:[Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(k.a,{proposalState:t.state}),Object(V.jsx)(k.b,{isCoreProposal:Object(w.h)(t),ml:"8px"})]}),Object(V.jsx)(b.Y,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(V.jsx)(b.m,{children:Object(V.jsx)(v.a,{children:t.body})})]}),!P&&!C&&t.state===p.d.ACTIVE&&Object(V.jsx)(le,{proposal:t,mb:"16px"}),Object(V.jsx)(ke,{votes:o})]}),Object(V.jsxs)(b.m,{children:[Object(V.jsx)(E,{proposal:t}),Object(V.jsx)(W,{choices:t.choices,votes:o})]})]})]}):Object(V.jsx)(g.a,{})}},781:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},784:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return S})),n.d(t,"f",(function(){return y}));var c=n(18),r=n(38),o=n(6),a=n(3),i=n.n(a),s=n(12),l=n(14),b=n.n(l),j=n(20),u=n(99),d=n(29),x=n(64),p=n(94),O=n(786),h=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},f=function(e,t){switch(t){case x.e.COMMUNITY:return e.filter((function(e){return!h(e)}));case x.e.CORE:return e.filter((function(e){return h(e)}));case x.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(j.f)(),decimals:18}}]}},g=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},w=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),S=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},786:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",i="cake.eth",s=10},813:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(31),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},i=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},s=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},828:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(6),r=n(49),o=(n(1),n(188)),a=n(64),i=n(0),s=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,s);return t===a.d.ACTIVE?Object(i.jsx)(o.h,Object(c.a)({},n)):t===a.d.PENDING?Object(i.jsx)(o.g,Object(c.a)({},n)):Object(i.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(i.jsx)(o.d,Object(c.a)({},n)):Object(i.jsx)(o.b,Object(c.a)({},n))}},835:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(6),o=n(7),a=(n(1),n(2)),i=n(4),s=n(0),l=i.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(s.jsx)(a.m,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},857:function(e,t,n){"use strict";var c,r=n(7),o=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},858:function(e,t,n){"use strict";n(1);var c=n(2),r=n(13),o=n(835),a=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,s=e.cakePoolBalance,l=e.poolsBalance,b=e.cakeBnbLpBalance,j=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.ic,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.ic,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.ic,{color:"secondary",children:j("Your Voting Power")}),Object(a.jsx)(c.ic,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.ic,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Your Cake Held Now")}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ic,{color:"textSubtle",fontSize:"16px",children:j("Wallet")}),Object(a.jsx)(c.ic,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ic,{color:"textSubtle",fontSize:"16px",children:j("Manual CAKE Pool")}),Object(a.jsx)(c.ic,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ic,{color:"textSubtle",fontSize:"16px",children:j("Auto CAKE Pool")}),Object(a.jsx)(c.ic,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ic,{color:"textSubtle",fontSize:"16px",children:j("Other Syrup Pools")}),Object(a.jsx)(c.ic,{textAlign:"right",children:l.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ic,{color:"textSubtle",fontSize:"16px",children:j("CAKE BNB LP")}),Object(a.jsx)(c.ic,{textAlign:"right",children:b.toFormat(3)})]})]})}},859:function(e,t,n){"use strict";var c=n(3),r=n.n(c),o=n(6),a=n(12),i=n(9),s=n(1),l=n(41),b=n(29),j=n(184),u=n(20),d=n(94),x=n(14),p=n.n(x),O=n(784),h={verificationHash:null,cakeBalance:b.d,cakeVaultBalance:b.d,cakePoolBalance:b.d,poolsBalance:b.d,cakeBnbLpBalance:b.d,total:b.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,b=Object(s.useState)(h),x=Object(i.a)(b,2),f=x[0],m=x[1],v=Object(s.useState)(!!c),g=Object(i.a)(v,2),w=g[0],k=g[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,i,s,l,b,x,h,f,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(j.b)(a);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(O.g)(c,s,a);case 14:l=n.sent,b=l.cakeBalance,x=l.cakeBnbLpBalance,h=l.cakePoolBalance,f=l.total,v=l.poolsBalance,g=l.cakeVaultBalance,w=l.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:w,cakeBalance:new p.a(b),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(h),poolsBalance:new p.a(v),cakeVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,k(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,k]),Object(o.a)(Object(o.a)({},f),{},{isLoading:w})}},892:function(e,t,n){"use strict";var c,r,o,a=n(6),i=(n(1),n(897)),s=n.n(i),l=n(933),b=n.n(l),j=n(7),u=n(2),d=n(4),x=n(0),p=d.e.table(c||(c=Object(j.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(x.jsx)(u.Y,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(x.jsx)(u.ic,Object(a.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(s.a,Object(a.a)({remarkPlugins:[b.a],components:f},e))}}}]);
//# sourceMappingURL=8.e1ae7cd9.chunk.js.map