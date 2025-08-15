import { Document } from 'mongoose';
import mongoose from 'mongoose';
export declare class Leave extends Document {
    employee: mongoose.Types.ObjectId;
    date: Date;
    reason: string;
}
export declare const LeaveSchema: mongoose.Schema<Leave, mongoose.Model<Leave, any, any, any, Document<unknown, any, Leave> & Leave & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Leave, Document<unknown, {}, mongoose.FlatRecord<Leave>> & mongoose.FlatRecord<Leave> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
