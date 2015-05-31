var jeeBs_prototype=function(){"use strict";!function(t){t.basicFunctions=function(){_e().extendAll({bsSetItemAction:function(t,e,n,i){t.active&&i&&(i.lastActive=e,later().add(function(){e.trigger("click")})),e.on("click",function(){if(i){if(i.lastActive){i.lastActive.removeClass("active");var a=i.lastActive.parent();a&&a.removeClass("active")}i.lastActive=e,e.addClass("active")}var a=e.parent();a&&a.addClass("active"),t.viewFn&&(t.view||(t.view=t.viewFn())),t.action&&t.action(),t.view&&n.content&&n.content.pushView(t.view)})},bsSetItemContent:function(t,e){if(t.faicon&&(e.span(e.str(["fa fa-",t.glyph])),e.span().html("&nbsp;")),t.glyph&&(e.span(e.str(["glyphicon glyphicon-",t.glyph])),e.span().html("&nbsp;")),t.iconImg&&aa.img("iconImg",{src:t.iconImg}),t.leftBadge&&e.span("badge").text(t.leftBadge),t.buttongroup){var n=this.buttonGroup(t.buttongroup);myLi.add(n)}return t.title&&e.span().add(t.title),t.rightBadge&&e.span("badge").text(t.rightBadge),t.active&&e.addClass("active"),e}})},t.bread=function(){_e().extendAll({bsBreadcrumb:function(t){var e=_e("div"),n=e.ol("breadcrumb"),i=this;return t.items&&t.items.forEach(function(e){var a=n.li().a().text(e.title);i.bsSetItemAction(e,a,t)}),this.add(e),e}})},t.button=function(){_e().extendAll({bsButton:function(t,e,n){var i="";t.size&&("xs"==t.size&&(i="btn-xs"),"s"==t.size&&(i="btn-sm"),"l"==t.size&&(i="btn-lg"),"m"==t.size&&(i=""));var a=_e("button");return a.addClass(this.str(["btn btn-",t.type||"default"])),a.addClass(this.str(["btn-",t.size])),this.bsSetItemContent(t,a),this.bsSetItemAction(t,a,e,n),this.add(a),a}})},t.buttonGroup=function(){_e().extendAll({bsButtonGroup:function(t){var e=_e("div").addClass("btn-group"),n=this;if(t.items){var i={};t.items.forEach(function(a){var s=n.bsButton(a,t,i);e.add(s)})}return this.add(e),e}})},t.dropDown=function(){_e().extendAll({bsDropDown:function(){var t=_e("ul").addClass("dropdown-menu");t.q.attr("role","menu");var e=this;if(options.items){var n={};options.items.forEach(function(i){var a=t.li("",{role:"presentation"}),s=a.a("",{role:"menuitem",href:"#",tabindex:-1});e.bsSetItemContent(i,s),e.bsSetItemAction(i,s,options,n)})}return t}})},t.__traitInit&&!t.hasOwnProperty("__traitInit")&&(t.__traitInit=t.__traitInit.slice()),t.__traitInit||(t.__traitInit=[]),t.__traitInit.push(function(){this.basicFunctions(),this.buttonGroup(),this.button(),this.listgroupExtension(),this.navtabs(),this.dropDown(),this.pagination(),this.panel(),this.progress(),this.bread()}),t.listgroupExtension=function(){_e().extendAll({bsListGroup:function(t){var e=this,n=_e(t.ulElem||"ul").addClass(t.listClass||"list-group");return t.className&&n.addClass(t.className),t.items&&t.items.forEach(function(i){var a;if(i.dropdown&&t.listClass){var s=n.li("dropdown"),a=s.a("dropdown-toggle",{"data-toggle":"dropdown",href:"#"});setTimeout(function(){$(a._dom).dropdown()},50)}else{var a,o=t.liElem||"li",s=n[o](i.itemClass||t.itemClass||"list-group-item");a=t.listClass?s[t.aElem||"a"]():s}e.bsSetItemContent(i,a,t),i.dropdown&&t.listClass&&(a[t.spanElem||"span"]("caret"),s.add(i.dropdown)),e.bsSetItemAction(i,a,t)}),this.add(n),n}})},t.navtabs=function(){_e().extendAll({bsNavtabs:function(t){var e=_e("ul").addClass("nav nav-tabs");if(e.q.attr("role","tablist"),t.items){var n=this,i={};t.items.forEach(function(a){var s=e.li(),o=s.a();n.bsSetItemContent(a,o),n.bsSetItemAction(a,o,t,i)})}return this.add(e),e}})},t.pagination=function(){_e().extendAll({bsPagination:function(t){{var e=this,n=_e("ul").addClass("pagination");n.li().a().html("&laquo;")}if(t.items){var i={};t.items.forEach(function(a){var s=n.li(),o=s.a();e.bsSetItemContent(a,o),e.bsSetItemAction(a,o,t,i)})}n.li().a().html("&raquo;");return this.add(n),n}})},t.panel=function(){_e().extendAll({bsPanel:function(t){var e,n,i,a=_e("div").addClass(_e().str("panel panel-",t.type||"default")),s=a.div("panel-heading");if(t.body_collapse_id){var o=a.div("panel-collapse collapse",{id:t.body_collapse_id});e=o.div("panel-body"),n=o.div("panel-footer")}else e=a.div("panel-body"),n=a.div("panel-footer");return t.heading&&s.add(t.heading),t.title&&(i=s.h3("panel-title"),i.add(t.title)),t.content&&e.add(t.content),t.footer&&n.add(t.footer),this.add(a),a}})},t.progress=function(){_e().extendAll({bsProgress:function(t){t.value=t.value||0,t.valuemin||(t.valuemin=0),t.valuemax||(t.valuemax=100);var e=_e().addClass("progress"),n=e.div("progress-bar",{role:"progressbar","aria-valuenow":t.value,"aria-valuemin":t.valuemin,"aria-valuemax":t.valuemax}).width(e.str([t.value,"%"]));return n.text(t.title),this.add(e),e}})}}(this)},jeeBs=function(t,e,n,i,a,s,o,r){if(!(this instanceof jeeBs))return new jeeBs(t,e,n,i,a,s,o,r);var l=[t,e,n,i,a,s,o,r];if(this.__factoryClass){var d,u=this;if(this.__factoryClass.forEach(function(t){d=t.apply(u,l)}),"[object Function]"==Object.prototype.toString.call(d)){if(d._classInfo.name!=jeeBs._classInfo.name)return new d(t,e,n,i,a,s,o,r)}else if(d)return d}if(this.__traitInit){var u=this;this.__traitInit.forEach(function(t){t.apply(u,l)})}else"function"==typeof this.init&&this.init.apply(this,l)};jeeBs._classInfo={name:"jeeBs"},jeeBs.prototype=new jeeBs_prototype,"undefined"!=typeof window&&(window.jeeBs=jeeBs),"undefined"!=typeof window&&(window.jeeBs_prototype=jeeBs_prototype);