import mongoose, { Schema, model, models } from 'mongoose';

export interface IDeemedCollegeEnquiry {
    name: string;
    email: string;
    mobile: string;
    course: string;
    submittedAt: Date;
}

const DeemedCollegeEnquirySchema = new Schema<IDeemedCollegeEnquiry>({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true
    },
    course: {
        type: String,
        required: [true, 'Course is required'],
        trim: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const DeemedCollegeEnquiry = models.DeemedCollegeEnquiry || model<IDeemedCollegeEnquiry>('DeemedCollegeEnquiry', DeemedCollegeEnquirySchema);

export default DeemedCollegeEnquiry;
