// @ts-ignore
import * as express from 'express';
import {graphqlHTTP} from "express-graphql";

import {buildSchema} from "graphql";
import type from "./schema/type.schema";
import query from "./schema/query.schema";
import resolverSchema from "./schema/resolver.schema";
import {prisma} from "./Prisma/prisma";
import mutationSchema from "./schema/mutation.schema";

const app = express();

const schema = buildSchema(`
    scalar Date
    ${type.join()}
    type Query {
        ${query.join()}
    }
    
    type Mutation {
        ${mutationSchema.join()}
    }
    
`);


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: {prisma},
    rootValue: resolverSchema,
}))


app.listen(3000, () => {
    console.log("App running at http://localhost:3000/graphql");
})