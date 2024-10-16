"use client"
import DSInput from '@/components/DSInput';
import { IconType } from '@/components/DSInput/DSinput.d';
import DSButton from '../components/DSButton';

export default function Home() {
  const funcaoExemplo = (parametro: string[]) => {
    event?.preventDefault();
    console.log('event', event);
    console.log(`Esse é o parametro ${ parametro }`)
  }

  const args = [
    'parãmetro 1',
    'parâmetro 2',
    'parâmetro 3',
    'parâmetro 4'
  ];

  return (
    <>
      <div>Home</div>

      <DSInput
        type="number" 
        input-size='small'
        placeholder={"Selecione o tipo de transação"} 
        suffix={IconType.ARROW_DROP_DOWN}
      />
    </>
  );
}
