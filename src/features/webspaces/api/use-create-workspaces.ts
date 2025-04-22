import { useMutation } from "convex/react"
import { api } from '../../../../convex/_generated/api';
import { Doc, Id} from '../../../../convex/_generated/dataModel';
import { useCallback, useState } from "react";

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
    const [state, setState] = useState<("success" | "error" | "settled" | "pending" | null)>(null);
    const [error, setError] = useState<Error | null>();
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSettled, setIsSettled] = useState(false);

    const mutate = useCallback(async (values?: RequestType, options?: Options) => {
        try {
            setData(null);
            setError(null);
            setIsError(false);
            setIsSuccess(false);

            setIsPending(true);
           

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
            setIsSettled(true);
            setIsPending(false);
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