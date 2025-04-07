// import { useBlogs } from '../hooks/useBlogs';

// const BlogsTab = () => {
//   const { blogs, loading, error } = useBlogs();

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="space-y-6">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="flex flex-col sm:flex-row items-start bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//             >
//               <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
//                 {blog.image_url && (
//                   <img
//                     src={blog.image_url}
//                     alt={blog.title}
//                     className="w-full sm:w-48 h-48 object-cover rounded-md"
//                     style={{
//                       objectFit: 'cover',
//                       objectPosition: 'center',
//                       maxWidth: '100%',
//                       height: 'auto',
//                     }}
//                   />
//                 )}
//               </div>
//               <div className="flex flex-col justify-between">
//                 <h3 className="font-semibold text-lg">{blog.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                   {blog.description}
//                 </p>
//                 <a
//                   href={blog.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-2"
//                 >
//                   Read more
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogsTab;

// other code 
import { useBlogs } from '../hooks/useBlogs';

const BlogsTab = () => {
  const { blogs, loading, error } = useBlogs();

  return (
    <div className="relative">
      {/* Animation styles */}
      <style>{`
        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(-30deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        
        .animate-card {
          animation: cardEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: top center;
        }

        .hover-floating {
          transition: transform 0.3s ease-in-out;
        }
        .hover-floating:hover {
          transform: translateY(-4px);
        }

        .image-mask {
          mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
        }
      `}</style>

      {loading ? (
        <div className="space-y-6 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          ))}
        </div>
      ) : error ? (
        <div className="text-red-500 text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg animate-[shake_0.5s_ease-in-out]">
          {error}
        </div>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-card hover-floating group bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
              style={{
                animationDelay: `${index * 75}ms`,
                perspective: '1000px'
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {blog.image_url && (
                  <div className="relative flex-shrink-0 w-full sm:w-56 h-56 rounded-xl overflow-hidden image-mask">
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-900/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsTab;