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
    }, _this.methods = {
      // 下拉加载
      pullUpLoad: function pullUpLoad() {
        var that = this;
        console.log('====下拉====');
        if (!that.data.hidden) {
          that.data.params.pageNo += 1;
          that.setData({
            params: that.data.params
          });
          if (that.data.params.pageNo <= that.data.totalPages) {
            that.setData({
              hidden: true
            });
            that.getShareList();
          } else {
            that.setData({
              hidden: false
            });
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
          // var userInfo = res.userInfo
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

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlc2hpLmpzIl0sIm5hbWVzIjpbImFtYXBGaWxlIiwicmVxdWlyZSIsIkJsb2ciLCJjb25maWciLCJkYXRhIiwiaGVpZ2h0IiwiZm9jdXMiLCJwaWMxIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJhcnIiLCJtZXRob2RzIiwicHVsbFVwTG9hZCIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwiaGlkZGVuIiwicGFyYW1zIiwicGFnZU5vIiwic2V0RGF0YSIsInRvdGFsUGFnZXMiLCJnZXRTaGFyZUxpc3QiLCJteUFtYXBGdW4iLCJBTWFwV1giLCJrZXkiLCJnZXRXZWF0aGVyIiwic3VjY2VzcyIsIndlYXRoZXIiLCJmYWlsIiwiaW5mbyIsImdldFVzZXJJbmZvIiwicmVzIiwidXNlckluZm8iLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInNlbGYiLCJwdXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVdDLFFBQVEsb0JBQVIsQ0FBZjs7SUFDcUJDLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxhQUFPLEtBRkY7QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxpQkFBVyxFQUpOO0FBS0xDLGdCQUFVLEVBTEw7QUFNTEMsV0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiO0FBTkEsSyxRQVFQQyxPLEdBQVU7QUFDUjtBQUNBQyxnQkFGUSx3QkFFSztBQUNYLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQSxZQUFJLENBQUNGLEtBQUtULElBQUwsQ0FBVVksTUFBZixFQUF1QjtBQUNyQkgsZUFBS1QsSUFBTCxDQUFVYSxNQUFWLENBQWlCQyxNQUFqQixJQUEyQixDQUEzQjtBQUNBTCxlQUFLTSxPQUFMLENBQWE7QUFDWEYsb0JBQVFKLEtBQUtULElBQUwsQ0FBVWE7QUFEUCxXQUFiO0FBR0EsY0FBSUosS0FBS1QsSUFBTCxDQUFVYSxNQUFWLENBQWlCQyxNQUFqQixJQUEyQkwsS0FBS1QsSUFBTCxDQUFVZ0IsVUFBekMsRUFBcUQ7QUFDbkRQLGlCQUFLTSxPQUFMLENBQWE7QUFDWEgsc0JBQVE7QUFERyxhQUFiO0FBR0FILGlCQUFLUSxZQUFMO0FBQ0QsV0FMRCxNQUtPO0FBQ0xSLGlCQUFLTSxPQUFMLENBQWE7QUFDWEgsc0JBQVE7QUFERyxhQUFiO0FBR0Q7QUFDRjtBQUNGO0FBckJPLEs7Ozs7OzZCQXVCRDtBQUNQLFVBQUlILE9BQU8sSUFBWDtBQUNBLFVBQUlTLFlBQVksSUFBSXRCLFNBQVN1QixNQUFiLENBQW9CLEVBQUVDLEtBQUssa0NBQVAsRUFBcEIsQ0FBaEI7QUFDQUYsZ0JBQVVHLFVBQVYsQ0FBcUI7QUFDbkJDLGlCQUFTLGlCQUFTdEIsSUFBVCxFQUFlO0FBQ3RCUyxlQUFLTSxPQUFMLENBQWE7QUFDWFEscUJBQVN2QjtBQURFLFdBQWI7QUFHRCxTQUxrQjtBQU1uQndCLGNBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CZixrQkFBUUMsR0FBUixDQUFZYyxJQUFaO0FBQ0Q7QUFSa0IsT0FBckI7QUFVQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmSixpQkFBUyxpQkFBU0ssR0FBVCxFQUFjO0FBQ3JCO0FBQ0FsQixlQUFLSixRQUFMLEdBQWdCc0IsSUFBSUMsUUFBSixDQUFhdkIsUUFBN0I7QUFDQUksZUFBS0wsU0FBTCxHQUFpQnVCLElBQUlDLFFBQUosQ0FBYXhCLFNBQTlCO0FBQ0Q7QUFMYyxPQUFqQjtBQU9BLHFCQUFLeUIsU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0Q7OztvQ0FDZTtBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBdkIsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQXNCLFdBQUszQixHQUFMLENBQVM0QixJQUFULENBQWMsQ0FBZDtBQUNEOzs7O0VBaEUrQixlQUFLQyxJOztrQkFBbEJyQyxJIiwiZmlsZSI6ImNlc2hpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xudmFyIGFtYXBGaWxlID0gcmVxdWlyZSgnLi4vbGlicy9hbWFwLXd4LmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBwaWMxOiAnLi4vaW1hZ2UvbW9vbi5qcGcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGFycjogWzEsIDIsIDMsIDQsIDVdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDkuIvmi4nliqDovb1cbiAgICBwdWxsVXBMb2FkKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygnPT09PeS4i+aLiT09PT0nKVxuICAgICAgaWYgKCF0aGF0LmRhdGEuaGlkZGVuKSB7XG4gICAgICAgIHRoYXQuZGF0YS5wYXJhbXMucGFnZU5vICs9IDFcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBwYXJhbXM6IHRoYXQuZGF0YS5wYXJhbXNcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoYXQuZGF0YS5wYXJhbXMucGFnZU5vIDw9IHRoYXQuZGF0YS50b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIGhpZGRlbjogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhhdC5nZXRTaGFyZUxpc3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goeyBrZXk6ICdjYTgxZDVjMzI1NzhjOGJjMGM1NGI0NmYyNmFlODQwMycgfSlcbiAgICBteUFtYXBGdW4uZ2V0V2VhdGhlcih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgd2VhdGhlcjogZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIHZhciB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICB0aGF0Lm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHRoYXQuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KVxuICB9XG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgY29uc29sZS5sb2coJ+S4i+aLieacieaDiuWWnCcpXG4gICAgc2VsZi5hcnIucHVzaCgxKVxuICB9XG59XG4iXX0=