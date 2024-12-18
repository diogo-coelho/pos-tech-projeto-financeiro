import mongoose, { Document, Schema } from 'mongoose';

export interface Statement {
  transferType: string,
  value: number,
  date: Date
}

export interface Account extends Document {
  userId: string,
  currentValue: number,
  statement?: Statement[]
}

const accountSchema = new Schema<Account>({
  userId: { type: String, required: true },
  currentValue: { type: Number, required: true },
  statement: { type: Schema.Types.Mixed }
});

if (mongoose.models.Accounts) {
  delete mongoose.models.Accounts;
}

const AccountModel = mongoose.model<Account>('Accounts', accountSchema);

export default AccountModel;