import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import Balance from "@/components/ui/Balance";
import SideMenu from "@/components/ui/SideMenu";
import Transaction from "@/components/ui/Transaction";
import Statement from "@/components/ui/Statement";

export default function Dashboard() {
  return (
    <>
      <Header></Header>
      <Container>
        <SideMenu></SideMenu>
        <div className="flex flex-column w-100 padding-large">
          <Balance></Balance>
          <Transaction></Transaction>
        </div>
        <Statement></Statement>
      </Container>
    </>
  );
}