import "reflect-metadata"
import createTestServer from "../../test/utils/server"
import container from "../container"
import TYPES from "../types"
import { HelloWorldService } from "./HelloWorldService"


test(`it returns 'world'`, () => {
    const value = container.get<HelloWorldService>(TYPES.HelloWorldService).hello()

    expect(value).toBe("world")
})

test(`it returns 'world' from resovler`, async () => {
    const testServer = createTestServer();

    const query = `query {
        hello
    }`;
    const result = await testServer.executeOperation({
        query
    })
    expect(result.errors).toBeUndefined();
    expect(result.data).not.toBeNull();
    expect(result.data?.hello).toBe("world");
});