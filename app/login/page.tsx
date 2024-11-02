import Container from "@/components/ui/Container";
import Footer from "@/components/ui/Footer";
import LoginForm from "@/components/ui/LoginForm";
import Presentation from "@/components/ui/Presentation";
import SiteHeader from "@/components/ui/SiteHeader";

export default function Login () {
  return (
    <>
      <div className="fixed w-100 overflow-hidden">
        <SiteHeader></SiteHeader>
        <Container gradient="gradient-green">
          <Presentation></Presentation>
        </Container>
        <Footer></Footer>

        <LoginForm></LoginForm>
      </div>
    </>
  );
}