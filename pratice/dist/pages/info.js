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
    value: function onLoad() {
      _wepy2.default.showLoading({
        title: 'taptap',
        duration: 2000,
        image: '../image/loading1.gif'
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwieGlhbmdxaW5nX2NvbG9yIiwibGlrZSIsInNob3VxaSIsInNob3VxaTEiLCJzaG91cWkyIiwiaXNGb2xkIiwiaXNGb2xkMSIsImlzRm9sZDIiLCJqaWFudG91Iiwic2hpemkiLCJtZXRob2RzIiwieGlhbmdxaW5nIiwic2VsZiIsImZsb2RGbiIsImZsb2RGbjEiLCJmbG9kRm4yIiwiYXR0ZW50aW9uIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpbWFnZSIsImR1cmF0aW9uIiwibWFzayIsInNob3dMb2FkaW5nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLHVCQUFpQixTQURaO0FBRUxDLFlBQU0sbUJBRkQ7QUFHTEMsY0FBUSxNQUhIO0FBSUxDLGVBQVMsTUFKSjtBQUtMQyxlQUFTLE1BTEo7QUFNTEMsY0FBUSxLQU5IO0FBT0xDLGVBQVMsS0FQSjtBQVFMQyxlQUFTLEtBUko7QUFTTEMsZUFBUyxzQkFUSjtBQVVMQyxhQUFPO0FBVkYsSyxRQVlQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLRCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0QsT0FKTztBQUtSRSxZQUxRLG9CQUtDO0FBQ1AsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtQLE1BQUwsR0FBYyxDQUFDTyxLQUFLUCxNQUFwQjtBQUNBLFlBQUlPLEtBQUtQLE1BQUwsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEJPLGVBQUtWLE1BQUwsR0FBYyxJQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xVLGVBQUtWLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7QUFDRixPQWJPO0FBY1JZLGFBZFEscUJBY0U7QUFDUixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBS04sT0FBTCxHQUFlLENBQUNNLEtBQUtOLE9BQXJCO0FBQ0EsWUFBSU0sS0FBS04sT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6Qk0sZUFBS1QsT0FBTCxHQUFlLElBQWY7QUFDRCxTQUZELE1BRU87QUFDTFMsZUFBS1QsT0FBTCxHQUFlLE1BQWY7QUFDRDtBQUNGLE9BdEJPO0FBdUJSWSxhQXZCUSxxQkF1QkU7QUFDUixZQUFJSCxPQUFPLElBQVg7QUFDQUEsYUFBS0wsT0FBTCxHQUFlLENBQUNLLEtBQUtMLE9BQXJCO0FBQ0EsWUFBSUssS0FBS0wsT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QkssZUFBS1IsT0FBTCxHQUFlLElBQWY7QUFDRCxTQUZELE1BRU87QUFDTFEsZUFBS1IsT0FBTCxHQUFlLE1BQWY7QUFDRDtBQUNGLE9BL0JPO0FBZ0NSWSxlQWhDUSx1QkFnQ0k7QUFDVix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLEtBRE07QUFFYkMsaUJBQU8sbUJBRk07QUFHYkMsb0JBQVUsSUFIRztBQUliQyxnQkFBTTtBQUpPLFNBQWY7QUFNRDtBQXZDTyxLOzs7Ozs2QkF5Q0Q7QUFDUCxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmSixlQUFPLFFBRFE7QUFFZkUsa0JBQVUsSUFGSztBQUdmRCxlQUFPO0FBSFEsT0FBakI7QUFLRDs7OztFQS9EK0IsZUFBS0ksSTs7a0JBQWxCM0IsSSIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfprZTmgKflu7rnrZHlt6UnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB4aWFuZ3FpbmdfY29sb3I6ICcjMDBEREREJyxcbiAgICAgIGxpa2U6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgICBzaG91cWk6ICfmmL7npLrlhajpg6gnLFxuICAgICAgc2hvdXFpMTogJ+aYvuekuuWFqOmDqCcsXG4gICAgICBzaG91cWkyOiAn5pi+56S65YWo6YOoJyxcbiAgICAgIGlzRm9sZDogZmFsc2UsXG4gICAgICBpc0ZvbGQxOiBmYWxzZSxcbiAgICAgIGlzRm9sZDI6IGZhbHNlLFxuICAgICAgamlhbnRvdTogJy4uL2ltYWdlL2ppYW50b3UucG5nJyxcbiAgICAgIHNoaXppOiAnLi4vaW1hZ2Uvc2hpemkucG5nJ1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgeGlhbmdxaW5nKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi54aWFuZ3FpbmcgPSAnd2hpdGUnXG4gICAgICB9LFxuICAgICAgZmxvZEZuKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5pc0ZvbGQgPSAhc2VsZi5pc0ZvbGRcbiAgICAgICAgaWYgKHNlbGYuaXNGb2xkID09PSB0cnVlKSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkgPSAn5pS26LW3J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuc2hvdXFpID0gJ+aYvuekuuWFqOmDqCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZsb2RGbjEoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmlzRm9sZDEgPSAhc2VsZi5pc0ZvbGQxXG4gICAgICAgIGlmIChzZWxmLmlzRm9sZDEgPT09IHRydWUpIHtcbiAgICAgICAgICBzZWxmLnNob3VxaTEgPSAn5pS26LW3J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuc2hvdXFpMSA9ICfmmL7npLrlhajpg6gnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmbG9kRm4yKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5pc0ZvbGQyID0gIXNlbGYuaXNGb2xkMlxuICAgICAgICBpZiAoc2VsZi5pc0ZvbGQyID09PSB0cnVlKSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkyID0gJ+aUtui1tydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnNob3VxaTIgPSAn5pi+56S65YWo6YOoJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXR0ZW50aW9uKCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflt7LlhbPms6gnLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2UvbGlrZS5wbmcnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAndGFwdGFwJyxcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGltYWdlOiAnLi4vaW1hZ2UvbG9hZGluZzEuZ2lmJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==