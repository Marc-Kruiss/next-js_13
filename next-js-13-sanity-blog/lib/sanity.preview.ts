"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("Vorschau konnte nicht geladen werden, Bitte einloggen!");
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
