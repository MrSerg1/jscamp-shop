import { products } from "../products-mock";
import { useParams } from "react-router-dom";
import Button from "./ui/Button";
import Accordion from "./Accordion";

export default function ProductDetail() {
  const id = useParams().id;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const stars = Array.from(
    { length: Math.floor(product.rating.rate) },
    (_, i) => i + 1,
  );

  return (
    <div className="flex flex-col md:flex-row md:w-3/4 max-w-6xl mx-auto py-10 px-10 gap-10">
      {/* Image */}
      <div className="">
        <img
          className="min-w-[320px] h-auto aspect-auto mask-type-alpha mask-b-from-80% mask-b-to-110%"
          src={product.image}
          alt={product.title}
          style={{ viewTransitionName: `product-image-${product.id}` }}
        />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 -mt-15 md:mt-0 z-10">
        <div className="flex items-center gap-2">
          {stars.map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#EFBF04"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
            </svg>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <span
          className="text-2xl text-left text-pretty font-bold"
          style={{ viewTransitionName: `product-price-${product.id}` }}
        >
          {product.currency === "USD" ? "$" : "₡"}
          {product.price}
        </span>
        <div className="flex flex-col gap-1">
          <Button
            text="Añadir al carrito"
            className="bg-primary hover:bg-primary/90 w-full md:w-1/3"
            style={{ viewTransitionName: `product-button-${product.id}` }}
          />
          <Accordion
            items={[
              {
                title: "Detalles del producto",
                content: product.description,
              },
              {
                title: `Valoraciones (${product.rating.count})`,
                content: `Valoración promedio: ${product.rating.rate.toString()} de 5`,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
