import React, {useState, useCallback} from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Container } from './styles';
import numeral from 'numeral';

interface InputGoalProps {
  goalValueProp: Function;
}

const InputGoal: React.FC<InputGoalProps> = ({goalValueProp}) => {
  const [value, setValue] = useState('');

  const onchange = useCallback((e: any) => {
    let val = e.target.value

    // it will format in currency number Ex: 1,000
    let withComma = numeral(val).format('0,0')
    setValue(withComma)

    // it will get the value, take the comma off and format in number
    let num = Number(val.replace(/\,/g,''))

    // it will send the number to parent component
    goalValueProp(num, withComma)
  }, [])

  return (
    <Container>
      <InputGroup className="input-goal">
        <InputGroup.Prepend>
          <InputGroup.Text id="currency-icon">$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="20,000"
          aria-label="currency"
          aria-describedby="currency-icon"
          onChange={onchange}
          value={value ? value : ''}
        />
      </InputGroup>
    </Container>
  )
}
export default InputGoal;
