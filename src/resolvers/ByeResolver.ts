import { Query, Resolver } from "type-graphql";

@Resolver()
export class ByeResolver {
  @Query(() => String)
  bye() {
    return "see you later";
  }
}
