import React from 'react';

const Resume = () => {
  const downloadResume = () => {
    const element = document.createElement('a');
    element.href = '/resume.pdf';
    element.download = 'Gabriel_Omokaro_Resume.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Resume</h2>
          <div className="w-12 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">Download my complete resume to learn more about my experience and qualifications.</p>
          <button
            onClick={downloadResume}
            className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;