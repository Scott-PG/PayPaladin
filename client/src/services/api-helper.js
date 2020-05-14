import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://paypaladin-api.herokuapp.com"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

// =============================================================
// ========================Authorization========================
// =============================================================

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users/", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return false;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

// =============================================================
// ===========================Users=============================
// =============================================================

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};

// =============================================================
// =========================Campaigns===========================
// =============================================================

export const getAllCampaigns = async () => {
  const resp = await api.get(`/campaigns`);
  return resp.data;
};

export const getOneCampaign = async (id) => {
  const resp = await api.get(`/campaigns/${id}`);
  return resp.data;
};

export const postCampaign = async (campaignData) => {
  const resp = await api.post(`/campaigns`, campaignData);
  return resp.data;
};

export const putCampaign = async (id, campaignData) => {
  const resp = await api.put(`/campaigns/${id}`, campaignData);
  return resp.data;
};

export const destroyCampaign = async (id) => {
  const resp = await api.delete(`/campaigns/${id}`);
  return resp;
};

// =============================================================
// ======================Player_Characters======================
// =============================================================

export const getAllPCs = async () => {
  const resp = await api.get(`/player_characters`);
  return resp.data;
};

export const getMyPCs = async (userId) => {
  const resp = await api.get(`/permitted_player_characters/${userId}`);
  return resp.data;
};

export const getOnePC = async (id) => {
  const resp = await api.get(`/player_characters/${id}`);
  return resp.data;
};

export const postPC = async (PCData) => {
  const resp = await api.post(`/player_characters`, PCData);
  return resp.data;
};

export const joinCampaignPC = async (id, PCData) => {
  const resp = await api.put(`/player_characters/${id}/join_campaign`, PCData);
  return resp.data;
};

export const leaveCampaignPC = async (id) => {
  const resp = await api.put(`/player_characters/${id}/leave_campaign`);
  return resp.data;
};

export const setCoinsPC = async (id, PCData) => {
  const resp = await api.put(`/player_characters/${id}/set_coins`, PCData);
  return resp.data;
};

export const transferCoinsPC = async (id, PCData) => {
  const resp = await api.put(`/player_characters/${id}/transfer_coins`, PCData);
  return resp.data;
};

export const changeNamePC = async (id, PCData) => {
  const resp = await api.put(`/player_characters/${id}`, PCData);
  return resp.data;
};

export const destroyPC = async (id) => {
  const resp = await api.delete(`/player_characters/${id}`);
  return resp;
};
