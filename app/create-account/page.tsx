import Container from "@/components/ui/Container";
import Footer from "@/components/ui/Footer";
import Presentation from "@/components/ui/Presentation";
import RegistrationForm from "@/components/ui/RegistrationForm";
import SiteHeader from "@/components/ui/SiteHeader";

export default function CreateAccount() {
  return (
    <>
      <div className="fixed w-100 overflow-hidden">
        <SiteHeader></SiteHeader>
        <Container gradient="gradient-green">
          <Presentation></Presentation>
        </Container>
        <Footer></Footer>

        <RegistrationForm></RegistrationForm>
      </div>
    </>
  );
}