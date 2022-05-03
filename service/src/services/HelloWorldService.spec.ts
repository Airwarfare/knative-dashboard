import "reflect-metadata"
import container from "../container"
import TYPES from "../types"
import { HelloWorldService } from "./HelloWorldService"

test(`it returns 'world'`, () => {
    const value = container.get<HelloWorldService>(TYPES.HelloWorldService).hello()

    expect(value).toBe("world")
})