import * as React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('renders', () => {
    const component = shallow(<App />);

    expect(component.exists()).toEqual(true);
  });
});

