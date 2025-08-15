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
exports.LeaveController = void 0;
const common_1 = require("@nestjs/common");
const leave_service_1 = require("./leave.service");
const swagger_1 = require("@nestjs/swagger");
const create_multiple_leaves_dto_1 = require("./dtos/create-multiple-leaves.dto");
const leave_schema_1 = require("./schemas/leave.schema");
let LeaveController = class LeaveController {
    leaveService;
    constructor(leaveService) {
        this.leaveService = leaveService;
    }
    findByUser(userId) {
        return this.leaveService.findByUser(userId);
    }
    createMultipleLeaves(dto) {
        return this.leaveService.createMultipleLeavesForEmployee(dto);
    }
    async getLeavesByEmployee(id) {
        return this.leaveService.getLeavesByEmployee(id);
    }
    async deleteLeave(leaveId) {
        return this.leaveService.deleteLeaveById(leaveId);
    }
};
exports.LeaveController = LeaveController;
__decorate([
    (0, common_1.Get)(':userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all leaves for a user' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add multiple leaves for one employee' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_multiple_leaves_dto_1.CreateMultipleLeavesDto]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "createMultipleLeaves", null);
__decorate([
    (0, common_1.Get)('/employee/:id'),
    (0, swagger_1.ApiOkResponse)({ type: [leave_schema_1.Leave] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "getLeavesByEmployee", null);
__decorate([
    (0, common_1.Delete)(':leaveId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a leave by its ID' }),
    __param(0, (0, common_1.Param)('leaveId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeaveController.prototype, "deleteLeave", null);
exports.LeaveController = LeaveController = __decorate([
    (0, swagger_1.ApiTags)('Leaves'),
    (0, common_1.Controller)('leaves'),
    __metadata("design:paramtypes", [leave_service_1.LeaveService])
], LeaveController);
//# sourceMappingURL=leave.controller.js.map