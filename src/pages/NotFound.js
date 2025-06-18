import '../css/notfound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <img 
            src="https://cdn.dribbble.com/userupload/8726278/file/original-ab1bde6f9c74de5c8961f7fe84990cd4.gif"
            alt="404"        
        />
        <h1>Oops! Page Not Found</h1>
        <p>We couldn't find the page you were looking for.
          It might have been moved or deleted.</p>
        <Link to="/">
          <button className="not-found-btn">Back to homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;