'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Title = require('grommet/components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var NavSidebar = function (_Component) {
  _inherits(NavSidebar, _Component);

  function NavSidebar() {
    _classCallCheck(this, NavSidebar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NavSidebar).apply(this, arguments));
  }

  _createClass(NavSidebar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var logo = _props.logo;
      var navMenu = _props.navMenu;
      var onClose = _props.onClose;
      var title = _props.title;

      return _react2.default.createElement(
        _Sidebar2.default,
        { colorIndex: 'neutral-1', fixed: true },
        _react2.default.createElement(
          _Header2.default,
          { size: 'large', justify: 'between', pad: { horizontal: 'medium' } },
          _react2.default.createElement(
            _Title2.default,
            { onClick: onClose, a11yTitle: 'Close Menu' },
            logo,
            _react2.default.createElement(
              'span',
              null,
              title
            )
          ),
          _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Close2.default, null), onClick: onClose,
            a11yTitle: 'Close Menu' })
        ),
        navMenu
      );
    }
  }]);

  return NavSidebar;
}(_react.Component);

NavSidebar.propTypes = {
  logo: _react.PropTypes.node,
  name: _react.PropTypes.string,
  navMenu: _react.PropTypes.node,
  onClose: _react.PropTypes.func
};

var Main = function (_Component2) {
  _inherits(Main, _Component2);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var headerMenu = _props2.headerMenu;
      var heading = _props2.heading;
      var logo = _props2.logo;
      var navActive = _props2.navActive;
      var onOpenNavSidebar = _props2.onOpenNavSidebar;
      var search = _props2.search;

      var title = void 0;
      if (navActive) {
        title = _react2.default.createElement(
          _Title2.default,
          null,
          _react2.default.createElement(
            'span',
            null,
            heading
          )
        );
      } else {
        title = _react2.default.createElement(
          _Title2.default,
          { onClick: onOpenNavSidebar, a11yTitle: 'Open Menu' },
          logo,
          _react2.default.createElement(
            'span',
            null,
            heading
          )
        );
      }
      return _react2.default.createElement(
        _Box2.default,
        null,
        _react2.default.createElement(
          _Header2.default,
          { size: 'large', justify: 'between', pad: { horizontal: 'medium' } },
          title,
          search,
          headerMenu
        ),
        this.props.children
      );
    }
  }]);

  return Main;
}(_react.Component);

Main.propTypes = {
  headerMenu: _react.PropTypes.node,
  heading: _react.PropTypes.string,
  logo: _react.PropTypes.node,
  navActive: _react.PropTypes.bool,
  onOpenNavSidebar: _react.PropTypes.func,
  search: _react.PropTypes.node
};

var NavSplit = function (_Component3) {
  _inherits(NavSplit, _Component3);

  function NavSplit() {
    _classCallCheck(this, NavSplit);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(NavSplit).call(this));

    _this3.state = { navActive: true, responsive: 'multiple' };
    return _this3;
  }

  _createClass(NavSplit, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props;
      var headerMenu = _props3.headerMenu;
      var heading = _props3.heading;
      var logo = _props3.logo;
      var navMenu = _props3.navMenu;
      var search = _props3.search;
      var title = _props3.title;
      var _state = this.state;
      var navActive = _state.navActive;
      var responsive = _state.responsive;


      var navSidebar = void 0;
      if (navActive) {
        navSidebar = _react2.default.createElement(NavSidebar, { logo: logo, navMenu: navMenu, title: title,
          onClose: function onClose() {
            return _this4.setState({ navActive: false });
          } });
      }
      var priority = navActive && 'single' === responsive ? 'left' : 'right';

      return _react2.default.createElement(
        _Split2.default,
        { priority: priority, flex: 'right',
          onResponsive: function onResponsive(mode) {
            return _this4.setState({ responsive: mode });
          } },
        navSidebar,
        _react2.default.createElement(
          Main,
          { logo: logo, heading: heading, headerMenu: headerMenu,
            search: search, navActive: navActive,
            onOpenNavSidebar: function onOpenNavSidebar() {
              return _this4.setState({ navActive: true });
            } },
          this.props.children
        )
      );
    }
  }]);

  return NavSplit;
}(_react.Component);

exports.default = NavSplit;
;

NavSplit.propTypes = {
  headerMenu: _react.PropTypes.node,
  heading: _react.PropTypes.string,
  logo: _react.PropTypes.node,
  navMenu: _react.PropTypes.node,
  search: _react.PropTypes.node,
  title: _react.PropTypes.string
};
module.exports = exports['default'];