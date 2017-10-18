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

var Frame = function (_wepy$page) {
  _inherits(Frame, _wepy$page);

  function Frame() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Frame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Frame.__proto__ || Object.getPrototypeOf(Frame)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      shujubangding: 'hello cheng',
      array: [1, 2, 3, 4, 5],
      view: 'haha',
      staffA: { FirstName: 'zhang', LastName: 'san' },
      staffB: { FirstName: 'wang', LastName: 'wu' },
      staffC: { FirstName: 'zhai', LastName: 'qi' },
      count: 1,
      array1: [{ message: 'foo' }, { message: 'bar' }]
    }, _this.methods = {
      add: function add() {
        this.setData({
          count: this.data.count + 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Frame;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Frame , 'pages/frame'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwiZGF0YSIsInNodWp1YmFuZ2RpbmciLCJhcnJheSIsInZpZXciLCJzdGFmZkEiLCJGaXJzdE5hbWUiLCJMYXN0TmFtZSIsInN0YWZmQiIsInN0YWZmQyIsImNvdW50IiwiYXJyYXkxIiwibWVzc2FnZSIsIm1ldGhvZHMiLCJhZGQiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLHFCQUFlLGFBRFY7QUFFTEMsYUFBTyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBRkY7QUFHTEMsWUFBTSxNQUhEO0FBSUxDLGNBQVEsRUFBQ0MsV0FBVyxPQUFaLEVBQXFCQyxVQUFVLEtBQS9CLEVBSkg7QUFLTEMsY0FBUSxFQUFDRixXQUFXLE1BQVosRUFBb0JDLFVBQVUsSUFBOUIsRUFMSDtBQU1MRSxjQUFRLEVBQUNILFdBQVcsTUFBWixFQUFvQkMsVUFBVSxJQUE5QixFQU5IO0FBT0xHLGFBQU8sQ0FQRjtBQVFMQyxjQUFRLENBQUMsRUFBQ0MsU0FBUyxLQUFWLEVBQUQsRUFBbUIsRUFBQ0EsU0FBUyxLQUFWLEVBQW5CO0FBUkgsSyxRQVVQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLGFBQUtDLE9BQUwsQ0FBYTtBQUNYTCxpQkFBTyxLQUFLVCxJQUFMLENBQVVTLEtBQVYsR0FBa0I7QUFEZCxTQUFiO0FBR0Q7QUFMTyxLOzs7O0VBWHVCLGVBQUtNLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoiZnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBzaHVqdWJhbmdkaW5nOiAnaGVsbG8gY2hlbmcnLFxuICAgICAgYXJyYXk6IFsgMSwgMiwgMywgNCwgNSBdLFxuICAgICAgdmlldzogJ2hhaGEnLFxuICAgICAgc3RhZmZBOiB7Rmlyc3ROYW1lOiAnemhhbmcnLCBMYXN0TmFtZTogJ3Nhbid9LFxuICAgICAgc3RhZmZCOiB7Rmlyc3ROYW1lOiAnd2FuZycsIExhc3ROYW1lOiAnd3UnfSxcbiAgICAgIHN0YWZmQzoge0ZpcnN0TmFtZTogJ3poYWknLCBMYXN0TmFtZTogJ3FpJ30sXG4gICAgICBjb3VudDogMSxcbiAgICAgIGFycmF5MTogW3ttZXNzYWdlOiAnZm9vJ30sIHttZXNzYWdlOiAnYmFyJ31dXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhZGQoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgY291bnQ6IHRoaXMuZGF0YS5jb3VudCArIDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==