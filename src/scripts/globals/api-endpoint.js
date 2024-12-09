import CONFIG from "./config";

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_IMAGE_URL}catalog`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;