import React from 'react';
import TemplatePicker, { TemplateTypes } from './templates';
import ResumeOne from './templates/ResumeOne/ResumeOne';

const App:React.FC = () => {
  return (
    <div className="app-container">
      {/* <ResumeOne /> */}
      <TemplatePicker type={TemplateTypes.ResumeOne} />
    </div>
  );
}

export default App;
