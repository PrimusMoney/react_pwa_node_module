"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HomeLinks = /*#__PURE__*/function () {
  function HomeLinks() {
    _classCallCheck(this, HomeLinks);
  }

  _createClass(HomeLinks, null, [{
    key: "getHomeLinks",
    value: function getHomeLinks(app) {
      var homelinks = [];
      var appconfig = app.getConfig(); // xtra routes

      var boot_webapp = app.boot_webapp;

      if (boot_webapp && boot_webapp.routes && boot_webapp.homelinks && boot_webapp.homelinks.xtra_homelinks) {
        try {
          var xtra_homelinks = boot_webapp.homelinks.xtra_homelinks;

          for (var i = 0; i < xtra_homelinks.length; i++) {
            var homelink_def = xtra_homelinks[i];
            if (homelink_def.disabled === true) continue;

            switch (homelink_def.type) {
              case 'separator':
                homelinks.push({
                  type: 'separator'
                });
                break;

              case 'link':
                {
                  var pathname = homelink_def.pathname;
                  var label = app.t(homelink_def.label);
                  homelinks.push({
                    type: 'link',
                    pathname: pathname,
                    label: label
                  });
                }
                break;

              default:
                break;
            }
          }
        } catch (e) {
          console.log('exception in MenuLinks.getHomeLinks for xtra menu links: ' + e);
        }
      }

      return homelinks;
    }
  }]);

  return HomeLinks;
}();

var _default = HomeLinks;
exports["default"] = _default;