import * as React from 'react';
import SavingCard from './SavingCard';
import { TopBar, Image } from './styled-components/TopBar';

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = ({}) => {
   
    return (
      <div>
        <TopBar>
          <Image></Image>
        </TopBar>
        <SavingCard></SavingCard>
      </div>
    )
}
export default MainPage;