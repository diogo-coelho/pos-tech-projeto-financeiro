import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/pos-tech-bytebank');

    console.log(`MongoDB conectado: ${ conn.connection.host }`);
  } catch(error: unknown) {
    console.log(`Erro ao conectar ao MongoDB ${error instanceof Error ? error.message : error }`);
    process.exit(1);
  }
}

export default connectDatabase;