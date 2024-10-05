/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NETWORK: string;
    readonly VITE_MODULE_ADDRESS: string;
    readonly VITE_IS_DEV: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }