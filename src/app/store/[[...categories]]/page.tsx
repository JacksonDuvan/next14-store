import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getCollections, getCollectionsProducts, CollectionType } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

export const runtime = "edge"

interface CategoryProps {
  params: {
    categories: string
  },
  searchParams?: {}
}

export default async function Category(props: CategoryProps) {
  const { categories=[] } = props.params
  let products = []
  const collections: CollectionType[] = await getCollections()
  const selectedCollectionId = collections.find((collection: CollectionType) => collection.handle === categories[0])?.id
  
  // const { rssreferer } = props.searchParams as { rssreferer?: string };
  
  if(selectedCollectionId){
    products = await getCollectionsProducts(selectedCollectionId)
  } else {
    products = await getProducts()
  }

  return  (
   <ProductsWrapper products={products}/>
  )
}