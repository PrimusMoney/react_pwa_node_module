"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MenuLinks = /*#__PURE__*/function () {
  function MenuLinks() {
    _classCallCheck(this, MenuLinks);
  }

  _createClass(MenuLinks, null, [{
    key: "getMenuLinks",
    value: function getMenuLinks(app) {
      var menulinks = [];
      var appconfig = app.getConfig(); // xtra routes

      var boot_webapp = app.boot_webapp;

      if (boot_webapp && boot_webapp.routes && boot_webapp.menulinks && boot_webapp.menulinks.xtra_menulinks) {
        try {
          var xtra_menulinks = boot_webapp.menulinks.xtra_menulinks;

          for (var i = 0; i < xtra_menulinks.length; i++) {
            var menulink_def = xtra_menulinks[i];
            if (menulink_def.disabled === true) continue;

            switch (menulink_def.type) {
              case 'separator':
                menulinks.push({
                  type: 'separator'
                });
                break;

              case 'link':
                {
                  var route = menulink_def.route;
                  var label = app.t(menulink_def.label);
                  menulinks.push({
                    type: 'link',
                    route: route,
                    label: label
                  });
                }
                break;

              default:
                break;
            }
          }
        } catch (e) {
          console.log('exception in MenuLinks.getMenuLinks for xtra menu links: ' + e);
        }
      }

      return menulinks;
    }
  }]);

  return MenuLinks;
}();

var _default = MenuLinks;
exports["default"] = _default;
//# sourceMappingURL=menulinks.js.map