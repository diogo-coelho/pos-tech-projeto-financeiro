"use client"
import DSInput from '@/components/design-system/DSInput';
import DSButton from '../components/design-system/DSButton';
import DSSelect from '@/components/design-system/DSSelect';
import DSList from '@/components/design-system/DSList';

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

      <DSList
        items={[
          { title: "Transferência", value: 50, date: new Date("2024-10-22") },
          { title: "Depósito", value: 120, date: new Date("2024-10-21") },
          { title: "Transferência", value: -86, date: new Date("2024-10-02") },
        ]}
      ></DSList>

      <DSSelect
        placeholder={"Selecione o tipo de transação"} 
        input-size='small'
        options={[
          "Câmbio de Moeda",
          "DOC/TED",
          "Empréstimo e Financiamento"
        ]}
        selectedValue="DOC/TED"
      ></DSSelect>
    </>
  );
}
