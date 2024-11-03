import Container from '@/components/ui/Container';
import SiteHeader from '@/components/ui/SiteHeader';
import Error from '@/components/ui/Error';
import Footer from '@/components/ui/Footer';

export default function NotFound() {  
  return (
    <>
      <div>
        <SiteHeader></SiteHeader>
        <Container gradient="gradient-green">
          <Error></Error>
        </Container>
        <Footer></Footer>
      </div>
    </>
  );
}