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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImFyciIsImV5ZXMiLCJtZXRob2RzIiwidGhhdCIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwic2V0RGF0YSIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsInJlcyIsInVzZXJJbmZvIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInNlbGYiLCJwdXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVdDLFFBQVEsb0JBQVIsQ0FBZjs7SUFDcUJDLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxXQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FIQTtBQUlMQyxZQUFNO0FBSkQsSyxRQU1QQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxZQUFZLElBQUlYLFNBQVNZLE1BQWIsQ0FBb0IsRUFBRUMsS0FBSyxrQ0FBUCxFQUFwQixDQUFoQjtBQUNBRixnQkFBVUcsVUFBVixDQUFxQjtBQUNuQkMsaUJBQVMsaUJBQVNYLElBQVQsRUFBZTtBQUN0Qk0sZUFBS00sT0FBTCxDQUFhO0FBQ1hDLHFCQUFTYjtBQURFLFdBQWI7QUFHRCxTQUxrQjtBQU1uQmMsY0FBTSxjQUFTQyxJQUFULEVBQWU7QUFDbkJDLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRDtBQVJrQixPQUFyQjtBQVVBLHFCQUFLRyxXQUFMLENBQWlCO0FBQ2ZQLGlCQUFTLGlCQUFTUSxHQUFULEVBQWM7QUFDckJiLGVBQUtKLFFBQUwsR0FBZ0JpQixJQUFJQyxRQUFKLENBQWFsQixRQUE3QjtBQUNBSSxlQUFLTCxTQUFMLEdBQWlCa0IsSUFBSUMsUUFBSixDQUFhbkIsU0FBOUI7QUFDRDtBQUpjLE9BQWpCO0FBTUEscUJBQUtvQixTQUFMLENBQWU7QUFDYkMsZUFBTyxLQURNO0FBRWJDLGNBQU0sU0FGTztBQUdiQyxrQkFBVTtBQUhHLE9BQWY7QUFLQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQmQsZUFEaUIsbUJBQ1RRLEdBRFMsRUFDSjtBQUNYYixlQUFLb0IsTUFBTCxHQUFjUCxJQUFJUSxZQUFsQjtBQUNBckIsZUFBS3NCLEtBQUwsR0FBYVQsSUFBSVUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7b0NBQ2U7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQWQsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQWEsV0FBSzNCLEdBQUwsQ0FBUzRCLElBQVQsQ0FBYyxDQUFkO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQW5EZ0MsZUFBS0MsSTs7a0JBQWxCbEMsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xudmFyIGFtYXBGaWxlID0gcmVxdWlyZSgnLi4vbGlicy9hbWFwLXd4LmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhcnI6IFsxLCAyLCAzLCA0LCA1XSxcbiAgICBleWVzOiAnLi4vaW1hZ2UvZXllcy5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goeyBrZXk6ICdjYTgxZDVjMzI1NzhjOGJjMGM1NGI0NmYyNmFlODQwMycgfSlcbiAgICBteUFtYXBGdW4uZ2V0V2VhdGhlcih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgd2VhdGhlcjogZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHRoYXQubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgdGhhdC5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICBkdXJhdGlvbjogMTAwMFxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICB0aGF0LndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCfkuIvmi4nmnInmg4rllpwnKVxuICAgIHNlbGYuYXJyLnB1c2goMylcbiAgfVxuICAvLyBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgdGV4dDogJ2hlbGxvJ1xuICAvLyAgIH0pXG4gIC8vIH1cbn1cbiJdfQ==