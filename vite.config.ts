import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  ...(process.env.RUN_IN_CONTAINER && {
    server: {
      host: '0.0.0.0', // Required for docker containers.
      port: 5173,
    },
    preview: {
      host: '0.0.0.0', // Required for docker containers.
      port: 4173,
    },
  }),
});
