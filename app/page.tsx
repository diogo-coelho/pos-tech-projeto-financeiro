import Container from '@/components/ui/Container';
import SiteHeader from '@/components/ui/SiteHeader';
import Presentation from '@/components/ui/Presentation';

export default function Home() {
  return (
    <>
      <div>
        <SiteHeader></SiteHeader>
        <Container gradient="gradient-green">
          <Presentation></Presentation>
        </Container>
      </div>
    </>
  );
}
