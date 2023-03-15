const args = process.argv.slice(2);
args.sort((a,b) => a-b);
console.log(args);

for (const x of args) {
  if (args.length === 0) {}
  if (x <= 0) {}
  if (x !== Number) {}
  if (x === Number || x > 0) {
    setTimeout(() => {
      process.stdout.write(`\x07 ${x} seconds \n`);
    }, x * 1000 );
  }
}

// process.stdout.write('\x07');