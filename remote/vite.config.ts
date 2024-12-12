import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite"

// https://vite.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		react(),
		federation({
			name: 'remote-app',
			filename: 'remoteEntry.js',
			exposes: {
				'./AppLauncher': './src/App.tsx'
			},
			shared: ['react', 'react-dom']
		})
	],
	build: {
		target: 'chrome89',
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			},
		},
	}
})
