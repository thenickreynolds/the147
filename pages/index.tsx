import Head from "next/head";
import RepresentativeCard from "../components/representativeCard";
import Data from "../utils/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          The 147 Members of Congress Who Voted to Overturn Election Results
        </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="lg:text-center">
              <p className="mt-2 font-extrabold tracking-tight text-gray-900 text-base lg:text-8xl md:text-6xl text-4xl font-serif">
                The 147 Members of Congress Who Voted to Overturn Election
                Results
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-serif">
                <a href="https://www.nytimes.com/interactive/2021/01/07/us/elections/electoral-college-biden-objectors.html">
                  Source: New York Times
                </a>
              </p>
            </div>

            <div className="flex flex-wrap">
              {Data.MEMBERS_OF_CONGRESS.map((rep) => (
                <RepresentativeCard rep={rep} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="flex justify-center p-4 bg-black text-gray-200">
          <div>
            <a href="http://nickreynolds.net">nick reynolds</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
