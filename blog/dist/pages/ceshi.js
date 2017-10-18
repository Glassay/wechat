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

var Ceshi = function (_wepy$page) {
  _inherits(Ceshi, _wepy$page);

  function Ceshi() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ceshi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ceshi.__proto__ || Object.getPrototypeOf(Ceshi)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      shujubangding: 'hello cheng',
      array: [1, 2, 3, 4, 5],
      view: 'haha',
      staffA: { FirstName: 'zhang', LastName: 'san' },
      staffB: { FirstName: 'wang', LastName: 'wu' },
      staffC: { FirstName: 'zhai', LastName: 'qi' },
      count: 1
    }, _this.methods = {
      add: function add() {
        this.setData({
          count: this.data.count + 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Ceshi;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Ceshi , 'pages/ceshi'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlc2hpLmpzIl0sIm5hbWVzIjpbIkNlc2hpIiwiZGF0YSIsInNodWp1YmFuZ2RpbmciLCJhcnJheSIsInZpZXciLCJzdGFmZkEiLCJGaXJzdE5hbWUiLCJMYXN0TmFtZSIsInN0YWZmQiIsInN0YWZmQyIsImNvdW50IiwibWV0aG9kcyIsImFkZCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMscUJBQWUsYUFEVjtBQUVMQyxhQUFPLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FGRjtBQUdMQyxZQUFNLE1BSEQ7QUFJTEMsY0FBUSxFQUFDQyxXQUFXLE9BQVosRUFBcUJDLFVBQVUsS0FBL0IsRUFKSDtBQUtMQyxjQUFRLEVBQUNGLFdBQVcsTUFBWixFQUFvQkMsVUFBVSxJQUE5QixFQUxIO0FBTUxFLGNBQVEsRUFBQ0gsV0FBVyxNQUFaLEVBQW9CQyxVQUFVLElBQTlCLEVBTkg7QUFPTEcsYUFBTztBQVBGLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixhQUFLQyxPQUFMLENBQWE7QUFDWEgsaUJBQU8sS0FBS1QsSUFBTCxDQUFVUyxLQUFWLEdBQWtCO0FBRGQsU0FBYjtBQUdEO0FBTE8sSzs7OztFQVZ1QixlQUFLSSxJOztrQkFBbkJkLEsiLCJmaWxlIjoiY2VzaGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VzaGkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBzaHVqdWJhbmdkaW5nOiAnaGVsbG8gY2hlbmcnLFxuICAgICAgYXJyYXk6IFsgMSwgMiwgMywgNCwgNSBdLFxuICAgICAgdmlldzogJ2hhaGEnLFxuICAgICAgc3RhZmZBOiB7Rmlyc3ROYW1lOiAnemhhbmcnLCBMYXN0TmFtZTogJ3Nhbid9LFxuICAgICAgc3RhZmZCOiB7Rmlyc3ROYW1lOiAnd2FuZycsIExhc3ROYW1lOiAnd3UnfSxcbiAgICAgIHN0YWZmQzoge0ZpcnN0TmFtZTogJ3poYWknLCBMYXN0TmFtZTogJ3FpJ30sXG4gICAgICBjb3VudDogMVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgYWRkKCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGNvdW50OiB0aGlzLmRhdGEuY291bnQgKyAxXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=