import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import StartupLoginPage from './startup/StartupLoginPage'
import StartupLabelRequestPage from './startup/StartupLabelRequestPage'
import GuichetLoginPage from './guichet-unique/GuichetLoginPage'
import CreateEnterprisePage from './guichet-unique/CreateEnterprisePage'
import G2BLoginPage from './g2b/G2BLoginPage'
import CreateG2BProfilePage from './g2b/CreateG2BProfilePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/startup" element={<StartupLoginPage />} />
        <Route path="/startup/register" element={<StartupLabelRequestPage />} />
        <Route path="/guichet" element={<GuichetLoginPage />} />
        <Route path="/guichet/create" element={<CreateEnterprisePage />} />
        <Route path="/g2b" element={<G2BLoginPage />} />
        <Route path="/g2b/create" element={<CreateG2BProfilePage />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
