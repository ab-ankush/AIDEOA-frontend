import React from 'react';
import TopImageCard from '../Cards/TopImageCard';

const files = [
  { id: 1, name: 'Introduction to React', type: 'pdf', url: '/files/intro-to-react.pdf' },
  { id: 2, name: 'JavaScript Basics', type: 'doc', url: '/files/javascript-basics.doc' },
  { id: 3, name: 'CSS Fundamentals', type: 'pdf', url: '/files/css-fundamentals.pdf' },
  { id: 4, name: 'Node.js Essentials', type: 'pdf', url: '/files/nodejs-essentials.pdf' },
  { id: 5, name: 'Database Design', type: 'doc', url: '/files/database-design.doc' },
  { id: 6, name: 'Web Security Best Practices', type: 'pdf', url: '/files/web-security.pdf' },
  { id: 7, name: 'UI/UX Principles', type: 'pdf', url: '/files/ui-ux-principles.pdf' },
  { id: 8, name: 'Git Version Control', type: 'doc', url: '/files/git-version-control.doc' },
];

const videos = [
  { id: 1, title: 'React Hooks Tutorial', url: 'https://www.example.com/video1' },
  { id: 2, title: 'Building RESTful APIs', url: 'https://www.example.com/video2' },
  { id: 3, title: 'Responsive Web Design', url: 'https://www.example.com/video3' },
];

 function EducationPage() {
  return (
    <div className='py-14 min-h-screen'>
        <TopImageCard image={'./enhanceimage/Educationcomp.png'} title={"Education"}/>
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Education Resources</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Materials</h2>
          <div className="h-[400px] overflow-y-auto pr-2">
            <ul className="space-y-2">
              {files.map((file) => (
                <li key={file.id} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <a 
                    href={file.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {file.name}
                  </a>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded">
                    {file.type.toUpperCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Online Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <h3 className="p-2 bg-gray-200 text-gray-800 font-medium text-sm">{video.title}</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></video>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default EducationPage