import { inject, injectable } from "inversify";
import { Query, Resolver } from "type-graphql";
import { HelloWorldService } from "../services/HelloWorldService";
import TYPES from "../types";

@injectable()
@Resolver()
export class HelloWorldResolver {
    constructor(
        @inject(TYPES.HelloWorldService) private readonly helloWorldService: HelloWorldService,
    ) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query(_type => String)
    hello(): string {
        return this.helloWorldService.hello();
    }
}