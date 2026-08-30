import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const home = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const faq = readFileSync(new URL("../faq.html", import.meta.url), "utf8");

test("the homepage provides prominent links to the FAQ", () => {
  assert.ok((home.match(/href="faq\.html"/g) ?? []).length >= 3);
  assert.match(home, /FAQ · 常見問題/);
});

test("the FAQ provides English and Chinese content", () => {
  assert.match(faq, /Frequently Asked Questions/);
  assert.match(faq, /常見問題/);
  assert.match(faq, /What payment methods do you accept\?/);
  assert.match(faq, /接受哪些付款方式？/);
});

test("specialty goods and services appear on both pages", () => {
  for (const content of [home, faq]) {
    assert.match(content, /Four Treasures of the Study/);
    assert.match(content, /Commissioned Calligraphy|custom calligraphy work/);
    assert.match(content, /24K Gold Calligraphy|written in 24K gold/);
    assert.match(content, /24K Gold-Leaf Gilding|24K gold-leaf gilding/);
  }

  assert.match(faq, /作品必須送到本店辦理，恕不提供外出或上門服務/);
});

test("the FAQ provides convenient routes back to the homepage", () => {
  assert.ok((faq.match(/href="index\.html(?:#visit)?"/g) ?? []).length >= 4);
  assert.match(faq, /Back to Home · 返回主頁/);
});
