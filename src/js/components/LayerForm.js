// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import BusyIcon from 'grommet/components/icons/Spinning';

export default class LayerForm extends Component {

  constructor () {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit (event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render () {
    const { submitLabel, onClose, title, compact, busy,
      secondaryControl, titleTag } = this.props;
    let control;
    if (busy) {
      const label = (true === busy ? '' : busy);
      control = (
        <Box direction="row" align="center"
          pad={{horizontal: 'medium', between: 'small'}}>
          <BusyIcon /><span className="secondary">{label}</span>
        </Box>
      );
    } else {
      control = (
        <Button type="submit" primary={true} label={submitLabel}
          onClick={this._onSubmit} />
      );
    }

    return (
      <Layer align="right" closer={true} onClose={onClose}
        a11yTitle={title}>
        <Form onSubmit={this._onSubmit} compact={compact}>
          <Header>
            <Heading tag={titleTag} margin='none'>{title}</Heading>
          </Header>
          <FormFields>
            {this.props.children}
          </FormFields>
          <Footer pad={{vertical: 'medium'}} justify="between">
            {control}
            {secondaryControl}
          </Footer>
        </Form>
      </Layer>
    );
  }
};

LayerForm.propTypes = {
  busy: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  compact: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  secondaryControl: PropTypes.node,
  submitLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string
};

LayerForm.defaultProps = {
  titleTag: 'h1'
};
