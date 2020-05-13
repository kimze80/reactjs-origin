import React, { useState, useCallback } from 'react';
import { TopBar, Image } from '../../components/TopBar';
import { Container, Card, CardInside, Header, InputContainer, Text, FinishButton } from './styles';
import InputGoal from '../../components/InputGoal/index';
import InsuranceIcon from '../../assets/icons/InsuranceIcon';
import MonthPicker from '../../components/MonthPicker';
import console = require('console');
import moment from 'moment'

const SavingGoal: React.FC = () => {
  const [months, setMonths] = useState(0);
  const [goal, setGoal] = useState(0);
  const [month, setMonth] = useState(moment().format('MMMM'));
  const [year, setYear] = useState(moment().format('YYYY'));
  const [totalGoal, setTotalGoal] = useState('0.00');

  // Data from MonthPicker
  const numberOfMonths = useCallback((months:number) => { setMonths(months)}, [])
  const monthYear = useCallback((month:string, year:string) => { 
    setMonth(month); 
    setYear(year) 
  }, [])

  // Data from InputGoal
  const goalValue = useCallback((goal: number, strGoal: string) => { 
    setGoal(goal); 
    setTotalGoal(strGoal)
  }, []) 

  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  const result = goal / months;
  const amount = goal && months ? formatter.format(result) : null;
  
    return (
      <Container>
        <Text fontSize={'1.5em'} margin={'54px 0 40px'} color={'#1B31A8'}>
          Let's plan your <strong>saving goal</strong>
        </Text>
        <Card>
          <Header>
            <div className="header-icon">
              <InsuranceIcon />
            </div>
            <Text fontSize={'2em'} margin={'0 0 2px'} fontWeight={'500'}>Buy a house</Text>
            <Text fontSize={'1em'} margin={'0'} color={'#aab8c2'} >Saving goal</Text>
          </Header>
          
          <InputContainer>
            <div className="inputs">
              <Text fontSize={'1em'} margin={'0 0 2px'}>Total amount</Text>
              <InputGoal 
                goalValueProp={goalValue}
                // inputValue={value ? value : ''}
                // inputChange={onchange}
              />
            </div>
            <div className="inputs">
              <Text fontSize={'1em'} margin={'0 0 2px'}>Reach goal by</Text>
              <MonthPicker 
                numberOfMonths={numberOfMonths}
                dateProp={monthYear}
              />
            </div>
          </InputContainer>

          {/* Response card */}
          <CardInside>
            <div className="card-inside-body">
              <div className="monthly-text">
                <span className="monthly-web">Monthly amount</span>
                <span className="monthly-mobile">Monthly</span>
              </div>
              <div className="monthly-value">
                <span>{ goal && months ? amount : '$'+totalGoal }</span>
              </div>
            </div>
            <div className="card-inside-footer">
              <span>
                You're planning <strong>{months} monthly deposits</strong> to reach your 
                <strong> ${totalGoal}</strong> goal by <strong>{month} {year}</strong>
              </span>
            </div>
          </CardInside>

          {/* Finish button */}
          <div className="text-center">
            <FinishButton>Finish</FinishButton>
          </div>
        </Card>
      </Container>

    )
}

export default SavingGoal;
