import { Container } from "inversify";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolvers";
import { HelloWorldService } from "./services/HelloWorldService";
import TYPES from "./types";


const container = new Container();
container.bind<HelloWorldService>(TYPES.HelloWorldService).to(HelloWorldService);

container.bind<HelloWorldResolver>(HelloWorldResolver).to(HelloWorldResolver).inSingletonScope();

export default container;