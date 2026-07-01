import { Metadata } from "next";
import { BalanceCards } from "./_components/balance-cards";

export const metadata: Metadata = {
  title: "Dashboard - Fina",
  description: "Your Personal Finance App with AI - Dashboard",
};
// Halaman Dashboard
export default function DashboardPage() {
  return (
    <div className=" space-y-4">
      <section id="header">
        <h1 className="text-4xl font-bold text-primary">
          Dashboard Ada Disini
        </h1>
        <p>
          Get insights into your spending, track your expenses, and manage your
          finance
        </p>
      </section>
      <section id="content">
        <BalanceCards/>
      </section>
    </div>
  );
}
