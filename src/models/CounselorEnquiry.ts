import mongoose, { Schema, model, models } from 'mongoose';

export interface ICounselorEnquiry {
    name: string;
    mobile: string;
    course: string;
    state: string;
    submittedAt: Date;
}

const CounselorEnquirySchema = new Schema<ICounselorEnquiry>({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
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
    state: {
        type: String,
        required: [true, 'State is required'],
        trim: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const CounselorEnquiry = models.CounselorEnquiry || model<ICounselorEnquiry>('CounselorEnquiry', CounselorEnquirySchema);

export default CounselorEnquiry;
