'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var LayerForm = function LayerForm(props) {

  var control = undefined;
  if (props.busy) {
    var label = true === props.busy ? '' : props.busy;
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
    control = _react2.default.createElement(_Button2.default, { type: 'submit', primary: true, strong: true,
      label: props.submitLabel,
      onClick: props.onSubmit });
  }

  return _react2.default.createElement(
    _Layer2.default,
    { align: 'right', closer: true, onClose: props.onClose,
      a11yTitle: props.title },
    _react2.default.createElement(
      _Box2.default,
      { full: 'vertical', justify: 'center' },
      _react2.default.createElement(
        _Form2.default,
        { onSubmit: props.onSubmit, compact: props.compact },
        _react2.default.createElement(
          'h1',
          null,
          props.title
        ),
        _react2.default.createElement(
          _FormFields2.default,
          null,
          props.children
        ),
        _react2.default.createElement(
          _Footer2.default,
          { pad: { vertical: 'medium' }, justify: 'between' },
          control,
          props.secondaryControl
        )
      )
    )
  );
};

LayerForm.propTypes = {
  busy: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  compact: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  secondaryControl: _react.PropTypes.node,
  submitLabel: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired
};

exports.default = LayerForm;
module.exports = exports['default'];