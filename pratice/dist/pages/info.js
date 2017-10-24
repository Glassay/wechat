'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: '魔性建筑工'
    }, _this.data = {
      xiangqing_color: '#00DDDD',
      like: '../image/like.png',
      shouqi: '显示全部',
      shouqi1: '显示全部',
      shouqi2: '显示全部',
      isFold: false,
      isFold1: false,
      isFold2: false,
      jiantou: '../image/jiantou.png',
      shizi: '../image/shizi.png'
    }, _this.methods = {
      xiangqing: function xiangqing() {
        var self = this;
        self.xiangqing = 'white';
      },
      flodFn: function flodFn() {
        var self = this;
        self.isFold = !self.isFold;
        if (self.isFold === true) {
          self.shouqi = '收起';
        } else {
          self.shouqi = '显示全部';
        }
      },
      flodFn1: function flodFn1() {
        var self = this;
        self.isFold1 = !self.isFold1;
        if (self.isFold1 === true) {
          self.shouqi1 = '收起';
        } else {
          self.shouqi1 = '显示全部';
        }
      },
      flodFn2: function flodFn2() {
        var self = this;
        self.isFold2 = !self.isFold2;
        if (self.isFold2 === true) {
          self.shouqi2 = '收起';
        } else {
          self.shouqi2 = '显示全部';
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwieGlhbmdxaW5nX2NvbG9yIiwibGlrZSIsInNob3VxaSIsInNob3VxaTEiLCJzaG91cWkyIiwiaXNGb2xkIiwiaXNGb2xkMSIsImlzRm9sZDIiLCJqaWFudG91Iiwic2hpemkiLCJtZXRob2RzIiwieGlhbmdxaW5nIiwic2VsZiIsImZsb2RGbiIsImZsb2RGbjEiLCJmbG9kRm4yIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyx1QkFBaUIsU0FEWjtBQUVMQyxZQUFNLG1CQUZEO0FBR0xDLGNBQVEsTUFISDtBQUlMQyxlQUFTLE1BSko7QUFLTEMsZUFBUyxNQUxKO0FBTUxDLGNBQVEsS0FOSDtBQU9MQyxlQUFTLEtBUEo7QUFRTEMsZUFBUyxLQVJKO0FBU0xDLGVBQVMsc0JBVEo7QUFVTEMsYUFBTztBQVZGLEssUUFZUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0QsU0FBTCxHQUFpQixPQUFqQjtBQUNELE9BSk87QUFLUkUsWUFMUSxvQkFLQztBQUNQLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUCxNQUFMLEdBQWMsQ0FBQ08sS0FBS1AsTUFBcEI7QUFDQSxZQUFJTyxLQUFLUCxNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3hCTyxlQUFLVixNQUFMLEdBQWMsSUFBZDtBQUNELFNBRkQsTUFFTztBQUNMVSxlQUFLVixNQUFMLEdBQWMsTUFBZDtBQUNEO0FBQ0YsT0FiTztBQWNSWSxhQWRRLHFCQWNFO0FBQ1IsWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUtOLE9BQUwsR0FBZSxDQUFDTSxLQUFLTixPQUFyQjtBQUNBLFlBQUlNLEtBQUtOLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDekJNLGVBQUtULE9BQUwsR0FBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xTLGVBQUtULE9BQUwsR0FBZSxNQUFmO0FBQ0Q7QUFDRixPQXRCTztBQXVCUlksYUF2QlEscUJBdUJFO0FBQ1IsWUFBSUgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtMLE9BQUwsR0FBZSxDQUFDSyxLQUFLTCxPQUFyQjtBQUNBLFlBQUlLLEtBQUtMLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDekJLLGVBQUtSLE9BQUwsR0FBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xRLGVBQUtSLE9BQUwsR0FBZSxNQUFmO0FBQ0Q7QUFDRjtBQS9CTyxLOzs7O0VBaEJzQixlQUFLWSxJOztrQkFBbEJwQixJIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mtlOaAp+W7uuetkeW3pSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHhpYW5ncWluZ19jb2xvcjogJyMwMEREREQnLFxuICAgICAgbGlrZTogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICAgIHNob3VxaTogJ+aYvuekuuWFqOmDqCcsXG4gICAgICBzaG91cWkxOiAn5pi+56S65YWo6YOoJyxcbiAgICAgIHNob3VxaTI6ICfmmL7npLrlhajpg6gnLFxuICAgICAgaXNGb2xkOiBmYWxzZSxcbiAgICAgIGlzRm9sZDE6IGZhbHNlLFxuICAgICAgaXNGb2xkMjogZmFsc2UsXG4gICAgICBqaWFudG91OiAnLi4vaW1hZ2UvamlhbnRvdS5wbmcnLFxuICAgICAgc2hpemk6ICcuLi9pbWFnZS9zaGl6aS5wbmcnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB4aWFuZ3FpbmcoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLnhpYW5ncWluZyA9ICd3aGl0ZSdcbiAgICAgIH0sXG4gICAgICBmbG9kRm4oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmlzRm9sZCA9ICFzZWxmLmlzRm9sZFxuICAgICAgICBpZiAoc2VsZi5pc0ZvbGQgPT09IHRydWUpIHtcbiAgICAgICAgICBzZWxmLnNob3VxaSA9ICfmlLbotbcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkgPSAn5pi+56S65YWo6YOoJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmxvZEZuMSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuaXNGb2xkMSA9ICFzZWxmLmlzRm9sZDFcbiAgICAgICAgaWYgKHNlbGYuaXNGb2xkMSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNlbGYuc2hvdXFpMSA9ICfmlLbotbcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkxID0gJ+aYvuekuuWFqOmDqCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZsb2RGbjIoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmlzRm9sZDIgPSAhc2VsZi5pc0ZvbGQyXG4gICAgICAgIGlmIChzZWxmLmlzRm9sZDIgPT09IHRydWUpIHtcbiAgICAgICAgICBzZWxmLnNob3VxaTIgPSAn5pS26LW3J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuc2hvdXFpMiA9ICfmmL7npLrlhajpg6gnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==