"use client";

import './Transaction.scss';
import PixelsTopSVG from '@/public/svgs/pixels_2_top.svg';
import PixelsBottomSVG from '@/public/svgs/pixels_2_bottom.svg';
import CreditCardSVG from '@/public/svgs/credit_card.svg';

import DSButton from "@/components/design-system/DSButton";
import DSInput from "@/components/design-system/DSInput";
import DSSelect from "@/components/design-system/DSSelect";
import React, { useState } from 'react';
import { InputSize } from '@/components/design-system/DSInput/ds_input';

const Transaction = () => {
  const TABLET_VIEW_SIZE = 720;

  const [screenWidth, setScreenWidth] = useState<number>(0);

  const getSelectSize = (): InputSize => {
    if (screenWidth < TABLET_VIEW_SIZE) return 'small'
    return 'large'
  }

  const getInputSize = (): InputSize => {
    if (screenWidth < TABLET_VIEW_SIZE) return 'small'
    return 'medium'
  }

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);   
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }    
  }, [])

  return (
    <>
      <section className="transaction-container">
        <form>
          <div className="transaction-area">
            <h1>Nova Transação</h1>
            <div>
              <DSSelect
                type="text"
                placeholder="Selecione o tipo de transação"
                input-size={ getSelectSize() as InputSize }
                options={[
                  "Transferência",
                  "Depósito"
                ]}
              ></DSSelect>
            </div>
          </div>
          <div className="transaction-area">
            <h2>Valor</h2>
            <DSInput
              type="text"
              placeholder="00,00"
              align="center"
              input-size={ getInputSize() as InputSize }
            ></DSInput>

            <DSButton 
              type="button" 
              size={ getInputSize() as InputSize }
            >Concluir transação</DSButton>
          </div>
        </form>

        <PixelsTopSVG className="pixels-top"></PixelsTopSVG>
        <PixelsBottomSVG className="pixels-bottom"></PixelsBottomSVG>
        <CreditCardSVG className="credit-card"></CreditCardSVG>
      </section>
    </>
  )
}

export default Transaction;