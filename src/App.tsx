import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';

export default function AppRoot() {
  return (
    <Router>
      <Routes>
        {/* Your other routes... */}
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
      </Routes>
    </Router>
  );
}