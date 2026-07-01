'use server';
import { createClient } from "@/lib/supabase/server";

export async function getBalanceSummary() {
  //diambil dari server, karena akan menggunakan server action jadi diambil dari server
  const supabase = await createClient();

  //yang akan diambil adalah Data, dari supabase, dari table transaction , yang akan diambil amoutn dan type

  const { data } = await supabase.from("transactions").select("amount, type");
  // fungsi utk saving income nya
  const { totalIncome, totalExpense, savings } = (data || []).reduce(
    // function
    (acc, tx) => {
      if (tx.type === "income") acc.totalIncome += tx.amount;
      else if (tx.type === "expense") acc.totalExpense += tx.amount;
      acc.savings = acc.totalIncome - acc.totalExpense;
      return acc;
    },

    // nilai default
    {
      totalIncome: 0,
      totalExpense: 0,
      savings: 0,
    },
  );

  return {
    totalIncome,
    totalExpense,
    savings
  };
}
