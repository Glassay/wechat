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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Blog , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiQmxvZyIsImNvbmZpZyIsImRhdGEiLCJwaWMxIiwicGljMiIsInBpYzMiLCJwaWM0IiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxZQUFNLG1CQUREO0FBRUxDLFlBQU0sc0JBRkQ7QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxZQUFNO0FBSkQsSyxRQU1QQyxPLEdBQVUsRTs7OztFQVRzQixlQUFLQyxJOztrQkFBbEJSLEkiLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBwaWMxOiAnLi4vaW1hZ2UvaG9tZS5wbmcnLFxuICAgICAgcGljMjogJy4uL2ltYWdlL21lc3NhZ2UucG5nJyxcbiAgICAgIHBpYzM6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgICBwaWM0OiAnLi4vaW1hZ2UvZ2l0aHViLnBuZydcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gIH1cbiJdfQ==