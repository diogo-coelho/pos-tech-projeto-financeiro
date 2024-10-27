import './Footer.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="column">
            <h1>Serviços</h1>
            <p>Conta corrente</p>
            <p>Conta PJ</p>
            <p>Cartão de crédito</p>
          </div>

          <div className="column">
            <h1>Contato</h1>
            <p>0800 004 250 08</p>
            <p>meajuda@bytebank.com.br</p>
            <p>ouvidoria@bytebank.com.br</p>
          </div>

          <div className="column">
            <p>Desenvolvido por Alura</p>
            <Image src="/images/logo_white.png" alt="logo Branco" width={145} height={32} />
            <div className="social-media">
              <Image src="/images/instagram.png" alt="Instagram" width={29} height={29} />
              <Image src="/images/whatsapp.png" alt="Whatsapp" width={29} height={29} />
              <Image src="/images/youtube.png" alt="Youtube" width={29} height={29} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;