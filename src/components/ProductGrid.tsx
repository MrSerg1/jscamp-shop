import ProductCard from "./ProductCard";
import { products } from "../products-mock";

export default function ProductGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      {/* <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Productos Destacados
      </h2> */}

      {/* GRID RESPONSIVE DE TAILWIND:
        - grid-cols-1: Móvil (1 columna)
        - sm:grid-cols-2: Tablet pequeña (2 columnas)
        - lg:grid-cols-3: Desktop (3 columnas)
        - xl:grid-cols-4: Pantallas grandes (4 columnas)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}
