import { BASE_URL } from "./config";

const apiSettings = {
  fetchAll: async () => {
    const endpoint = `${BASE_URL}/all.json`;
    return await (await fetch(endpoint)).json();
  },
  fetchOne: async id => {
    const endpoint = `${BASE_URL}id/${id}.json`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;