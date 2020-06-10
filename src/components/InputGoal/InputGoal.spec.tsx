import * as React from 'react';
import { shallow } from 'enzyme';
import InputGoal from './index';

describe('Testing InputGoal', () => {
  it('Should render InputGoal correctly', () => {
    const func = () => {return '3,000'}
    const wrapper = shallow(
      <InputGoal goalValueProp={func}/>
    );

    expect(wrapper).toMatchSnapshot();
  })
})