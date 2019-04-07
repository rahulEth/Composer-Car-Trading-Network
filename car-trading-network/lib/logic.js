/**
 * allow buyer to buy can fro  seller
 * @param {org.tradenetwork.Trade} trade - car sale transaction
 * @transaction
 */

async function tradeTrans(trade){
    const newOwner  = trade.newOwner;
    trade.car.owner = newOwner;
    trade.newOwner.balance -= trade.car.price;
    trade.oldOwner.balance +=trade.car.price;
    const userRegistry = await getParticipantRegistry('org.tradeNetwork.Trader');
    userRegistry.update(trade.newOwner);
    const userRegistry1 = await getParticipantRegistry('org.tradeNetwork.Trader');
    userRegistry1.update(trade.oldOwner);
    const assetRegistry = await getAssetRegistry('org.tradeNetwork.Car');
    assetRegistry.update(trade.car);
    const tradeNotification = getFactory().newEvent('org.tradeNetwork','tradeNotification');
    tradeNotification.car = trade.car;
    emit(tradeNotification);
    
  }