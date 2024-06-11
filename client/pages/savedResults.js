// savedResults.js
import Link from 'next/link';
import GetSavedResults from '../components/ResultContainer';

const SavedResults = () => (
    <div>
        <Link href="/">
            Home
        </Link>
        <GetSavedResults />
    </div>
);

export default SavedResults;
