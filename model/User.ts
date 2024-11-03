import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name?: string,
  email: string,
  password?: string
}

const userSchema = new Schema<User>({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

if (mongoose.models.Users) {
  delete mongoose.models.Users;
}

const UserModel = mongoose.model<User>('Users', userSchema);

export default UserModel;
