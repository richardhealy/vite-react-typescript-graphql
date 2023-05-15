/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

const config = ({ mode }: { mode: never }) => {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      svgr(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
    ],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./setup-vitest.js'],
      coverage: {
        provider: 'c8',
        reporter: ['text', 'json', 'html', 'lcov'],
        all: true,
        exclude: [
          '**/*.test.{ts,tsx}',
          '**/react-app-env.d.ts',
          '.eslintrc.js',
          '**/*{.,-}{config,setup}.{ts,js}',
          '**/types/*',
          '**/types.ts',
        ],
      },
    },
  });
};

export default config;
