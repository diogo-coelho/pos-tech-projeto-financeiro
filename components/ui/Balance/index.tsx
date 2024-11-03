import React from 'react';
import { formatDateToFullStringDate, getNameOfDayOfTheWeek } from '@/shared/utils/DateUtils';
import PixelsTopSVG from '@/public/svgs/pixels_top.svg';
import PixelsBottomSVG from '@/public/svgs/pixels_bottom.svg';
import ManagerSVG from '@/public/svgs/manager.svg';
import EyeSVG from '@/public/svgs/eye.svg';
import { BalanceProps } from './balance';

import './Balance.scss';
import { formatNumberToMonetaryValueString } from '@/shared/utils/StringUtils';

const Balance = (props: BalanceProps) => {
  const getTodaysDateFormatted = (): string => {
    const date = new Date();
    console.log('date in Balance', date)
    return `${getNameOfDayOfTheWeek(date.getDay())}, ${formatDateToFullStringDate(date)}`
  }

  return (
    <>
      <section className="balance-container">
        <div className="general-info">
          <div className="greetings">
            <h1>Olá, { props.userName }! :)</h1>
            <p>{ getTodaysDateFormatted() }</p>
          </div>

          <div className="account-info">
            <div>
              <p>Saldo</p>
              <EyeSVG></EyeSVG>
            </div>
            <div>
              <p>Conta Corrente</p>
              <h2>{ formatNumberToMonetaryValueString(props.accountCurrentValue) }</h2>
            </div>
          </div>
        </div>

        <PixelsTopSVG className="pixels-top"></PixelsTopSVG>
        <PixelsBottomSVG className="pixels-bottom"></PixelsBottomSVG>
        <ManagerSVG className="manager"></ManagerSVG>
      </section>
    </>
  )
}

export default Balance;