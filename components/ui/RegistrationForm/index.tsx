"use client";

import Image from "next/image";
import DSModal from "@/components/design-system/DSModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import './RegistrationForm.scss';
import DSInput from "@/components/design-system/DSInput";

const RegistrationForm = () => {
  const [active, setActive] = useState<boolean>(false);

  const router = useRouter()
  
  const goToHomepage = (): void => router.push('/')

  useEffect(() => {
    setTimeout(() => setActive(true), 300);
  }, [])

  return (
    <>
      <div className="registration-form-container">
        <DSModal 
          active={ active ? 'on' : 'off'} 
          setActive={setActive}
          handleOnClose={() => goToHomepage() }>
          <form>
            <div>
              <figure>
                <Image 
                  src="/images/login-illustration.png" 
                  alt="Ilustração do Login"
                  layout="fill"
                  objectFit="cover"
                  quality={100} 
                />                
              </figure>
            </div>
            <div>
              <h1>Preencha os campos abaixo para criar sua conta corrente!</h1>
              <div className="input-area">
                <label>Nome</label>
                <DSInput 
                  type="text" 
                  placeholder="Digite seu nome completo"
                  variant="secondary"
                ></DSInput>
              </div>
              <div className="input-area">
                <label>Email</label>
                <DSInput 
                  type="email" 
                  placeholder="Digite seu email"
                  variant="secondary"
                ></DSInput>
              </div>
              <div className="input-area">
                <label>Senha</label>
                <DSInput 
                  type="password" 
                  placeholder="Digite sua senha"
                  variant="secondary"
                ></DSInput>
              </div>

              <div className="checkbox">
                <input type="checkbox" />
                <span>Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</span>
              </div>
            </div>
          </form>
        </DSModal>
      </div>
    </>
  )
}

export default RegistrationForm;