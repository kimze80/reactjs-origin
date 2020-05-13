import React, { useState, useEffect } from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import { Container, MonthYearBox, Month, Year } from './styles';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import moment from 'moment'


interface MonthPickProps {
  numberOfMonths: Function;
  dateProp: Function;
}

const MonthPicker: React.FC<MonthPickProps> = ({numberOfMonths, dateProp}) => {
  const [currentdate, setCurrentdate] = useState(moment())
  const [month, setMonth] = useState(moment().format('MMMM'))
  const [year, setYear] = useState(moment().format('YYYY'))
  const [monthly, setMonthly] = useState(0)

  const increaseMonth = () => {
    let date = currentdate
    date.add(1, 'months')
    setCurrentdate(date)
    setMonth(date.format('MMMM'))
    setYear(date.format('YYYY'))
    dateProp(date.format('MMMM'), date.format('YYYY'))
    
    setMonthly( monthly + 1)
    numberOfMonths(monthly + 1)
  }

  const decreaseMonth = () => {
    let date = currentdate
    let currMonth = moment().format('MMMM')
    let currYear = moment().format('YYYY')
    if (currMonth == month && currYear == year) {
      return
    }
    
    date.add(-1, 'months')
    setCurrentdate(date)
    setMonth(date.format('MMMM'))
    setYear(date.format('YYYY'))
    dateProp(date.format('MMMM'), date.format('YYYY'))
    
    setMonthly( monthly - 1)
    numberOfMonths(monthly - 1)
  }
  
  const eventKeyDown = (e: React.KeyboardEvent) => {
    console.log(e.keyCode)
    switch (e.keyCode) {
      case 37:
        decreaseMonth()
        break;
      case 39:
        increaseMonth()
        break;
    }
  }

  useEffect(() => {

  }, [])

  const getId = () => {
    document.getElementById("input_id").focus();
  }

    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button className='left-btn' onClick={decreaseMonth}>
              <ArrowIcon/> 
            </Button>
          </InputGroup.Prepend>
          <FormControl 
            className="input-months" 
            onKeyDown={eventKeyDown}
            id="input_id"
            // id={inputId}
          />
          <MonthYearBox onClick={getId}>
            <Month className="month">{month}</Month>
            <Year className="year">{year}</Year>
          </MonthYearBox>
          <InputGroup.Append>
            <Button className='right-btn' onClick={increaseMonth}>
              <ArrowIcon/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    );

}

export default MonthPicker;
