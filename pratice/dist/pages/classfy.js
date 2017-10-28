'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classfy = require('./../content/classfy.js');

var _classfy2 = _interopRequireDefault(_classfy);

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
      classfy: null
    }, _this.methods = {
      yuyue: function yuyue() {
        _wepy2.default.showToast({
          title: '已预约',
          image: '../image/right.png',
          duration: 1500,
          mask: true
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.classfy = _classfy2.default;
      _wepy2.default.showLoading({
        title: 'taptap',
        duration: 2000,
        image: '../image/loading1.gif'
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/classfy'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZnkuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsImRhdGEiLCJjbGFzc2Z5IiwibWV0aG9kcyIsInl1eXVlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpbWFnZSIsImR1cmF0aW9uIiwibWFzayIsInNlbGYiLCJzaG93TG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFHUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLEtBRE07QUFFYkMsaUJBQU8sb0JBRk07QUFHYkMsb0JBQVUsSUFIRztBQUliQyxnQkFBTTtBQUpPLFNBQWY7QUFNRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtSLE9BQUw7QUFDQSxxQkFBS1MsV0FBTCxDQUFpQjtBQUNmTCxlQUFPLFFBRFE7QUFFZkUsa0JBQVUsSUFGSztBQUdmRCxlQUFPO0FBSFEsT0FBakI7QUFLRDs7OztFQXhCK0IsZUFBS0ssSTs7a0JBQWxCYixJIiwiZmlsZSI6ImNsYXNzZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IGNsYXNzZnkgZnJvbSAnLi4vY29udGVudC9jbGFzc2Z5LmpzJ1xuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjbGFzc2Z5OiBudWxsXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB5dXl1ZSgpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5bey6aKE57qmJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlL3JpZ2h0LnBuZycsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2xhc3NmeSA9IGNsYXNzZnlcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ3RhcHRhcCcsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBpbWFnZTogJy4uL2ltYWdlL2xvYWRpbmcxLmdpZidcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=