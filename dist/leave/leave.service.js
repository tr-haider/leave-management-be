"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const leave_schema_1 = require("./schemas/leave.schema");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../users/schemas/user.schema");
let LeaveService = class LeaveService {
    leaveModel;
    userModel;
    constructor(leaveModel, userModel) {
        this.leaveModel = leaveModel;
        this.userModel = userModel;
    }
    async createMultipleLeavesForEmployee(dto) {
        const { employee, leaves } = dto;
        const user = await this.userModel.findById(employee);
        if (!user)
            throw new common_1.NotFoundException('Employee not found');
        const leaveEntries = leaves.map((leave) => ({
            ...leave,
            employee,
        }));
        const saved = await this.leaveModel.insertMany(leaveEntries);
        await this.userModel.findByIdAndUpdate(employee, {
            $inc: { availedLeaves: leaveEntries.length },
        });
        return saved;
    }
    async findByUser(userId) {
        return this.leaveModel.find({ employee: userId }).sort({ date: -1 });
    }
    async getLeavesByEmployee(employeeId) {
        return this.leaveModel.find({ employee: employeeId }).exec();
    }
    async deleteLeaveById(leaveId) {
        const leave = await this.leaveModel.findById(leaveId);
        if (!leave) {
            throw new common_1.NotFoundException('Leave not found');
        }
        await this.leaveModel.findByIdAndDelete(leaveId);
        await this.userModel.findByIdAndUpdate(leave.employee, {
            $inc: { availedLeaves: -1 },
        });
        return { message: 'Leave deleted successfully' };
    }
};
exports.LeaveService = LeaveService;
exports.LeaveService = LeaveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(leave_schema_1.Leave.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LeaveService);
//# sourceMappingURL=leave.service.js.map