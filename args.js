#!/usr/bin/env node

const args = process.argv.filter((item, index) => index > 1);

process.stdout.write(`${args.toString()}\n`);
