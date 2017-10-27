'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _home = require('./../content/home.js');

var _home2 = _interopRequireDefault(_home);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'TapTap'
    }, _this.data = {
      point: '../image/point.png',
      home: null
    }, _this.methods = {
      click: function click() {
        _wepy2.default.navigateTo({
          url: './info'
        });
      },
      choose_point: function choose_point() {
        _wepy2.default.showModal({
          title: '不感兴趣？',
          content: '再往下看看吧',
          success: function success(res) {
            if (res.confirm) {
              console.log('确定');
            } else if (res.cancel) {
              console.log('取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.home = _home2.default;
      _wepy2.default.showLoading({
        title: 'taptap',
        duration: 2000,
        image: '../image/loading1.gif'
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/recommend'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwb2ludCIsImhvbWUiLCJtZXRob2RzIiwiY2xpY2siLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY2hvb3NlX3BvaW50Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwic2VsZiIsInNob3dMb2FkaW5nIiwiZHVyYXRpb24iLCJpbWFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sb0JBREY7QUFFTEMsWUFBTTtBQUZELEssUUFJUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGtCQU5RLDBCQU1PO0FBQ2IsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxPQURNO0FBRWJDLG1CQUFTLFFBRkk7QUFHYkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmQyxzQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDRCxhQUZELE1BRU8sSUFBSUgsSUFBSUksTUFBUixFQUFnQjtBQUNyQkYsc0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFDRjtBQVRZLFNBQWY7QUFXRDtBQWxCTyxLOzs7Ozs2QkFvQkQ7QUFDUCxVQUFJRSxPQUFPLElBQVg7QUFDQUEsV0FBS2YsSUFBTDtBQUNBLHFCQUFLZ0IsV0FBTCxDQUFpQjtBQUNmVCxlQUFPLFFBRFE7QUFFZlUsa0JBQVUsSUFGSztBQUdmQyxlQUFPO0FBSFEsT0FBakI7QUFLRDs7OztFQXBDK0IsZUFBS0MsSTs7a0JBQWxCeEIsSSIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IGhvbWUgZnJvbSAnLi4vY29udGVudC9ob21lLmpzJ1xuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnVGFwVGFwJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgcG9pbnQ6ICcuLi9pbWFnZS9wb2ludC5wbmcnLFxuICAgICAgaG9tZTogbnVsbFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2soKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9pbmZvJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNob29zZV9wb2ludCgpIHtcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5LiN5oSf5YW06Laj77yfJyxcbiAgICAgICAgICBjb250ZW50OiAn5YaN5b6A5LiL55yL55yL5ZCnJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn56Gu5a6aJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Y+W5raIJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5ob21lID0gaG9tZVxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAndGFwdGFwJyxcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGltYWdlOiAnLi4vaW1hZ2UvbG9hZGluZzEuZ2lmJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==