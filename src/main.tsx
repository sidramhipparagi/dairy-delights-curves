import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  // Fallback: Show error message in the page
  document.body.innerHTML = `
    <div style="padding: 50px; font-family: Arial; text-align: center;">
      <h1 style="color: red;">App Failed to Load</h1>
      <p>Error: ${error instanceof Error ? error.message : String(error)}</p>
      <p>Check the browser console for more details.</p>
    </div>
  `;
}
