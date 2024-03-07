
const get = async (apiname, endpoint, params = {}) => {
    try {
        const response = await apiname.get(endpoint, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};


const post = async (apiname, endpoint, data = {}) => {
    try {
        const response = await apiname.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { get, post };