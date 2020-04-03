import React, {useState, Component} from 'react';
import InputGoal from './InputGoal';
import { Card, CardInside } from './styled-components/Card';
import { FinishButton } from './styled-components/Buttons';
import { Label, Title, SubTitle, CallToAction } from './styled-components/Texts';
import InsuranceIcon from '../icons/InsuranceIcon';
import MonthPicker from './MonthPicker';
import '../styles/InputGoal.scss'
import '../styles/SavingCard.scss'
import '../styles/MonthPicker.scss'
import console = require('console');
import moment from 'moment'

type savingCardProps = {}

const SavingCard: React.FC<savingCardProps> = ({}) => {
  
  const [value, setValue] = useState(0);
  const [currentdate, setCurrentdate] = useState(moment())
  const [month, setMonth] = useState(moment().format('MMMM'))
  const [year, setYear] = useState(moment().format('YYYY'))
  const [monthly, setMonthly] = useState(0)
  const [displayVal, setDisplayVal] = useState(0)

  const onchange = (e: any) => {
    let val = e.target.value
    val = formatNumberInput(val)
    commaOff(val)
    setValue(val)
    
  }

  const increaseMonth = () => {
    let date = currentdate
    date.add(1, 'months')
    setCurrentdate(date)
    setMonth(date.format('MMMM'))
    setYear(date.format('YYYY'))
    
    setMonthly( monthly + 1)
  }

  const decreaseMonth = () => {
    let date = currentdate
    let currMonth = moment().format('MMMM')
    let currYear = moment().format('YYYY')
    if (currMonth == month && currYear == year) {
      return
    }
    setMonthly( monthly - 1)
    
    date.add(-1, 'months')
    setCurrentdate(date)
    setMonth(date.format('MMMM'))
    setYear(date.format('YYYY'))
    
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

  const formatNumberInput = (str: string) => {
    return str.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const commaOff = (num: any) => {
    let a = num
    a = a.replace(/\,/g,'')
    a = Number(a)
    setDisplayVal(a)
  }

  const getId = () => {
    document.getElementById("input_id").focus();
  }

  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  const result = displayVal / monthly
  const monthlyPay = formatter.format(result)


  return (
    <div id="saving-card">
      <div className="call-action-text">
        <CallToAction>
          Let's plan your <strong>saving goal</strong>
        </CallToAction>
      </div>
        <Card>
          {/* Header */}
          <div className="header">
            <div className="header-icon">
              <InsuranceIcon />
            </div>
            <Title>Buy a house</Title>
            <SubTitle>Saving goal</SubTitle>
          </div>
          {/* Input and Month picker */}
          <div className="inputs-row">
            <div className="inputs">
              <Label>Total amount</Label>
              <InputGoal 
                inputValue={value ? value : ''}
                inputChange={onchange}
              />
            </div>
            <div className="inputs">
              <Label>Reach goal by</Label>
              <MonthPicker 
                rightClick={increaseMonth}
                leftClick={decreaseMonth}
                keyDown={eventKeyDown}
                month={month}
                year={year}
                inputId={'input_id'}
                clickInput={getId}
              />
            </div>
          </div>

          {/* Response card */}
          <CardInside>
            <div className="card-inside-body">
              <div className="monthly-text">
                <span className="monthly-web">Monthly amount</span>
                <span className="monthly-mobile">Monthly</span>
              </div>
              <div className="monthly-value">
                <span>{displayVal && monthly ? monthlyPay : '$'+value+'.00'}</span>
              </div>
            </div>
            <div className="card-inside-footer">
              <span>
                You're planning <strong>{monthly} monthly deposits</strong> to reach your 
                <strong> ${value}</strong> goal by <strong>{month} {year}</strong>
               </span>
            </div>
          </CardInside>

          {/* Finish button */}
          <div className="text-center">
            <FinishButton>Finish</FinishButton>
          </div>
        </Card>
      </div>
  )
}
export default SavingCard
