const PeachToken = artifacts.require("PeachToken");


module.exports = function(deployer) {

  deployer.deploy(PeachToken).then(async peachToken => {
    console.log(peachToken)
  })
};
