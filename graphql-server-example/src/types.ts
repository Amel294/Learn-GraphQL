export const typeDefs = `#graphql
    type GameDetails {
        id: ID!
        title: String!
        platform: [String!]!
        gameReviews: [ReviewDetails!]
        gameAuthor: AuthorDetails!
    }
    type ReviewDetails {
        id: ID!
        rating: Int!
        content: String!
        reviewedGame: GameDetails!
        reviewAuthor: AuthorDetails!
    }
    type AuthorDetails {
        id: ID!
        name: String!
        verified: Boolean!
        authoredReviews: [ReviewDetails!]
    }
    type Query {
        gameList: [GameDetails]
        singleGame(id:ID!) : GameDetails
        reviewList: [ReviewDetails]
        singleReview(id:ID!) : ReviewDetails
        authorList: [AuthorDetails]
        singleAuthor(id:ID!) : AuthorDetails
    }
    type Mutation {
        addGame(game: AddGameInput) : GameDetails
        deleteGame(id:ID!) : [GameDetails]
        updateGame(id:ID!,edits: EditGameInput!) : GameDetails
    }
    input AddGameInput{
        title: String!
        platform: [String!]!
    }
    input EditGameInput {
        title: String
        platform: [String!]
    }
    
`;