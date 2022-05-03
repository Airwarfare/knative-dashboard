import { injectable } from "inversify";
import { Query, Resolver } from "type-graphql";
import { HelloWorldService } from "../services/HelloWorldService";

@injectable()
@Resolver()
export class HelloWorldResolver {
    constructor(
        private readonly helloWorldService: HelloWorldService,
    ) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query(_type => String)
    hello(): string {
        return this.helloWorldService.hello();
    }
}