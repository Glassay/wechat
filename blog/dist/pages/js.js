'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Js = function (_wepy$page) {
  _inherits(Js, _wepy$page);

  function Js() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Js);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Js.__proto__ || Object.getPrototypeOf(Js)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'JavaScript'
    }, _this.data = {
      text: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Js, [{
    key: 'onLoad',
    value: function onLoad(e) {
      var self = this;
      self.type = e.type;
      console.log(e.type, 'hhhhhh');
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/select1',
        method: 'post',
        data: {
          type: self.type
        },
        success: function success(res) {
          self.text = res.data;
          self.setData({
            text: res.data
          });
          console.log(self.text);
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Js;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Js , 'pages/js'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIl0sIm5hbWVzIjpbIkpzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZXh0IiwibWV0aG9kcyIsImUiLCJzZWxmIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEU7Ozs7Ozs7Ozs7Ozs7OzhLQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUdQQyxPLEdBQVUsRTs7Ozs7MkJBRUhDLEMsRUFBRztBQUNSLFVBQUlDLE9BQU8sSUFBWDtBQUNBQSxXQUFLQyxJQUFMLEdBQVlGLEVBQUVFLElBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZSixFQUFFRSxJQUFkLEVBQW9CLFFBQXBCO0FBQ0EscUJBQUtHLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLCtCQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWFYsY0FBTTtBQUNKSyxnQkFBTUQsS0FBS0M7QUFEUCxTQUhLO0FBTVhNLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJSLGVBQUtILElBQUwsR0FBWVcsSUFBSVosSUFBaEI7QUFDQUksZUFBS1MsT0FBTCxDQUFhO0FBQ1haLGtCQUFNVyxJQUFJWjtBQURDLFdBQWI7QUFHQU0sa0JBQVFDLEdBQVIsQ0FBWUgsS0FBS0gsSUFBakI7QUFDRDtBQVpVLE9BQWI7QUFjQSxxQkFBS2EsYUFBTCxDQUFtQjtBQUNqQkgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUixlQUFLVyxNQUFMLEdBQWNILElBQUlJLFlBQWxCO0FBQ0FaLGVBQUthLEtBQUwsR0FBYUwsSUFBSU0sV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBakM2QixlQUFLQyxJOztrQkFBaEJ0QixFIiwiZmlsZSI6ImpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnSmF2YVNjcmlwdCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYudHlwZSA9IGUudHlwZVxuICAgICAgY29uc29sZS5sb2coZS50eXBlLCAnaGhoaGhoJylcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9zZWxlY3QxJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBzZWxmLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19