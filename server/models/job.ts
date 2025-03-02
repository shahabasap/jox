import clientPromise from '~/server/utils/mongodb';
import { ObjectId } from 'mongodb';

export interface Job {
  title: string;
  description: string;
  location: string;
  salary: number;
  category:string;
}

export async function getJobs() {
  const client = await clientPromise;
  const db = client.db(); // Use the default database
  return db.collection<Job>('jobs').find().toArray();
}
export async function getCategories() {
  const client = await clientPromise;
  const db = client.db(); // Use the default database
  return db.collection<Job>('jobs').distinct("category");
}
export async function getJob(id:any) {
  const client = await clientPromise;
  const db = client.db(); 
  
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid ObjectId format");
  }
  const objectId = ObjectId.createFromHexString(id);
    const job = await db.collection<Job>('jobs').findOne({ _id: objectId });
   
    if (!job) {
      throw new Error("Job not found");
    }

    return job
}
export async function filterJobs(search:any,category:any) {
  const client = await clientPromise;
  const db = client.db(); // Use the default database
  const query: any = {};
  if (search) {
    query.title = { $regex: search, $options: "i" };
  }
  if (category) {
    query.category = category;
  }

  const jobs = await db.collection<Job>("jobs").find(query).toArray();

  return jobs ;
}