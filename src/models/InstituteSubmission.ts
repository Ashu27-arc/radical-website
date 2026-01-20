import mongoose, { Schema, model, models } from 'mongoose';

export interface IInstituteSubmission {
  instituteName: string;
  instituteType: string;
  instituteStrength: string;
  address: {
    houseNo: string;
    streetLocality: string;
    landmark: string;
  };
  emailAddress: string;
  phoneNo: string;
  instituteDescription: string;
  imagePath?: string;
  submittedAt: Date;
}

const InstituteSubmissionSchema = new Schema<IInstituteSubmission>({
  instituteName: {
    type: String,
    required: [true, 'Institute name is required'],
    trim: true
  },
  instituteType: {
    type: String,
    required: [true, 'Institute type is required'],
    trim: true
  },
  instituteStrength: {
    type: String,
    required: [true, 'Institute strength is required'],
    trim: true
  },
  address: {
    houseNo: {
      type: String,
      required: [true, 'House/Building number is required'],
      trim: true
    },
    streetLocality: {
      type: String,
      required: [true, 'Street/Locality is required'],
      trim: true
    },
    landmark: {
      type: String,
      required: [true, 'Landmark is required'],
      trim: true
    }
  },
  emailAddress: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true
  },
  phoneNo: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  instituteDescription: {
    type: String,
    required: [true, 'Institute description is required'],
    trim: true
  },
  imagePath: {
    type: String,
    default: ''
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const InstituteSubmission = models.InstituteSubmission || model<IInstituteSubmission>('InstituteSubmission', InstituteSubmissionSchema);

export default InstituteSubmission;
