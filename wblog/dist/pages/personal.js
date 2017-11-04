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

var Personal = function (_wepy$page) {
  _inherits(Personal, _wepy$page);

  function Personal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Personal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Personal.__proto__ || Object.getPrototypeOf(Personal)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Welcome To My BLOG'
    }, _this.data = {
      avatarUrl: '',
      nickName: '',
      pic: '../image/githubf.png',
      github: '../image/github_logo.png',
      email: '../image/email1.png',
      qq: '../image/qq.png'
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          title: 'Cheng的BLOG',
          path: '/pages/personal'
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Personal, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Personal;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Personal , 'pages/personal'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInBpYyIsImdpdGh1YiIsImVtYWlsIiwicXEiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInBhdGgiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLFdBQUssc0JBSEE7QUFJTEMsY0FBUSwwQkFKSDtBQUtMQyxhQUFPLHFCQUxGO0FBTUxDLFVBQUk7QUFOQyxLLFFBUVBDLE8sR0FBVTtBQUNSQyx1QkFEUSwrQkFDWTtBQUNsQixlQUFPO0FBQ0xDLGlCQUFPLFlBREY7QUFFTEMsZ0JBQU07QUFGRCxTQUFQO0FBSUQ7QUFOTyxLOzs7Ozs2QkFRRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtULFFBQUwsR0FBZ0JZLElBQUlDLFFBQUosQ0FBYWIsUUFBN0I7QUFDQVMsZUFBS1YsU0FBTCxHQUFpQmEsSUFBSUMsUUFBSixDQUFhZCxTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQTVCbUMsZUFBS2UsSTs7a0JBQXRCbkIsUSIsImZpbGUiOiJwZXJzb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbmFsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZWxjb21lIFRvIE15IEJMT0cnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBwaWM6ICcuLi9pbWFnZS9naXRodWJmLnBuZycsXG4gICAgZ2l0aHViOiAnLi4vaW1hZ2UvZ2l0aHViX2xvZ28ucG5nJyxcbiAgICBlbWFpbDogJy4uL2ltYWdlL2VtYWlsMS5wbmcnLFxuICAgIHFxOiAnLi4vaW1hZ2UvcXEucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ0NoZW5n55qEQkxPRycsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvcGVyc29uYWwnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==