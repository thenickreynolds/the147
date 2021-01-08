export type Representative = {
  name: string;
  alignment: "Republican";
  type: "House" | "Senate";
  location: string;
  election_year: number;
  image: string;
};

export default class Data {
  public static readonly MEMBERS_OF_CONGRESS: Representative[] = [
    {
      name: "Robert B. Aderholt",
      alignment: "Republican",
      type: "House",
      location: "Ala.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/aderholt-17-1-h.png",
    },
    {
      name: "Mo Brooks",
      alignment: "Republican",
      type: "House",
      location: "Ala.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/brooks-60629-1-h.png",
    },
    {
      name: "Jerry Carl",
      alignment: "Republican",
      type: "House",
      location: "Ala.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/carl-20073861-1-h.png",
    },
    {
      name: "Barry Moore",
      alignment: "Republican",
      type: "House",
      location: "Ala.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/moore-20073840-1-h.png",
    },
    {
      name: "Gary Palmer",
      alignment: "Republican",
      type: "House",
      location: "Ala.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/palmer-63532-1-h.png",
    },
    {
      name: "Mike Rogers",
      alignment: "Republican",
      type: "House",
      location: "Ala.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rogers-1161-1-h.png",
    },
    {
      name: "Tommy Tuberville",
      alignment: "Republican",
      type: "Senate",
      location: "Ala.",
      election_year: 2026,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/tuberville-68308.png",
    },
    {
      name: "Andy Biggs",
      alignment: "Republican",
      type: "House",
      location: "Ariz.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/biggs-52611-3-h.png",
    },
    {
      name: "Paul Gosar",
      alignment: "Republican",
      type: "House",
      location: "Ariz.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/gosar-61424-3-h.png",
    },
    {
      name: "Debbie Lesko",
      alignment: "Republican",
      type: "House",
      location: "Ariz.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/lesko-19683-3-h.png",
    },
    {
      name: "David Schweikert",
      alignment: "Republican",
      type: "House",
      location: "Ariz.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/schweikert-5397-3-h.png",
    },
    {
      name: "Rick Crawford",
      alignment: "Republican",
      type: "House",
      location: "Ark.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/crawford-60226-4-h.png",
    },
    {
      name: "Ken Calvert",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/calvert-132-5-h.png",
    },
    {
      name: "Mike Garcia",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/garcia-20073116-5-h.png",
    },
    {
      name: "Darrell Issa",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/issa-146-5-h.png",
    },
    {
      name: "Doug LaMalfa",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/lamalfa-52531-5-h.png",
    },
    {
      name: "Kevin McCarthy",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/mccarthy-52561-5-h.png",
    },
    {
      name: "Devin Nunes",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/nunes-67.png",
    },
    {
      name: "Jay Obernolte",
      alignment: "Republican",
      type: "House",
      location: "Calif.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/obernolte-20073428-5-h.png",
    },
    {
      name: "Lauren Boebert",
      alignment: "Republican",
      type: "House",
      location: "Colo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/boebert-20073825-6-h.png",
    },
    {
      name: "Doug Lamborn",
      alignment: "Republican",
      type: "House",
      location: "Colo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/lamborn-9174-6-h.png",
    },
    {
      name: "Kat Cammack",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/cammack-20074006-10-h.png",
    },
    {
      name: "Mario Diaz-Balart",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/diaz-balart-878.png",
    },
    {
      name: "Byron Donalds",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/donalds-20061233-10-h.png",
    },
    {
      name: "Neal Dunn",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/dunn-65654-10-h.png",
    },
    {
      name: "Scott Franklin",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/franklin-69374.png",
    },
    {
      name: "Matt Gaetz",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/gaetz-65653-10-h.png",
    },
    {
      name: "Carlos Gimenez",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/gimenez-69391.png",
    },
    {
      name: "Brian Mast",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/mast-65757-10-h.png",
    },
    {
      name: "Bill Posey",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/posey-53077-10-h.png",
    },
    {
      name: "John Rutherford",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rutherford-65658-10-h.png",
    },
    {
      name: "Greg Steube",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/steube-21084-10-h.png",
    },
    {
      name: "Daniel Webster",
      alignment: "Republican",
      type: "House",
      location: "Fla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/webster-53062-10-h.png",
    },
    {
      name: "Rick Scott",
      alignment: "Republican",
      type: "Senate",
      location: "Fla.",
      election_year: 2024,
      image:
        "https://www.nytimes.com/newsgraphics/2018/congress-headshots/cutouts/scott-fl-sen.png",
    },
    {
      name: "Rick Allen",
      alignment: "Republican",
      type: "House",
      location: "Ga.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/allen-61316-11-h.png",
    },
    {
      name: 'Earl L. "Buddy" Carter',
      alignment: "Republican",
      type: "House",
      location: "Ga.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/carter-63354-11-h.png",
    },
    {
      name: "Andrew Clyde",
      alignment: "Republican",
      type: "House",
      location: "Ga.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/clyde-20073991-11-h.png",
    },
    {
      name: "Marjorie Taylor Greene",
      alignment: "Republican",
      type: "House",
      location: "Ga.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/greene-20073466-11-h.png",
    },
    {
      name: "Jody Hice",
      alignment: "Republican",
      type: "House",
      location: "Ga.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/hice-61020-11-h.png",
    },
    {
      name: "Barry Loudermilk",
      alignment: "Republican",
      type: "House",
      location: "Ga.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/loudermilk-63369-11-h.png",
    },
    {
      name: "Russ Fulcher",
      alignment: "Republican",
      type: "House",
      location: "Idaho",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/fulcher-63500-13-h.png",
    },
    {
      name: "Mike Bost",
      alignment: "Republican",
      type: "House",
      location: "Ill.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/bost-710-14-h.png",
    },
    {
      name: "Mary Miller",
      alignment: "Republican",
      type: "House",
      location: "Ill.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/miller-68410.png",
    },
    {
      name: "Jim Baird",
      alignment: "Republican",
      type: "House",
      location: "Ind.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/baird-19591-15-h.png",
    },
    {
      name: "Jim Banks",
      alignment: "Republican",
      type: "House",
      location: "Ind.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/banks-64756-15-h.png",
    },
    {
      name: "Greg Pence",
      alignment: "Republican",
      type: "House",
      location: "Ind.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/pence-19600-15-h.png",
    },
    {
      name: "Jackie Walorski",
      alignment: "Republican",
      type: "House",
      location: "Ind.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/walorski-60423-15-h.png",
    },
    {
      name: "Ron Estes",
      alignment: "Republican",
      type: "House",
      location: "Kan.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/estes-20240-17-h.png",
    },
    {
      name: "Jacob LaTurner",
      alignment: "Republican",
      type: "House",
      location: "Kan.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/laturner-69302.png",
    },
    {
      name: "Tracey Mann",
      alignment: "Republican",
      type: "House",
      location: "Kan.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/mann-20073168-17-h.png",
    },
    {
      name: "Roger Marshall",
      alignment: "Republican",
      type: "Senate",
      location: "Kan.",
      election_year: 2026,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/marshall-65324-17-s.png",
    },
    {
      name: "Harold Rogers",
      alignment: "Republican",
      type: "House",
      location: "Ky.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rogers-208.png",
    },
    {
      name: "Garret Graves",
      alignment: "Republican",
      type: "House",
      location: "La.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/graves-64093.png",
    },
    {
      name: "Clay Higgins",
      alignment: "Republican",
      type: "House",
      location: "La.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/higgins-65612-19-h.png",
    },
    {
      name: "Mike Johnson",
      alignment: "Republican",
      type: "House",
      location: "La.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/johnson-4-19-h.png",
    },
    {
      name: "Steve Scalise",
      alignment: "Republican",
      type: "House",
      location: "La.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/scalise-54369-19-h.png",
    },
    {
      name: "John Kennedy",
      alignment: "Republican",
      type: "Senate",
      location: "La.",
      election_year: 2022,
      image:
        "https://www.nytimes.com/newsgraphics/2018/congress-headshots/cutouts/kennedy-la-sen.png",
    },
    {
      name: "Andy Harris",
      alignment: "Republican",
      type: "House",
      location: "Md.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/harris-58831-21-h.png",
    },
    {
      name: "Jack Bergman",
      alignment: "Republican",
      type: "House",
      location: "Mich.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/bergman-65336-23-h.png",
    },
    {
      name: "Lisa McClain",
      alignment: "Republican",
      type: "House",
      location: "Mich.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/mcclain-69093.png",
    },
    {
      name: "Tim Walberg",
      alignment: "Republican",
      type: "House",
      location: "Mich.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/walberg-25659-23-h.png",
    },
    {
      name: "Michelle Fischbach",
      alignment: "Republican",
      type: "House",
      location: "Minn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/fischbach-20073194-24-h.png",
    },
    {
      name: "Jim Hagedorn",
      alignment: "Republican",
      type: "House",
      location: "Minn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/hagedorn-63961-24-h.png",
    },
    {
      name: "Michael Guest",
      alignment: "Republican",
      type: "House",
      location: "Miss.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/guest-20097-25-h.png",
    },
    {
      name: "Trent Kelly",
      alignment: "Republican",
      type: "House",
      location: "Miss.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/kelly-64498-25-h.png",
    },
    {
      name: "Steven Palazzo",
      alignment: "Republican",
      type: "House",
      location: "Miss.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/palazzo-60439-25-h.png",
    },
    {
      name: "Cindy Hyde-Smith",
      alignment: "Republican",
      type: "Senate",
      location: "Miss.",
      election_year: 2026,
      image:
        "https://www.nytimes.com/newsgraphics/2018/congress-headshots/cutouts/hyde-smith-ms-sen.png",
    },
    {
      name: "Sam Graves",
      alignment: "Republican",
      type: "House",
      location: "Mo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/graves-1342-26-h.png",
    },
    {
      name: "Vicky Hartzler",
      alignment: "Republican",
      type: "House",
      location: "Mo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/hartzler-29019-26-h.png",
    },
    {
      name: "Billy Long",
      alignment: "Republican",
      type: "House",
      location: "Mo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/long-61089-26-h.png",
    },
    {
      name: "Blaine Luetkemeyer",
      alignment: "Republican",
      type: "House",
      location: "Mo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/luetkemeyer-55466-26-h.png",
    },
    {
      name: "Jason Smith",
      alignment: "Republican",
      type: "House",
      location: "Mo.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/smith-62802-26-h.png",
    },
    {
      name: "Josh Hawley",
      alignment: "Republican",
      type: "Senate",
      location: "Mo.",
      election_year: 2024,
      image:
        "https://www.nytimes.com/newsgraphics/2018/congress-headshots/cutouts/hawley-mo-sen.png",
    },
    {
      name: "Matt Rosendale",
      alignment: "Republican",
      type: "House",
      location: "Mont.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rosendale-19984-27-h.png",
    },
    {
      name: "Dan Bishop",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/bishop-22311-34-h.png",
    },
    {
      name: "Ted Budd",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/budd-64970-34-h.png",
    },
    {
      name: "Madison Cawthorn",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/cawthorn-20073705-34-h.png",
    },
    {
      name: "Virginia Foxx",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/foxx-1877-34-h.png",
    },
    {
      name: "Richard Hudson",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/hudson-61758-34-h.png",
    },
    {
      name: "Gregory F. Murphy",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/murphy-20072910-34-h.png",
    },
    {
      name: "David Rouzer",
      alignment: "Republican",
      type: "House",
      location: "N.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rouzer-35605-34-h.png",
    },
    {
      name: "Jeff Van Drew",
      alignment: "Republican",
      type: "House",
      location: "N.J.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/van-drew-19998-31-h.png",
    },
    {
      name: "Yvette Herrell",
      alignment: "Republican",
      type: "House",
      location: "N.M.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/herrell-20085-32-h.png",
    },
    {
      name: "Chris Jacobs",
      alignment: "Republican",
      type: "House",
      location: "N.Y.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/jacobs-69033.png",
    },
    {
      name: "Nicole Malliotakis",
      alignment: "Republican",
      type: "House",
      location: "N.Y.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/malliotakis-19220-33-h.png",
    },
    {
      name: "Elise M. Stefanik",
      alignment: "Republican",
      type: "House",
      location: "N.Y.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/stefanik-63754-33-h.png",
    },
    {
      name: "Lee Zeldin",
      alignment: "Republican",
      type: "House",
      location: "N.Y.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/zeldin-59740-33-h.png",
    },
    {
      name: "Adrian Smith",
      alignment: "Republican",
      type: "House",
      location: "Neb.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/smith-926-28-h.png",
    },
    {
      name: "Steve Chabot",
      alignment: "Republican",
      type: "House",
      location: "Ohio",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/chabot-1272-36-h.png",
    },
    {
      name: "Warren Davidson",
      alignment: "Republican",
      type: "House",
      location: "Ohio",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/davidson-64698.png",
    },
    {
      name: "Bob Gibbs",
      alignment: "Republican",
      type: "House",
      location: "Ohio",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/gibbs-57239-36-h.png",
    },
    {
      name: "Bill Johnson",
      alignment: "Republican",
      type: "House",
      location: "Ohio",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/johnson-60624-36-h.png",
    },
    {
      name: "Jim Jordan",
      alignment: "Republican",
      type: "House",
      location: "Ohio",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/jordan-57253-36-h.png",
    },
    {
      name: "Stephanie Bice",
      alignment: "Republican",
      type: "House",
      location: "Okla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/bice-20074039-37-h.png",
    },
    {
      name: "Tom Cole",
      alignment: "Republican",
      type: "House",
      location: "Okla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/cole-1398.png",
    },
    {
      name: "Kevin Hern",
      alignment: "Republican",
      type: "House",
      location: "Okla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/hern-20374-37-h.png",
    },
    {
      name: "Frank Lucas",
      alignment: "Republican",
      type: "House",
      location: "Okla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/lucas-1396-37-h.png",
    },
    {
      name: "Markwayne Mullin",
      alignment: "Republican",
      type: "House",
      location: "Okla.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/mullin-62235-37-h.png",
    },
    {
      name: "Cliff Bentz",
      alignment: "Republican",
      type: "House",
      location: "Ore.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/bentz-20073635-38-h.png",
    },
    {
      name: "John Joyce",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/joyce-19966-39-h.png",
    },
    {
      name: "Fred Keller",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/keller-22324-39-h.png",
    },
    {
      name: "Mike Kelly",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/kelly-60917-39-h.png",
    },
    {
      name: "Daniel Meuser",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/meuser-19952-39-h.png",
    },
    {
      name: "Scott Perry",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/perry-61618-39-h.png",
    },
    {
      name: "Guy Reschenthaler",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/reschenthaler-19975-39-h.png",
    },
    {
      name: "Lloyd Smucker",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/smucker-64833-39-h.png",
    },
    {
      name: "Glenn Thompson",
      alignment: "Republican",
      type: "House",
      location: "Pa.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/thompson-58283-39-h.png",
    },
    {
      name: "Jeff Duncan",
      alignment: "Republican",
      type: "House",
      location: "S.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/duncan-57891-41-h.png",
    },
    {
      name: "Ralph Norman",
      alignment: "Republican",
      type: "House",
      location: "S.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/norman-51896-41-h.png",
    },
    {
      name: "Tom Rice",
      alignment: "Republican",
      type: "House",
      location: "S.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rice-62109-41-h.png",
    },
    {
      name: "William Timmons",
      alignment: "Republican",
      type: "House",
      location: "S.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/timmons-20394-41-h.png",
    },
    {
      name: "Joe Wilson",
      alignment: "Republican",
      type: "House",
      location: "S.C.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/wilson-1410-41-h.png",
    },
    {
      name: "Tim Burchett",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/burchett-20787-43-h.png",
    },
    {
      name: "Scott DesJarlais",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/desjarlais-61091-43-h.png",
    },
    {
      name: "Chuck Fleischmann",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/fleischmann-60964-43-h.png",
    },
    {
      name: "Mark E. Green",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/green-1453-43-h.png",
    },
    {
      name: "Diana Harshbarger",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/harshbarger-20073935-43-h.png",
    },
    {
      name: "David Kustoff",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/kustoff-65268-43-h.png",
    },
    {
      name: "John Rose",
      alignment: "Republican",
      type: "House",
      location: "Tenn.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/rose-20411-43-h.png",
    },
    {
      name: "Jodey Arrington",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/arrington-64621-44-h.png",
    },
    {
      name: "Brian Babin",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/babin-70006-44-h.png",
    },
    {
      name: "Michael C. Burgess",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/burgess-1017-44-h.png",
    },
    {
      name: "John R. Carter",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/carter-1441.png",
    },
    {
      name: "Michael Cloud",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/cloud-801-44-h.png",
    },
    {
      name: "Pat Fallon",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/fallon-20073300-44-h.png",
    },
    {
      name: "Louie Gohmert",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/gohmert-1883-44-h.png",
    },
    {
      name: "Lance Gooden",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/gooden-19491-44-h.png",
    },
    {
      name: "Ronny Jackson",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/jackson-68255.png",
    },
    {
      name: "Troy Nehls",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/nehls-20073581-44-h.png",
    },
    {
      name: "August Pfluger",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/pfluger-68246.png",
    },
    {
      name: "Pete Sessions",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/sessions-358-44-h.png",
    },
    {
      name: "Beth Van Duyne",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/van-duyne-20073274-44-h.png",
    },
    {
      name: "Randy Weber",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/weber-61980-44-h.png",
    },
    {
      name: "Roger Williams",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/williams-62001-44-h.png",
    },
    {
      name: "Ron Wright",
      alignment: "Republican",
      type: "House",
      location: "Texas",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/wright-19504-44-h.png",
    },
    {
      name: "Ted Cruz",
      alignment: "Republican",
      type: "Senate",
      location: "Texas",
      election_year: 2024,
      image:
        "https://www.nytimes.com/newsgraphics/2018/congress-headshots/cutouts/cruz-tx-sen.png",
    },
    {
      name: "Burgess Owens",
      alignment: "Republican",
      type: "House",
      location: "Utah",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/owens-20073826-45-h.png",
    },
    {
      name: "Chris Stewart",
      alignment: "Republican",
      type: "House",
      location: "Utah",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/stewart-61890-45-h.png",
    },
    {
      name: "Ben Cline",
      alignment: "Republican",
      type: "House",
      location: "Va.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/cline-20447-47-h.png",
    },
    {
      name: "Bob Good",
      alignment: "Republican",
      type: "House",
      location: "Va.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/good-20073701-47-h.png",
    },
    {
      name: "Morgan Griffith",
      alignment: "Republican",
      type: "House",
      location: "Va.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/griffith-58574-47-h.png",
    },
    {
      name: "Robert J. Wittman",
      alignment: "Republican",
      type: "House",
      location: "Va.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/wittman-57798-47-h.png",
    },
    {
      name: "Carol Miller",
      alignment: "Republican",
      type: "House",
      location: "W.Va.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/miller-70004-49-h.png",
    },
    {
      name: "Alexander X. Mooney",
      alignment: "Republican",
      type: "House",
      location: "W.Va.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/mooney-22596-49-h.png",
    },
    {
      name: "Scott Fitzgerald",
      alignment: "Republican",
      type: "House",
      location: "Wis.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/fitzgerald-20073862-50-h.png",
    },
    {
      name: "Tom Tiffany",
      alignment: "Republican",
      type: "House",
      location: "Wis.",
      election_year: 2022,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/tiffany-20073295-50-h.png",
    },
    {
      name: "Cynthia Lummis",
      alignment: "Republican",
      type: "Senate",
      location: "Wyo.",
      election_year: 2026,
      image:
        "https://static01.nyt.com/elections-assets/2020/assets/images/candidates/lummis-49396.png",
    },
  ];
}
