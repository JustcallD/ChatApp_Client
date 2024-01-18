import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={headerContentStyle}>
          <h1 style={headingStyle}>Welcome to Your Chat App</h1>
          <p style={paragraphStyle}>
            Connect with friends, share moments, and have meaningful
            conversations.
          </p>
        </div>
        <div style={featuresContainerStyle}>
          <div style={featureStyle}>
            <i className="fas fa-comments fa-3x"></i>
            <h3>Real-time Chat</h3>
            <p>Experience seamless real-time messaging with your friends.</p>
          </div>
          <div style={featureStyle}>
            <i className="fas fa-users fa-3x"></i>
            <h3>Connect with Friends</h3>
            <p>Build and maintain connections with friends old and new.</p>
          </div>
          <div style={featureStyle}>
            <i className="fas fa-cogs fa-3x"></i>
            <h3>Customizable Settings</h3>
            <p>Personalize your chat experience with customizable settings.</p>
          </div>
        </div>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "800px",
  margin: "auto",
  padding: "20px",
  textAlign: "center",
};

const headerContentStyle = {
  marginBottom: "30px",
};

const headingStyle = {
  fontSize: "3rem",
  color: "#333",
  fontWeight: "bold",
};

const paragraphStyle = {
  fontSize: "1.5rem",
  color: "#666",
  marginBottom: "20px",
};

const featuresContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const featureStyle = {
  width: "30%",
  padding: "20px",
  margin: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Home;
