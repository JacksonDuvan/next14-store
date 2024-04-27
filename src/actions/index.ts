"use server"

import { GraphQLClientSingleton } from "app/graphql"
import { createCartMutation } from "app/graphql/mutations/createCartMutation"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface ICreateUserMutation {
  customerCreate: {
    customerUserErrors: object,
    customer: {
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
    }
  }
}

export const handleCreateUser = async (formData: any) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+57'+ formDataObject.phone
    }
  }

  const { customerCreate }: ICreateUserMutation = await graphqlClient.request(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate
  console.log('customer >>',customer);
  if(customer?.firstName){
    await createAccessToken(formDataObject?.email, formDataObject?.password)
    redirect('/store')
  }
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  const accessToken = await createAccessToken(formDataObject?.email as string, formDataObject?.password as string)

  if(accessToken){
    redirect('/store')
  }
}

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies()
  const accesToken = cookiesStore.get('accessToken')?.value as string

  if(!accesToken) redirect('/login')

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customer = await validateAccessToken()
  console.log('customer >>',customer);
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email
      },
      lines: items.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }))
    }
  }

  const { cartCreate }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string
      }
    }
  } = await graphqlClient.request(createCartMutation, variables)
  console.log('cartCreate >>',cartCreate);
  return cartCreate?.cart?.checkoutUrl
}