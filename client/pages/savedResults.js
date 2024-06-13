// savedResults.js
import Link from 'next/link';
import GetSavedResults from '../components/ResultContainer';

const SavedResults = () => (
    <main>
        <Link href="/" className='link'>
            Home
        </Link>
        <GetSavedResults />
        
    </main>
);

export default SavedResults;
