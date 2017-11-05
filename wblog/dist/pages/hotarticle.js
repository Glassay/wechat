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
      height: 0,
      width: 0,
      article: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Js, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      try {
        var article = _wepy2.default.getStorageSync('article');
        self.article = article;
      } catch (err) {
        console.log(err);
      }
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Js , 'pages/hotarticle'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdGFydGljbGUuanMiXSwibmFtZXMiOlsiSnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwiYXJ0aWNsZSIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3RvcmFnZVN5bmMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEU7Ozs7Ozs7Ozs7Ozs7OzhLQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGVBQVM7QUFISixLLFFBS1BDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUk7QUFDRixZQUFJRixVQUFVLGVBQUtHLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBZDtBQUNBRCxhQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDRCxPQUhELENBR0UsT0FBT0ksR0FBUCxFQUFZO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUNELHFCQUFLRyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hQLGVBQUtKLE1BQUwsR0FBY1csSUFBSUMsWUFBbEI7QUFDQVIsZUFBS0gsS0FBTCxHQUFhVSxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUF6QjZCLGVBQUtDLEk7O2tCQUFoQmxCLEUiLCJmaWxlIjoiaG90YXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBKcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOaWh+eroCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgYXJ0aWNsZTogJydcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgYXJ0aWNsZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FydGljbGUnKVxuICAgICAgICBzZWxmLmFydGljbGUgPSBhcnRpY2xlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=