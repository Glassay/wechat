'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hgame = require('./../content/hgame.js');

var _hgame2 = _interopRequireDefault(_hgame);

var _ngame = require('./../content/ngame.js');

var _ngame2 = _interopRequireDefault(_ngame);

var _channel = require('./../content/channel.js');

var _channel2 = _interopRequireDefault(_channel);

var _dgame = require('./../content/dgame.js');

var _dgame2 = _interopRequireDefault(_dgame);

var _label = require('./../content/label.js');

var _label2 = _interopRequireDefault(_label);

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
      navigationBarTitleText: '发现'
    }, _this.data = {
      imagUrls: ['https://img.taptapdada.com/market/images/e25f7e6cfc9b77fc2343c5be46db6cb5.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1', 'https://img.taptapdada.com/market/images/9b997ef9e2aa1d45cb1c7f07f7cdaddf.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1', 'https://img.taptapdada.com/market/images/f63d08709e1013862bf395f071fccd04.jpg?imageView2/1/w/2080/h/800/q/40/format/jpg/interlace/1/ignore-error/1'],
      label: null,
      dgame: null,
      channel: null,
      ngame: null,
      hgame: null
    }, _this.methods = {
      click: function click() {
        _wepy2.default.navigateTo({
          url: './classfy'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.hgame = _hgame2.default;
      self.ngame = _ngame2.default;
      self.channel = _channel2.default;
      self.label = _label2.default;
      self.dgame = _dgame2.default;
      _wepy2.default.showLoading({
        title: 'taptap',
        duration: 2000,
        image: '../image/loading1.gif'
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/find'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1hZ1VybHMiLCJsYWJlbCIsImRnYW1lIiwiY2hhbm5lbCIsIm5nYW1lIiwiaGdhbWUiLCJtZXRob2RzIiwiY2xpY2siLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsImltYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVSxDQUNSLG9KQURRLEVBRVIsb0pBRlEsRUFHUixvSkFIUSxDQURMO0FBTUxDLGFBQU8sSUFORjtBQU9MQyxhQUFPLElBUEY7QUFRTEMsZUFBUyxJQVJKO0FBU0xDLGFBQU8sSUFURjtBQVVMQyxhQUFPO0FBVkYsSyxRQXlCUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQWJEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtMLEtBQUw7QUFDQUssV0FBS04sS0FBTDtBQUNBTSxXQUFLUCxPQUFMO0FBQ0FPLFdBQUtULEtBQUw7QUFDQVMsV0FBS1IsS0FBTDtBQUNBLHFCQUFLUyxXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sUUFEUTtBQUVmQyxrQkFBVSxJQUZLO0FBR2ZDLGVBQU87QUFIUSxPQUFqQjtBQUtEOzs7O0VBNUIrQixlQUFLQyxJOztrQkFBbEJuQixJIiwiZmlsZSI6ImZpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IGhnYW1lIGZyb20gJy4uL2NvbnRlbnQvaGdhbWUuanMnXG4gIGltcG9ydCBuZ2FtZSBmcm9tICcuLi9jb250ZW50L25nYW1lLmpzJ1xuICBpbXBvcnQgY2hhbm5lbCBmcm9tICcuLi9jb250ZW50L2NoYW5uZWwuanMnXG4gIGltcG9ydCBkZ2FtZSBmcm9tICcuLi9jb250ZW50L2RnYW1lLmpzJ1xuICBpbXBvcnQgbGFiZWwgZnJvbSAnLi4vY29udGVudC9sYWJlbC5qcydcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeeOsCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGltYWdVcmxzOiBbXG4gICAgICAgICdodHRwczovL2ltZy50YXB0YXBkYWRhLmNvbS9tYXJrZXQvaW1hZ2VzL2UyNWY3ZTZjZmM5Yjc3ZmMyMzQzYzViZTQ2ZGI2Y2I1LmpwZz9pbWFnZVZpZXcyLzEvdy8yMDgwL2gvODAwL3EvNDAvZm9ybWF0L2pwZy9pbnRlcmxhY2UvMS9pZ25vcmUtZXJyb3IvMScsXG4gICAgICAgICdodHRwczovL2ltZy50YXB0YXBkYWRhLmNvbS9tYXJrZXQvaW1hZ2VzLzliOTk3ZWY5ZTJhYTFkNDVjYjFjN2YwN2Y3Y2RhZGRmLmpwZz9pbWFnZVZpZXcyLzEvdy8yMDgwL2gvODAwL3EvNDAvZm9ybWF0L2pwZy9pbnRlcmxhY2UvMS9pZ25vcmUtZXJyb3IvMScsXG4gICAgICAgICdodHRwczovL2ltZy50YXB0YXBkYWRhLmNvbS9tYXJrZXQvaW1hZ2VzL2Y2M2QwODcwOWUxMDEzODYyYmYzOTVmMDcxZmNjZDA0LmpwZz9pbWFnZVZpZXcyLzEvdy8yMDgwL2gvODAwL3EvNDAvZm9ybWF0L2pwZy9pbnRlcmxhY2UvMS9pZ25vcmUtZXJyb3IvMSdcbiAgICAgIF0sXG4gICAgICBsYWJlbDogbnVsbCxcbiAgICAgIGRnYW1lOiBudWxsLFxuICAgICAgY2hhbm5lbDogbnVsbCxcbiAgICAgIG5nYW1lOiBudWxsLFxuICAgICAgaGdhbWU6IG51bGxcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmhnYW1lID0gaGdhbWVcbiAgICAgIHNlbGYubmdhbWUgPSBuZ2FtZVxuICAgICAgc2VsZi5jaGFubmVsID0gY2hhbm5lbFxuICAgICAgc2VsZi5sYWJlbCA9IGxhYmVsXG4gICAgICBzZWxmLmRnYW1lID0gZGdhbWVcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ3RhcHRhcCcsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBpbWFnZTogJy4uL2ltYWdlL2xvYWRpbmcxLmdpZidcbiAgICAgIH0pXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGljaygpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2NsYXNzZnknXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=