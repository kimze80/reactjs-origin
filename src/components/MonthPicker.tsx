import * as React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import { Month, Year } from './styled-components/Texts';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

type MonthPickProps = {
  month: string;
  year: string;
  rightClick: React.MouseEventHandler<HTMLElement>;
  leftClick: React.MouseEventHandler<HTMLElement>;
  keyDown: any;
  inputId: string;
  clickInput: React.MouseEventHandler<HTMLElement>;
}

const MonthPicker: React.FC<MonthPickProps> = ({month, year, leftClick, rightClick, keyDown, inputId, clickInput}) => {
    
    return (
      <div className="month-picker">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button className='left-btn' onClick={leftClick}>
              <ArrowIcon/> 
            </Button>
          </InputGroup.Prepend>
          <FormControl 
            className="input-months" 
            onKeyDown={keyDown}
            id={inputId}
          />
          <div className='months' onClick={clickInput}>
            <Month className="month">{month}</Month>
            <Year className="year">{year}</Year>
          </div>
          <InputGroup.Append>
            <Button className='right-btn' onClick={rightClick}>
              <ArrowIcon/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );

}

export default MonthPicker
