import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"
import { cookies } from "next/headers"

export interface ICustomerName {
  customer: {
    firstName?: string,
    email?: string
  }
}

export const validateAccessToken = async () => {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')?.value
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

  if(accessToken){
    const { customer }: ICustomerName = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken
    })
  
    return customer
  }

  return {}
}