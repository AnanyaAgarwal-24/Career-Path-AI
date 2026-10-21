function Login({ onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">C</div>

        <h1>CareerPath AI</h1>

        <p className="login-subtitle">
          Your AI-powered roadmap to your dream career.
        </p>

        <button className="google-btn" onClick={onLogin}>
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        <p className="login-note">
          Personalized roadmaps. Smarter preparation.
        </p>

      </div>
    </div>
  );
}

export default Login;