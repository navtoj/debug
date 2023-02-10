// deno run --allow-all test.ts
import { z } from 'https://deno.land/x/zod@v3.20.2/index.ts';

// import { zodToJsonSchema } from 'npm:zod-to-json-schema@latest';
import { zodToJsonSchema } from 'https://deno.land/x/zod_to_json_schema@3.20.3/zodToJsonSchema.ts';

const schema = z.string();

const json = zodToJsonSchema(schema);

console.log(json);