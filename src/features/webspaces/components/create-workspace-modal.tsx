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
import { useCreateWorkspace } from "../api/use-create-workspaces";

export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();
    const { mutate, isPending, isError, isSuccess, data, error, isSettled } = useCreateWorkspace();

    const handleClose = () => {
      setOpen(false);
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({ name, }, {
        onSuccess(data) {
         console.log(data);
        }

        })
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
         <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a  workspace</DialogTitle>
            </DialogHeader>
             <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                 disabled={isPending}
                 value=""
                 autoFocus
                 minLength={3}
                 placeholder="Workspace name e.g. personal, home, work"
                 required
                 onChange={()=> {}}
                 />
                 <div className="flex justify-end">
                    <Button disabled={isPending}>
                        Create
                    </Button>
                 </div>
             </form>
         </DialogContent>
        </Dialog>
    )
}