import React from 'react';
import { useConsent } from '../context/ConsentContext';

const CookieConsentBanner: React.FC = () => {
  const { consentGiven, giveConsent } = useConsent();

  if (consentGiven) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, background: '#222', color: '#fff',
      padding: '1rem', textAlign: 'center', zIndex: 1000
    }}>
      We use cookies for analytics.{' '}
      <button
        style={{ marginLeft: 8, padding: '0.5rem 1rem', background: '#fff', color: '#222', border: 'none', borderRadius: 4 }}
        onClick={giveConsent}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsentBanner;
