"use client"
import { useParams, useSearchParams } from "next/navigation";

// interface ProductPageProps {
//   searchParams: {
//     id: string
//   }
// }

// { searchParams }: ProductPageProps

export default function ProductPage(){
  const params = useParams()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log('params >>',params);
  console.log('searchParams >>', id);
  return <div>Product Page</div>
}