import { formatDateToFullStringDate, getNameOfDayOfTheWeek } from '@/shared/utils/DateUtils';
import './Balance.scss';
import React from 'react';
import PixelsTopSVG from '@/public/svgs/pixels_top.svg';
import PixelsBottomSVG from '@/public/svgs/pixels_bottom.svg';
import ManagerSVG from '@/public/svgs/manager.svg';

const Balance = () => {
  const getTodaysDateFormatted = (): string => {
    const date = new Date();
    return `${getNameOfDayOfTheWeek(date.getDay())}, ${formatDateToFullStringDate(date)}`
  }

  return (
    <>
      <div className="balance-container">
        <div className="general-info">
          <div className="greetings">
            <h1>Olá, Usuário! :)</h1>
            <p>{ getTodaysDateFormatted() }</p>
          </div>

          <div className="account-info">
            <div>
              <p>Saldo</p>
            </div>
            <div>
              <p>Conta Corrente</p>
              <h2>R$ 2.500,00</h2>
            </div>
          </div>
        </div>

        <PixelsTopSVG className="pixels-top"></PixelsTopSVG>
        <PixelsBottomSVG className="pixels-bottom"></PixelsBottomSVG>
        <ManagerSVG className="manager"></ManagerSVG>
      </div>
    </>
  )
}

export default Balance;