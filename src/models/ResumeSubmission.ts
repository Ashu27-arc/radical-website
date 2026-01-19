import mongoose, { Schema, model, models } from 'mongoose';

export interface IResumeSubmission {
  firstName: string;
  email: string;
  opening: string;
  resumePath?: string;
  submittedAt: Date;
}

const ResumeSubmissionSchema = new Schema<IResumeSubmission>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  opening: {
    type: String,
    required: [true, 'Job opening is required']
  },
  resumePath: {
    type: String,
    default: ''
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const ResumeSubmission = models.ResumeSubmission || model<IResumeSubmission>('ResumeSubmission', ResumeSubmissionSchema);

export default ResumeSubmission;

