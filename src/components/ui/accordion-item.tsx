import React from "react";

// Definimos las props que recibe el hijo
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean; // ¿Estoy abierto? (Me lo dice mi papá)
  onToggle: () => void; // Función para avisar que me hicieron click
}

export const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border border-slate-200 bg-white first:rounded-t-lg last:rounded-b-lg border-b-0 last:border-b">
      {/* Botón Header */}
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full p-4 text-left font-medium text-slate-900 transition-colors hover:bg-slate-50 ${
          isOpen ? "bg-slate-50" : ""
        }`}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {/* Flecha animada */}
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Contenido Animado (Grid Trick) */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-slate-600 text-sm border-t border-slate-100">
            <div className="pt-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
