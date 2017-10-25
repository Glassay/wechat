'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hgame = require('./../content/hgame.js');

var _hgame2 = _interopRequireDefault(_hgame);

var _ngame = require('./../content/ngame.js');

var _ngame2 = _interopRequireDefault(_ngame);

var _channel = require('./../content/channel.js');

var _channel2 = _interopRequireDefault(_channel);

var _dgame = require('./../content/dgame.js');

var _dgame2 = _interopRequireDefault(_dgame);

var _label = require('./../content/label.js');

var _label2 = _interopRequireDefault(_label);

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
      imagUrls: ['https://img.taptapdada.com/market/images/50e5a352065c8d43fd3db555261c05a4.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1', 'https://img.taptapdada.com/market/images/9b997ef9e2aa1d45cb1c7f07f7cdaddf.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1', 'https://img.taptapdada.com/market/images/b60a912359ed214afbb310da7e2926e3.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1'],
      label: null,
      dgame: null,
      channel: null,
      ngame: null,
      hgame: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.hgame = _hgame2.default;
      self.ngame = _ngame2.default;
      self.channel = _channel2.default;
      self.label = _label2.default;
      self.dgame = _dgame2.default;
      console.log(self.label);
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/find'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1hZ1VybHMiLCJsYWJlbCIsImRnYW1lIiwiY2hhbm5lbCIsIm5nYW1lIiwiaGdhbWUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVUsQ0FDUixvSkFEUSxFQUVSLG9KQUZRLEVBR1Isb0pBSFEsQ0FETDtBQU1MQyxhQUFPLElBTkY7QUFPTEMsYUFBTyxJQVBGO0FBUUxDLGVBQVMsSUFSSjtBQVNMQyxhQUFPLElBVEY7QUFVTEMsYUFBTztBQVZGLEs7Ozs7OzZCQVlFO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtELEtBQUw7QUFDQUMsV0FBS0YsS0FBTDtBQUNBRSxXQUFLSCxPQUFMO0FBQ0FHLFdBQUtMLEtBQUw7QUFDQUssV0FBS0osS0FBTDtBQUNBSyxjQUFRQyxHQUFSLENBQVlGLEtBQUtMLEtBQWpCO0FBQ0Q7Ozs7RUF4QitCLGVBQUtRLEk7O2tCQUFsQmIsSSIsImZpbGUiOiJmaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBoZ2FtZSBmcm9tICcuLi9jb250ZW50L2hnYW1lLmpzJ1xuICBpbXBvcnQgbmdhbWUgZnJvbSAnLi4vY29udGVudC9uZ2FtZS5qcydcbiAgaW1wb3J0IGNoYW5uZWwgZnJvbSAnLi4vY29udGVudC9jaGFubmVsLmpzJ1xuICBpbXBvcnQgZGdhbWUgZnJvbSAnLi4vY29udGVudC9kZ2FtZS5qcydcbiAgaW1wb3J0IGxhYmVsIGZyb20gJy4uL2NvbnRlbnQvbGFiZWwuanMnXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HnjrAnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpbWFnVXJsczogW1xuICAgICAgICAnaHR0cHM6Ly9pbWcudGFwdGFwZGFkYS5jb20vbWFya2V0L2ltYWdlcy81MGU1YTM1MjA2NWM4ZDQzZmQzZGI1NTUyNjFjMDVhNC5qcGc/aW1hZ2VWaWV3Mi8xL3cvMjA4MC9oLzgwMC9xLzQwL2Zvcm1hdC9qcGcvaW50ZXJsYWNlLzEvaWdub3JlLWVycm9yLzEnLFxuICAgICAgICAnaHR0cHM6Ly9pbWcudGFwdGFwZGFkYS5jb20vbWFya2V0L2ltYWdlcy85Yjk5N2VmOWUyYWExZDQ1Y2IxYzdmMDdmN2NkYWRkZi5qcGc/aW1hZ2VWaWV3Mi8xL3cvMjA4MC9oLzgwMC9xLzQwL2Zvcm1hdC9qcGcvaW50ZXJsYWNlLzEvaWdub3JlLWVycm9yLzEnLFxuICAgICAgICAnaHR0cHM6Ly9pbWcudGFwdGFwZGFkYS5jb20vbWFya2V0L2ltYWdlcy9iNjBhOTEyMzU5ZWQyMTRhZmJiMzEwZGE3ZTI5MjZlMy5qcGc/aW1hZ2VWaWV3Mi8xL3cvMjA4MC9oLzgwMC9xLzQwL2Zvcm1hdC9qcGcvaW50ZXJsYWNlLzEvaWdub3JlLWVycm9yLzEnXG4gICAgICBdLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICBkZ2FtZTogbnVsbCxcbiAgICAgIGNoYW5uZWw6IG51bGwsXG4gICAgICBuZ2FtZTogbnVsbCxcbiAgICAgIGhnYW1lOiBudWxsXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5oZ2FtZSA9IGhnYW1lXG4gICAgICBzZWxmLm5nYW1lID0gbmdhbWVcbiAgICAgIHNlbGYuY2hhbm5lbCA9IGNoYW5uZWxcbiAgICAgIHNlbGYubGFiZWwgPSBsYWJlbFxuICAgICAgc2VsZi5kZ2FtZSA9IGRnYW1lXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmxhYmVsKVxuICAgIH1cbiAgfVxuIl19