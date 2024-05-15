import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [viteSingleFile(), svelte()],
    build: {
        minify: true,
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: false,
    },
});
