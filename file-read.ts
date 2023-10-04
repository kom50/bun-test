// const file = Bun.file(import.meta.dir + '/test.json'); // BunFile
// console.log("🚀 ~ file: file-read.ts:2 ~ file:", file)

// const pkg = await file.json(); // BunFile extends Blob
// console.log("🚀 ~ file: file-read.ts:4 ~ pkg:", pkg)
// pkg.name = 'my-package';
// pkg.version = '1.0.0';
// await Bun.write(file, JSON.stringify(pkg, null, 2));


/*  Read from terminal */
const prompt = "Type something: ";

process.stdout.write(prompt);

for await (const line of console) {
  console.log(`You typed: ${line}`);
  process.stdout.write(prompt);
}

// process.on("SIGINT", (eve) => {
//     console.log("Ctrl-C was pressed");
//     process.exit();
//   });