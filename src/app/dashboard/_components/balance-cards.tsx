"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBalanceSummary } from "@/features/action";
import { convertToIDR } from "@/lib/utils";
import { TrendDownIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { TrendingUpIcon, WalletIcon } from "lucide-react";

export function BalanceCards() {
  const { data, error } = useQuery({
    queryKey: ["balance"],
    queryFn: () => getBalanceSummary(),
  });

  if (error) {
    return (
      <div className="w-full p-4 text-sm border rounded-lg border-destructive/50 text-destructive bg-destructive/10">
        Gagal Memuat tabungan.
        <i>Failed to get balance.</i>
      </div>
    );
  }

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap2 text-primary">
            <WalletIcon className="size-4 " />
            Saving
          </CardTitle>
          <CardDescription className="text-2xl font-semibold text-secondary-foreground">
            {convertToIDR(Number(data?.savings || 0))}
          </CardDescription>
        </CardHeader>

        <CardFooter className="text-sm">Saving for all time</CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap2 text-primary">
            <TrendingUpIcon className="size-4 " />
            Income
          </CardTitle>
          <CardDescription className="text-2xl font-semibold text-secondary-foreground">
            {convertToIDR(Number(data?.totalIncome || 0))}
          </CardDescription>
        </CardHeader>

        <CardFooter className="text-sm">Total Incomes for all time</CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap2 text-primary">
            <TrendDownIcon className="size-4" />
            Expenses
          </CardTitle>
          <CardDescription className="text-2xl font-semibold text-secondary-foreground">
            {convertToIDR(Number(data?.totalExpense || 0))}
          </CardDescription>
        </CardHeader>

        <CardFooter className="text-sm">Total Expenses for all time</CardFooter>
      </Card>
    </div>
  );
}
