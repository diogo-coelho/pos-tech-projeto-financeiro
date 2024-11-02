import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL as string);

    console.log(`MongoDB conectado: ${ conn.connection.host }`);
  } catch(error: unknown) {
    console.log(`Erro ao conectar ao MongoDB ${error instanceof Error ? error.message : error }`);
    process.exit(1);
  }
}

export default connectDatabase;