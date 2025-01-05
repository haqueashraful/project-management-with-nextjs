
import{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useConfirm } from "@/hooks/use-confirm";
import {  ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";
import { useDeleteTask } from "../api/use-delete-task";
import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/features/projects/hooks/use-workspace-id";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";


interface TaskActionsProps {
    id: string;
    projectId: string;
    children: React.ReactNode;
}

export const TaskActions = ({id, projectId, children}: TaskActionsProps) => {

    const router = useRouter();
    const workspaceId = useWorkspaceId();

    const {open} = useEditTaskModal();

 const [ConfirmDialog, Confirm] = useConfirm(
    "Delete task",
    "Are you sure you want to delete this task?",
    'destructive'
 );

 const { mutate, isPending } = useDeleteTask();

    const onDelete = async () => {
        const ok = await Confirm();
        if (!ok) return;
    
        mutate({ param: { taskId: id } });
    }

    const onOpenTask = () => {
        router.push(`/workspaces/${workspaceId}/tasks/${id}`);
    }

    const onOpenProject = () => {
        router.push(`/workspaces/${workspaceId}/projects/${projectId}`);
    }

return(
    <div className="flex justify-end">
        <ConfirmDialog />
    <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
            {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48" sideOffset={5}>
                <DropdownMenuItem
                    onClick={onOpenTask}
                    disabled={false}
                    className="font-medium p-[10px]"
                >
                    <ExternalLinkIcon className="mr-2 size-4 stroke-2" />
                    Task Details
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={onOpenProject}
                    disabled={false}
                    className="font-medium p-[10px]"
                >
                    <ExternalLinkIcon className="mr-2 size-4 stroke-2" />
                    Open Project
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => open(id)}
                    disabled={false}
                    className="font-medium p-[10px]"
                >
                    <PencilIcon className="mr-2 size-4 stroke-2" />
                    Edit Task
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={onDelete}
                    disabled={isPending}
                    className="text-amber-700 focus:text-amber-700 font-medium p-[10px]"
                >
                    <TrashIcon className="mr-2 size-4 stroke-2" />
                    Delete Task
                </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    </div>
)

}