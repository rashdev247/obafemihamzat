import TagManager from 'react-gtm-module';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

type DataLayerEvent = {
  event: string;
  page?: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export const initGTM = () => {
  if (typeof window === 'undefined' || !GTM_ID) return;
  TagManager.initialize({ gtmId: GTM_ID });
};

export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export const event = ({
  event,
  category,
  action,
  label,
  value,
}: {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    category,
    action,
    label,
    value,
  });
};

