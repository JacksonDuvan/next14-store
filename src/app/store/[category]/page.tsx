'use client'

interface CategoryProps {
  params: {
    category: string
  }
}

export default function Category(props: CategoryProps) {
  const { category } = props.params
  console.log('category >>',category);
  return  (
    <h1>Category: {category}</h1>
  )
}