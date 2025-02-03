import { Worker } from '@react-pdf-viewer/core';
// Plugins

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Create new plugin instance

import { Viewer } from '@react-pdf-viewer/core';
export default function Page() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({});
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="max-w-6xl mx-auto">
        <Viewer fileUrl="/elmerjoselitonleonbarboza-senior-frontend.pdf" plugins={[defaultLayoutPluginInstance]} />;
      </div>
    </Worker>
  );
}
