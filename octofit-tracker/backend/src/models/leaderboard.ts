import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  userId: string;
  totalPoints: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboard>({
  userId: { type: String, required: true },
  totalPoints: { type: Number, required: true },
  rank: { type: Number, required: true },
});

export default mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
