(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=(n(14),n(4)),s=n(5),d=n(6),b=n(9),j=n(8),u=(n(15),n(7)),l=n.n(u),h=n(0),O=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(h.jsx)("button",{className:l.a.btn,onClick:function(){return n(t)},children:t})},v=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(O,{option:e,onLeaveFeedback:n},e)}))})},p=function(e){var t=e.title;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),e.children]})},x=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.percentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a," "]}),Object(h.jsxs)("p",{children:["Positive Feedback: ",r," %"]})]})},f=function(e){var t=e.message,n=e.children.props.total;return Object(h.jsx)("div",{children:0===n?Object(h.jsx)("p",{children:t}):e.children})},k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState(Object(i.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Number(0===e.countTotalFeedback()?0:(e.state.good/e.countTotalFeedback()*100).toFixed(2))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.state,n=t.good,c=t.neutral,a=t.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(v,{option:e,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:Object(h.jsx)(f,{message:"No feedback given",children:Object(h.jsx)(x,{good:n,neutral:c,bad:a,total:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()})})})]})}}]),n}(c.Component);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={btn:"Button_btn__NSihG"}}},[[17,1,2]]]);
//# sourceMappingURL=main.1dc96a49.chunk.js.map