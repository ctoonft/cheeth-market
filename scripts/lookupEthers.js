// a saintmaxi joint
/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const cheethAddress = "0x54C4419b7be48889097a70Ef6Bdc47feAC54AEF5";
// const cheethAbi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"STAKE_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"anonymiceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cheethV1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimAllRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_miceIds","type":"uint256[]"}],"name":"claimRewardsByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mouseId","type":"uint256"}],"name":"getCheethOwedToThisMouse","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mouseId","type":"uint256"}],"name":"getMouseCheethEmission","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getStakedMiceData","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"stakedSince","type":"uint256"},{"internalType":"uint256","name":"cheethEmision","type":"uint256"}],"internalType":"struct CheethV2.StakedMouse[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getTotalRewardsForUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isCheethSwapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"miceClaimTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"miceStakeTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_anonymiceAddress","type":"address"},{"internalType":"address","name":"_cheethV1Address","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isCheethSwapEnabled","type":"bool"}],"name":"setIsCheethSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_miceIds","type":"uint256[]"}],"name":"stakeMiceByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"stakedMiceQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapCheethV1ForV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"tokensStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_miceIds","type":"uint256[]"}],"name":"unstakeMiceByIds","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const marketAddress = "";
// const marketAbi = () => { 
//     return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const cheethAddress = "0x403f391d5e2dD66E541C481C39F628E503d0CE3A";
const cheethAbi = () => { 
    return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnAsController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"burners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mintAsController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setBurner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const marketAddress = "0xd144a764329b68b437c6E50e61f5478A5DB3a202";
const marketAbi = () => {
    return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"string","name":"title_","type":"string"},{"indexed":false,"internalType":"string","name":"imageUri_","type":"string"},{"indexed":false,"internalType":"string","name":"projectUri_","type":"string"},{"indexed":false,"internalType":"string","name":"description_","type":"string"},{"indexed":false,"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"deadline_","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"price_","type":"uint256"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"title_","type":"string"},{"internalType":"string","name":"imageUri_","type":"string"},{"internalType":"string","name":"projectUri_","type":"string"},{"internalType":"string","name":"description_","type":"string"},{"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"internalType":"uint32","name":"deadline_","type":"uint32"},{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ownerSetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"ownerSetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser and connect to use lookup tool!');
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const cheeth = new ethers.Contract(cheethAddress, cheethAbi(), signer);
const market = new ethers.Contract(marketAddress, marketAbi(), signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

const updateTokenBalance = async() => {
    const userAddress = await getAddress();
    let balance = formatEther((await cheeth.balanceOf(userAddress)));
    $("#token-balance").html(`${balance}`);
    $("#mobile-balance").html(`${balance}`);
}

var projectToWL = new Map();
var myWL = [];

const loadCollectionsData = async() => {
    let userAddress = await getAddress();
    let numListings = await market.getWLVendingItemsLength(cheethAddress);
    let fakeJSX = "";
    for (let i = 0; i < numListings; i++) {
        let buyers = await market.getWLPurchasersOf(cheethAddress, i);
        let WLinfo = await market.contractToWLVendingItems(cheethAddress, i);
        let title = WLinfo.title;
        let purchased = buyers.includes(userAddress);
        if (purchased) {
            myWL.push(title);
        }
        console.log(title, buyers)
        projectToWL.set(title, buyers);
        fakeJSX += `<option value="${title}">${title}</option>`;
        if (i == 0) {
            selectListing(title);
        }
    }
    $("#listing-select").empty();
    $("#listing-select").append(fakeJSX);
}

const loadMyWL = async() => {
    if (myWL.length == 0) {
        $("#your-wl-spots").html("No spots purchased!");
    }
    else {
        let wlString = myWL.join("<br>");
        $("#your-wl-spots").html(wlString);
    }
}

function selectListing(listingName) {
    let wlArray = [...(projectToWL.get(listingName))];
    let wlString = wlArray.join("<br>");
    $("#wl-section").empty();
    $("#wl-section").html(wlString);
    updateDownload(listingName);
}

function updateDownload(listingName) {
    let filename = `Anonymice - ${listingName} WL.txt`;
    let wlArray = [...(projectToWL.get(listingName))];
    let wlString = wlArray.join("\n");

    $("#download-link").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(wlString));
    $("#download-link").attr('download', filename);
}



// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});


// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("MartianMarketPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("MartianMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MartianMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
}

setInterval(async()=>{
    await updateCurrentChain();
    await updateInfo();
    await updateTokenBalance();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateCurrentChain();
    await updateInfo();
    $("#your-wl-spots").html(`Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
    await loadCollectionsData();
    await loadMyWL();
    await updateTokenBalance();
};

window.onunload = async()=>{
    cachePendingTransactions();
}
