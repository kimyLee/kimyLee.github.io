webpackJsonp([0],{"/tJF":function(t,s){},"/tkS":function(t,s){},"0rB6":function(t,s){},HorL:function(t,s){},N5V9:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("O534"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var i=e("ngHh")({name:"app",data:function(){return{}},mounted:function(){},methods:{}},a,!1,function(t){e("HorL")},null,null).exports,r=e("1eSk"),o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rule"},[e("div",{staticClass:"inner-box"},[e("div",{staticClass:"banner-title"},[e("router-link",{staticClass:"tab-link",attrs:{to:{name:"ruler"}}},[t._v("活动规则")]),t._v(" "),e("span",{staticClass:"slider"}),t._v(" "),e("router-link",{staticClass:"tab-link",attrs:{to:{name:"rank"}}},[t._v("排行榜")]),t._v(" "),e("span",{staticClass:"slider"}),t._v(" "),e("router-link",{staticClass:"tab-link",attrs:{to:{name:"myreward"}}},[t._v("我的奖品")]),t._v(" "),e("router-view")],1)])])},staticRenderFns:[]};var c=e("ngHh")({name:"app",data:function(){return{}},mounted:function(){},methods:{}},o,!1,function(t){e("/tJF")},null,null).exports,l={name:"home",data:function(){return{}},components:{rule:c},mounted:function(){},methods:{}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home-page"},[e("img",{staticClass:"bg-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/page1.png"}}),t._v(" "),e("div",{staticClass:"rightside"},[e("div",{staticClass:"rightside-btn",on:{click:function(s){s.preventDefault(),t.$router.push({name:"rank"})}}},[t._v("排行榜")]),t._v(" "),e("div",{staticClass:"rightside-btn",on:{click:function(s){s.preventDefault(),t.$router.push({name:"myreward"})}}},[t._m(0)])]),t._v(" "),e("div",{staticClass:"option-panel",on:{click:function(s){s.preventDefault(),t.$router.push({name:"ruler"})}}},[e("span",{staticClass:"start-btn"},[t._v("挑战开始")]),t._v(" "),e("img",{staticClass:"logo-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/logo.png"}})]),t._v(" "),e("rule",{directives:[{name:"show",rawName:"v-show",value:t.$route.path.indexOf("home/")>0,expression:"$route.path.indexOf('home/') > 0"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"btn-text"},[this._v("我的"),s("br"),this._v("奖品")])}]};var u=e("ngHh")(l,d,!1,function(t){e("RVfg")},null,null).exports,m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ruler-intro"},[e("p",[t._v("1、根据萌犬的不同颜色，一次选择对应颜色的福禄寿喜。")]),t._v(" "),e("p",[t._v("2、选择匹配的正确颜色越多，分数越多，加油吧！")]),t._v(" "),e("p",[t._v("3、单次8000分以上可获得一次抽奖机会，中奖后填写寄送信息，没人每天仅仅可抽奖2次，奖品丰厚，数量有限，加油冲分吧！")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("本活动最终解释权归主办方所有。")]),t._v(" "),e("div",{staticClass:"start-panel"},[e("router-link",{staticClass:"btn-link",attrs:{to:{name:"game"}}},[t._v("GO")])],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("4、活动结束后，将赠送全国排名前二十位，寄送丰厚礼品。"),e("br"),t._v(" "),e("span",{staticClass:"orange-text"},[t._v("第1名：红米手机 1台")]),e("br"),t._v(" "),e("span",{staticClass:"orange-text"},[t._v("第2名：高档压杆箱 1个")]),e("br"),t._v(" "),e("span",{staticClass:"orange-text"},[t._v("第3名：美的电压力锅 1套")]),e("br"),t._v(" "),e("span",{staticClass:"orange-text"},[t._v("4~20名榜单奖：滕王阁幸福家礼盒 1份")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("活动时间："),e("br"),t._v(" "),e("span",{staticClass:"orange-text"},[t._v("2018年2月1日—2月10日")])])}]};var p=e("ngHh")({name:"app",data:function(){return{}},mounted:function(){},methods:{}},m,!1,function(t){e("0rB6")},null,null).exports,v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rank-panel"},[e("div",{staticClass:"my-rank"},[e("div",{staticClass:"my-pic"},[e("img",{attrs:{src:t.personInfo.pic}})]),t._v(" "),e("div",{staticClass:"my-info"},[e("div",{staticClass:"my-info-name"},[t._v(t._s(t.personInfo.name))]),t._v(" "),e("div",{staticClass:"my-info-score"},[t._v("最好成绩 "),e("span",{staticClass:"orange-text"},[t._v(t._s(t.personInfo.bestScore))])]),t._v(" "),e("div",{staticClass:"my-info-score"},[t._v("全国排名 "),e("span",{staticClass:"orange-text"},[t._v(t._s(t.personInfo.rank))])])])]),t._v(" "),e("div",[e("ul",{staticClass:"content"},t._l(t.rankList,function(s){return e("li",{key:s.Sort},[e("div",{staticClass:"ranking-section"},[e("span",{staticClass:"rank"},[t._v(t._s(s.Sort))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.UserLogo}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(s.UserName))]),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(s.score))])])])}))])])},staticRenderFns:[]};var h=e("ngHh")({name:"app",data:function(){return{personInfo:{pic:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/fu.png",name:"我可能是遗落地球的小仙女",bestScore:"100",rank:30},rankList:[{Sort:1,UserLogo:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/fu.png",UserName:"只想做安静的书呆子",score:199},{Sort:2,UserLogo:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/xi.png",UserName:"我可能是遗落地球的小仙女",score:198},{Sort:3,UserLogo:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/lu.png",UserName:"来呀被我伤害呀",score:197},{Sort:4,UserLogo:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/shou.png",UserName:"小龙虾",score:196},{Sort:5,UserLogo:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/fu.png",UserName:"kimmy",score:195}]}},mounted:function(){},methods:{}},v,!1,function(t){e("ou5R")},null,null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"reward"},[e("p",[t._v('1、"滕王阁幸福家"紫光礼盒1份')]),t._v(" "),e("p",{staticClass:"no-reward"},[t._v("还没获得奖品哦"),e("br"),t._v("多多努力赢取大奖吧")])])}]};var _=e("ngHh")({name:"app",data:function(){return{}},mounted:function(){},methods:{}},g,!1,function(t){e("WIHq")},null,null).exports,f={name:"game",data:function(){return{dogs:["fudog","ludog","shoudog","xidog"],items:[],lock:!1,clickCount:0,time:10,score:0,gameStart:!1,showDialog:!1}},mounted:function(){var t=1;this.items=this.dogs.map(function(s){return{dog:s,time:t++,clickError:!1}})},methods:{renderScence:function(){var t=this;this.time--,this.time>=0?setTimeout(function(){t.renderScence()},1e3):(this.time=0,this.gameOver())},gameOver:function(){this.lock=!0,this.showDialog=!0},restart:function(){this.showDialog=!1,this.gameStart=!1,this.time=10,this.score=0,this.lock=!1},update:function(t){var s=this;if(!this.lock){this.gameStart||(this.gameStart=!0,this.renderScence());var e=this.items[this.items.length-1];if(0===e.dog.indexOf(t)){var n={dog:this.dogs[Math.floor(4*Math.random())],time:(new Date).getTime(),clickError:!1};this.clickCount=this.clickCount>100?0:this.clickCount+1,this.items.splice(0,0,n),this.items.splice(this.items.length-1,1),this.score++}else this.lock=!0,e.clickError=!0,-1===e.dog.indexOf("_error")&&(e.dog=e.dog+"_error"),setTimeout(function(){s.lock=!1,e.clickError=!1},1e3)}},add:function(){},remove:function(){}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"game-page"},[e("img",{staticClass:"bg-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/gamepage.png"}}),t._v(" "),e("div",{staticClass:"content-box"},[e("div",{staticClass:"leftside"},[e("div",{staticClass:"leftside-btn"},[e("span",{staticClass:"btn-text"},[t._v("倒计时")]),t._v(" "),e("span",{staticClass:"btn-text-time"},[t._v(t._s(t.time)+"s")])])]),t._v(" "),e("div",{staticClass:"img-dog-panel"},[e("transition-group",{attrs:{name:t.clickCount%2?"list":"list-left",tag:"p"}},t._l(t.items,function(t,s){return e("span",{key:t.time,staticClass:"img-dog",class:"order"+s},[e("img",{class:{"click-error":t.clickError},attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/"+t.dog+".png"}})])}))],1),t._v(" "),e("div",{staticClass:"btns"},[e("span",{staticClass:"img-btn fu",on:{click:function(s){s.preventDefault(),t.update("fudog")}}},[e("img",{attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/fu.png"}})]),t._v(" "),e("span",{staticClass:"img-btn lu",on:{click:function(s){s.preventDefault(),t.update("ludog")}}},[e("img",{attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/lu.png"}})]),t._v(" "),e("span",{staticClass:"img-btn shou",on:{click:function(s){s.preventDefault(),t.update("shoudog")}}},[e("img",{attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/shou.png"}})]),t._v(" "),e("span",{staticClass:"img-btn xi",on:{click:function(s){s.preventDefault(),t.update("xidog")}}},[e("img",{attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/xi.png"}})])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDialog,expression:"showDialog"}],staticClass:"my-dialog"},[e("div",{staticClass:"dialog-head"},[e("img",{attrs:{src:"/luckydogs/static/img/caidai.png"}}),t._v(" "),e("span",{staticClass:"dialog-head-text"},[t._v(t._s(t.score)),e("span",{staticStyle:{"font-size":"1.4rem"}},[t._v(" 分")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.score>=8,expression:"score >= 8"}],staticClass:"dialog-box"},[e("p",{staticClass:"dialog-rank"},[t._v("全国排名 30")]),t._v(" "),e("img",{staticClass:"loterry-button",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/loterryBtn.png"},on:{click:function(s){s.preventDefault(),t.$router.push({name:"lottery"})}}}),t._v(" "),e("div",{staticClass:"button-panel"},[e("span",{staticClass:"dialog-btn share"},[t._v("分享")]),t._v(" "),e("span",{staticClass:"dialog-btn rank-list",on:{click:function(s){s.preventDefault(),t.$router.push({name:"rank"})}}},[t._v("排行榜")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.score<8,expression:"score < 8"}],staticClass:"dialog-box"},[e("p",{staticClass:"dialog-fail"},[t._v("挑战失败")]),t._v(" "),e("p",{staticClass:"dialog-fail small"},[t._v("不要灰心，继续努力哦")]),t._v(" "),e("div",{staticClass:"button-panel"},[e("span",{staticClass:"dialog-btn rank-list",staticStyle:{"font-size":"1.6rem"},on:{click:function(s){s.preventDefault(),t.restart(s)}}},[t._v("再来一局")])])])])])},staticRenderFns:[]};var b=e("ngHh")(f,C,!1,function(t){e("wwNa")},null,null).exports,w={name:"lottery",data:function(){return{result:"",blocks:[{index:1,turn:!1,reward:"谢谢参与"},{index:2,turn:!1,reward:"紫光礼盒"},{index:3,turn:!1,reward:"谢谢参与"},{index:8,turn:!1,reward:"精美雨伞"},{index:9,turn:!1,reward:"立即抽奖"},{index:4,turn:!1,reward:"经典台历"},{index:7,turn:!1,reward:"谢谢参与"},{index:6,turn:!1,reward:"瑞香礼盒"},{index:5,turn:!1,reward:"谢谢参与"}],speed:100,decayIndex:0,activeIndex:-1,speedState:"start",drawTimer:"",prizesCount:8,isDrawing:!1,startDrawIndex:1,speedCtrlFn:"",decayDistance:5,wonIndex:4}},components:{rule:c},mounted:function(){},methods:{begin:function(){var t=this;this.start(),setTimeout(function(){t.wonIndex=8*Math.random()+1<<0,t.stop()},2e3)},stop:function(){this.isDrawing=!1},start:function(t){var s=this;this.speedCtrlFn=t||function(t){var e=s.speed;switch(t){case"start":break;case"decay":e=Math.min(e+this.decayIndex*(400/this.decayDistance),600)}return e},this.startDraw()},startDraw:function(){var t=this;this.drawIndex=this.startDrawIndex,this.isDrawing=!0,this.startIndex=1,this.speedState="start",this.drawing(function(){return t.startIndex++,!!t.isDrawing||(t.decay(),!1)})},drawingCallback:function(t,s){this.activeIndex=t,console.log(t,s)},drawing:function(t,s){var e=this;window.clearTimeout(e.drawTimer);var n=s||e.speedCtrlFn.call(this,this.speedState)||200;e.drawingCallback&&e.drawingCallback(e.drawIndex,n),t&&t.call(e)&&(e.drawTimer=window.setTimeout(function(){e.increaseDrawIndex(),e.drawing(t)},n))},increaseDrawIndex:function(){this.drawIndex++,this.drawIndex>this.prizesCount&&(this.drawIndex=1)},decay:function(){var t=this,s=this.wonIndex-this.decayDistance%this.prizesCount;s<=0&&(s+=this.prizesCount),this.drawing(function(){return t.drawIndex!==s||(t.decayDraw(),!1)})},decayDraw:function(){var t=this;this.decayIndex=1,this.speedState="decay",this.drawing(function(){return t.decayIndex++,!(t.decayIndex>=t.decayDistance&&t.drawIndex===t.wonIndex)||(t.wonCallback&&t.wonCallback(t.wonIndex),!1)})},wonCallback:function(t){for(var s=this,e=function(e){if(s.blocks[e].index===t)return s.blocks[e].turn=!0,setTimeout(function(){s.result=s.blocks[e]},1e3),"break"},n=this.blocks.length;n--;){if("break"===e(n))break}setTimeout(function(){for(var t=s.blocks.length;t--;)9!==s.blocks[t].index&&(s.blocks[t].turn=!0)},500)}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lottery-page"},[e("img",{staticClass:"bg-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/lotteryBg.jpg"}}),t._v(" "),e("img",{staticClass:"logo-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/text.png"}}),t._v(" "),e("img",{staticClass:"logo-bottom-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/logo2.png"}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.result,expression:"!result"}],staticClass:"loterry-panel"},t._l(t.blocks,function(s){return e("div",{key:s.index,staticClass:"block-item",class:{turn:s.turn}},[e("div",{staticClass:"front block-item-page",class:{"click-btn":9===s.index,active:t.activeIndex===s.index},on:{click:function(s){s.preventDefault(),t.begin(s)}}},[9===s.index?e("div",{staticClass:"block-text"},[e("div",{staticClass:"block-text-top",staticStyle:{height:"50%"}},[t._v("立即")]),t._v(" "),e("div",{staticClass:"block-text-bottom",staticStyle:{height:"50%"}},[t._v("抽奖")])]):t._e()]),t._v(" "),e("div",{staticClass:"back block-item-page"},[e("div",{staticClass:"block-reward-text"},[e("div",{staticClass:"block-text-top",staticStyle:{height:"50%"}},[t._v(t._s(s.reward.slice(0,2)))]),t._v(" "),e("div",{staticClass:"block-text-bottom",staticStyle:{height:"50%"}},[t._v(t._s(s.reward.slice(2,4)))])])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.result,expression:"result"}],staticClass:"lottery-dialog"},[e("div",{staticClass:"dialog-box"},[t._m(0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"谢谢参与"!==t.result.reward,expression:"result.reward !== '谢谢参与'"}]},[e("p",{staticClass:"reward-name"},[t._v(t._s(t.result.reward))]),t._v(" "),e("p",{staticClass:"reward-name-small"},[t._v("恭喜您获得“滕王阁幸福家”"),e("br"),t._v(t._s(t.result.reward)+"一份")]),t._v(" "),e("div",{staticClass:"operation"},[e("span",{staticClass:"operation-btn",on:{click:function(s){s.preventDefault(),t.$router.push({name:"info"})}}},[t._v("填写信息")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"谢谢参与"===t.result.reward,expression:"result.reward === '谢谢参与'"}],staticStyle:{"text-align":"center"}},[e("img",{staticClass:"not-reward",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/smile.png"}}),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"operation"},[e("span",{staticClass:"operation-btn",on:{click:function(s){s.preventDefault(),t.$router.push({name:"game"})}}},[t._v("再来一局")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"close"},[s("span",{staticClass:"close-btn"},[this._v("×")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"reward-name-small",staticStyle:{"font-size":"1.8rem"}},[t._v("哎呀，与幸福擦肩而过"),e("br"),t._v("非常抱歉没有中奖"),e("br"),t._v("明天要继续加油哦！")])}]};var k=e("ngHh")(w,x,!1,function(t){e("N5V9")},null,null).exports,y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-page"},[e("img",{staticClass:"bg-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/lotteryBg.jpg"}}),t._v(" "),e("img",{staticClass:"logo-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/text.png"}}),t._v(" "),e("img",{staticClass:"logo-bottom-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/logo2.png"}}),t._v(" "),e("div",{staticClass:"input-panel"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("span",{staticClass:"submit-btn",on:{click:function(s){s.preventDefault(),t.$router.push({name:"last"})}}},[t._v("提交")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"input-item"},[this._v("姓名"),s("input",{attrs:{type:"text"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"input-item"},[this._v("电话"),s("input",{attrs:{type:"text"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"input-item"},[this._v("地址"),s("input",{attrs:{type:"text"}})])}]};var D=e("ngHh")({name:"info",data:function(){return{}},mounted:function(){},methods:{}},y,!1,function(t){e("W+kE")},null,null).exports,z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"last-page"},[e("img",{staticClass:"bg-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/last.jpg"}}),t._v(" "),e("img",{staticClass:"logo-bottom-img",attrs:{src:"http://pandora-project.oss-cn-shenzhen.aliyuncs.com/AdorableDog/static/img/logo2.png"}}),t._v(" "),e("div",{staticClass:"rightside"},[e("div",{staticClass:"rightside-btn",on:{click:function(s){s.preventDefault(),t.$router.push({name:"home"})}}},[t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"btn-text"},[this._v("返回"),s("br"),this._v("首页")])}]};var I=e("ngHh")({name:"home",data:function(){return{}},mounted:function(){},methods:{}},z,!1,function(t){e("/tkS")},null,null).exports;n.a.use(r.a);var S,$,E,j,A,N=new r.a({routes:[{path:"/",name:"home",component:u,children:[{name:"ruler",path:"home/ruler",component:p},{name:"rank",path:"home/rank",component:h},{name:"myreward",path:"home/myreward",component:_}]},{path:"/game",name:"game",component:b},{path:"/lottery",name:"lottery",component:k},{path:"/info",name:"info",component:D},{path:"/last",name:"last",component:I}]});S=document,$=window,E=S.documentElement,j="onorientationchange"in window?"orientationchange":"resize",A=function(){var t=E.clientWidth;t&&(E.style.fontSize=t/320*10+"px")},$.addEventListener(j,A,!1),S.addEventListener("DOMContentLoaded",A,!1),n.a.config.productionTip=!1,new n.a({el:"#app",router:N,components:{App:i},template:"<App/>"})},RVfg:function(t,s){},"W+kE":function(t,s){},WIHq:function(t,s){},ou5R:function(t,s){},wwNa:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.0ccbc67e2e7fd16f0bba.js.map