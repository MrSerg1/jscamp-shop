import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import Button from "./ui/Button";

export default function ProductCard({ data }: { data: Product }) {
  return (
    <article className="group flex flex-col justify-between h-full bg-background rounded-sm shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div>
        {/* --- Contenedor Imagen --- */}
        <div className="flex aspect-7/8 overflow-hidden bg-gray-100">
          <img
            src={data.image}
            alt={data.title}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            style={
              {
                viewTransitionName: `product-image-${data.id}`,
              } as React.CSSProperties
            }
          />
        </div>

        {/* --- Contenido --- */}
        <div className="flex flex-col p-4">
          <Link
            to={`/product/${data.id}`}
            viewTransition
            className="text-md font-medium text-pretty text-slate-900 leading-tight mb-2 line-clamp-3 hover:underline"
            style={
              {
                viewTransitionName: `product-title-${data.id}`,
              } as React.CSSProperties
            }
          >
            {data.title}
          </Link>

          <div className="flex flex-col">
            <span
              className="text-xl font-bold text-primary text-pretty text-right"
              style={
                {
                  viewTransitionName: `product-price-${data.id}`,
                } as React.CSSProperties
              }
            >
              {data.currency === "USD" ? "$" : "₡"}
              {data.price}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-primary hover:bg-primary/90"
          text={"Agregar"}
          style={{ viewTransitionName: `product-button-${data.id}` }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          }
        />
      </div>
    </article>
  );
}
