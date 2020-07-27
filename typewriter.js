const sentence = "hello there from lighthouse labs";
let timeout = 1000;
for (const char of sentence) {
  timeout += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, timeout);
}
setTimeout(() => {
  console.log();
}, 3000);
