"use client";

import Image from "next/image";
import './RegistrationForm.scss';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DSModal from "@/components/design-system/DSModal";
import DSInput from "@/components/design-system/DSInput";
import DSButton from "@/components/design-system/DSButton";
import { isEmail, isEmpty } from "@/shared/utils/StringUtils";
import { createUser } from "@/services/users";

const RegistrationForm = () => {
  const router = useRouter()

  const [active, setActive] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  
  const [errorName, setErrorName] = useState<string | undefined>(undefined);
  const [errorEmail, setErrorEmail] = useState<string | undefined>(undefined);
  const [errorPassword, setErrorPassword] = useState<string | undefined>(undefined);

  const getNameValue = (args: string): void => setName(args);  
  const getEmailValue = (args: string): void => setEmail(args);
  const getPasswordValue = (args: string): void => setPassword(args);
  const handleIsChecked = () => setIsChecked(!isChecked);

  const onClick = () => {
    setErrorName(undefined);
    setErrorEmail(undefined);
    setErrorPassword(undefined);
  }
  
  const goToHomepage = (): void => router.push('/')

  const isValidFields = (): boolean => {
    if (!name || isEmpty(name)) {
      setErrorName("Dado incorreto. Revise e digite novamente.")
      return false;
    }

    if (!email || isEmpty(email) || !isEmail(email)) {
      setErrorEmail("Dado incorreto. Revise e digite novamente.")
      return false;
    }

    if (!password || isEmpty(password)) {
      setErrorPassword("Dado incorreto. Revise e digite novamente.")
      return false;
    }
    
    return true;
  }

  const onSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    if (!isValidFields()) return;

    try {
      const response = await createUser({
        name: name as string, 
        password: password as string, 
        email: email as string
      });
      if (response.status !== 200) throw response
      const { message } = await response.json()
      alert(message);

      router.push('/')
    } catch (error: unknown) {
      console.log('Ocorreu um erro: ', error);
      const { message } = await (error as unknown as Response).json()
      alert(message)      
    }
  }

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
          <form onSubmit={(event) => onSubmit}>
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
                  input-size="full"
                  variant="secondary"
                  error={errorName}
                  handleOnChange={(event) => getNameValue?.(event.args)}
                  handleOnClick={() => onClick()}
                ></DSInput>
              </div>
              <div className="input-area">
                <label>Email</label>
                <DSInput 
                  type="email" 
                  placeholder="Digite seu email"
                  input-size="full"
                  variant="secondary"
                  error={errorEmail}
                  handleOnChange={(event) => getEmailValue?.(event.args)}
                  handleOnClick={() => onClick()}
                ></DSInput>
              </div>
              <div className="input-area">
                <label>Senha</label>
                <DSInput 
                  type="password" 
                  placeholder="Digite sua senha"
                  input-size="full"
                  variant="secondary"
                  error={errorPassword}
                  handleOnChange={(event) => getPasswordValue?.(event.args)}
                  handleOnClick={() => onClick()}
                ></DSInput>
              </div>

              <div className="checkbox">
                <input type="checkbox" checked={isChecked} onChange={handleIsChecked}/>
                <span>Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</span>
              </div>

              <div className="button-area">
                <DSButton 
                  variant="danger" 
                  size="small"
                  type="submit"
                  disabled={!isChecked}
                  handleOnClick={(event) => onSubmit(event.event)}
                >Criar conta</DSButton>
              </div>
            </div>
          </form>
        </DSModal>
      </div>
    </>
  )
}

export default RegistrationForm;