import { Leave } from './schemas/leave.schema';
import { Model } from 'mongoose';
import { CreateMultipleLeavesDto } from './dtos/create-multiple-leaves.dto';
import { User } from '../users/schemas/user.schema';
export declare class LeaveService {
    private leaveModel;
    private userModel;
    constructor(leaveModel: Model<Leave>, userModel: Model<User>);
    createMultipleLeavesForEmployee(dto: CreateMultipleLeavesDto): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, Leave> & Leave & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, Omit<{
        employee: string;
        date: Date;
        reason: string;
    }, "_id">>[]>;
    findByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, Leave> & Leave & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getLeavesByEmployee(employeeId: string): Promise<Leave[]>;
    deleteLeaveById(leaveId: string): Promise<{
        message: string;
    }>;
}
