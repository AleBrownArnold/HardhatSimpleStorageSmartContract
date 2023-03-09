import { ethers } from "hardhat";

async function main() {
  console.log(process.env.NODE_IP);
  const simple = await ethers.getContractFactory("SimpleStorage");
  const simpleDeploy = await simple.deploy();

  await simpleDeploy.deployed();

  await simpleDeploy.set(45);
  const value = await simpleDeploy.get();
  console.log(
    `Contract deployed. Value: ` + value
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
