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
      navigationBarTitleText: '文章区'
    }, _this.data = {
      single_type: '',
      title: '',
      width: 0,
      height: 0,
      article_count: 0
    }, _this.methods = {
      click: function click(e) {
        var self = this;
        var id = e.currentTarget.id;
        var count = self.single_type[id].count;
        count++;
        console.log(count, 'num');
        self.single_type[id].count = count;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/update1',
          method: 'POST',
          data: {
            id: self.single_type[id].id,
            count: count
          }
        });
        _wepy2.default.navigateTo({
          url: './article?type=' + self.type + '&index=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Js, [{
    key: 'onLoad',
    value: function onLoad(e) {
      var self = this;
      self.type = e.type;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/select1',
        method: 'POST',
        data: {
          type: self.type
        },
        success: function success(res) {
          self.single_type = res.data;
          console.log(self.single_type, '单一类型');
          self.setData({
            single_type: res.data
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Js , 'pages/content'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiSnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNpbmdsZV90eXBlIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImFydGljbGVfY291bnQiLCJtZXRob2RzIiwiY2xpY2siLCJlIiwic2VsZiIsImlkIiwiY3VycmVudFRhcmdldCIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJuYXZpZ2F0ZVRvIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGFBQU8sQ0FIRjtBQUlMQyxjQUFRLENBSkg7QUFLTEMscUJBQWU7QUFMVixLLFFBT1BDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNGQyxDQURFLEVBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxLQUFLRixFQUFFRyxhQUFGLENBQWdCRCxFQUF6QjtBQUNBLFlBQUlFLFFBQVFILEtBQUtSLFdBQUwsQ0FBaUJTLEVBQWpCLEVBQXFCRSxLQUFqQztBQUNBQTtBQUNBQyxnQkFBUUMsR0FBUixDQUFZRixLQUFaLEVBQW1CLEtBQW5CO0FBQ0FILGFBQUtSLFdBQUwsQ0FBaUJTLEVBQWpCLEVBQXFCRSxLQUFyQixHQUE2QkEsS0FBN0I7QUFDQSx1QkFBS0csT0FBTCxDQUFhO0FBQ1hDLGVBQUssK0JBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYakIsZ0JBQU07QUFDSlUsZ0JBQUlELEtBQUtSLFdBQUwsQ0FBaUJTLEVBQWpCLEVBQXFCQSxFQURyQjtBQUVKRSxtQkFBT0E7QUFGSDtBQUhLLFNBQWI7QUFRQSx1QkFBS00sVUFBTCxDQUFnQjtBQUNkRixtQ0FBdUJQLEtBQUtVLElBQTVCLGVBQTBDVDtBQUQ1QixTQUFoQjtBQUdEO0FBbkJPLEs7Ozs7OzJCQXFCSEYsQyxFQUFHO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtVLElBQUwsR0FBWVgsRUFBRVcsSUFBZDtBQUNBLHFCQUFLSixPQUFMLENBQWE7QUFDWEMsYUFBSywrQkFETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1hqQixjQUFNO0FBQ0ptQixnQkFBTVYsS0FBS1U7QUFEUCxTQUhLO0FBTVhDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJaLGVBQUtSLFdBQUwsR0FBbUJvQixJQUFJckIsSUFBdkI7QUFDQWEsa0JBQVFDLEdBQVIsQ0FBWUwsS0FBS1IsV0FBakIsRUFBOEIsTUFBOUI7QUFDQVEsZUFBS2EsT0FBTCxDQUFhO0FBQ1hyQix5QkFBYW9CLElBQUlyQjtBQUROLFdBQWI7QUFHRDtBQVpVLE9BQWI7QUFjQSxxQkFBS3VCLGFBQUwsQ0FBbUI7QUFDakJILGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFosZUFBS0wsTUFBTCxHQUFjaUIsSUFBSUcsWUFBbEI7QUFDQWYsZUFBS04sS0FBTCxHQUFha0IsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdkQ2QixlQUFLQyxJOztrQkFBaEI3QixFIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6DljLonXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzaW5nbGVfdHlwZTogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGFydGljbGVfY291bnQ6IDBcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICBsZXQgY291bnQgPSBzZWxmLnNpbmdsZV90eXBlW2lkXS5jb3VudFxuICAgICAgICBjb3VudCsrXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50LCAnbnVtJylcbiAgICAgICAgc2VsZi5zaW5nbGVfdHlwZVtpZF0uY291bnQgPSBjb3VudFxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS91cGRhdGUxJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZDogc2VsZi5zaW5nbGVfdHlwZVtpZF0uaWQsXG4gICAgICAgICAgICBjb3VudDogY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgLi9hcnRpY2xlP3R5cGU9JHtzZWxmLnR5cGV9JmluZGV4PSR7aWR9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnR5cGUgPSBlLnR5cGVcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9zZWxlY3QxJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBzZWxmLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5zaW5nbGVfdHlwZSA9IHJlcy5kYXRhXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5zaW5nbGVfdHlwZSwgJ+WNleS4gOexu+WeiycpXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNpbmdsZV90eXBlOiByZXMuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==