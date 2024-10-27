"use client";

import DSButton from "@/components/design-system/DSButton";
import "./Presentation.scss";
import Image from "next/image";

const Presentation = () => {
  return (
    <>
      <div className="presentation-container">
        <div className="first-block">
          <p>Experimente mais liberadade no controle da sua vida. Crie sua conta com a gente!</p>
          <figure>
            <Image 
              src="/images/banner.png" 
              alt="Banner"
              layout="fill" 
              objectFit="contain"
            />
          </figure>
          <div className="buttons">
            <DSButton variant="black">Abrir conta</DSButton>
            <DSButton variant="black" outline="on">Já tenho conta</DSButton>
          </div>
        </div>

        <div className="last-block">
          <h1>Vantagens do nosso banco:</h1>
          <div className="advantages">
            <div>
              <Image src="/images/gift.png" alt="" width={73} height={56} />
              <h2>Conta e cartão gratuitos</h2>
              <p>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</p>
            </div>

            <div>
              <Image src="/images/withdrawal.png" alt="" width={73} height={56} />
              <h2>Saques sem custo</h2>
              <p>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</p>
            </div>

            <div>
              <Image src="/images/points.png" alt="" width={73} height={56} />
              <h2>Programa de pontos</h2>
              <p>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</p>
            </div>

            <div>
              <Image src="/images/devices.png" alt="" width={73} height={56} />
              <h2>Seguro Dispositivos</h2>
              <p>Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Presentation;