import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Type for the cached connection
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the NodeJS global type to include mongoose
declare global {
  var mongoose: CachedConnection;
}

// Initialize the cached connection
let cached: CachedConnection = global.mongoose || { conn: null, promise: null };

// Only modify the global object in development to prevent memory leaks
if (process.env.NODE_ENV !== 'production') {
  global.mongoose = cached;
}

async function dbConnect(): Promise<typeof mongoose> {
  try {
    // Return cached connection if available
    if (cached.conn) {
      return cached.conn;
    }

    // If no connection promise exists, create one
    if (!cached.promise) {
      const opts: ConnectOptions = {
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000, // 10 seconds
        socketTimeoutMS: 45000, // 45 seconds
        family: 4, // Use IPv4, skip trying IPv6
        retryWrites: true,
        w: 'majority'
      };

      console.log('Connecting to MongoDB...');
      cached.promise = mongoose.connect(MONGODB_URI, opts)
        .then((mongoose) => {
          console.log('MongoDB connected successfully');
          return mongoose;
        })
        .catch((error) => {
          console.error('MongoDB connection failed:', error);
          cached.promise = null;
          throw error;
        });
    }

    // Wait for the connection to establish
    try {
      cached.conn = await cached.promise;
    } catch (error) {
      cached.promise = null;
      throw error;
    }

    return cached.conn;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

export default dbConnect;