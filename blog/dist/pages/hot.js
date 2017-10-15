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
      pic1: '../image/home.png',
      pic2: '../image/message.png',
      pic3: '../image/like.png',
      pic4: '../image/github.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Blog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/hot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdC5qcyJdLCJuYW1lcyI6WyJCbG9nIiwiY29uZmlnIiwiZGF0YSIsInBpYzEiLCJwaWMyIiwicGljMyIsInBpYzQiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLFlBQU0sbUJBREQ7QUFFTEMsWUFBTSxzQkFGRDtBQUdMQyxZQUFNLG1CQUhEO0FBSUxDLFlBQU07QUFKRCxLLFFBTVBDLE8sR0FBVSxFOzs7O0VBVHNCLGVBQUtDLEk7O2tCQUFsQlIsSSIsImZpbGUiOiJob3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgcGljMTogJy4uL2ltYWdlL2hvbWUucG5nJyxcbiAgICAgIHBpYzI6ICcuLi9pbWFnZS9tZXNzYWdlLnBuZycsXG4gICAgICBwaWMzOiAnLi4vaW1hZ2UvbGlrZS5wbmcnLFxuICAgICAgcGljNDogJy4uL2ltYWdlL2dpdGh1Yi5wbmcnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICB9XG4iXX0=