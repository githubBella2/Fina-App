"use client";

import { usePathname } from "next/navigation";
import { BanknoteIcon, CoinsIcon, LayoutDashboardIcon } from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar,
  SidebarContent,
  SidebarGroup,
} from "../ui/sidebar";
import Link from "next/link";
import { link } from "fs";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboardIcon />,
    href: "/dashboard",
  },
  {
    label: "Transaction",
    icon: <BanknoteIcon />,
    href: "/dashboard/transaction",
  },
];

export function AppSidebar() {
  //nge cek sekarang di halaman mana
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="flex-row items-center gap-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">
                <CoinsIcon className="text-primary size-5!"> </CoinsIcon>
                <h1 className="text-2xl font-bold text-primary"> Fina App</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Menu Side Bar , bisa di cek di dokumentasi ShadcnUi */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.label}
                  className={cn(
                    "py-6 px-5 text-md",
                    pathname === item.href ? "bg-primary text-primary-foreground font-semibold hover:bg-primary hover:text-shadow-primary" : "",
                  )}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
