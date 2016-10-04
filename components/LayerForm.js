'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('grommet/components/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Form = require('grommet/components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormFields = require('grommet/components/FormFields');

var _FormFields2 = _interopRequireDefault(_FormFields);

var _Footer = require('grommet/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinning = require('grommet/components/icons/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var LayerForm = function (_Component) {
  _inherits(LayerForm, _Component);

  function LayerForm() {
    _classCallCheck(this, LayerForm);

    var _this = _possibleConstructorReturn(this, (LayerForm.__proto__ || Object.getPrototypeOf(LayerForm)).call(this));

    _this._onSubmit = _this._onSubmit.bind(_this);
    return _this;
  }

  _createClass(LayerForm, [{
    key: '_onSubmit',
    value: function _onSubmit(event) {
      event.preventDefault();
      this.props.onSubmit();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var submitLabel = _props.submitLabel;
      var onClose = _props.onClose;
      var title = _props.title;
      var compact = _props.compact;
      var busy = _props.busy;
      var secondaryControl = _props.secondaryControl;

      var control = void 0;
      if (busy) {
        var label = true === busy ? '' : busy;
        control = _react2.default.createElement(
          _Box2.default,
          { direction: 'row', align: 'center',
            pad: { horizontal: 'medium', between: 'small' } },
          _react2.default.createElement(_Spinning2.default, null),
          _react2.default.createElement(
            'span',
            { className: 'secondary' },
            label
          )
        );
      } else {
        control = _react2.default.createElement(_Button2.default, { type: 'submit', primary: true, label: submitLabel,
          onClick: this._onSubmit });
      }

      return _react2.default.createElement(
        _Layer2.default,
        { align: 'right', closer: true, onClose: onClose,
          a11yTitle: title },
        _react2.default.createElement(
          _Form2.default,
          { onSubmit: this._onSubmit, compact: compact },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            _FormFields2.default,
            null,
            this.props.children
          ),
          _react2.default.createElement(
            _Footer2.default,
            { pad: { vertical: 'medium' }, justify: 'between' },
            control,
            secondaryControl
          )
        )
      );
    }
  }]);

  return LayerForm;
}(_react.Component);

exports.default = LayerForm;
;

LayerForm.propTypes = {
  busy: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  compact: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  secondaryControl: _react.PropTypes.node,
  submitLabel: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];