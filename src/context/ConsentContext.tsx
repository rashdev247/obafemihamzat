import React, { createContext, useContext, useEffect, useState } from 'react';

type ConsentContextType = {
  consentGiven: boolean;
  giveConsent: () => void;
};

const ConsentContext = createContext<ConsentContextType>({
  consentGiven: false,
  giveConsent: () => {},
});

export const useConsent = () => useContext(ConsentContext);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    setConsentGiven(localStorage.getItem('cookie_consent') === 'true');
  }, []);

  const giveConsent = () => {
    localStorage.setItem('cookie_consent', 'true');
    setConsentGiven(true);
  };

  return (
    <ConsentContext.Provider value={{ consentGiven, giveConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};
