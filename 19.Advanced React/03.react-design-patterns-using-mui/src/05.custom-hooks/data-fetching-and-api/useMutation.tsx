import axios from "axios";
import { useState } from "react";

type TMutationFunction<TData, TVariables> = (variables: TVariables) => Promise<TData>;

export function useMutation<TData, TVariables>(
    mutationFn: TMutationFunction<TData, TVariables>
) {
    const [data, setData] = useState<TData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = async (variables: TVariables) => {
        try {
            setLoading(true);
            setError(null)
            const result = await mutationFn(variables);
            setData(result)
            return result
        } catch (error) {
            const mutationError =
                error instanceof Error || axios.isAxiosError(error)
                    ? new Error(error.message)
                    : new Error("Mutation failed");

            setError(mutationError);
            throw mutationError;
        } finally {
            setLoading(false);
        }
    }

    return {
        mutate,
        data,
        loading,
        error
    }
}