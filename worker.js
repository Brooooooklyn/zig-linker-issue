const { Worker, isMainThread } = require("worker_threads");

function createWorker() {
  const w = new Worker(__filename);
  w.on("error", (err) => {
    console.error(err);
  });
  w.on("exit", (code) => {
    console.log(`Worker exit with code ${code}`);
  });
}

if (isMainThread) {
  for (let i = 0; i <= 100; i++) {
    createWorker();
  }
} else {
  const { asyncRandom } = require("./index");
  asyncRandom().then((r) => {
    console.log(`Sum from worker: ${r.toString("hex")}`);
  });
}
