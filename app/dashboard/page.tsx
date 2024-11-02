import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import Balance from "@/components/ui/Balance";
import SideMenu from "@/components/ui/SideMenu";
import Transaction from "@/components/ui/Transaction";
import Statement from "@/components/ui/Statement";
import { accountInformation } from "@/services/account";

export default async function Dashboard() {
  const response = await accountInformation();
  console.log('response', response);
  const { account, user } = await response.json();

  console.log('user', user)
  console.log('account', account)

  return (
    <>
      <Header 
        name={user.name} 
        email={user.email}
      ></Header>
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