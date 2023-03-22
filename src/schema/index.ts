import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { subschema } from './subschema';

export default () => {

    const { typeDefs: subschemaTypeDefs, resolvers: subschemaResolvers } = subschema();

    const resolvers = mergeResolvers([
        subschemaResolvers
    ]);

    const typeDefs = mergeTypeDefs([
        subschemaTypeDefs
    ])

    return {
        typeDefs,
        resolvers
    }
}