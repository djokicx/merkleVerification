const axios = require("axios");
const niceList = require("../utils/niceList.json");

const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";
const TREE = MerkleTree.constructTree();

async function main() {
  const name = process.argv.slice(2)[0];
  const proof = TREE.getProof(niceList.indexOf(name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof,
  });

  // console.log({ gift });
}

main();
