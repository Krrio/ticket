"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "./ui/toast";

export function ToastDemo() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Wiadomości",
      description: "Co przyda się na Bali?",
      action: (
        <ToastAction altText="Sprawdź" onClick={() => window.location.href = "/previous"}>
          Sprawdź
        </ToastAction>
      ),
    });
  };

  return <Button
  variant="outline"
  size="lg"
  className="border-2 border-indigo-500 text-lg px-8 py-3"
  onClick={showToast}
>
Masz{" "}
  <span className="font-bold text-orange-500 mx-1">(1)</span>
  {" "}nieodczytaną wiadomość!</Button>;
}
