"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";
import { EditTaskFormWrapper } from "./edit-task-form-wrapper";

export const EditTaskModal = () => {
    const {  taskId,  close } = useEditTaskModal();

    return (
      <ResponsiveModal open={!!taskId} onOpenChange={close} >
        <div className="flex flex-col gap-y-4">
            {taskId && <EditTaskFormWrapper id={taskId} onCancel={close}  />}
        </div>
        </ResponsiveModal>
    );
}