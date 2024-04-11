import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

// { searchParams }: ProductPageProps

export default async function ProductPage({ searchParams }: ProductPageProps){
  // const params = useParams()
  // const searchParams = useSearchParams()
  // const id = searchParams.get('id')
  const id = searchParams.id
  const products = await getProducts(id)
 
  return <ProductView product={products[0]}/>
} 