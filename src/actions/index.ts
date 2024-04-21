"use server"

import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"

export const handleCreateUser = async (formData: any) => {
  const formDataObject = Object.fromEntries(formData)
  console.log('formDataObject >>',formDataObject);
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+57'+ formDataObject.phone
    }
  }

  const data = await graphqlClient.request(createUserMutation, variables)
  console.log('data >>',data);
}