declare module 'decap-cms-app' {
  import { InitOptions } from 'decap-cms-core';
  const CMS: {
    init: (config: InitOptions) => void;
  };
  export default CMS;
}

declare module 'js-yaml' {
  const load: (text: string) => unknown;
  export { load };
}

interface InitOptions {
  config: {
    load_config_file: boolean;
    backend: {
      name: string;
      branch: string;
      repo: string;
    };
    media_folder: string;
    public_folder: string;
    collections: any[];
  };
}