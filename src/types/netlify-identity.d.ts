declare global {
  interface User {
  id: string;
  email: string;
  confirmed_at: string;
  app_metadata: {
    provider: string;
  };
  user_metadata: {
    full_name?: string;
  };
}

interface Window {
  netlifyIdentity: {
    init: (config?: { APIUrl?: string }) => void;
    on: (
      event: 'init' | 'login',
      callback: (user?: User) => void
    ) => void;
    currentUser: () => User | null;
    open: () => void;
    close: () => void;
  };
}
}

export {};