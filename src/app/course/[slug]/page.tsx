// import React from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons';

// const courseMeta: { [key: string]: { title: string; subtitle?: string } } = {
//   'ccc': { title: 'Course on Computer Concepts (CCC)' },
//   'o-level': { title: 'O Level - Foundation Course' },
//   'web-development': { title: 'Full Stack Web Development' },
//   'digital-marketing': { title: 'Digital Marketing Mastery' },
//   'tally': { title: 'Tally ERP & Accounting' },
//   'python': { title: 'Python Programming' },
//   'c-plus-plus': { title: 'C++ Programming' },
//   'java': { title: 'Java Programming' },
// };

// // Small static handout data (keeps the page quick to scaffold)
// const handout = [
//   { sno: 1, chapter: 'Introduction', duration: '2', theoryLab: '1/1', outcomes: 'Basic concepts and setup' },
//   { sno: 2, chapter: 'Core Topics', duration: '6', theoryLab: '4/2', outcomes: 'Practical skills and examples' },
// ];

// export default async function CourseSlugPage({ params }: { params: { slug: string } }) {
//   const { slug: rawSlug } = await params as { slug?: string };
//   const slug = rawSlug || 'course';
//   const meta = courseMeta[slug] || { title: slug.replace(/-/g, ' ').toUpperCase() };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-40 shadow-sm">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
//           <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-purple-500" />
//           <div className="text-lg font-bold">Sharp Programmer Technology</div>
//           <div className="ml-auto">
//             <Link href="/" className="text-sm text-gray-700">Home</Link>
//           </div>
//         </div>
//       </nav>

//       <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white pt-32 pb-12 md:pt-40 md:pb-20 px-4 sm:px-6 mt-16">
//         <div className="max-w-5xl mx-auto">
//           <p className="text-xs sm:text-sm opacity-80 mb-2">{meta.title}</p>
//           <h1 className="text-3xl md:text-4xl font-bold">{meta.title}</h1>
//         </div>
//       </header>

//       <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
//         <section id="overview" className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Overview</h2>
//           <p className="text-gray-700">This is a dedicated landing page for <strong>{meta.title}</strong>. You can copy or extend the CourseLandingPage content here to match course-specific details.</p>
//           <ul className="mt-4 space-y-2 text-gray-700">
//             <li className="flex items-start gap-3"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1" /> Core concepts and learning outcomes tailored to the course.</li>
//             <li className="flex items-start gap-3"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1" /> Practical examples and hands-on labs.</li>
//             <li className="flex items-start gap-3"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1" /> Assessment and certification guidance.</li>
//           </ul>
//         </section>

//         <section id="course-handout" className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Course Handout</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border text-sm text-black">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-2 py-1">S. No.</th>
//                   <th className="border px-2 py-1">Chapter Name</th>
//                   <th className="border px-2 py-1">Duration</th>
//                   <th className="border px-2 py-1">Theory/Lab</th>
//                   <th className="border px-2 py-1">Learning Outcomes</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {handout.map((r) => (
//                   <tr key={r.sno}>
//                     <td className="border px-2 py-1 text-center">{r.sno}</td>
//                     <td className="border px-2 py-1">{r.chapter}</td>
//                     <td className="border px-2 py-1 text-center">{r.duration}</td>
//                     <td className="border px-2 py-1 text-center">{r.theoryLab}</td>
//                     <td className="border px-2 py-1">{r.outcomes}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section id="contact" className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Contact</h2>
//           <p className="text-gray-700">For course enquiries, call <strong>+91-000000000</strong> or email us. <FontAwesomeIcon icon={faPhone} className="ml-2 text-green-500" /></p>
//         </section>
//       </div>
//     </div>
//   );
// }
