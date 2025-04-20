"use client";

import { 
    Dialog,
    DialogContent,
    DialogDescription, 
    DialogHeader, 
    DialogTitle,
    } from "@/components/ui/dialog";

import { useCreateWorkspaceModal } from "../store/use-create-workspace";

export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();

    const handleClose = () => {

    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
         <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a  workspace</DialogTitle>
            </DialogHeader>
         </DialogContent>
        </Dialog>
    )
}