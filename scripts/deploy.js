// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { Container } = require("postcss");

async function sleep(ms) {
    return new Promise((resolve) => { /*We created a Promise and when we call the resolve func. promise will be solved and func will continue to working. 
                                        Thats how to write a sleep func in Java*/
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

async function main() {
    const Example = await hre.ethers.getContractFactory("Example");
    const contract = await Example.deploy(); //constructor arguments are written here between the paranthesis.

    await contract.deployed();

    console.log(
        `Contract is deployed to ${contract.address}` // ALTGR + ;,
    )

    await sleep(15*1000); //15 seconds simply.

    await hre.run("verify:verify", {
        address: contract.address,
        constructorArguments: [],
    })
}   

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});