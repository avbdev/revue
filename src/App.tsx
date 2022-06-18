import React from 'react';
import TemplatePicker, { TemplateTypes } from './templates';
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <TemplatePicker type={TemplateTypes.ResumeOne} />
    </div>
  );
}

export default App;
