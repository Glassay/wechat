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

var Js = function (_wepy$page) {
  _inherits(Js, _wepy$page);

  function Js() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Js);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Js.__proto__ || Object.getPrototypeOf(Js)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '最多人看'
    }, _this.data = {
      article: '',
      width: 0,
      height: 0
    }, _this.methods = {
      enter: function enter(e) {
        var self = this;
        var id = e.currentTarget.id;
        var article = self.article[id];
        // console.log(e, 'dddddddd')
        try {
          _wepy2.default.setStorageSync('article', article);
        } catch (err) {
          console.log(err);
          return;
        }
        _wepy2.default.navigateTo({
          url: './hotarticle'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Js, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/hot',
        method: 'POST',
        success: function success(res) {
          self.article = res.data;
          console.log(self.article, '全部文章');
          self.setData({
            article: res.data
          });
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Js;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Js , 'pages/hot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdC5qcyJdLCJuYW1lcyI6WyJKcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXJ0aWNsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsImVudGVyIiwiZSIsInNlbGYiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJzZXRTdG9yYWdlU3luYyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxhQUFPLENBRkY7QUFHTEMsY0FBUTtBQUhILEssUUFLUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0ZDLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLEtBQUtGLEVBQUVHLGFBQUYsQ0FBZ0JELEVBQXpCO0FBQ0EsWUFBSVAsVUFBVU0sS0FBS04sT0FBTCxDQUFhTyxFQUFiLENBQWQ7QUFDQTtBQUNBLFlBQUk7QUFDRix5QkFBS0UsY0FBTCxDQUFvQixTQUFwQixFQUErQlQsT0FBL0I7QUFDRCxTQUZELENBRUUsT0FBT1UsR0FBUCxFQUFZO0FBQ1pDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQTtBQUNEO0FBQ0QsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQ7QUFDUCxVQUFJUixPQUFPLElBQVg7QUFDQSxxQkFBS1MsT0FBTCxDQUFhO0FBQ1hELGFBQUssMkJBRE07QUFFWEUsZ0JBQVEsTUFGRztBQUdYQyxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCWixlQUFLTixPQUFMLEdBQWVrQixJQUFJbkIsSUFBbkI7QUFDQVksa0JBQVFDLEdBQVIsQ0FBWU4sS0FBS04sT0FBakIsRUFBMEIsTUFBMUI7QUFDQU0sZUFBS2EsT0FBTCxDQUFhO0FBQ1huQixxQkFBU2tCLElBQUluQjtBQURGLFdBQWI7QUFHRDtBQVRVLE9BQWI7QUFXQSxxQkFBS3FCLGFBQUwsQ0FBbUI7QUFDakJILGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFosZUFBS0osTUFBTCxHQUFjZ0IsSUFBSUcsWUFBbEI7QUFDQWYsZUFBS0wsS0FBTCxHQUFhaUIsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBN0M2QixlQUFLQyxJOztrQkFBaEIzQixFIiwiZmlsZSI6ImhvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBKcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+acgOWkmuS6uueciydcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGFydGljbGU6ICcnLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGVudGVyKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICBsZXQgYXJ0aWNsZSA9IHNlbGYuYXJ0aWNsZVtpZF1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZSwgJ2RkZGRkZGRkJylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnRpY2xlJywgYXJ0aWNsZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9ob3RhcnRpY2xlJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9ob3QnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHNlbGYuYXJ0aWNsZSA9IHJlcy5kYXRhXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5hcnRpY2xlLCAn5YWo6YOo5paH56ugJylcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgYXJ0aWNsZTogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=