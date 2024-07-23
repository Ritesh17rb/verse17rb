import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full max-w-xs border border-teal-500 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-500'
        />
      </Link>
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='mb-4'>
          <p className='text-xl font-bold text-white mb-2'>{post.title}</p>
          <span className='italic text-sm text-gray-300'>{post.category}</span>
        </div>
        <Link
          to={`/post/${post.slug}`}
          className='bg-teal-500 text-white border border-teal-500 hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 text-center py-2 px-4 rounded-md'
        >
          Read Article
        </Link>
      </div>
    </div>
  );
}
