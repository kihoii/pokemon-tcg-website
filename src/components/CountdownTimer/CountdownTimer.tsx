import { useEffect, useState } from 'react';
import './CountdownTimer.scss';
import clock from './assets/clock-icon.svg';

export const CountdownTimer = ({
  dateFrom,
  activeTime,
}: {
  dateFrom: string;
  activeTime: number;
}) => {
  let now: Date = new Date();
  let end: Date = new Date(dateFrom);
  end.setTime(end.getTime() + activeTime * 60 * 60 * 1000);

  const initialTime: number = (end.getTime() - now.getTime()) / 1000;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          console.log('time is up');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <div className="countdown-timer">
      <img src={clock} alt="clock-icon" />
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};
