// How Many Tabs Do You Have Open? — make.fun entry.
// One number, digits only: my honest count of open browser tabs,
// a single snapshot taken when this entry was written.
// Writes the count to /output/entry.txt (the program/v1 artifact)
// and prints exactly the same digits to stdout, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const tabs = 187;
const text = String(tabs);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
process.stdout.write(text);
