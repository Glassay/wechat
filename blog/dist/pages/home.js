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
      avatarUrl: '',
      nickName: '',
      arr: [1, 2, 3, 4, 5],
      eyes: '../image/eyes.png'
      // title: 'hi'
      // weather: {}
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
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.nickName = res.userInfo.nickName;
          that.avatarUrl = res.userInfo.avatarUrl;
        }
      });
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          that.height = res.windowHeight;
          that.width = res.windowWidth;
        }
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var self = this;
      console.log('下拉有惊喜');
      self.arr.push(3);
    }
    // onPullDownRefresh() {
    //   this.setData({
    //     text: 'hello'
    //   })
    // }

  }]);

  return Blog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImFyciIsImV5ZXMiLCJtZXRob2RzIiwidGhhdCIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwic2V0RGF0YSIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsInJlcyIsInVzZXJJbmZvIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInNlbGYiLCJwdXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVdDLFFBQVEsb0JBQVIsQ0FBZjs7SUFDcUJDLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxXQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FIQTtBQUlMQyxZQUFNO0FBQ047QUFDQTtBQU5LLEssUUFRUEMsTyxHQUFVLEU7Ozs7OzZCQUVEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsWUFBWSxJQUFJWCxTQUFTWSxNQUFiLENBQW9CLEVBQUVDLEtBQUssa0NBQVAsRUFBcEIsQ0FBaEI7QUFDQUYsZ0JBQVVHLFVBQVYsQ0FBcUI7QUFDbkJDLGlCQUFTLGlCQUFTWCxJQUFULEVBQWU7QUFDdEJNLGVBQUtNLE9BQUwsQ0FBYTtBQUNYQyxxQkFBU2I7QUFERSxXQUFiO0FBR0QsU0FMa0I7QUFNbkJjLGNBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Q7QUFSa0IsT0FBckI7QUFVQSxxQkFBS0csV0FBTCxDQUFpQjtBQUNmUCxpQkFBUyxpQkFBU1EsR0FBVCxFQUFjO0FBQ3JCYixlQUFLSixRQUFMLEdBQWdCaUIsSUFBSUMsUUFBSixDQUFhbEIsUUFBN0I7QUFDQUksZUFBS0wsU0FBTCxHQUFpQmtCLElBQUlDLFFBQUosQ0FBYW5CLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLb0IsU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJkLGVBRGlCLG1CQUNUUSxHQURTLEVBQ0o7QUFDWGIsZUFBS29CLE1BQUwsR0FBY1AsSUFBSVEsWUFBbEI7QUFDQXJCLGVBQUtzQixLQUFMLEdBQWFULElBQUlVLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7O29DQUNlO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0FkLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FhLFdBQUszQixHQUFMLENBQVM0QixJQUFULENBQWMsQ0FBZDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7RUFyRGdDLGVBQUtDLEk7O2tCQUFsQmxDLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbnZhciBhbWFwRmlsZSA9IHJlcXVpcmUoJy4uL2xpYnMvYW1hcC13eC5qcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXJyOiBbMSwgMiwgMywgNCwgNV0sXG4gICAgZXllczogJy4uL2ltYWdlL2V5ZXMucG5nJ1xuICAgIC8vIHRpdGxlOiAnaGknXG4gICAgLy8gd2VhdGhlcjoge31cbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgbXlBbWFwRnVuID0gbmV3IGFtYXBGaWxlLkFNYXBXWCh7IGtleTogJ2NhODFkNWMzMjU3OGM4YmMwYzU0YjQ2ZjI2YWU4NDAzJyB9KVxuICAgIG15QW1hcEZ1bi5nZXRXZWF0aGVyKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICB3ZWF0aGVyOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oaW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgdGhhdC5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICB0aGF0LmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHRoYXQud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgY29uc29sZS5sb2coJ+S4i+aLieacieaDiuWWnCcpXG4gICAgc2VsZi5hcnIucHVzaCgzKVxuICB9XG4gIC8vIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gIC8vICAgICB0ZXh0OiAnaGVsbG8nXG4gIC8vICAgfSlcbiAgLy8gfVxufVxuIl19