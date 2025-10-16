import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function generateStaticParams() {
  const payload = await getPayload({ config: payloadConfig });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== "home";
    })
    .map(({ slug }) => {
      return { slug };
    });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const params = await paramsPromise;
  return (
    <div className="flex flex-col items-center mt-16 gap-8">
      this is created from the {params.slug} page.tsx
    </div>
  );
}
