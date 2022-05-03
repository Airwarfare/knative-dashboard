import { injectable } from "inversify";

@injectable()
export class HelloWorldService {
    public hello(): string {
        return "world";
    }
}