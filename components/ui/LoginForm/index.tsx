"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DSModal from "@/components/design-system/DSModal";

import './LoginForm.scss';
import DSInput from "@/components/design-system/DSInput";
import DSButton from "@/components/design-system/DSButton";
import { isEmail, isEmpty } from "@/shared/utils/StringUtils";
import { authorizeUser } from "@/services/users";

const LoginForm = () => {
  const router = useRouter()
  
  const [active, setActive] = useState<boolean>(false);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const [errorEmail, setErrorEmail] = useState<string | undefined>(undefined);
  const [errorPassword, setErrorPassword] = useState<string | undefined>(undefined);

  const getEmailValue = (args: string): void => setEmail(args);
  const getPasswordValue = (args: string): void => setPassword(args);

  const onClick = () => {
    setErrorPassword(undefined);
    setErrorEmail(undefined);
  }

  const goToHomepage = (): void => router.push('/');

  const isValidFields = (): boolean => {
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
      const response = await authorizeUser({
        password: password as string, 
        email: email as string
      });
      if (response.status !== 200) throw response
      router.push('/dashboard')
      
    } catch (error: unknown | Response) { 
      if ((error as unknown as Response).status === 401) {     
        const { message } = await (error as unknown as Response).json()
        alert(message)
        return
      }
      console.log('Ocorreu um erro: ', error);
      alert('Ocorreu um erro inesperado')
    }
  }

  useEffect(() => {
    setTimeout(() => setActive(true), 300);
  }, [])
  
  return (
    <>
      <div className="login-form-container">
        <DSModal 
          active={ active ? 'on' : 'off'} 
          setActive={setActive}
          handleOnClose={() => goToHomepage() }
        >
          <form onSubmit={(event) => onSubmit}>
            <div>
              <figure>
                <Image 
                  src="/images/register.png" 
                  alt="Ilustração do Login"
                  layout="fill"
                  objectFit="cover"
                  quality={100} 
                />                
              </figure>
            </div>
            <div>
              <h1>Login</h1>
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

                <a href="#" target="_blank">Esqueci a senha</a>
              </div>

              <div className="button-area">
                <DSButton 
                  variant="success" 
                  size="small"
                  type="submit"
                  handleOnClick={(event) => onSubmit(event.event)}
                >Acessar</DSButton>
              </div>
            </div>
          </form>
        </DSModal>
      </div>
    </>
  )
}

export default LoginForm;