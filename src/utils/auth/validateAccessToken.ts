import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"
import { cookies } from "next/headers"

interface GetCustomerName {
    customer: any
}

export const validateAccessToken = async () => {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    console.log("token: ",accessToken);
    
    const graphqlClien = GraphQLClientSingleton.getInstance().getClient()
    if (accessToken){
        const { customer }: GetCustomerName = await graphqlClien.request(customerName, {
            customerAccessToken: accessToken
        })
        return customer
    }

    return null
}