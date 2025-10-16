import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import Card from "../../components/Card";

export default async function Home() {
  const payload = await getPayload({ config });

  const titles = await payload.find({
    collection: "titles",
  });

  // const cards = await payload.find({
  //   collection: "cards",
  // });

  console.log("Titles found:", titles.totalDocs);
  // console.log("Cards found:", cards.totalDocs);

  return (
    <div className="flex flex-col items-center mt-16 gap-8">
      <h1>Payload integration test app</h1>
      <Link href="/admin">Go to Admin</Link>

      {/* {cards.docs.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          date={card.date}
          status={card.status}
        />
      ))} */}
    </div>
  );
}
