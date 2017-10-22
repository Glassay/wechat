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
      isFold: false,
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwieGlhbmdxaW5nX2NvbG9yIiwibGlrZSIsInNob3VxaSIsImlzRm9sZCIsImppYW50b3UiLCJzaGl6aSIsIm1ldGhvZHMiLCJ4aWFuZ3FpbmciLCJzZWxmIiwiZmxvZEZuIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyx1QkFBaUIsU0FEWjtBQUVMQyxZQUFNLG1CQUZEO0FBR0xDLGNBQVEsTUFISDtBQUlMQyxjQUFRLEtBSkg7QUFLTEMsZUFBUyxzQkFMSjtBQU1MQyxhQUFPO0FBTkYsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLRCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0QsT0FKTztBQUtSRSxZQUxRLG9CQUtDO0FBQ1AsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtMLE1BQUwsR0FBYyxDQUFDSyxLQUFLTCxNQUFwQjtBQUNBLFlBQUlLLEtBQUtMLE1BQUwsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEJLLGVBQUtOLE1BQUwsR0FBYyxJQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xNLGVBQUtOLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7QUFDRjtBQWJPLEs7Ozs7RUFac0IsZUFBS1EsSTs7a0JBQWxCZCxJIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mtlOaAp+W7uuetkeW3pSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHhpYW5ncWluZ19jb2xvcjogJyMwMEREREQnLFxuICAgICAgbGlrZTogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICAgIHNob3VxaTogJ+aYvuekuuWFqOmDqCcsXG4gICAgICBpc0ZvbGQ6IGZhbHNlLFxuICAgICAgamlhbnRvdTogJy4uL2ltYWdlL2ppYW50b3UucG5nJyxcbiAgICAgIHNoaXppOiAnLi4vaW1hZ2Uvc2hpemkucG5nJ1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgeGlhbmdxaW5nKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi54aWFuZ3FpbmcgPSAnd2hpdGUnXG4gICAgICB9LFxuICAgICAgZmxvZEZuKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5pc0ZvbGQgPSAhc2VsZi5pc0ZvbGRcbiAgICAgICAgaWYgKHNlbGYuaXNGb2xkID09PSB0cnVlKSB7XG4gICAgICAgICAgc2VsZi5zaG91cWkgPSAn5pS26LW3J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuc2hvdXFpID0gJ+aYvuekuuWFqOmDqCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19