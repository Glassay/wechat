'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var amapFile = require('./../libs/amap-wx.js');

var Ceshi = function (_wepy$page) {
  _inherits(Ceshi, _wepy$page);

  function Ceshi() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ceshi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ceshi.__proto__ || Object.getPrototypeOf(Ceshi)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      weather: {}
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ceshi, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var myAmapFun = new amapFile.AMapWX({ key: 'ca81d5c32578c8bc0c54b46f26ae8403' });
      myAmapFun.getWeather({
        success: function success(data) {
          that.setData({
            weather: data
          });
        },
        fail: function fail(info) {
          console.log(info);
        }
      });
    }
  }]);

  return Ceshi;
}(_wepy2.default.page);

exports.default = Ceshi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlc2hpLmpzIl0sIm5hbWVzIjpbImFtYXBGaWxlIiwicmVxdWlyZSIsIkNlc2hpIiwiZGF0YSIsIndlYXRoZXIiLCJtZXRob2RzIiwidGhhdCIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwic2V0RGF0YSIsImZhaWwiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxXQUFXQyxRQUFRLG9CQUFSLENBQWY7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxZQUFZLElBQUlQLFNBQVNRLE1BQWIsQ0FBb0IsRUFBQ0MsS0FBSyxrQ0FBTixFQUFwQixDQUFoQjtBQUNBRixnQkFBVUcsVUFBVixDQUFxQjtBQUNuQkMsaUJBQVMsaUJBQVVSLElBQVYsRUFBZ0I7QUFDdkJHLGVBQUtNLE9BQUwsQ0FBYTtBQUNYUixxQkFBU0Q7QUFERSxXQUFiO0FBR0QsU0FMa0I7QUFNbkJVLGNBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Q7QUFSa0IsT0FBckI7QUFVRDs7OztFQXBCZ0MsZUFBS0csSTs7a0JBQW5CZixLIiwiZmlsZSI6ImNlc2hpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIHZhciBhbWFwRmlsZSA9IHJlcXVpcmUoJy4uL2xpYnMvYW1hcC13eC5qcycpXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VzaGkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICB3ZWF0aGVyOiB7fVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgbGV0IG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goe2tleTogJ2NhODFkNWMzMjU3OGM4YmMwYzU0YjQ2ZjI2YWU4NDAzJ30pXG4gICAgICBteUFtYXBGdW4uZ2V0V2VhdGhlcih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIHdlYXRoZXI6IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==