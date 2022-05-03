import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolvers";
import { ApolloServerPluginInlineTrace, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchemaSync } from "type-graphql";
import container from './container';

async function bootstrap() {
    const schema = buildSchemaSync({
        resolvers: [HelloWorldResolver],
        container
    })

    const server = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
            ApolloServerPluginInlineTrace()
        ],
    })

    const { url } = await server.listen(4000)
    console.log(`🚀 Server is running, GraphQL Playground available at ${url}`)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();