import { useMutation } from "convex/react"
import { api } from '../../../../convex/_generated/api';
import { Doc, Id} from '../../../../convex/_generated/dataModel';
import { useCallback, useState, useMemo } from "react";

type RequestType = { name: string } | any;
type ResponseType = Id<"workspaces"> | null;

type Options = {
    onSuccess?: (data: Id<"workspaces">) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
    throwError?: boolean;
}


export const useCreateWorkspace = () => {
    const mutation = useMutation(api.workspaces.create);
    const [data, setData] = useState<ResponseType>();
    const [status, setStatus] = useState<("success" | "error" | "settled" | "pending" | null)>(null);
    const [error, setError] = useState<Error | null>();

    const isPending = useMemo(() => status === "pending" ,[status]);
    const isSuccess = useMemo(() => status === "success", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);
    const isError = useMemo(() => status === "error", [status]);



    const mutate = useCallback(async (values?: RequestType, options?: Options) => {
        try {
            setData(null);
            setError(null);
            setStatus("pending"); 

            const response = await mutation(values);
            options?.onSuccess?.(response)
        }
        catch(error) {
            options?.onError?.(error as Error)
            if(options?.throwError){
                throw error;
            }
        }
        finally {
            setStatus("settled");
            options?.onSettled?.()
        }
        
    }, [mutation])
     return {
        mutate,
        isSettled,
        isPending,
        error,
        isError,
        data,
        isSuccess,
     }
}