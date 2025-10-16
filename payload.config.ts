import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Titles } from "./collections/Titles";
import { Pages } from "./collections/Pages";
import { Cards } from "./collections/Cards";
import { Media } from "./collections/Media";

export default buildConfig({
  editor: lexicalEditor(),

  collections: [Pages, Titles, Cards, Media],

  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
});
