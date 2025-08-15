import { LeaveService } from './leave.service';
import { CreateMultipleLeavesDto } from './dtos/create-multiple-leaves.dto';
import { Leave } from './schemas/leave.schema';
export declare class LeaveController {
    private readonly leaveService;
    constructor(leaveService: LeaveService);
    findByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, Leave> & Leave & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createMultipleLeaves(dto: CreateMultipleLeavesDto): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, Leave> & Leave & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, Omit<{
        employee: string;
        date: Date;
        reason: string;
    }, "_id">>[]>;
    getLeavesByEmployee(id: string): Promise<Leave[]>;
    deleteLeave(leaveId: string): Promise<{
        message: string;
    }>;
}
