var jeeBs_prototype = function() {
  'use strict';;
  (function(_myTrait_) {
    _myTrait_.basicFunctions = function(t) {
      _e().extendAll({
        /*
           // Hash object
           {
             "hash": "#frontpage/",
             "parts": [
               "#frontpage",
               ""
             ],
             "controller": "frontpage",
             "action": "",
             "params": {},
             "rest": []
           } 
                   */
        bsSetItemAction: function(item, toElem, options, context) {

          if (item.active && context) {
            context.lastActive = toElem;
            later().add(function() {
              toElem.trigger("click");
            });
          }

          if (item.href) {

            main.div().pageController("default", {
              "default": function(params, canvas, data) {
                /*
                                    this.clear();
                                    console.log("Default", data);
                                    var items = [];
                                    if(data.controller) items.push( { title : data.controller || ""} );
                                    if(data.action )  items.push( { title : data.action || ""} );
                                    if(params["id"] ) items.push( { title : params["id"] || ""} );
                                    canvas.bsBreadcrumb( { items : items } );
                                    */

                if (data.hash.indexOf("#" + item.href) == 0) {

                  if (context) {
                    if (context.lastActive) {
                      context.lastActive.removeClass("active");
                      var p = context.lastActive.parent();
                      if (p) {
                        p.removeClass("active");
                      }
                    }
                    context.lastActive = toElem;
                    toElem.addClass("active");
                  }
                  var p = toElem.parent();
                  if (p) p.addClass("active");
                }


              }
            });

          }

          toElem.on("click", function() {
            if (context) {
              if (context.lastActive) {
                context.lastActive.removeClass("active");
                var p = context.lastActive.parent();
                if (p) {
                  p.removeClass("active");
                }
              }
              context.lastActive = toElem;
              toElem.addClass("active");
            }
            var p = toElem.parent();
            if (p) p.addClass("active");
            if (item.viewFn) {
              if (!item.view) {
                item.view = item.viewFn();
              }
            }
            if (item.action) item.action();
            if (item.view) {
              if (options.content) {
                options.content.pushView(item.view);
              }
            }
            if (item.href) {
              document.location.hash = item.href;
            }
          });

        },

        // setItemContent
        bsSetItemContent: function(item, toElem) {
          if (item.faicon) {
            toElem.span(toElem.str(["fa fa-", item.glyph]));
            toElem.span().html("&nbsp;");
          }
          if (item.glyph) {
            toElem.span(toElem.str(["glyphicon glyphicon-", item.glyph]));
            toElem.span().html("&nbsp;");
          }
          if (item.iconImg) {
            aa.img("iconImg", {
              src: item.iconImg
            });
          }
          if (item.leftBadge) toElem.span("badge").text(item.leftBadge);

          if (item.buttongroup) {
            var o = this.buttonGroup(item.buttongroup);
            myLi.add(o);
          }

          if (item.title) toElem.span().html(item.title);
          if (item.rightBadge) toElem.span("badge").text(item.rightBadge);
          if (item.active) toElem.addClass("active");

          return toElem;
        }
      });
    }
    _myTrait_.bread = function(t) {

      _e().extendAll({
        bsBreadcrumb: function(options) {
          var o = _e("div");
          var bc = o.ol("breadcrumb");
          var me = this;
          if (options.items) {
            options.items.forEach(function(item) {
              var aa = bc.li().a().text(item.title);
              me.bsSetItemAction(item, aa, options);
            });
          }
          this.add(o);
          return o;
        }
      });
    }
    _myTrait_.button = function(item, options, context) {
      _e().extendAll({

        bsButton: function(item, options, context) {
          var sz = "";
          if (item.size) {
            if (item.size == "xs") sz = "btn-xs";
            if (item.size == "s") sz = "btn-sm";
            if (item.size == "l") sz = "btn-lg";
            if (item.size == "m") sz = "";
          }
          var aa = _e("button");
          aa.addClass(this.str(["btn btn-", (item.type || "default")]));
          aa.addClass(this.str(["btn-", item.size]));

          this.bsSetItemContent(item, aa);
          this.bsSetItemAction(item, aa, options, context);

          this.add(aa);
          return aa;
        }
      });
    }
    _myTrait_.buttonGroup = function(t) {

      _e().extendAll({
        bsButtonGroup: function(options) {
          var bc = _e("div").addClass("btn-group"),
            me = this;

          if (options.items) {
            var context = {};
            options.items.forEach(function(item) {
              var aa = me.bsButton(item, options, context);
              bc.add(aa);
            });
          }
          this.add(bc);
          return bc;
        }
      });
    }
    _myTrait_.dropDown = function(t) {

      _e().extendAll({
        bsDropDown: function() {
          var ul = _e("ul").addClass("dropdown-menu");
          ul.q.attr("role", "menu");
          var me = this;
          if (options.items) {
            var context = {};
            options.items.forEach(function(item) {
              var myLi = ul.li("", {
                role: "presentation"
              });
              var aa = myLi.a("", {
                role: "menuitem",
                href: "#",
                tabindex: -1
              }); // .a().text(item.title);
              me.bsSetItemContent(item, aa);
              me.bsSetItemAction(item, aa, options, context);

            });
          }
          return ul; // dows not add automatically the dropdown menu
        }
      });
    }
    if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
      _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
    if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
    _myTrait_.__traitInit.push(function(t) {

      this.basicFunctions();
      this.buttonGroup();
      this.button();
      this.listgroupExtension();
      this.navtabs();
      this.dropDown();
      this.pagination();
      this.panel();
      this.progress();
      this.bread();
    });
    _myTrait_.listgroupExtension = function(options) {
      /*
           {
            content : object,
            items : [
                   { title : "Home", leftBadge : 14 },
                   { title : "Some", rightBadge : 0 },
                   { title : "other", view : obj }
               ]
           }
           */

      _e().extendAll({
        bsListGroup: function(options) {

          var me = this;
          var bc = _e(options.ulElem || "ul").addClass(options.listClass || "list-group");

          if (options.className) bc.addClass(options.className);

          if (options.items) {
            options.items.forEach(function(item) {
              var aa;
              if (item.dropdown && options.listClass) {

                var myLi = bc.li("dropdown"); // .a().text(item.title);
                var aa = myLi.a("dropdown-toggle", {
                  "data-toggle": "dropdown",
                  "href": "#"
                });

                setTimeout(function() {
                  $(aa._dom).dropdown();
                }, 50);

              } else {
                var etype = options.liElem || "li";
                var myLi = bc[etype](item.itemClass || options.itemClass || "list-group-item"); // .a().text(item.title);
                var aa;

                if (!options.listClass) {
                  aa = myLi;
                } else {
                  aa = myLi[options.aElem || "a"]();
                }
              }

              me.bsSetItemContent(item, aa, options);

              if (item.dropdown && options.listClass) {
                aa[options.spanElem || "span"]("caret")
                myLi.add(item.dropdown);
              }
              me.bsSetItemAction(item, aa, options);

            });
          }
          this.add(bc);
          return bc;
        }
      });
    }
    _myTrait_.navtabs = function(t) {

      _e().extendAll({
        bsNavtabs: function(options) {
          var bc = _e("ul").addClass("nav nav-tabs");
          bc.q.attr("role", "tablist");
          if (options.items) {
            var lastActive,
              me = this;
            var context = {};
            options.items.forEach(function(item) {

              var myLi = bc.li();
              var aa = myLi.a();

              me.bsSetItemContent(item, aa);
              me.bsSetItemAction(item, aa, options, context);
            });
          }
          this.add(bc);
          return bc;
        }
      });
    }
    _myTrait_.pagination = function(t) {


      _e().extendAll({
        bsPagination: function(options) {
          var me = this;
          var bc = _e("ul").addClass("pagination");
          var left = bc.li().a().html("&laquo;");
          if (options.items) {
            var context = {};
            options.items.forEach(function(item) {
              var myLi = bc.li(); // .a().text(item.title);
              var aa = myLi.a();
              me.bsSetItemContent(item, aa);
              me.bsSetItemAction(item, aa, options, context);
            });
          }
          var right = bc.li().a().html("&raquo;");
          this.add(bc);
          return bc;
        }
      });
    }
    _myTrait_.panel = function(t) {
      _e().extendAll({
        bsPanel: function(options) {

          var o = _e("div").addClass(_e().str("panel panel-", (options.type || "default")));
          var head = o.div("panel-heading"),
            body,
            footer,
            title;

          // just in case the panel content is collapsible...
          if (options.body_collapse_id) {
            /*
                          <div id="collapseOne" class="panel-collapse collapse in">
                             <div class="panel-body">    
                           */
            var bodyWrapper = o.div("panel-collapse collapse", {
              id: options.body_collapse_id
            });
            body = bodyWrapper.div("panel-body");
            footer = bodyWrapper.div("panel-footer");
          } else {
            body = o.div("panel-body");
            footer = o.div("panel-footer");
          }


          if (options.heading) {
            head.add(options.heading);
          }

          if (options.title) {
            title = head.h3("panel-title");
            title.add(options.title);
          }

          if (options.content) {
            body.add(options.content);
          }
          if (options.footer) {
            footer.add(options.footer);
          }

          this.add(o);
          return o;

        }
      });
    }
    _myTrait_.progress = function(t) {
      /*
           <div class="progress">
             <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
               <span class="sr-only">60% Complete</span>
             </div>
           </div>
           */

      _e().extendAll({
        bsProgress: function(options) {

          options.value = options.value || 0;
          if (!options.valuemin) options.valuemin = 0;
          if (!options.valuemax) options.valuemax = 100;

          var prog = _e().addClass("progress");

          var bb = prog.div("progress-bar", {
              "role": "progressbar",
              "aria-valuenow": options.value,
              "aria-valuemin": options.valuemin,
              "aria-valuemax": options.valuemax
            })
            .width(prog.str([options.value, "%"]));

          bb.text(options.title);
          this.add(prog);
          return prog;

        }
      });
    }
  }(this));
}
var jeeBs = function(a, b, c, d, e, f, g, h) {
  if (this instanceof jeeBs) {
    var args = [a, b, c, d, e, f, g, h];
    if (this.__factoryClass) {
      var m = this;
      var res;
      this.__factoryClass.forEach(function(initF) {
        res = initF.apply(m, args);
      });
      if (Object.prototype.toString.call(res) == '[object Function]') {
        if (res._classInfo.name != jeeBs._classInfo.name) return new res(a, b, c, d, e, f, g, h);
      } else {
        if (res) return res;
      }
    }
    if (this.__traitInit) {
      var m = this;
      this.__traitInit.forEach(function(initF) {
        initF.apply(m, args);
      })
    } else {
      if (typeof this.init == 'function')
        this.init.apply(this, args);
    }
  } else return new jeeBs(a, b, c, d, e, f, g, h);
};
jeeBs._classInfo = {
  name: 'jeeBs'
};
jeeBs.prototype = new jeeBs_prototype();
if (typeof(window) != 'undefined') window['jeeBs'] = jeeBs;
if (typeof(window) != 'undefined') window['jeeBs_prototype'] = jeeBs_prototype;