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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJoZWlnaHQiLCJmb2N1cyIsInBpYzEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImFyciIsIm1ldGhvZHMiLCJwdWxsVXBMb2FkIiwidGhhdCIsImNvbnNvbGUiLCJsb2ciLCJoaWRkZW4iLCJwYXJhbXMiLCJwYWdlTm8iLCJzZXREYXRhIiwidG90YWxQYWdlcyIsImdldFNoYXJlTGlzdCIsIm15QW1hcEZ1biIsIkFNYXBXWCIsImtleSIsImdldFdlYXRoZXIiLCJzdWNjZXNzIiwid2VhdGhlciIsImZhaWwiLCJpbmZvIiwiZ2V0VXNlckluZm8iLCJyZXMiLCJ1c2VySW5mbyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwic2VsZiIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxvQkFBUixDQUFmOztJQUNxQkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sS0FGRjtBQUdMQyxZQUFNLG1CQUhEO0FBSUxDLGlCQUFXLEVBSk47QUFLTEMsZ0JBQVUsRUFMTDtBQU1MQyxXQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWI7QUFOQSxLLFFBUVBDLE8sR0FBVTtBQUNSO0FBQ0FDLGdCQUZRLHdCQUVLO0FBQ1gsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNBLFlBQUksQ0FBQ0YsS0FBS1QsSUFBTCxDQUFVWSxNQUFmLEVBQXVCO0FBQ3JCSCxlQUFLVCxJQUFMLENBQVVhLE1BQVYsQ0FBaUJDLE1BQWpCLElBQTJCLENBQTNCO0FBQ0FMLGVBQUtNLE9BQUwsQ0FBYTtBQUNYRixvQkFBUUosS0FBS1QsSUFBTCxDQUFVYTtBQURQLFdBQWI7QUFHQSxjQUFJSixLQUFLVCxJQUFMLENBQVVhLE1BQVYsQ0FBaUJDLE1BQWpCLElBQTJCTCxLQUFLVCxJQUFMLENBQVVnQixVQUF6QyxFQUFxRDtBQUNuRFAsaUJBQUtNLE9BQUwsQ0FBYTtBQUNYSCxzQkFBUTtBQURHLGFBQWI7QUFHQUgsaUJBQUtRLFlBQUw7QUFDRCxXQUxELE1BS087QUFDTFIsaUJBQUtNLE9BQUwsQ0FBYTtBQUNYSCxzQkFBUTtBQURHLGFBQWI7QUFHRDtBQUNGO0FBQ0Y7QUFyQk8sSzs7Ozs7NkJBdUJEO0FBQ1AsVUFBSUgsT0FBTyxJQUFYO0FBQ0EsVUFBSVMsWUFBWSxJQUFJdEIsU0FBU3VCLE1BQWIsQ0FBb0IsRUFBRUMsS0FBSyxrQ0FBUCxFQUFwQixDQUFoQjtBQUNBRixnQkFBVUcsVUFBVixDQUFxQjtBQUNuQkMsaUJBQVMsaUJBQVN0QixJQUFULEVBQWU7QUFDdEJTLGVBQUtNLE9BQUwsQ0FBYTtBQUNYUSxxQkFBU3ZCO0FBREUsV0FBYjtBQUdELFNBTGtCO0FBTW5Cd0IsY0FBTSxjQUFTQyxJQUFULEVBQWU7QUFDbkJmLGtCQUFRQyxHQUFSLENBQVljLElBQVo7QUFDRDtBQVJrQixPQUFyQjtBQVVBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZKLGlCQUFTLGlCQUFTSyxHQUFULEVBQWM7QUFDckI7QUFDQWxCLGVBQUtKLFFBQUwsR0FBZ0JzQixJQUFJQyxRQUFKLENBQWF2QixRQUE3QjtBQUNBSSxlQUFLTCxTQUFMLEdBQWlCdUIsSUFBSUMsUUFBSixDQUFheEIsU0FBOUI7QUFDRDtBQUxjLE9BQWpCO0FBT0EscUJBQUt5QixTQUFMLENBQWU7QUFDYkMsZUFBTyxLQURNO0FBRWJDLGNBQU0sU0FGTztBQUdiQyxrQkFBVTtBQUhHLE9BQWY7QUFLRDs7O29DQUNlO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0F2QixjQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBc0IsV0FBSzNCLEdBQUwsQ0FBUzRCLElBQVQsQ0FBYyxDQUFkO0FBQ0Q7Ozs7RUFoRStCLGVBQUtDLEk7O2tCQUFsQnJDLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbnZhciBhbWFwRmlsZSA9IHJlcXVpcmUoJy4uL2xpYnMvYW1hcC13eC5qcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAyMCxcbiAgICBmb2N1czogZmFsc2UsXG4gICAgcGljMTogJy4uL2ltYWdlL21vb24uanBnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhcnI6IFsxLCAyLCAzLCA0LCA1XVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5LiL5ouJ5Yqg6L29XG4gICAgcHVsbFVwTG9hZCgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJz09PT3kuIvmi4k9PT09JylcbiAgICAgIGlmICghdGhhdC5kYXRhLmhpZGRlbikge1xuICAgICAgICB0aGF0LmRhdGEucGFyYW1zLnBhZ2VObyArPSAxXG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgcGFyYW1zOiB0aGF0LmRhdGEucGFyYW1zXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGF0LmRhdGEucGFyYW1zLnBhZ2VObyA8PSB0aGF0LmRhdGEudG90YWxQYWdlcykge1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoYXQuZ2V0U2hhcmVMaXN0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBteUFtYXBGdW4gPSBuZXcgYW1hcEZpbGUuQU1hcFdYKHsga2V5OiAnY2E4MWQ1YzMyNTc4YzhiYzBjNTRiNDZmMjZhZTg0MDMnIH0pXG4gICAgbXlBbWFwRnVuLmdldFdlYXRoZXIoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIHdlYXRoZXI6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyB2YXIgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgdGhhdC5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICB0aGF0LmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSlcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCfkuIvmi4nmnInmg4rllpwnKVxuICAgIHNlbGYuYXJyLnB1c2goMSlcbiAgfVxufVxuIl19