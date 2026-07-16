"use client";

import { useState } from "react";
import { Cake, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface HeaderCategory {
  id: string;
  label: string;
}

interface HeaderProps {
  categories: HeaderCategory[];
}

export function Header({ categories }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(categories.map((category) => category.id));

  function handleNavigate(id: string) {
    setOpen(false);
    // Aguarda o fechamento do Sheet antes de rolar suavemente até a seção.
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container relative flex h-16 items-center">
        {/* Lado esquerdo: Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-800 hover:bg-pink-50 hover:text-pink-700"
              aria-label="Abrir menu de categorias"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 bg-pink-50">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 font-serif text-2xl text-pink-800">
                <Cake className="h-6 w-6 text-pink-600" />
                Doceria Dona Lu
              </SheetTitle>
              <SheetDescription className="text-zinc-500">
                Navegue pelas categorias do cardápio.
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-1">
              {categories.map((category) => {
                const isActive = category.id === activeId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleNavigate(category.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                      isActive
                        ? "bg-pink-600 text-white shadow-sm"
                        : "text-zinc-700 hover:bg-pink-100 hover:text-pink-800"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors",
                        isActive ? "bg-white" : "bg-pink-300"
                      )}
                    />
                    {category.label}
                  </button>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Centro: Nome da doceria */}
        <div className="pointer-events-none absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Cake className="h-6 w-6 text-pink-600" />
          <span className="font-serif text-xl font-semibold tracking-wide text-zinc-800 sm:text-2xl">
            Doceria Dona Lu
          </span>
        </div>
      </div>
    </header>
  );
}
