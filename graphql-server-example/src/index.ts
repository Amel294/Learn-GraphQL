import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./types.js";
import db from "./_db.js";

const resolvers = {
    Query: {
      gameList: () => db.games,
      singleGame: (_, args) => db.games.find((game) => game.id === args.id),
      reviewList: () => db.reviews,
      singleReview: (_, args) => db.reviews.find((review) => review.id === args.id),
      authorList: () => db.authors,
      singleAuthor: (_, args) => db.authors.find((author) => author.id === args.id),
    },
    GameDetails: {
        gameReviews: (parent) => db.reviews.filter((review) => review.game_id === parent.id),
    },
    AuthorDetails: {
      authoredReviews: (parent) => db.reviews.filter((review) => review.author_id === parent.id),
    },
    ReviewDetails: {
      reviewAuthor: (parent) => db.authors.find((author) => author.id === parent.author_id),
      reviewedGame: (parent) => db.games.find((game) => game.id === parent.game_id),
    },
    Mutation: {
      deleteGame(_,args){
        db.games = db.games.filter((game) => game.id !== args.id);
        return db.games
      },
      addGame(_,args){
        let game = {
            ...args.game,
            id:Math.floor(Math.random() * 10000).toString()
        }
        db.games.push(game);
        return game
      },
      updateGame: (_, args) => {
        db.games = db.games.map((game) => {
            if (game.id === args.id) {
                return {
                    ...game,
                    title: args.edits.title ?? game.title,
                    platform: args.edits.platform  ? [...new Set([...game.platform, ...args.edits.platform])] 
                    : game.platform
                }
            }
            return game
        });
        return db.games.find((game) => game.id === args.id)
    }
    }
  };
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
