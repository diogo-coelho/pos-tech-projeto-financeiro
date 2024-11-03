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
import { Size } from '@/components/design-system/DSButton/ds_button';
import { isEmpty } from '@/shared/utils/StringUtils';
import { TransactionProps } from './transaction';
import { transferAmount } from '@/services/account';
import { useRouter } from 'next/navigation';

const Transaction = (props: TransactionProps) => {
  const TABLET_VIEW_SIZE = 720;
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined);

  const [errorSelect, setErrorSelect] = useState<string | undefined>(undefined);
  const [errorInput, setErrorInput] = useState<string | undefined>(undefined);

  const getInputValue = (args: string): void => setInputValue(args); 
  const getSelectValue = (args: string): void => setSelectValue(args);

  const getSelectSize = (): InputSize => {
    if (screenWidth < TABLET_VIEW_SIZE) return 'normal'
    return 'large'
  }

  const getInputSize = (): InputSize | Size => {
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
  }, []);

  const onClick = () => {
    setErrorSelect(undefined);
    setErrorInput(undefined);
  }

  const isValidFields = (): boolean => {
    if (!selectValue || isEmpty(selectValue)) {
      setErrorSelect("Escolha uma das opções.")
      return false;
    }

    if (!inputValue || isEmpty(inputValue)) {
      setErrorInput("Preencha o campo com um valor válido.")
      return false;
    }
    
    return true;
  }

  const handleOnSubmit = async (event: Event) => {
    event.preventDefault();
    if (!isValidFields()) return;
    
    const response = await transferAmount(props.userId, {
      type: selectValue as string, 
      amount: eval(inputValue as string)
    });
    if (response.status !== 200) throw response
    const { message } = await response.json();
    console.log('message: ', message);

    setTimeout(() => router.push('/dashboard'), 500);    
  }

  return (
    <>
      <section className="transaction-container">
        <form onSubmit={(event) => handleOnSubmit }>
          <div className="transaction-area">
            <h1>Nova Transação</h1>
            <div>
              <DSSelect
                type="text"
                placeholder="Selecione o tipo de transação"
                input-size={ getSelectSize() as InputSize }
                error={errorSelect}
                options={[
                  "Transferência",
                  "Depósito"
                ]}
                handleOnSelect={(event) => getSelectValue?.(event.args)}
                handleOnSelectClick={() => onClick()}
              ></DSSelect>
            </div>
          </div>
          <div className="transaction-area">
            <h2>Valor</h2>
            <DSInput
              type="text"
              placeholder="00,00"
              align="center"
              error={errorInput}
              input-size={ getInputSize() as InputSize }
              handleOnChange={(event) => getInputValue?.(event.args)}
              handleOnClick={() => onClick()}
            ></DSInput>

            <DSButton 
              type="submit" 
              size={ getInputSize() as Size }
              handleOnClick={(event) => handleOnSubmit(event.event)}
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