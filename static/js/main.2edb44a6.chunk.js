(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=(n(14),n(4)),s=n(5),d=n(6),b=n(9),l=n(8),j=n(7),u=n(0),h=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:j.btn,onClick:function(){return n(t)},children:t})})},O=function(e){var t=e.title;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),e.children]})},p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.percentage;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Good: ",t]}),Object(u.jsxs)("p",{children:["Neutral: ",n]}),Object(u.jsxs)("p",{children:["Bad: ",c]}),Object(u.jsxs)("p",{children:["Total: ",a," "]}),Object(u.jsxs)("p",{children:["Positive Feedback: ",r," %"]})]})},v=function(e){var t=e.message,n=e.children.props.total;return Object(u.jsx)("div",{children:0===n?Object(u.jsx)("p",{children:t}):e.children})},x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState(Object(i.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Number(0===e.countTotalFeedback()?0:(e.state.good/e.countTotalFeedback()*100).toFixed(2))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.state),n=this.state,c=n.good,a=n.neutral,r=n.bad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{title:"Please leave feedback",children:t.map((function(t){return Object(u.jsx)(h,{option:t,onLeaveFeedback:e.onLeaveFeedback},t)}))}),Object(u.jsx)(O,{title:"Statistics",children:Object(u.jsx)(v,{message:"No feedback given",children:Object(u.jsx)(p,{good:c,neutral:a,bad:r,total:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()})})})]})}}]),n}(c.Component);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={btn:"Button_btn__NSihG"}}},[[16,1,2]]]);
//# sourceMappingURL=main.2edb44a6.chunk.js.map