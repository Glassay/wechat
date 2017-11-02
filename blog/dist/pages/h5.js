'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _h = require('./../content/h5.js');

var _h2 = _interopRequireDefault(_h);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H5 = function (_wepy$page) {
  _inherits(H5, _wepy$page);

  function H5() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, H5);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = H5.__proto__ || Object.getPrototypeOf(H5)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'H5'
    }, _this.data = {
      h5: [],
      count: 0
    }, _this.methods = {
      article: function article() {
        var self = this;
        _wepy2.default.navigateTo({
          url: './article'
        });
        self.count++;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(H5, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.h5 = _h2.default;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.showLoading({
        title: '加载中',
        duration: 2000,
        image: '../image/loading.gif'
      });
    }
  }]);

  return H5;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(H5 , 'pages/h5'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImg1LmpzIl0sIm5hbWVzIjpbIkg1IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoNSIsImNvdW50IiwibWV0aG9kcyIsImFydGljbGUiLCJzZWxmIiwibmF2aWdhdGVUbyIsInVybCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsImltYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxFOzs7Ozs7Ozs7Ozs7Ozs4S0FDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsVUFBSSxFQURDO0FBRUxDLGFBQU87QUFGRixLLFFBSVBDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0FGLGFBQUtILEtBQUw7QUFDRDtBQVBPLEs7Ozs7OzZCQVNEO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLEVBQUw7QUFDQSxxQkFBS08sYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTCxlQUFLTSxNQUFMLEdBQWNELElBQUlFLFlBQWxCO0FBQ0FQLGVBQUtRLEtBQUwsR0FBYUgsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sS0FEUTtBQUVmQyxrQkFBVSxJQUZLO0FBR2ZDLGVBQU87QUFIUSxPQUFqQjtBQUtEOzs7O0VBL0I2QixlQUFLQyxJOztrQkFBaEJ0QixFIiwiZmlsZSI6Img1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBoNSBmcm9tICcuLi9jb250ZW50L2g1LmpzJ1xuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBINSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0g1J1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaDU6IFtdLFxuICAgICAgY291bnQ6IDBcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFydGljbGUoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vYXJ0aWNsZSdcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5jb3VudCsrXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5oNSA9IGg1XG4gICAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBpbWFnZTogJy4uL2ltYWdlL2xvYWRpbmcuZ2lmJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==