<<<<<<< HEAD
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: env.PORT ? parseInt(env.PORT) : 5173,
      allowedHosts: ['legal-assist-frontend.onrender.com'],
    },
  };
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> f76affbeda726b434cb099c24cdd2c12323abd0a
