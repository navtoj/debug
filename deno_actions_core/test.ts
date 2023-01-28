// deno run --allow-all test.ts

// this does NOT work
import { info } from 'https://deno.land/x/deno_actions_core@0.3.0/mod.ts';

// this works
// import { info } from 'npm:@actions/core';

info('Hello World!');
