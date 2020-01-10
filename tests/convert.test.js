const fs = require("fs");
const FoldToSvg = require("../fold-to-svg");
const outputDir = "./tests/output";
fs.existsSync(outputDir) || fs.mkdirSync(outputDir);

test("load and convert 1", () => {
  const singleVertex = fs.readFileSync("./tests/examples/single-vertex.fold", "utf8");
  const frame0 = FoldToSvg(singleVertex);
  const frame1 = FoldToSvg(singleVertex, { file_frame: 1, shadows: true, padding: 0.1 });
  const desc = ["unfolded", "folded"];
  [frame0, frame1].forEach((frame, i) => {
    fs.writeFile(`${outputDir}/single-vertex-${desc[i]}.svg`, frame, () => {});
  });
});

test("load and convert crane without style", () => {
  const craneFold = fs.readFileSync("./tests/examples/crane.fold", "utf8");
  const stylesheet = fs.readFileSync("./tests/examples/byrne.css", "utf8");
  const options = {
    stylesheet: stylesheet,
    padding: 0.02,
  };
  const craneSVG = FoldToSvg(craneFold);
  const craneSVGStyled = FoldToSvg(craneFold, options);
  fs.writeFile(`${outputDir}/cp-crane.svg`, craneSVG, () => {});
  fs.writeFile(`${outputDir}/cp-crane-style.svg`, craneSVGStyled, () => {});
});

test("load and convert 3", () => {
  fs.readFile("./tests/examples/diagram.fold", "utf8", (err, data) => {
    const diagram = JSON.parse(data);
    const svg = FoldToSvg(diagram, { file_frame: 1, shadows: true, padding: 0.1 });
    fs.writeFile(`${outputDir}/diagram-step.svg`, svg, () => {});
  });
});
