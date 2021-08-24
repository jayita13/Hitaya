var HAT_TOKEN= artifacts.require("./HAT_TOKEN.sol");
module.exports = function(deployer) {
deployer.deploy(HAT_TOKEN);
};