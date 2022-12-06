const express = require("express");
const verifyProof = require("../utils/verifyProof");
const MerkleTree = require("../utils/MerkleTree");

const port = 1225;

const app = express();
app.use(express.json());

// Merkle root
const MERKLE_ROOT = MerkleTree.constructTree().getRoot();

app.post("/gift", (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;

  console.log(verifyProof(body.proof, body.name, MERKLE_ROOT));

  // TODO: prove that a name is in the list
  const isInTheList = false;
  if (isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
