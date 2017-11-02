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

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      a: ''
    }, _this.methods = {
      js: function js(e) {
        var self = this;
        var id = e.currentTarget.dataset.index;
        var type = self.a[id].type;
        console.log(e, 'dddddddd');
        _wepy2.default.navigateTo({
          url: './js?type=' + type
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.showLoading({
        title: '加载中',
        duration: 2000,
        image: '../image/loading.gif'
      });
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/select',
        method: 'POST',
        success: function success(res) {
          self.a = res.data;
          console.log(res);
          console.log(self.a);
          self.setData({
            a: res.data
          });
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsImRhdGEiLCJhIiwibWV0aG9kcyIsImpzIiwiZSIsInNlbGYiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwiZ2V0U3lzdGVtSW5mbyIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsIndpZHRoIiwid2luZG93V2lkdGgiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiZHVyYXRpb24iLCJpbWFnZSIsInJlcXVlc3QiLCJtZXRob2QiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsU0FBRztBQURFLEssUUFHUEMsTyxHQUFVO0FBQ1JDLFFBRFEsY0FDTEMsQ0FESyxFQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsS0FBS0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWpDO0FBQ0EsWUFBSUMsT0FBT0wsS0FBS0osQ0FBTCxDQUFPSyxFQUFQLEVBQVdJLElBQXRCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlSLENBQVosRUFBZSxVQUFmO0FBQ0EsdUJBQUtTLFVBQUwsQ0FBZ0I7QUFDZEMsOEJBQWtCSjtBQURKLFNBQWhCO0FBR0Q7QUFUTyxLOzs7Ozs2QkFXRDtBQUNQLFVBQUlMLE9BQU8sSUFBWDtBQUNBLHFCQUFLVSxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJaLGVBQUthLFFBQUwsR0FBZ0JELElBQUlFLFFBQUosQ0FBYUQsUUFBN0I7QUFDQWIsZUFBS2UsU0FBTCxHQUFpQkgsSUFBSUUsUUFBSixDQUFhQyxTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkwsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWixlQUFLaUIsTUFBTCxHQUFjTCxJQUFJTSxZQUFsQjtBQUNBbEIsZUFBS21CLEtBQUwsR0FBYVAsSUFBSVEsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sS0FEUTtBQUVmQyxrQkFBVSxJQUZLO0FBR2ZDLGVBQU87QUFIUSxPQUFqQjtBQUtBLHFCQUFLQyxPQUFMLENBQWE7QUFDWGhCLGFBQUssOEJBRE07QUFFWGlCLGdCQUFRLE1BRkc7QUFHWGYsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QlosZUFBS0osQ0FBTCxHQUFTZ0IsSUFBSWpCLElBQWI7QUFDQVcsa0JBQVFDLEdBQVIsQ0FBWUssR0FBWjtBQUNBTixrQkFBUUMsR0FBUixDQUFZUCxLQUFLSixDQUFqQjtBQUNBSSxlQUFLMkIsT0FBTCxDQUFhO0FBQ1gvQixlQUFHZ0IsSUFBSWpCO0FBREksV0FBYjtBQUdEO0FBVlUsT0FBYjtBQVlEOzs7O0VBaEQrQixlQUFLaUMsSTs7a0JBQWxCbkMsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgfVxuICBkYXRhID0ge1xuICAgIGE6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBqcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgdHlwZSA9IHNlbGYuYVtpZF0udHlwZVxuICAgICAgY29uc29sZS5sb2coZSwgJ2RkZGRkZGRkJylcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vanM/dHlwZT0ke3R5cGV9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBpbWFnZTogJy4uL2ltYWdlL2xvYWRpbmcuZ2lmJ1xuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9zZWxlY3QnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHNlbGYuYSA9IHJlcy5kYXRhXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5hKVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGE6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19