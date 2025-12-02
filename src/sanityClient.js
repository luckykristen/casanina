import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "v93intyh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});