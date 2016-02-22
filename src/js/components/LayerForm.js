// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

const LayerForm = (props) => {
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
            <Button type="submit" primary={true} strong={true}
              label={props.submitLabel}
              onClick={props.onSubmit} />
            {props.secondaryControl}
          </Footer>
        </Form>
      </Box>
    </Layer>
  );
};

LayerForm.propTypes = {
  compact: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  secondaryControl: PropTypes.node,
  submitLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default LayerForm;
