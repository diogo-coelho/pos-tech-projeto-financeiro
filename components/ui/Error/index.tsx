"use client";

import DSButton from "@/components/design-system/DSButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

import './Error.scss';

const Error = () => {
  const router = useRouter();
  
  const goToHome = (): void => router.push('/');

  return (
    <>
      <div className="error-container">
        <div className="first-block">
          <h1>Ops! Não encontramos a página...</h1>

          <p>
            E olha que exploramos o universo procurando por ela!
            Que tal voltar e tentar novamente?
          </p>

          <div className="buttons">
            <DSButton variant="danger" handleOnClick={() => goToHome()}>Voltar ao início</DSButton>
          </div>
        </div>

        <div className="last-block">
          <figure>
            <Image 
              src="/images/404.png" 
              alt="Banner"
              layout="fill" 
              objectFit="contain"
            />
          </figure>
        </div>
      </div>
    </>
  )
}

export default Error;