"use client";

import { 
    Dialog,
    DialogContent,
    DialogDescription, 
    DialogHeader, 
    DialogTitle,
    } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCreateWorkspaceModal } from "../store/use-create-workspace";

export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();

    const handleClose = () => {
      setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
         <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a  workspace</DialogTitle>
            </DialogHeader>
             <form className="space-y-4">
                <Input 
                 disabled={false}
                 value=""
                 autoFocus
                 minLength={3}
                 placeholder="Workspace name e.g. personal, home, work"
                 required
                 />
                 <div className="flex justify-end">
                    <Button>
                        Create
                    </Button>
                 </div>
             </form>
         </DialogContent>
        </Dialog>
    )
}