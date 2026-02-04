import Api from './interceptor';

// GET API
export const getApi = async <T = unknown>(url: string, params?: object): Promise<T> => {
    try {
        const result = await Api.get(url, { params });
        if (result.status === 200 || result.status === 201 || result.status === 203) {
            return result.data;
        }
        throw new Error(result?.data?.message || `Unexpected status: ${result.status}`);
    } catch (e: unknown) {
        const error = e as { response?: { data?: { message?: string } } };
        throw new Error(error?.response?.data?.message || 'API Request Failed');
    }
};

// POST API
export const postApi = async <T = unknown>(url: string, data?: object): Promise<T> => {
    try {
        const result = await Api.post(url, data);
        if (result.status === 200 || result.status === 201) {
            return result.data;
        }
        throw new Error(result?.data?.message || `Unexpected status: ${result.status}`);
    } catch (e: unknown) {
        const error = e as { response?: { data?: { message?: string }; message?: string }; message?: string };
        throw new Error(
            error?.response?.data?.message ||
            error?.response?.message ||
            error?.message ||
            'API Request Failed'
        );
    }
};

// PUT API
export const putApi = async <T = unknown>(url: string, data?: object): Promise<T> => {
    try {
        const result = await Api.put(url, data);
        if (result.status === 200 || result.status === 201) {
            return result.data;
        }
        throw new Error(result?.data?.message || `Unexpected status: ${result.status}`);
    } catch (e: unknown) {
        const error = e as { response?: { data?: { message?: string } } };
        throw new Error(error?.response?.data?.message || 'API Request Failed');
    }
};

// PATCH API
export const patchApi = async <T = unknown>(url: string, data?: object): Promise<T> => {
    try {
        const result = await Api.patch(url, data);
        if (result.status === 200 || result.status === 201) {
            return result.data;
        }
        throw new Error(result?.data?.message || `Unexpected status: ${result.status}`);
    } catch (e: unknown) {
        const error = e as { response?: { data?: { message?: string } } };
        throw new Error(error?.response?.data?.message || 'API Request Failed');
    }
};

// DELETE API
export const deleteApi = async <T = unknown>(url: string, params?: object): Promise<T> => {
    try {
        const result = await Api.delete(url, { params });
        if (result.status === 200 || result.status === 201) {
            return result.data;
        }
        throw new Error(result?.data?.message || `Unexpected status: ${result.status}`);
    } catch (e: unknown) {
        const error = e as { response?: { data?: { message?: string } } };
        throw new Error(error?.response?.data?.message || 'API Request Failed');
    }
};

// POST with FormData (for file uploads)
export const postFormDataApi = async <T = unknown>(url: string, formData: FormData): Promise<T> => {
    try {
        const result = await Api.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (result.status === 200 || result.status === 201) {
            return result.data;
        }
        throw new Error(result?.data?.message || `Unexpected status: ${result.status}`);
    } catch (e: unknown) {
        const error = e as { response?: { data?: { message?: string } } };
        throw new Error(error?.response?.data?.message || 'API Request Failed');
    }
};

