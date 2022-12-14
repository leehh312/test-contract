// require("스마트 컨트랙트명 기입")
const TestStorage = artifacts.require("TestStorage");

module.exports = async function (deployer) {
  deployer.then(function () {
    return deployer.deploy(TestStorage);
  }).then(function (TestStorage) {
    console.log(`Use this contract address. : ${TestStorage.address}`);
  });
};