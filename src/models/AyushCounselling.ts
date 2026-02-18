import mongoose, { Schema, model, models } from 'mongoose';

export interface IAyushCounselling {
    fullName: string;
    email: string;
    phone: string;
    stream: string;
    submittedAt: Date;
}

const AyushCounsellingSchema = new Schema<IAyushCounselling>({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    stream: {
        type: String,
        required: [true, 'AYUSH stream is required'],
        trim: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const AyushCounselling = models.AyushCounselling || model<IAyushCounselling>('AyushCounselling', AyushCounsellingSchema);

export default AyushCounselling;
