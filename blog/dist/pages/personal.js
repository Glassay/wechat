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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Personal.__proto__ || Object.getPrototypeOf(Personal)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
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
      var that = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.nickName = res.userInfo.nickName;
          that.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Personal;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Personal , 'pages/personal'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsIiwiZGF0YSIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwicGljIiwiZ2l0aHViIiwiZW1haWwiLCJxcSIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicGF0aCIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxXQUFLLHNCQUhBO0FBSUxDLGNBQVEsMEJBSkg7QUFLTEMsYUFBTyxxQkFMRjtBQU1MQyxVQUFJO0FBTkMsSyxRQVFQQyxPLEdBQVU7QUFDUkMsdUJBRFEsK0JBQ1k7QUFDbEIsZUFBTztBQUNMQyxpQkFBTyxZQURGO0FBRUxDLGdCQUFNO0FBRkQsU0FBUDtBQUlEO0FBTk8sSzs7Ozs7NkJBUUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLVCxRQUFMLEdBQWdCWSxJQUFJQyxRQUFKLENBQWFiLFFBQTdCO0FBQ0FTLGVBQUtWLFNBQUwsR0FBaUJhLElBQUlDLFFBQUosQ0FBYWQsU0FBOUI7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF6Qm1DLGVBQUtlLEk7O2tCQUF0QmpCLFEiLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25hbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgcGljOiAnLi4vaW1hZ2UvZ2l0aHViZi5wbmcnLFxuICAgIGdpdGh1YjogJy4uL2ltYWdlL2dpdGh1Yl9sb2dvLnBuZycsXG4gICAgZW1haWw6ICcuLi9pbWFnZS9lbWFpbDEucG5nJyxcbiAgICBxcTogJy4uL2ltYWdlL3FxLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdDaGVuZ+eahEJMT0cnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3BlcnNvbmFsJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgdGhhdC5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICB0aGF0LmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=