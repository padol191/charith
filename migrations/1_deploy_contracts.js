let CryptoDonation=artifacts.require ("./CryptoDonation.sol");
module.exports = function(deployer) {
      deployer.deploy(CryptoDonation);
}