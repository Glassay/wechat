'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发现'
    }, _this.data = {
      imagUrls: ['https://img.taptapdada.com/market/images/50e5a352065c8d43fd3db555261c05a4.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1', 'https://img.taptapdada.com/market/images/9b997ef9e2aa1d45cb1c7f07f7cdaddf.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1', 'https://img.taptapdada.com/market/images/b60a912359ed214afbb310da7e2926e3.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1']
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/find'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1hZ1VybHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLENBQ1Isb0pBRFEsRUFFUixvSkFGUSxFQUdSLG9KQUhRO0FBREwsSzs7OztFQUp5QixlQUFLQyxJOztrQkFBbEJMLEkiLCJmaWxlIjoiZmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+R546wJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaW1hZ1VybHM6IFtcbiAgICAgICAgJ2h0dHBzOi8vaW1nLnRhcHRhcGRhZGEuY29tL21hcmtldC9pbWFnZXMvNTBlNWEzNTIwNjVjOGQ0M2ZkM2RiNTU1MjYxYzA1YTQuanBnP2ltYWdlVmlldzIvMS93LzIwODAvaC84MDAvcS80MC9mb3JtYXQvanBnL2ludGVybGFjZS8xL2lnbm9yZS1lcnJvci8xJyxcbiAgICAgICAgJ2h0dHBzOi8vaW1nLnRhcHRhcGRhZGEuY29tL21hcmtldC9pbWFnZXMvOWI5OTdlZjllMmFhMWQ0NWNiMWM3ZjA3ZjdjZGFkZGYuanBnP2ltYWdlVmlldzIvMS93LzIwODAvaC84MDAvcS80MC9mb3JtYXQvanBnL2ludGVybGFjZS8xL2lnbm9yZS1lcnJvci8xJyxcbiAgICAgICAgJ2h0dHBzOi8vaW1nLnRhcHRhcGRhZGEuY29tL21hcmtldC9pbWFnZXMvYjYwYTkxMjM1OWVkMjE0YWZiYjMxMGRhN2UyOTI2ZTMuanBnP2ltYWdlVmlldzIvMS93LzIwODAvaC84MDAvcS80MC9mb3JtYXQvanBnL2ludGVybGFjZS8xL2lnbm9yZS1lcnJvci8xJ1xuICAgICAgXVxuICAgIH1cbiAgfVxuIl19