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
      },
      attention: function attention() {
        _wepy2.default.showToast({
          title: '已关注',
          image: '../image/like.png',
          duration: 1500,
          mask: true
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwieGlhbmdxaW5nX2NvbG9yIiwibGlrZSIsInNob3VxaSIsInNob3VxaTEiLCJzaG91cWkyIiwiaXNGb2xkIiwiaXNGb2xkMSIsImlzRm9sZDIiLCJqaWFudG91Iiwic2hpemkiLCJtZXRob2RzIiwieGlhbmdxaW5nIiwic2VsZiIsImZsb2RGbiIsImZsb2RGbjEiLCJmbG9kRm4yIiwiYXR0ZW50aW9uIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpbWFnZSIsImR1cmF0aW9uIiwibWFzayIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyx1QkFBaUIsU0FEWjtBQUVMQyxZQUFNLG1CQUZEO0FBR0xDLGNBQVEsTUFISDtBQUlMQyxlQUFTLE1BSko7QUFLTEMsZUFBUyxNQUxKO0FBTUxDLGNBQVEsS0FOSDtBQU9MQyxlQUFTLEtBUEo7QUFRTEMsZUFBUyxLQVJKO0FBU0xDLGVBQVMsc0JBVEo7QUFVTEMsYUFBTztBQVZGLEssUUFZUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0QsU0FBTCxHQUFpQixPQUFqQjtBQUNELE9BSk87QUFLUkUsWUFMUSxvQkFLQztBQUNQLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUCxNQUFMLEdBQWMsQ0FBQ08sS0FBS1AsTUFBcEI7QUFDQSxZQUFJTyxLQUFLUCxNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3hCTyxlQUFLVixNQUFMLEdBQWMsSUFBZDtBQUNELFNBRkQsTUFFTztBQUNMVSxlQUFLVixNQUFMLEdBQWMsTUFBZDtBQUNEO0FBQ0YsT0FiTztBQWNSWSxhQWRRLHFCQWNFO0FBQ1IsWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUtOLE9BQUwsR0FBZSxDQUFDTSxLQUFLTixPQUFyQjtBQUNBLFlBQUlNLEtBQUtOLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDekJNLGVBQUtULE9BQUwsR0FBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xTLGVBQUtULE9BQUwsR0FBZSxNQUFmO0FBQ0Q7QUFDRixPQXRCTztBQXVCUlksYUF2QlEscUJBdUJFO0FBQ1IsWUFBSUgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtMLE9BQUwsR0FBZSxDQUFDSyxLQUFLTCxPQUFyQjtBQUNBLFlBQUlLLEtBQUtMLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDekJLLGVBQUtSLE9BQUwsR0FBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xRLGVBQUtSLE9BQUwsR0FBZSxNQUFmO0FBQ0Q7QUFDRixPQS9CTztBQWdDUlksZUFoQ1EsdUJBZ0NJO0FBQ1YsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxLQURNO0FBRWJDLGlCQUFPLG1CQUZNO0FBR2JDLG9CQUFVLElBSEc7QUFJYkMsZ0JBQU07QUFKTyxTQUFmO0FBTUQ7QUF2Q08sSzs7Ozs7NkJBeUNELENBQ1I7Ozs7RUExRCtCLGVBQUtDLEk7O2tCQUFsQjFCLEkiLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6a2U5oCn5bu6562R5belJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgeGlhbmdxaW5nX2NvbG9yOiAnIzAwRERERCcsXG4gICAgICBsaWtlOiAnLi4vaW1hZ2UvbGlrZS5wbmcnLFxuICAgICAgc2hvdXFpOiAn5pi+56S65YWo6YOoJyxcbiAgICAgIHNob3VxaTE6ICfmmL7npLrlhajpg6gnLFxuICAgICAgc2hvdXFpMjogJ+aYvuekuuWFqOmDqCcsXG4gICAgICBpc0ZvbGQ6IGZhbHNlLFxuICAgICAgaXNGb2xkMTogZmFsc2UsXG4gICAgICBpc0ZvbGQyOiBmYWxzZSxcbiAgICAgIGppYW50b3U6ICcuLi9pbWFnZS9qaWFudG91LnBuZycsXG4gICAgICBzaGl6aTogJy4uL2ltYWdlL3NoaXppLnBuZydcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHhpYW5ncWluZygpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYueGlhbmdxaW5nID0gJ3doaXRlJ1xuICAgICAgfSxcbiAgICAgIGZsb2RGbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuaXNGb2xkID0gIXNlbGYuaXNGb2xkXG4gICAgICAgIGlmIChzZWxmLmlzRm9sZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNlbGYuc2hvdXFpID0gJ+aUtui1tydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnNob3VxaSA9ICfmmL7npLrlhajpg6gnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmbG9kRm4xKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5pc0ZvbGQxID0gIXNlbGYuaXNGb2xkMVxuICAgICAgICBpZiAoc2VsZi5pc0ZvbGQxID09PSB0cnVlKSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkxID0gJ+aUtui1tydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnNob3VxaTEgPSAn5pi+56S65YWo6YOoJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmxvZEZuMigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuaXNGb2xkMiA9ICFzZWxmLmlzRm9sZDJcbiAgICAgICAgaWYgKHNlbGYuaXNGb2xkMiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNlbGYuc2hvdXFpMiA9ICfmlLbotbcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkyID0gJ+aYvuekuuWFqOmDqCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGF0dGVudGlvbigpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5bey5YWz5rOoJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==