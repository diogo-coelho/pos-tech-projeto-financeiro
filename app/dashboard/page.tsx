import { cookies } from 'next/headers';
import { accountInformation } from "@/services/account";
import { verifyToken } from '@/auth/auth';
import { redirect } from 'next/navigation';
import { UserJWTPayload, UserProps } from '@/types/user';

import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import Balance from "@/components/ui/Balance";
import SideMenu from "@/components/ui/SideMenu";
import Transaction from "@/components/ui/Transaction";
import Statement from "@/components/ui/Statement";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const secretKey = process.env.JWT_SECRET as string;

  const user = await verifyToken(token?.value as string, secretKey);
  if (!user) return redirect('/')

  const response = await accountInformation((user as unknown as UserJWTPayload)?.payload.id);
  const { account } = await response.json();

  return (
    <>
      <Header 
        name={(user.payload as unknown as UserProps)?.name} 
        email={(user.payload as unknown as UserProps)?.email}
      ></Header>
      <Container>
        <SideMenu></SideMenu>
        <div className="flex flex-column w-100 padding-large">
          <Balance 
            userName={(user.payload as unknown as UserProps)?.name} 
            accountCurrentValue={account.currentValue}
          ></Balance>
          <Transaction
            userId={account.userId}
          ></Transaction>
        </div>
        <Statement
          statementList={account.statement}
        ></Statement>
      </Container>
    </>
  );
}