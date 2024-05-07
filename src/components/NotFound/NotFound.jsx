import { useLocation } from 'react-router-dom';

const NotFound = ()=>{
    const location = useLocation();

    return (
    <div>
      <h1 className='text-5xl m-10 text-red-500'>Page not found</h1>
      <p className='m-10'>The requested URL <code>{location.pathname}</code> was not found.</p>
    </div>
    )
}

export default NotFound