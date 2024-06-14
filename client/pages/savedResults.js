// savedResults.js
import Link from "next/link";
import GetSavedResults from "../components/ResultContainer";

const SavedResults = () => (
  <main>
    <Link href="/" className="link">
      Home
    </Link>
    <h2>Saved Results</h2>
    <p>This is where results saved from anyone will go</p>
    <GetSavedResults />
    <p className="description">You've Reached the end!</p>
  </main>
);

export default SavedResults;
