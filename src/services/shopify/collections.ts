import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export type CollectionType = {
  id: string,
  title: string,
  handle: string
}

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
      })
    })

    const { smart_collections } = await response.json()
    const transformedCollections: CollectionType[] = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle
      }
    })
    return transformedCollections 
  } catch (error) {
    console.log('error >>',error);
    return []
  }
}

export const getCollectionsProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
      })
    })

    const { products=[] } = await response.json() || { }
    return products
  } catch (error) {
    console.log('error >>',error);
  }
}