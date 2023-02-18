import {Link} from 'react-router-dom';

export function NotFoundPage () {

    return (
        <div>
            <p>Page not found. Go <Link to='/home'>Home</Link></p>
        </div>
    )
}