import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccesTokenCreate"
import { cookies } from 'next/headers' 

interface ICustomerAccessToken {
  customerAccessTokenCreate: {
    customerAccessToken: {
      accessToken: string, 
      expiresAt: Date
    }
  }
}

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

  const { customerAccessTokenCreate }: ICustomerAccessToken = await graphqlClient.request(customerAccessTokenCreateMutation, {
    email,
    password
  })

  const { accessToken, expiresAt } = customerAccessTokenCreate.customerAccessToken

  if(accessToken){
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })
  }

  return accessToken
}