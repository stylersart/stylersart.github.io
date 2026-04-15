import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(
  new URL("../index.html", import.meta.url),
  "utf8",
);

test("formatted phone numbers are not shipped in the HTML", () => {
  assert.equal(html.includes("(415) 692-1765"), false);
  assert.equal(html.includes("(415) 640-6298"), false);
  assert.equal(html.includes("tel:4156921765"), false);
  assert.equal(html.includes("tel:4156406298"), false);
});

test("phone reveal placeholders are present for every contact slot", () => {
  const matches = [...html.matchAll(/<button[^>]*data-phone-reveal=/g)];
  assert.equal(matches.length, 5);
});
