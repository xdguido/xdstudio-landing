// Temporary module declarations for Next.js third-parties integration until types are resolved from the framework.
// Remove this file once '@next/third-parties/google' provides bundled type definitions locally.

declare module '@next/third-parties/google' {
  interface GoogleTagManagerProps {
    gtmId: string;
    // Optional initial dataLayer object
    dataLayer?: Record<string, any>;
    // Optional auth / preview params for GTM environments
    auth?: string;
    preview?: string;
  }
  export function GoogleTagManager(props: GoogleTagManagerProps): JSX.Element;
  export function sendGTMEvent(event: Record<string, any>): void;
}
