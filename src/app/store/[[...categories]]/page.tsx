import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string
  },
  searchParams?: {}
}

export default async function Category(props: CategoryProps) {
  const { products } = await getProducts()
 
  const { rssreferer } = props.searchParams as { rssreferer?: string };
  const { categories } = props.params
  
  return  (
   <ProductsWrapper products={products}/>
  )
}