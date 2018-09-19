export function trackEvent(
  eventName: string,
  properties?: { [name: string]: string }
): Promise<null>;
export function isEnabled(): Promise<boolean>;
export function setEnabled(enabled: boolean): Promise<void>;
