import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field,
} from "type-graphql";
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput {
  @Field(() => String)
  title: String;

  @Field(() => Int)
  length: number;
}

@InputType()
class MovieUpdateInput {
  @Field(() => String, { nullable: true })
  title?: String;

  @Field(() => Int, { nullable: true })
  length?: number;
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Movie)
  async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
    const movie = await Movie.create(options).save();
    return movie;
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find();
  }

  @Mutation(() => Boolean)
  async updateMovie(
    @Arg("id", () => Int) id: number,
    @Arg("updatedInput", () => MovieUpdateInput) updatedInput: MovieUpdateInput
  ) {
    await Movie.update({ id }, updatedInput);
    return true;
  }
}
