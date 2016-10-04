// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import LayerForm from '../../src/js/components/LayerForm';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

global.fetch = () => Promise.resolve();
describe('LayerForm', () => {
  it('default', () => {
    const component = renderer.create(
      <LayerForm onClose={() => {}} onSubmit={()=> {}} title='Test'
        submitLabel='Submit' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
