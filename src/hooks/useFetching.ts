import {useState} from "react";

type TCallback = (...args: any[]) => Promise<void>

export const useFetching = (callback: TCallback): [Function, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetch = async () => {
        try {
            setIsLoading(true)
            await callback()
        }

        catch (e) {
            if (e instanceof Error)
                setError(e.message)
        }

        finally {
            setIsLoading(false)
        }
    }

    return [fetch, isLoading, error]
}
