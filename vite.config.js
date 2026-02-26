import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/statamic-structured-data.js',
                'resources/css/statamic-structured-data.css'
            ],
            publicDirectory: 'resources/dist',
        }),
        vue(),
    ],
    build: {
        rollupOptions: {
            external: ['vue', 'vuedraggable'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
