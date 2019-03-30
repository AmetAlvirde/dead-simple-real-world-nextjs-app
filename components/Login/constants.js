import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { PORT } = publicRuntimeConfig;

const BASE_URL = `http://localhost:${PORT}`;

export default BASE_URL;
