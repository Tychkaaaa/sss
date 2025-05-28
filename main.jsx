import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  React.useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Привет, {user?.first_name || 'гость'}!</h1>
      <p>Это твой React Web App внутри Telegram.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
