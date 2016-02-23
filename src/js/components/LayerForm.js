// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import BusyIcon from 'grommet/components/icons/Spinning';

const LayerForm = (props) => {

  let control;
  if (props.busy) {
    const label = (true === props.busy ? '' : props.busy);
    control = (
      <Box direction="row" align="center"
        pad={{horizontal: 'medium', between: 'small'}}>
        <BusyIcon /><span className="secondary">{label}</span>
      </Box>
    );
  } else {
    control = (
      <Button type="submit" primary={true} strong={true}
        label={props.submitLabel}
        onClick={props.onSubmit} />
    );
  }

  return (
    <Layer align="right" closer={true} onClose={props.onClose}
      a11yTitle={props.title}>
      <Box full="vertical" justify="center">
        <Form onSubmit={props.onSubmit} compact={props.compact}>
          <h1>{props.title}</h1>
          <FormFields>
            {props.children}
          </FormFields>
          <Footer pad={{vertical: 'medium'}} justify="between">
            {control}
            {props.secondaryControl}
          </Footer>
        </Form>
      </Box>
    </Layer>
  );
};

LayerForm.propTypes = {
  busy: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  compact: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  secondaryControl: PropTypes.node,
  submitLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default LayerForm;
