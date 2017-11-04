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
      article_type: '',
      width: 0,
      height: 0
    }, _this.methods = {
      enter: function enter(e) {
        var self = this;
        var id = e.currentTarget.id;
        var type = self.article_type[id].type;
        console.log(e, 'dddddddd');
        _wepy2.default.navigateTo({
          url: './content?type=' + type
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
          self.article_type = res.data;
          console.log(self.article_type, '文章类型');
          self.setData({
            article_type: res.data
          });
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsImRhdGEiLCJhcnRpY2xlX3R5cGUiLCJ3aWR0aCIsImhlaWdodCIsIm1ldGhvZHMiLCJlbnRlciIsImUiLCJzZWxmIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsImltYWdlIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxvQkFBYyxFQURUO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxjQUFRO0FBSEgsSyxRQUtQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDRkMsQ0FERSxFQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsS0FBS0YsRUFBRUcsYUFBRixDQUFnQkQsRUFBekI7QUFDQSxZQUFJRSxPQUFPSCxLQUFLTixZQUFMLENBQWtCTyxFQUFsQixFQUFzQkUsSUFBakM7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWixFQUFlLFVBQWY7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyxtQ0FBdUJKO0FBRFQsU0FBaEI7QUFHRDtBQVRPLEs7Ozs7OzZCQVdEO0FBQ1AsVUFBSUgsT0FBTyxJQUFYO0FBQ0EscUJBQUtRLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlYsZUFBS1csUUFBTCxHQUFnQkQsSUFBSUUsUUFBSixDQUFhRCxRQUE3QjtBQUNBWCxlQUFLYSxTQUFMLEdBQWlCSCxJQUFJRSxRQUFKLENBQWFDLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCTCxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hWLGVBQUtKLE1BQUwsR0FBY2MsSUFBSUssWUFBbEI7QUFDQWYsZUFBS0wsS0FBTCxHQUFhZSxJQUFJTSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFBTyxLQURRO0FBRWZDLGtCQUFVLElBRks7QUFHZkMsZUFBTztBQUhRLE9BQWpCO0FBS0EscUJBQUtDLE9BQUwsQ0FBYTtBQUNYZCxhQUFLLDhCQURNO0FBRVhlLGdCQUFRLE1BRkc7QUFHWGIsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QlYsZUFBS04sWUFBTCxHQUFvQmdCLElBQUlqQixJQUF4QjtBQUNBVyxrQkFBUUMsR0FBUixDQUFZTCxLQUFLTixZQUFqQixFQUErQixNQUEvQjtBQUNBTSxlQUFLdUIsT0FBTCxDQUFhO0FBQ1g3QiwwQkFBY2dCLElBQUlqQjtBQURQLFdBQWI7QUFHRDtBQVRVLE9BQWI7QUFXRDs7OztFQWpEK0IsZUFBSytCLEk7O2tCQUFsQmpDLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhcnRpY2xlX3R5cGU6ICcnLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZW50ZXIoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIGxldCB0eXBlID0gc2VsZi5hcnRpY2xlX3R5cGVbaWRdLnR5cGVcbiAgICAgIGNvbnNvbGUubG9nKGUsICdkZGRkZGRkZCcpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2NvbnRlbnQ/dHlwZT0ke3R5cGV9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBpbWFnZTogJy4uL2ltYWdlL2xvYWRpbmcuZ2lmJ1xuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9zZWxlY3QnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHNlbGYuYXJ0aWNsZV90eXBlID0gcmVzLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5hcnRpY2xlX3R5cGUsICfmlofnq6DnsbvlnosnKVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGFydGljbGVfdHlwZTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=