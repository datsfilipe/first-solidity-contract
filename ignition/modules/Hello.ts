// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const HelloModule = buildModule("HelloModule", (m) => {
  const hello = m.contract("Hello");

  return { hello };
});

export default HelloModule;
