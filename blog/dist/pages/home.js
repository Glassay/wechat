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
      arr: [1, 2, 3, 4, 5],
      text: 'hi'
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
      self.arr.push(3);
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.setData({
        text: 'hello'
      });
    }
  }]);

  return Blog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJoZWlnaHQiLCJmb2N1cyIsInBpYzEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImFyciIsInRleHQiLCJtZXRob2RzIiwidGhhdCIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwic2V0RGF0YSIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsInJlcyIsInVzZXJJbmZvIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJzZWxmIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxXQUFXQyxRQUFRLG9CQUFSLENBQWY7O0lBQ3FCQyxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsYUFBTyxLQUZGO0FBR0xDLFlBQU0sbUJBSEQ7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLFdBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQU5BO0FBT0xDLFlBQU07QUFQRCxLLFFBU1BDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlDLFlBQVksSUFBSWQsU0FBU2UsTUFBYixDQUFvQixFQUFFQyxLQUFLLGtDQUFQLEVBQXBCLENBQWhCO0FBQ0FGLGdCQUFVRyxVQUFWLENBQXFCO0FBQ25CQyxpQkFBUyxpQkFBU2QsSUFBVCxFQUFlO0FBQ3RCUyxlQUFLTSxPQUFMLENBQWE7QUFDWEMscUJBQVNoQjtBQURFLFdBQWI7QUFHRCxTQUxrQjtBQU1uQmlCLGNBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Q7QUFSa0IsT0FBckI7QUFVQSxxQkFBS0csV0FBTCxDQUFpQjtBQUNmUCxpQkFBUyxpQkFBU1EsR0FBVCxFQUFjO0FBQ3JCYixlQUFLSixRQUFMLEdBQWdCaUIsSUFBSUMsUUFBSixDQUFhbEIsUUFBN0I7QUFDQUksZUFBS0wsU0FBTCxHQUFpQmtCLElBQUlDLFFBQUosQ0FBYW5CLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLb0IsU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0Q7OztvQ0FDZTtBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBVCxjQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBUSxXQUFLdEIsR0FBTCxDQUFTdUIsSUFBVCxDQUFjLENBQWQ7QUFDRDs7O3dDQUNtQjtBQUNsQixXQUFLZCxPQUFMLENBQWE7QUFDWFIsY0FBTTtBQURLLE9BQWI7QUFHRDs7OztFQWhEK0IsZUFBS3VCLEk7O2tCQUFsQmhDLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbnZhciBhbWFwRmlsZSA9IHJlcXVpcmUoJy4uL2xpYnMvYW1hcC13eC5qcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAyMCxcbiAgICBmb2N1czogZmFsc2UsXG4gICAgcGljMTogJy4uL2ltYWdlL21vb24uanBnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhcnI6IFsxLCAyLCAzLCA0LCA1XSxcbiAgICB0ZXh0OiAnaGknXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goeyBrZXk6ICdjYTgxZDVjMzI1NzhjOGJjMGM1NGI0NmYyNmFlODQwMycgfSlcbiAgICBteUFtYXBGdW4uZ2V0V2VhdGhlcih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgd2VhdGhlcjogZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHRoYXQubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgdGhhdC5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICBkdXJhdGlvbjogMTAwMFxuICAgIH0pXG4gIH1cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygn5LiL5ouJ5pyJ5oOK5ZacJylcbiAgICBzZWxmLmFyci5wdXNoKDMpXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHRleHQ6ICdoZWxsbydcbiAgICB9KVxuICB9XG59XG4iXX0=