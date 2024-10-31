import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name?: string,
  email: string,
  password: string
}

const userSchema = new Schema<User>({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

const UserModel = mongoose.models.User || mongoose.model<User>('Users', userSchema);

export default UserModel;
