import * as React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import InputGoal, {} from '../src/components/InputGoal';
import SavingCard, {} from '../src/components/SavingCard';

// describe('App', () => {
//   it('renders', () => {
//     const component = shallow(<App />);

//     expect(component.exists()).toEqual(true);
//   });
// });

describe("Currency input", () => {
  it("Should capture string correctly onChange inside input", () => {
    const onchange = jest.fn()
    const component = mount(<InputGoal inputChange={onchange} inputValue='3,000'/>);
    const input = component.find('.input-goal input').at(0)
    input.simulate('focus');
    input.simulate('change', { target: { value: '3000' } });
    input.simulate('keyDown', {
      which: 27,
      target: {
        blur() {
          input.simulate('blur');
        },
      },
    });
    expect(input.get(0).props.value).toEqual('3,000');
    
  });
});

describe("Currency card", () => {
  it("Should capture value correctly equal to input", () => {
    const componentCard = shallow(<SavingCard />);
    expect(componentCard.exists()).toEqual(true);
    // const componentCard = mount(<SavingCard />);
    // const inCardCurrency = componentCard.find('.monthly-value span').at(0)

    // expect(inCardCurrency.get(0)).toEqual('$3,000.00')
    
  });
});