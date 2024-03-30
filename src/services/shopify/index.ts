import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
      })
    })

    const data = await response.json()
    return data || {} 
  } catch (error) {
    console.log('error >>',error);
  }
}