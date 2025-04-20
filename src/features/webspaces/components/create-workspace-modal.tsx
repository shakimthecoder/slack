import { 
    Dialog,
    DialogContent,
    DialogDescription, 
    DialogHeader, 
    DialogTitle,
    } from "@/components/ui/dialog";

import { useCreateWorkspaceModal } from "../store/use-create-workspace";

export const createWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();

    const handleClose = () => {

    }

    return (
        <Dialog open={open}>

        </Dialog>
    )
}