import {Link} from 'react-router-dom';

export function NotFoundPage () {

    return (
        <div>
            <p>Page not found. Go <Link to='/'>Home</Link></p>
        </div>
    )
}