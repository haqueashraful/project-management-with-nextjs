import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
    name: z.string().trim().min(1, 'Name is required'),
    status: z.nativeEnum(TaskStatus, { required_error: 'Status is required' }),
    workspaceId: z.string().trim().min(1, 'Workspace Id is required'),
    projectId: z.string().trim().min(1, 'Project Id is required'),
    assigneeId: z.string().trim().min(1, 'Assignee Id is required'),
    dueDate: z.coerce.date(),
    description: z.string().optional(),
})