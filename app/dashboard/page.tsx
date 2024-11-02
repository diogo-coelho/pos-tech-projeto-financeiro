import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import Balance from "@/components/ui/Balance";
import SideMenu from "@/components/ui/SideMenu";
import Transaction from "@/components/ui/Transaction";
import Statement from "@/components/ui/Statement";
import { accountInformation } from "@/services/account";

export default async function Dashboard() {
  const response = await accountInformation();
  const { account, user } = await response.json();

  return (
    <>
      <Header 
        name={user.name} 
        email={user.email}
      ></Header>
      <Container>
        <SideMenu></SideMenu>
        <div className="flex flex-column w-100 padding-large">
          <Balance 
            userName={user.name} 
            accountCurrentValue={account.currentValue}
          ></Balance>
          <Transaction></Transaction>
        </div>
        <Statement
          statementList={account.statement}
        ></Statement>
      </Container>
    </>
  );
}