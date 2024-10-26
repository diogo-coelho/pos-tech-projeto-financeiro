import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import Balance from "@/components/ui/Balance";
import SideMenu from "@/components/ui/SideMenu";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <SideMenu></SideMenu>
        <Balance></Balance>
      </Container>
    </>
  );
}
