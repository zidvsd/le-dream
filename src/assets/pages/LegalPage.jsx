import React, { useEffect } from "react";
import ConductSection from "../../sections/legal/ConductSection";
import PrivacySection from "../../sections/legal/PrivacySection";
import SafetySection from "../../sections/legal/SafetySection";
import TermsSection from "../../sections/legal/TermsSection";
import { useLocation } from "react-router-dom";
const LegalPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-between">
      <ConductSection />
      <PrivacySection />
      <SafetySection />
      <TermsSection />
    </div>
  );
};

export default LegalPage;
