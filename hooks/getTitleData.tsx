import { CollectionAfterChangeHook } from "payload";

const afterChangeHook: CollectionAfterChangeHook = async ({
  req: { payload },
}) => {
  const titles = await payload.find({
    collection: "titles",
  });
};
