import { ApolloServer } from "apollo-server";
import { ApolloServerPluginInlineTrace, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { Container } from "inversify";
import { buildSchemaSync } from "type-graphql";
import { HelloWorldResolver } from "../../src/resolvers/HelloWorldResolvers";
import defaultContainer from '../../src/container'

export default function createTestServer(container: Container = defaultContainer) {
    const schema = buildSchemaSync({
        resolvers: [HelloWorldResolver],
        container
    })

    const testServer = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
            ApolloServerPluginInlineTrace()
        ],
    })

    return testServer;
}