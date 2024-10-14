import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";


const { MongoClient, ServerApiVersion } = require('mongodb');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  };


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
 client = new MongoClient("mongodb+srv://"+this.configService.get<string>('DATABASE_USER')+":josePeace@crmpymedrar.j73rk.mongodb.net/?retryWrites=true&w=majority&appName=crmPYMEDRAR", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await this.client.connect();
    // Send a ping to confirm a successful connection
    await this.client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await this.client.close();
  }
}



constructor(private configService: ConfigService) {

  this.run().catch(console.dir);
  };
}


