const args = process.argv.slice(2);
args.sort((a,b) => a-b);
// console.log(args);

for (const x of args) {
  setTimeout(() => {
    process.stdout.write(`\x07 ${x} seconds \n`);
  }, x * 1000 );
}

// process.stdout.write('\x07');