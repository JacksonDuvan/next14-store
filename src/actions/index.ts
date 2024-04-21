"use server"

import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
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