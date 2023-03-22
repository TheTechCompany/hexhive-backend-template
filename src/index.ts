import { HiveGraph } from '@hexhive/graphql-server'
import cors from 'cors';
import express from 'express';
import schema from './schema';

(async () => {

    const {typeDefs, resolvers} = schema(); 

	const graphServer = new HiveGraph({
		dev: false,
		rootServer: process.env.ROOT_SERVER || 'http://localhost:7000',
		schema: {
			typeDefs: typeDefs,
			resolvers: resolvers,
		}
	})

	console.log("Graph server setup")

	await graphServer.init()

	console.log("Graph server init")

	const app = express()
	
	app.use(cors())

	app.use(graphServer.middleware)
    
	app.listen(process.env.PORT || 9010, () => {
		console.log(`Listening on ${process.env.PORT || 9010}`)
	})

})().catch(async (err) => {
	console.error("error ", err)
});