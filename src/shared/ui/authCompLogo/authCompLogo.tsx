import { useEffect, useState } from "react";

function AuthCompLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="contactless-wrapper">
      <div className={`contactless-block ${isVisible ? "animate-in" : ""}`}>
        <div className="image-container">
          {/* Вставьте сюда вашу картинку */}
          <div className="placeholder-image">
            <div className="circle-bg">
              <div className="phone-mockup">
                <div className="phone-content">
                  <div className="stars">⭐ ⭐ ⭐</div>
                  <div className="text-lines">
                    <div className="line"></div>
                    <div className="line short"></div>
                  </div>
                  <div className="icon">🍽️</div>
                </div>
              </div>
            </div>
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">✨</div>
          </div>
        </div>

        <div className="progress-indicator">
          <span className="progress-dot active"></span>
          <span className="progress-dot"></span>
        </div>

        <h2 className="title">Full contactless experience</h2>
        <p className="subtitle">
          From ordering to paying, that's all contactless
        </p>

        <div className="brand">
          <span className="brand-eat">Eat</span>
          <span className="brand-easy">Easy</span>
        </div>
      </div>
    </div>
  );
}

export default AuthCompLogo;
