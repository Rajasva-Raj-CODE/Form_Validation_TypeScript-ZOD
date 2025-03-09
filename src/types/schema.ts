import { z } from "zod";

//Primitve data types

const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const nullSchema = z.null();
const undefinedSchema = z.undefined();
const bigintSchema = z.bigint();

//Object
const objectSchema = z.object({
  name: z.string(),
  age: z.number(),
  isStudent: z.boolean(),
});

