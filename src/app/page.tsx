import { Button } from "@/components/ui/button";
import { CoinsIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import { CoinsIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Fina",
  description: "Your Personal Finance App with AI",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <CoinsIcon className="text-primary size-20" /> 
      <h1 className="text-4xl font-bold text-primary">Welcome to Fina</h1>
      <p className="mt-2 text-lg">Your Personal Finance App with AI</p>
      <Link href="/dashboard">
        <Button className="mt-2" size="lg">
          Get Started
        </Button>
      </Link>
      
    </main>
  );
}
