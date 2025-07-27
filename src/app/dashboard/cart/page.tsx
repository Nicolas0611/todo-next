import { Product, products } from "@/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";

export const metadata = {
  title: "Carrito",
  description: "Productos en el carrito de compras",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}
const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  const productIds = Object.keys(cart);
  for (const id of productIds) {
    const product = products.find((p) => p.id === id);
    if (product) {
      productsInCart.push({
        product,
        quantity: cart[id],
      });
    }
  }
  return productsInCart;
};
const CartPage = async () => {
  const cookieStore = await cookies();

  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };
  const productsInCart = getProductsInCart(cart);
  return (
    <div>
      <h1 className="text-5xl"> Productos Carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full ">
        <div className="flex flex-col gap-2 w-full">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
