import test from "ava";

import { asyncRandom } from "../index.js";

test("sum from native1", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native2", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native3", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native4", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native5", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native6", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native7", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
test("sum from native8", async (t) => {
  t.is((await asyncRandom()).toString("hex").length, 20480);
});
