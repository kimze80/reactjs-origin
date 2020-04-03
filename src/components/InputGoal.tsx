import * as React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

type InputGoalProps = {
  inputValue: any;
  inputChange: any;
}

const InputGoal: React.FC<InputGoalProps> = ({inputValue, inputChange}) => {
   
    return (
      <div>
        <InputGroup className="input-goal">
          <InputGroup.Prepend>
            <InputGroup.Text id="currency-icon">$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="20,000"
            aria-label="Username"
            aria-describedby="currency-icon"
            onChange={inputChange}
            value={inputValue}
          />
        </InputGroup>
      </div>
    )
}
export default InputGoal;
