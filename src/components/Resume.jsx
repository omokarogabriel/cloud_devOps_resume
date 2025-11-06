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
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Looking for more details?</h2>
          <button
            onClick={downloadResume}
            className="inline-flex px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-primary-700 hover:shadow-medium"
          >
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;