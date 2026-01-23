import { useState } from "react";
import { AccordionItem } from "./ui/accordion-item";

interface AccordionPorps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ items }: AccordionPorps) {
  // Estado que guarda el ID (índice) del que está abierto actualmente.
  // Lo inicializamos en 0 para que el PRIMERO aparezca abierto por defecto.
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    // Si hago click en el que ya está abierto, lo cierro (null).
    // Si hago click en otro, pongo ese índice como el nuevo activo.
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full mx-auto mt-10 shadow-sm rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          // AQUÍ ESTÁ LA MAGIA:
          // El item solo está abierto si su índice coincide con el estado del padre
          isOpen={activeIndex === index}
          // Cuando hacen click, el padre actualiza su estado
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
