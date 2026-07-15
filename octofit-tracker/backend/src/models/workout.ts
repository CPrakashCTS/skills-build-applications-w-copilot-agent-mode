import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  focus: string;
  difficulty: string;
  estimatedDuration: number;
}

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  focus: { type: String, required: true },
  difficulty: { type: String, required: true },
  estimatedDuration: { type: Number, required: true },
});

export default mongoose.model<IWorkout>('Workout', workoutSchema);
