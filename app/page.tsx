"use client"
import DSInput from '@/components/DSInput';
import DSButton from '../components/DSButton';
import DSSelect from '@/components/DSSelect';

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

      <DSSelect
        placeholder={"Selecione o tipo de transação"} 
        input-size='small'
        options={[
          "Câmbio de Moeda",
          "DOC/TED",
          "Empréstimo e Financiamento"
        ]}
      ></DSSelect>
    </>
  );
}
