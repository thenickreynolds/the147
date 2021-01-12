import Head from "next/head";
import Heading from "../components/heading";
import RepresentativeContent from "../components/representativeContent";

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
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Heading />
            <RepresentativeContent />
          </div>
        </div>
      </main>

      <footer>
        <div className="flex justify-center p-4 bg-black text-gray-200">
          <div className="text-m">
            Data and images sourced from the{" "}
            <a href="https://www.nytimes.com/interactive/2021/01/07/us/elections/electoral-college-biden-objectors.html">
              New York Times
            </a>
            , built by <a href="http://nickreynolds.net">Nick Reynolds</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
