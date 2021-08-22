import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
export default defineConfig( { plugins: [ { ...reactRefresh(  ), }, { ...legacy( { targets: [ 'defaults', 'not IE 11' ] } ), apply: 'build' } ], server: { host: '0.0.0.0', port: 8080, }, } );
