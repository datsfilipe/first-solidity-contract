import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Hello", function() {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployHelloFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Hello = await hre.ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();

    return { hello, owner, otherAccount };
  }

  describe("Deployment", function() {
    it("Should set the name", async function() {
      const { hello } = await loadFixture(deployHelloFixture);

      expect(await hello.setName("datsfilipe")).to.emit(hello, "NameSet");
    });

    it("Should greet", async function() {
      const { hello } = await loadFixture(deployHelloFixture);

      expect(await hello.greet()).to.equal("Hello World");
    });
  });
});
