import { Metadata } from "next";
import Transaction from "./_components/transaction";

export const metadata: Metadata = {
  title: "Fina App - Transaction",
  description: "View and manage your financial transactions",
};
// Halaman Dashboard
export default function TransactionPage() {
  return (
    <div className="space-y-4 ">
      <section id="header">
        <h1 className="text-4xl font-bold text-primary">
          Transaction Ada Disini
        </h1>
        <p>View and manage your financial transactions</p>
      </section>
      <section id="content">
        <Transaction/>
      </section>
    </div>
  );
}
