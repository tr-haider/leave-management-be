declare class SingleLeaveEntry {
    date: Date;
    reason: string;
}
export declare class CreateMultipleLeavesDto {
    employee: string;
    leaves: SingleLeaveEntry[];
}
export {};
