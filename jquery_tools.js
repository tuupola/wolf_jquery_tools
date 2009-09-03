/*
 * jquery.tools 1.1.0 - The missing UI library for the Web
 * 
 * [tools.tabs-1.0.2, tools.tooltip-1.1.0, tools.scrollable-1.1.0, tools.overlay-1.1.0, tools.expose-1.0.4]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * File generated: Thu Sep 03 04:03:32 EDT 2009
 */
(function(d){d.tools=d.tools||{};d.tools.tabs={version:"1.0.2",conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",api:false,rotate:false},addEffect:function(e,f){c[e]=f}};var c={"default":function(f,e){this.getPanes().hide().eq(f).show();e.call()},fade:function(g,e){var f=this.getConf(),h=f.fadeOutSpeed,j=this.getCurrentPane();if(h){j.fadeOut(h)}else{j.hide()}this.getPanes().eq(g).fadeIn(f.fadeInSpeed,e)},slide:function(f,e){this.getCurrentPane().slideUp(200);this.getPanes().eq(f).slideDown(400,e)},ajax:function(f,e){this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"),e)}};var b;d.tools.tabs.addEffect("horizontal",function(f,e){if(!b){b=this.getPanes().eq(0).width()}this.getCurrentPane().animate({width:0},function(){d(this).hide()});this.getPanes().eq(f).animate({width:b},function(){d(this).show();e.call()})});function a(f,g,h){var e=this,i;function j(k,l){d(e).bind(k,function(n,m){if(l&&l.call(this,m.index)===false&&m){m.proceed=false}});return e}d.each(h,function(k,l){if(d.isFunction(l)){j(k,l)}});d.extend(this,{click:function(l){var o=e.getCurrentPane();var m=f.eq(l);if(typeof l=="string"&&l.replace("#","")){m=f.filter("[href*="+l.replace("#","")+"]");l=Math.max(f.index(m),0)}if(h.rotate){var n=f.length-1;if(l<0){return e.click(n)}if(l>n){return e.click(0)}}if(!m.length){if(i>=0){return e}l=h.initialIndex;m=f.eq(l)}var k={index:l,proceed:true};d(e).triggerHandler("onBeforeClick",k);if(!k.proceed){return e}if(l===i){return e}m.addClass(h.current);c[h.effect].call(e,l,function(){d(e).triggerHandler("onClick",k)});f.removeClass(h.current);m.addClass(h.current);i=l;return e},getConf:function(){return h},getTabs:function(){return f},getPanes:function(){return g},getCurrentPane:function(){return g.eq(i)},getCurrentTab:function(){return f.eq(i)},getIndex:function(){return i},next:function(){return e.click(i+1)},prev:function(){return e.click(i-1)},onBeforeClick:function(k){return j("onBeforeClick",k)},onClick:function(k){return j("onClick",k)}});f.each(function(k){d(this).bind(h.event,function(l){e.click(k);return l.preventDefault()})});if(location.hash){e.click(location.hash)}else{e.click(h.initialIndex)}g.find("a[href^=#]").click(function(){e.click(d(this).attr("href"))})}d.fn.tabs=function(i,f){var g=this.eq(typeof f=="number"?f:0).data("tabs");if(g){return g}var h=d.extend({},d.tools.tabs.conf),e=this.length;d.extend(h,f);if(d.isFunction(f)){f={onBeforeClick:f}}d.extend(h,f);this.each(function(l){var j=d(this);var k=j.find(h.tabs);if(!k.length){k=j.children()}var m=j.children(i);if(!m.length){m=e==1?d(i):j.parent().find(i)}g=new a(k,m,h);j.data("tabs",g)});return h.api?g:this}})(jQuery);
(function(c){c.tools=c.tools||{};c.tools.tooltip={version:"1.1.0",conf:{effect:"slide",direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!c.browser.msie,fadeOutSpeed:"fast",tip:null,predelay:0,delay:30,opacity:1,lazy:undefined,position:["top","center"],cancelDefault:true,offset:[0,0],api:false,events:{def:"mouseover,mouseout",input:"focus,blur",widget:"focus mouseover,blur mouseout"}},addEffect:function(e,g,f){b[e]=[g,f]}};var b={toggle:[function(e){var f=this.getConf();this.getTip().css({opacity:f.opacity}).show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){this.getTip().fadeIn(this.getConf().fadeInSpeed,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};var d={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};c.tools.tooltip.addEffect("slide",function(e){var g=this.getConf(),h=this.getTip(),i=g.slideFade?{opacity:g.opacity}:{},f=d[g.direction]||d.up;i[f[1]]=f[0]+"="+g.slideOffset;if(g.slideFade){h.css({opacity:0})}h.show().animate(i,g.slideInSpeed,e)},function(f){var h=this.getConf(),j=h.slideOffset,i=h.slideFade?{opacity:0}:{},g=d[h.direction]||d.up;var e=""+g[0];if(h.bounce){e=e=="+"?"-":"+"}i[g[1]]=e+"="+j;this.getTip().animate(i,h.slideOutSpeed,function(){c(this).hide();f.call()})});function a(f,g){var p=this;f.data("tooltip",p);var l=f.next();if(g.tip){l=c(g.tip);if(l.length>1){l=f.nextAll(g.tip).eq(0);if(!l.length){l=f.parent().nextAll(g.tip).eq(0)}}}function h(q,r){c(p).bind(q,function(t,s){if(r&&r.call(this,s?s.position:undefined)===false&&s){s.proceed=false}});return p}function o(){var t=f.position().top-l.outerHeight();var q=l.outerHeight()+f.outerHeight();var u=g.position[0];if(u=="center"){t+=q/2}if(u=="bottom"){t+=q}var r=f.outerWidth()+l.outerWidth();var s=f.position().left+f.outerWidth();u=g.position[1];if(u=="center"){s-=r/2}if(u=="left"){s-=r}t+=g.offset[0];s+=g.offset[1];return{top:t,left:s}}c.each(g,function(q,r){if(c.isFunction(r)){h(q,r)}});var j=f.is(":input"),e=j&&f.is(":checkbox, :radio, select, :button"),i=f.attr("type"),n=g.events[i]||g.events[j?(e?"widget":"input"):"def"];n=n.split(/,\s*/);f.bind(n[0],function(r){var q=l.data("trigger");if(q&&q[0]!=this){l.hide()}r.target=this;p.show(r);l.hover(p.show,function(s){p.hide()})});f.bind(n[1],function(){p.hide()});if(!c.browser.msie&&!j){f.mousemove(function(){if(!p.isShown()){f.triggerHandler("mouseover")}})}if(g.opacity<1){l.css("opacity",g.opacity)}var m=0,k=f.attr("title");if(k&&g.cancelDefault){f.removeAttr("title");f.data("title",k)}c.extend(p,{show:function(r){if(r){f=c(r.target)}clearTimeout(l.data("timer"));if(l.is(":animated")||l.is(":visible")){return p}function q(){l.data("trigger",f);var t=o();if(g.tip&&k){l.html(k)}var s={proceed:true,position:t};c(p).trigger("onBeforeShow",s);if(s.proceed===false){return p}t=o();l.css({position:"absolute",top:t.top,left:t.left});b[g.effect][0].call(p,function(){c(p).trigger("onShow")})}if(g.predelay){clearTimeout(m);m=setTimeout(q,g.predelay)}else{q()}return p},hide:function(){clearTimeout(l.data("timer"));clearTimeout(m);if(!l.is(":visible")){return}function q(){var r={proceed:true};c(p).trigger("onBeforeHide",r);if(r.proceed===false){return}b[g.effect][1].call(p,function(){c(p).trigger("onHide")})}if(g.delay){l.data("timer",setTimeout(q,g.delay))}else{q()}return p},isShown:function(){return l.is(":visible, :animated")},getConf:function(){return g},getTip:function(){return l},getTrigger:function(){return f},onBeforeShow:function(q){return h("onBeforeShow",q)},onShow:function(q){return h("onShow",q)},onBeforeHide:function(q){return h("onBeforeHide",q)},onHide:function(q){return h("onHide",q)}})}c.prototype.tooltip=function(e){var f=this.eq(typeof e=="number"?e:0).data("tooltip");if(f){return f}var g=c.extend(true,{},c.tools.tooltip.conf);if(c.isFunction(e)){e={onBeforeShow:e}}else{if(typeof e=="string"){e={tip:e}}}c.extend(true,g,e);if(typeof g.position=="string"){g.position=g.position.split(/,?\s/)}if(g.lazy!==false&&(g.lazy===true||this.length>20)){this.one("mouseover",function(){f=new a(c(this),g);f.show()})}else{this.each(function(){f=new a(c(this),g)})}return g.api?f:this}})(jQuery);
(function(c){c.tools=c.tools||{};c.tools.scrollable={version:"1.1.0",conf:{size:5,vertical:false,speed:400,keyboard:true,keyboardSteps:null,disabledClass:"disabled",hoverClass:null,clickable:true,activeClass:"active",easing:"swing",items:".items",item:null,prev:".prev",next:".next",prevPage:".prevPage",nextPage:".nextPage",api:false}};var d,a=0;function b(r,o,m){var t=this,e=!o.vertical,f=r.children(),l=0,j;if(!d){d=t}function p(u,v){c(t).bind(u,function(x,w){if(v&&v.call(this,w.index)===false&&w){w.proceed=false}});return t}c.each(o,function(u,v){if(c.isFunction(v)){p(u,v)}});if(f.length>1){f=c(o.items,r)}function n(v){var u=c(v);return m==1||u.length==1||o.globalNav?u:r.parent().find(v)}r.data("finder",n);var g=n(o.prev),i=n(o.next),h=n(o.prevPage),q=n(o.nextPage);c.extend(t,{getIndex:function(){return l},getConf:function(){return o},getSize:function(){return t.getItems().size()},getPageAmount:function(){return Math.ceil(this.getSize()/o.size)},getPageIndex:function(){return Math.ceil(l/o.size)},getNaviButtons:function(){return g.add(i).add(h).add(q)},getRoot:function(){return r},getItemWrap:function(){return f},getItems:function(){return f.children(o.item)},getVisibleItems:function(){return t.getItems().slice(l,l+o.size)},seekTo:function(u,y,v){if(y===undefined){y=o.speed}if(c.isFunction(y)){v=y;y=o.speed}if(u<0){u=0}if(u>t.getSize()-o.size){return this.end()}var w=t.getItems().eq(u);if(!w.length){return t}var x={index:u,proceed:true};c(t).trigger("onBeforeSeek",x);if(!x.proceed){return t}function z(){if(v){v.call(t)}c(t).trigger("onSeek",x)}if(e){f.animate({left:-w.position().left},y,o.easing,z)}else{f.animate({top:-w.position().top},y,o.easing,z)}d=t;l=u;return t},move:function(w,v,u){j=w>0;return this.seekTo(l+w,v,u)},next:function(v,u){return this.move(1,v,u)},prev:function(v,u){return this.move(-1,v,u)},movePage:function(y,x,w){j=y>0;var u=o.size*y;var v=l%o.size;if(v>0){u+=(y>0?-v:o.size-v)}return this.move(u,x,w)},prevPage:function(v,u){return this.movePage(-1,v,u)},nextPage:function(v,u){return this.movePage(1,v,u)},setPage:function(v,w,u){return this.seekTo(v*o.size,w,u)},begin:function(v,u){return this.seekTo(0,v,u)},end:function(v,u){var w=this.getSize()-o.size;return w>0?this.seekTo(w,v,u):t},reload:function(){c(t).trigger("onReload",{});return t},onBeforeSeek:function(u){return p("onBeforeSeek",u)},onSeek:function(u){return p("onSeek",u)},onReload:function(u){return p("onReload",u)},focus:function(){d=t;return t},click:function(w){var x=t.getItems().eq(w),u=o.activeClass,v=o.size;if(w<0||w>=t.getSize()){return t}if(v==1){if(w===0||w==t.getSize()-1){j=(j===undefined)?true:!j}return j===false?t.prev():t.next()}if(v==2){if(w==l){w--}t.getItems().removeClass(u);x.addClass(u);return t.seekTo(w,time,fn)}if(!x.hasClass(u)){t.getItems().removeClass(u);x.addClass(u);var z=Math.floor(v/2);var y=w-z;if(y>t.getSize()-v){y=t.getSize()-v}if(y!==w){return t.seekTo(y)}}return t}});g.addClass(o.disabledClass).click(function(){t.prev()});i.click(function(){t.next()});q.click(function(){t.nextPage()});h.addClass(o.disabledClass).click(function(){t.prevPage()});t.onSeek(function(u){if(u===0){g.add(h).addClass(o.disabledClass)}else{g.add(h).removeClass(o.disabledClass)}if(u>=t.getSize()-o.size){i.add(q).addClass(o.disabledClass)}else{i.add(q).removeClass(o.disabledClass)}});var k=o.hoverClass,s="keydown."+Math.random().toString().substring(10);t.onReload(function(){if(k){t.getItems().hover(function(){c(this).addClass(k)},function(){c(this).removeClass(k)})}if(o.clickable){t.getItems().each(function(u){c(this).unbind("click.scrollable").bind("click.scrollable",function(v){if(c(v.target).is("a")){return}return t.click(u)})})}if(o.keyboard){c(document).bind(s,function(u){if(u.altKey||u.ctrlKey){return}if(o.keyboard!="static"&&d!=t){return}var v=o.keyboardSteps;if(e&&(u.keyCode==37||u.keyCode==39)){t.move(u.keyCode==37?-v:v);return u.preventDefault()}if(!e&&(u.keyCode==38||u.keyCode==40)){t.move(u.keyCode==38?-v:v);return u.preventDefault()}return true})}else{c(document).unbind(s)}});t.reload()}c.fn.scrollable=function(e){var f=this.eq(typeof e=="number"?e:0).data("scrollable");if(f){return f}var g=c.extend({},c.tools.scrollable.conf);c.extend(g,e);g.keyboardSteps=g.keyboardSteps||g.size;a+=this.length;this.each(function(){f=new b(c(this),g);c(this).data("scrollable",f)});return g.api?f:this}})(jQuery);
(function(c){c.tools=c.tools||{};c.tools.overlay={version:"1.1.0",addEffect:function(e,f,g){b[e]=[f,g]},conf:{top:"10%",left:"center",absolute:false,speed:"normal",closeSpeed:"fast",effect:"default",close:null,oneInstance:true,closeOnClick:true,closeOnEsc:true,api:false,expose:null,target:null}};var b={};c.tools.overlay.addEffect("default",function(e){this.getOverlay().fadeIn(this.getConf().speed,e)},function(e){this.getOverlay().fadeOut(this.getConf().closeSpeed,e)});var d=[];function a(i,f){var p=this,o=c(window),l,k,j,g=f.expose&&c.tools.expose.version;var h=f.target||i.attr("rel");k=h?c(h):null||i;if(i){i.click(function(q){p.load();return q.preventDefault()})}function n(e,q){c(p).bind(e,function(s,r){if(q&&q.call(this)===false&&r){r.proceed=false}});return p}c.each(f,function(e,q){if(c.isFunction(q)){n(e,q)}});c.extend(p,{load:function(){if(p.isOpened()){return p}if(f.oneInstance){c.each(d,function(){this.close()})}var t={proceed:true};c(p).trigger("onBeforeLoad",t);if(!t.proceed){return p}if(g){k.expose().load()}var s=f.top;if(typeof s=="string"){s=parseInt(s,10)/100*o.height()}var r=f.left;var e=k.outerWidth({margin:true});var q=k.outerHeight({margin:true});if(s=="center"){s=Math.max((o.height()-q)/2,0)}if(r=="center"){r=Math.max((o.width()-e)/2,0)}if(!f.absolute){s+=o.scrollTop();r+=o.scrollLeft()}k.css({top:s,left:r,position:"absolute"});b[f.effect][0].call(p,function(){c(p).trigger("onLoad");j=true});if(f.closeOnClick){c(document).bind("click.overlay",function(u){if(!p.isOpened()){return}var v=c(u.target);if(v.parents(k).length>1){return}c.each(d,function(){this.close()})})}if(f.closeOnEsc){c(document).unbind("keydown.overlay").bind("keydown.overlay",function(u){if(u.keyCode==27){c.each(d,function(){this.close()})}})}return p},close:function(){if(!p.isOpened()){return p}var q={proceed:true};c(p).trigger("onBeforeClose",q);if(!q.proceed){return p}b[f.effect][1].call(p,function(){j=false;c(p).trigger("onClose")});var e=true;c.each(d,function(){if(this.isOpened()){e=false}});if(e){c(document).unbind("click.overlay").unbind("keydown.overlay")}return p},getContent:function(){return k},getOverlay:function(){return k},getTrigger:function(){return i},getClosers:function(){return l},isOpened:function(){return j},getConf:function(){return f},onBeforeLoad:function(e){return n("onBeforeLoad",e)},onLoad:function(e){return n("onLoad",e)},onBeforeClose:function(e){return n("onBeforeClose",e)},onClose:function(e){return n("onClose",e)}});if(g){if(typeof f.expose=="string"){f.expose={color:f.expose}}c.extend(f.expose,{api:true,closeOnClick:f.closeOnClick,closeOnEsc:false});var m=k.expose(f.expose);m.onBeforeClose(function(){p.close()});p.onClose(function(){m.close()})}l=k.find(f.close||".close");if(!l.length&&!f.close){l=c('<div class="close"></div>');k.prepend(l)}l.click(function(){p.close()})}c.fn.overlay=function(e){var f=this.eq(typeof e=="number"?e:0).data("overlay");if(f){return f}if(c.isFunction(e)){e={onBeforeLoad:e}}var g=c.extend({},c.tools.overlay.conf);c.extend(true,g,e);this.each(function(){f=new a(c(this),g);d.push(f);c(this).data("overlay",f)});return g.api?f:this}})(jQuery);
(function(b){b.tools=b.tools||{};b.tools.expose={version:"1.0.4",conf:{maskId:null,loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,color:"#456",api:false}};function a(){if(b.browser.msie){var f=b(document).height(),e=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,f-e<20?e:f]}return[b(window).width(),b(document).height()]}function c(g,h){var e=this,d=null,f=false,i=0;function j(k,l){b(e).bind(k,function(n,m){if(l&&l.call(this)===false&&m){m.proceed=false}});return e}b.each(h,function(k,l){if(b.isFunction(l)){j(k,l)}});b(window).resize(function(){e.fit()});b.extend(this,{getMask:function(){return d},getExposed:function(){return g},getConf:function(){return h},isLoaded:function(){return f},load:function(){if(f){return e}i=g.eq(0).css("zIndex");if(h.maskId){d=b("#"+h.maskId)}if(!d||!d.length){var l=a();d=b("<div/>").css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:0,zIndex:h.zIndex});if(h.maskId){d.attr("id",h.maskId)}b("body").append(d);var k=d.css("backgroundColor");if(!k||k=="transparent"||k=="rgba(0, 0, 0, 0)"){d.css("backgroundColor",h.color)}if(h.closeOnEsc){b(document).bind("keydown.unexpose",function(o){if(o.keyCode==27){e.close()}})}if(h.closeOnClick){d.bind("click.unexpose",function(){e.close()})}}var n={proceed:true};b(e).trigger("onBeforeLoad",n);if(!n.proceed){return e}b.each(g,function(){var o=b(this);if(!/relative|absolute|fixed/i.test(o.css("position"))){o.css("position","relative")}});g.css({zIndex:Math.max(h.zIndex+1,i=="auto"?0:i)});var m=d.height();if(!this.isLoaded()){d.css({opacity:0,display:"block"}).fadeTo(h.loadSpeed,h.opacity,function(){if(d.height()!=m){d.css("height",m)}b(e).trigger("onLoad")})}f=true;return e},close:function(){if(!f){return e}var k={proceed:true};b(e).trigger("onBeforeClose",k);if(k.proceed===false){return e}d.fadeOut(h.closeSpeed,function(){b(e).trigger("onClose");g.css({zIndex:b.browser.msie?i:null})});f=false;return e},onBeforeLoad:function(k){return j("onBeforeLoad",k)},onLoad:function(k){return j("onLoad",k)},onBeforeClose:function(k){return j("onBeforeClose",k)},onClose:function(k){return j("onClose",k)},fit:function(){if(d){var k=a();d.css({width:k[0],height:k[1]})}}})}b.fn.expose=function(d){var e=this.eq(typeof d=="number"?d:0).data("expose");if(e){return e}if(typeof d=="string"){d={color:d}}var f=b.extend({},b.tools.expose.conf);b.extend(f,d);this.each(function(){e=new c(b(this),f);b(this).data("expose",e)});return f.api?e:this}})(jQuery);
