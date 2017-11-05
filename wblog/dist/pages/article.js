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
      navigationBarTitleText: '我的文章'
    }, _this.data = {
      single_article: '',
      index: '',
      type: '',
      height: 0,
      width: 0
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Js, [{
    key: 'onLoad',
    value: function onLoad(e) {
      var self = this;
      self.type = e.type;
      self.index = e.index;
      console.log(e.type, 'hhhhhh');
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/select1',
        method: 'post',
        data: {
          type: self.type
        },
        success: function success(res) {
          self.single_article = res.data[self.index];
          self.setData({
            single_article: res.data[self.index]
          });
          console.log(res.data);
          console.log(self.single_article, 'aaaaaaaaaaaaaaa');
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Js , 'pages/article'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiSnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNpbmdsZV9hcnRpY2xlIiwiaW5kZXgiLCJ0eXBlIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLHNCQUFnQixFQURYO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsY0FBUSxDQUpIO0FBS0xDLGFBQU87QUFMRixLLFFBT1BDLE8sR0FBVSxFOzs7OzsyQkFFSEMsQyxFQUFHO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtMLElBQUwsR0FBWUksRUFBRUosSUFBZDtBQUNBSyxXQUFLTixLQUFMLEdBQWFLLEVBQUVMLEtBQWY7QUFDQU8sY0FBUUMsR0FBUixDQUFZSCxFQUFFSixJQUFkLEVBQW9CLFFBQXBCO0FBQ0EscUJBQUtRLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLCtCQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWGIsY0FBTTtBQUNKRyxnQkFBTUssS0FBS0w7QUFEUCxTQUhLO0FBTVhXLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLGVBQUtQLGNBQUwsR0FBc0JjLElBQUlmLElBQUosQ0FBU1EsS0FBS04sS0FBZCxDQUF0QjtBQUNBTSxlQUFLUSxPQUFMLENBQWE7QUFDWGYsNEJBQWdCYyxJQUFJZixJQUFKLENBQVNRLEtBQUtOLEtBQWQ7QUFETCxXQUFiO0FBR0FPLGtCQUFRQyxHQUFSLENBQVlLLElBQUlmLElBQWhCO0FBQ0FTLGtCQUFRQyxHQUFSLENBQVlGLEtBQUtQLGNBQWpCLEVBQWlDLGlCQUFqQztBQUNEO0FBYlUsT0FBYjtBQWVBLHFCQUFLZ0IsYUFBTCxDQUFtQjtBQUNqQkgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUCxlQUFLSixNQUFMLEdBQWNXLElBQUlHLFlBQWxCO0FBQ0FWLGVBQUtILEtBQUwsR0FBYVUsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdkM2QixlQUFLQyxJOztrQkFBaEJ2QixFIiwiZmlsZSI6ImFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlofnq6AnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzaW5nbGVfYXJ0aWNsZTogJycsXG4gICAgICBpbmRleDogJycsXG4gICAgICB0eXBlOiAnJyxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHdpZHRoOiAwXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYudHlwZSA9IGUudHlwZVxuICAgICAgc2VsZi5pbmRleCA9IGUuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgJ2hoaGhoaCcpXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VsZWN0MScsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogc2VsZi50eXBlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuc2luZ2xlX2FydGljbGUgPSByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzaW5nbGVfYXJ0aWNsZTogcmVzLmRhdGFbc2VsZi5pbmRleF1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuc2luZ2xlX2FydGljbGUsICdhYWFhYWFhYWFhYWFhYWEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=