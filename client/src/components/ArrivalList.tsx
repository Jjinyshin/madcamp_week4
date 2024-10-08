// src/components/RankingList.tsx
import React from 'react';
import styled from 'styled-components';

interface CheckinProps {
  name: string;
  latency : number;
}

interface CheckinListProps {
  checkins: CheckinProps[];
}

interface NotresolvedCheckinProps {
  name: string;
}

interface NotresolvedCheckinListProps {
  checkins: NotresolvedCheckinProps[];
}

const formatTime =(time: number)=>{
  const absTime= Math.abs(time);
  const hours =Math.floor(absTime/3600);
  const minutes = Math.floor((absTime%3600)/60);
  const seconds = Math.floor(absTime%60);
  return `${time < 0 ? '-':''}${hours}시간 ${minutes}분 ${seconds}초`;
}

export const EarlyArrivalList: React.FC<CheckinListProps> = ({checkins}) => {
  return (
    <Container>
      {checkins.map((item:{name: string, latency: number}, index: number) => (
        <ArrivalItem key={index} hasArrived={true} onTime={true}>
          <Rank>
            {index + 1}
            {index + 1 === 1 && <Crown>👑</Crown>}
            {index + 1 === 2 && <Medal>🥈</Medal>}
            {index + 1 === 3 && <Medal>🥉</Medal>}
          </Rank>
          <Name>{item.name}</Name>
          <Time time={item.latency} >{formatTime(item.latency)}</Time>
        </ArrivalItem>
      ))}
    </Container>
  );
};

export const LateArrivalList: React.FC<CheckinListProps> = ({checkins}) => {
  return (
    <Container>
      {checkins.map((item:{name: string, latency: number}, index: number) => (
        <ArrivalItem key={index} hasArrived={true} onTime={false}>
          <Rank>
            {index + 1}
          </Rank>
          <Name>{item.name}</Name>
          <Time time={item.latency} >{formatTime(item.latency)}</Time>
        </ArrivalItem>
      ))}
    </Container>
  );
};

export const NotArrivalList: React.FC<NotresolvedCheckinListProps> = ({checkins}) => {
  return (
    <Container>
      {checkins.map((item:{name: string}, index: number) => (
        <ArrivalItem key={index} hasArrived={false} onTime={false}>
          <Name>{item.name}</Name>
        </ArrivalItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;

const ArrivalItem = styled.div<{ hasArrived: boolean, onTime: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: ${ ({ hasArrived, onTime }) => {
    if (hasArrived) {
      return onTime? '#5581D926': '#F22E2E26' ;
    }
    else{
      return '#FFF';
    }}};
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Rank = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2em;
  width: 50px
`;

const Crown = styled.span`
  margin-left: 0.5rem;
`;

const Medal = styled.span`
  margin-left: 0.5rem;
`;

const Name = styled.div`
  flex: 1;
  text-align: center;
`;

const Time = styled.div<{time: number}>`
  font-size: 0.8em;
  color:  ${({ time }) => (time > 0 ? '#F22E2E' : '#5581D9')};
`;


