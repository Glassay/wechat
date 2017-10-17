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
      pic1: '../image/moon.jpg',
      avatarUrl: '',
      nickName: '',
      arr: [1, 2, 3, 4, 5]
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
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var self = this;
      console.log('下拉有惊喜');
      self.arr.push(1);
    }
  }]);

  return Blog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJoZWlnaHQiLCJmb2N1cyIsInBpYzEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImFyciIsIm1ldGhvZHMiLCJ0aGF0IiwibXlBbWFwRnVuIiwiQU1hcFdYIiwia2V5IiwiZ2V0V2VhdGhlciIsInN1Y2Nlc3MiLCJzZXREYXRhIiwid2VhdGhlciIsImZhaWwiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJJbmZvIiwicmVzIiwidXNlckluZm8iLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInNlbGYiLCJwdXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVdDLFFBQVEsb0JBQVIsQ0FBZjs7SUFDcUJDLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxhQUFPLEtBRkY7QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxpQkFBVyxFQUpOO0FBS0xDLGdCQUFVLEVBTEw7QUFNTEMsV0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiO0FBTkEsSyxRQVFQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxZQUFZLElBQUliLFNBQVNjLE1BQWIsQ0FBb0IsRUFBRUMsS0FBSyxrQ0FBUCxFQUFwQixDQUFoQjtBQUNBRixnQkFBVUcsVUFBVixDQUFxQjtBQUNuQkMsaUJBQVMsaUJBQVNiLElBQVQsRUFBZTtBQUN0QlEsZUFBS00sT0FBTCxDQUFhO0FBQ1hDLHFCQUFTZjtBQURFLFdBQWI7QUFHRCxTQUxrQjtBQU1uQmdCLGNBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Q7QUFSa0IsT0FBckI7QUFVQSxxQkFBS0csV0FBTCxDQUFpQjtBQUNmUCxpQkFBUyxpQkFBU1EsR0FBVCxFQUFjO0FBQ3JCYixlQUFLSCxRQUFMLEdBQWdCZ0IsSUFBSUMsUUFBSixDQUFhakIsUUFBN0I7QUFDQUcsZUFBS0osU0FBTCxHQUFpQmlCLElBQUlDLFFBQUosQ0FBYWxCLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLbUIsU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0Q7OztvQ0FDZTtBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBVCxjQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBUSxXQUFLckIsR0FBTCxDQUFTc0IsSUFBVCxDQUFjLENBQWQ7QUFDRDs7OztFQTFDK0IsZUFBS0MsSTs7a0JBQWxCL0IsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xudmFyIGFtYXBGaWxlID0gcmVxdWlyZSgnLi4vbGlicy9hbWFwLXd4LmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBwaWMxOiAnLi4vaW1hZ2UvbW9vbi5qcGcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGFycjogWzEsIDIsIDMsIDQsIDVdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goeyBrZXk6ICdjYTgxZDVjMzI1NzhjOGJjMGM1NGI0NmYyNmFlODQwMycgfSlcbiAgICBteUFtYXBGdW4uZ2V0V2VhdGhlcih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgd2VhdGhlcjogZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHRoYXQubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgdGhhdC5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICBkdXJhdGlvbjogMTAwMFxuICAgIH0pXG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygn5LiL5ouJ5pyJ5oOK5ZacJylcbiAgICBzZWxmLmFyci5wdXNoKDEpXG4gIH1cbn1cbiJdfQ==