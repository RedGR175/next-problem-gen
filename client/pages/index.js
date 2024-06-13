import { Inter } from 'next/font/google';
import ProblemGenerator from '../components/ProblemGen';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Link href="/savedResults" className='link'>
        <p>Saved Results Page</p>
      </Link>
      <h1>AI Problem Generator</h1>
      <div className="title-description">
        <p>This is an AI Problem Generator. It creates problems from a simple text prompt.</p>
      </div>
      <ProblemGenerator />
    </main>
  );
}