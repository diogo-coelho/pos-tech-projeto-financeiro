"use client"
import Button from '../components/Button';

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
      <Button
        type="submit" 
        variant="secondary" 
        size="small"
        handleOnClick={() => funcaoExemplo(args)}
      >Concluir transação</Button>
    </>
  );
}
