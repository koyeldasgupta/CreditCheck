import { useEffect, useState } from 'react';

export interface IUseAPIResponse {
    data: any,
    error: any,
    isLoading: boolean,
    execute: () => Promise<void>
}

const useAPI = (url: string, httpMethod: string, body: string | null, immediate: boolean = true) : IUseAPIResponse => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        headers: {'Content-Type': 'application/json'},
        method: httpMethod,
        body
    };

    const execute = async () => {
        setIsLoading(true);
        setData(null);
        setError(null);

        try {
            const res = await fetch(url, options);
            const jsonData = await res.json();
            setData(jsonData);
        } catch(error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (immediate) {
          execute();
        }
      }, []);

    return {data, error, isLoading, execute};
};

export default useAPI;