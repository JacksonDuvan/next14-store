'use client'

interface CategoryProps {
  params: {
    categories: string
  },
  searchParams?: {}
}

export default function Category(props: CategoryProps) {
  const { rssreferer } = props.searchParams as { rssreferer?: string };
  const { categories } = props.params
  console.log('category >>',categories);
  console.log('searchParams >>',rssreferer);
  return  (
    <h1>Category dynamic: {categories}</h1>
  )
}