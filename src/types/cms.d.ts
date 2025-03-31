declare global {
  interface Window {
    CMS: {
      init: (config: {
    backend: {
      name: string;
      branch?: string;
      identity_url?: string;
      gateway_url?: string;
    };
    load_config_file?: boolean;
    local_backend?: boolean;
    configPath?: string;
  }) => void;
      registerPreviewTemplate: (templateName: string, component: React.ComponentType) => void;
    };
  }
}

export {};