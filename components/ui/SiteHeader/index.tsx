"use client";

import Link from "next/link";
import Image from "next/image";
import DSButton from "@/components/design-system/DSButton";
import MenuIconSVG from '@/public/svgs/menu_icon_2.svg';
import { useRouter } from "next/navigation";

import './SiteHeader.scss';

const SiteHeader = () => {
  const router = useRouter()

  const goToLoginPage = (): void => router.push('/login');
  const goToCreateAccountPage = (): void => router.push('/create-account');

  return (
    <>
      <header className="site-header">
        <div className="site-header-container">
        <div className="flex-wrapper">
          <div className="site-header-images-left">
            <Image className="bytebank-full" src="/images/logo.png" priority alt="Logo Bytebank" width={145} height={32} />
            <Image className="bytebank-icon" src="/images/bytebank_icon.png" alt="Logo Bytebank" width={10} height={10} />
            <MenuIconSVG className="menu-icon"></MenuIconSVG>
          </div>
          <div className="site-header-links">
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
          </div>
        </div>
        <div className="flex-wrapper">
          <div className="site-header-buttons">
            <DSButton 
              variant="success"
              handleOnClick={() => goToCreateAccountPage()}
            >Abrir conta</DSButton>
            <DSButton 
              variant="success" 
              outline="on"
              handleOnClick={() => goToLoginPage()}
            >Já tenho conta</DSButton>
          </div>
          <div className="site-header-logo">
            <Image src="/images/logo.png" priority alt="Logo Bytebank" width={145} height={32} />
          </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default SiteHeader;