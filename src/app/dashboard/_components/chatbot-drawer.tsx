"use client";
import { Button } from "@/components/ui/button";
import { handleChat } from "@/features/ai/chat";
import { BotIcon } from "lucide-react";

export default function ChatbotDrawer() {
  return (
    <div className="fixed bottom-4 right-4">
      <Button
        className="size-14 rounded-full bg-primary text-white  rounded-full flex items-center"
        size="icon-lg"
        variant="outline"
        onClick={async () => {
          const result = await handleChat();
          console.log(result);
        }}
      >
        <BotIcon className="size-6" />
        Chat AI
      </Button>
    </div>
  );
}
