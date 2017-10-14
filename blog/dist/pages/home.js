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

var amapFile = require('./../libs/amap-wx.js');

var Blog = function (_wepy$page) {
  _inherits(Blog, _wepy$page);

  function Blog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Blog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Blog.__proto__ || Object.getPrototypeOf(Blog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      height: 20,
      focus: false,
      pic1: '../image/moon.jpg'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Blog, [{
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

  return Blog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJoZWlnaHQiLCJmb2N1cyIsInBpYzEiLCJtZXRob2RzIiwidGhhdCIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwic2V0RGF0YSIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxvQkFBUixDQUFmOztJQUNxQkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sS0FGRjtBQUdMQyxZQUFNO0FBSEQsSyxRQUtQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxZQUFZLElBQUlWLFNBQVNXLE1BQWIsQ0FBb0IsRUFBRUMsS0FBSyxrQ0FBUCxFQUFwQixDQUFoQjtBQUNBRixnQkFBVUcsVUFBVixDQUFxQjtBQUNuQkMsaUJBQVMsaUJBQVNWLElBQVQsRUFBZTtBQUN0QkssZUFBS00sT0FBTCxDQUFhO0FBQ1hDLHFCQUFTWjtBQURFLFdBQWI7QUFHRCxTQUxrQjtBQU1uQmEsY0FBTSxjQUFTQyxJQUFULEVBQWU7QUFDbkJDLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRDtBQVJrQixPQUFyQjtBQVVEOzs7O0VBdkIrQixlQUFLRyxJOztrQkFBbEJuQixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG52YXIgYW1hcEZpbGUgPSByZXF1aXJlKCcuLi9saWJzL2FtYXAtd3guanMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMjAsXG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIHBpYzE6ICcuLi9pbWFnZS9tb29uLmpwZydcbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgbXlBbWFwRnVuID0gbmV3IGFtYXBGaWxlLkFNYXBXWCh7IGtleTogJ2NhODFkNWMzMjU3OGM4YmMwYzU0YjQ2ZjI2YWU4NDAzJyB9KVxuICAgIG15QW1hcEZ1bi5nZXRXZWF0aGVyKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICB3ZWF0aGVyOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oaW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==