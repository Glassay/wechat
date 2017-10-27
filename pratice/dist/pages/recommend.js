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
        // wepy.showLoading({
        //   title: '加载中',
        //   image: '../image/shizi.png'
        //   // duration: 1500
        // })
        // setTimeout(function() {
        //   wepy.hideLoading()
        // }, 1500)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwb2ludCIsImhvbWUiLCJtZXRob2RzIiwiY2xpY2siLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY2hvb3NlX3BvaW50Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwic2VsZiIsInNob3dMb2FkaW5nIiwiZHVyYXRpb24iLCJpbWFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sb0JBREY7QUFFTEMsWUFBTTtBQUZELEssUUFJUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FiTztBQWNSQyxrQkFkUSwwQkFjTztBQUNiLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sT0FETTtBQUViQyxtQkFBUyxRQUZJO0FBR2JDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZkMsc0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0QsYUFGRCxNQUVPLElBQUlILElBQUlJLE1BQVIsRUFBZ0I7QUFDckJGLHNCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEO0FBQ0Y7QUFUWSxTQUFmO0FBV0Q7QUExQk8sSzs7Ozs7NkJBNEJEO0FBQ1AsVUFBSUUsT0FBTyxJQUFYO0FBQ0FBLFdBQUtmLElBQUw7QUFDQSxxQkFBS2dCLFdBQUwsQ0FBaUI7QUFDZlQsZUFBTyxRQURRO0FBRWZVLGtCQUFVLElBRks7QUFHZkMsZUFBTztBQUhRLE9BQWpCO0FBS0Q7Ozs7RUE1QytCLGVBQUtDLEk7O2tCQUFsQnhCLEkiLCJmaWxlIjoicmVjb21tZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBob21lIGZyb20gJy4uL2NvbnRlbnQvaG9tZS5qcydcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1RhcFRhcCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHBvaW50OiAnLi4vaW1hZ2UvcG9pbnQucG5nJyxcbiAgICAgIGhvbWU6IG51bGxcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrKCkge1xuICAgICAgICAvLyB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgLy8gICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICAgIC8vICAgaW1hZ2U6ICcuLi9pbWFnZS9zaGl6aS5wbmcnXG4gICAgICAgIC8vICAgLy8gZHVyYXRpb246IDE1MDBcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgLy8gfSwgMTUwMClcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2luZm8nXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2hvb3NlX3BvaW50KCkge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfkuI3mhJ/lhbTotqPvvJ8nLFxuICAgICAgICAgIGNvbnRlbnQ6ICflho3lvoDkuIvnnIvnnIvlkKcnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnoa7lrponKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflj5bmtognKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmhvbWUgPSBob21lXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICd0YXB0YXAnLFxuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZS9sb2FkaW5nMS5naWYnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19