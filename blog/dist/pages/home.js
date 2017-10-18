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
      text: 'hi',
      weather: {}
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
    // onPullDownRefresh() {
    //   this.setData({
    //     text: 'hello'
    //   })
    // }

  }]);

  return Blog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYW1hcEZpbGUiLCJyZXF1aXJlIiwiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJoZWlnaHQiLCJmb2N1cyIsInBpYzEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImFyciIsInRleHQiLCJ3ZWF0aGVyIiwibWV0aG9kcyIsInRoYXQiLCJteUFtYXBGdW4iLCJBTWFwV1giLCJrZXkiLCJnZXRXZWF0aGVyIiwic3VjY2VzcyIsInNldERhdGEiLCJmYWlsIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsInJlcyIsInVzZXJJbmZvIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJzZWxmIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxXQUFXQyxRQUFRLG9CQUFSLENBQWY7O0lBQ3FCQyxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsYUFBTyxLQUZGO0FBR0xDLFlBQU0sbUJBSEQ7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLFdBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQU5BO0FBT0xDLFlBQU0sSUFQRDtBQVFMQyxlQUFTO0FBUkosSyxRQVVQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxZQUFZLElBQUlmLFNBQVNnQixNQUFiLENBQW9CLEVBQUVDLEtBQUssa0NBQVAsRUFBcEIsQ0FBaEI7QUFDQUYsZ0JBQVVHLFVBQVYsQ0FBcUI7QUFDbkJDLGlCQUFTLGlCQUFTZixJQUFULEVBQWU7QUFDdEJVLGVBQUtNLE9BQUwsQ0FBYTtBQUNYUixxQkFBU1I7QUFERSxXQUFiO0FBR0QsU0FMa0I7QUFNbkJpQixjQUFNLGNBQVNDLElBQVQsRUFBZTtBQUNuQkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNEO0FBUmtCLE9BQXJCO0FBVUEscUJBQUtHLFdBQUwsQ0FBaUI7QUFDZk4saUJBQVMsaUJBQVNPLEdBQVQsRUFBYztBQUNyQlosZUFBS0wsUUFBTCxHQUFnQmlCLElBQUlDLFFBQUosQ0FBYWxCLFFBQTdCO0FBQ0FLLGVBQUtOLFNBQUwsR0FBaUJrQixJQUFJQyxRQUFKLENBQWFuQixTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNQSxxQkFBS29CLFNBQUwsQ0FBZTtBQUNiQyxlQUFPLEtBRE07QUFFYkMsY0FBTSxTQUZPO0FBR2JDLGtCQUFVO0FBSEcsT0FBZjtBQUtEOzs7b0NBQ2U7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQVQsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQVEsV0FBS3RCLEdBQUwsQ0FBU3VCLElBQVQsQ0FBYyxDQUFkO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQWpEZ0MsZUFBS0MsSTs7a0JBQWxCaEMsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xudmFyIGFtYXBGaWxlID0gcmVxdWlyZSgnLi4vbGlicy9hbWFwLXd4LmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBwaWMxOiAnLi4vaW1hZ2UvbW9vbi5qcGcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGFycjogWzEsIDIsIDMsIDQsIDVdLFxuICAgIHRleHQ6ICdoaScsXG4gICAgd2VhdGhlcjoge31cbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgbXlBbWFwRnVuID0gbmV3IGFtYXBGaWxlLkFNYXBXWCh7IGtleTogJ2NhODFkNWMzMjU3OGM4YmMwYzU0YjQ2ZjI2YWU4NDAzJyB9KVxuICAgIG15QW1hcEZ1bi5nZXRXZWF0aGVyKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICB3ZWF0aGVyOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oaW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgdGhhdC5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICB0aGF0LmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSlcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCfkuIvmi4nmnInmg4rllpwnKVxuICAgIHNlbGYuYXJyLnB1c2goMylcbiAgfVxuICAvLyBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgdGV4dDogJ2hlbGxvJ1xuICAvLyAgIH0pXG4gIC8vIH1cbn1cbiJdfQ==