import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.tradenetwork{
   export class Car extends Asset {
      carId: string;
      model: string;
      VIN: string;
      make: Make;
      price: number;
      owner: Trader;
   }
   export enum Make {
      FORD,
      CHEVY,
      TESLA,
      TOYOTA,
      HONDA,
   }
   export class Trader extends Participant {
      traderId: string;
      balance: number;
      firstName: string;
      lastName: string;
   }
   export class Trade extends Transaction {
      newOwner: Trader;
      oldOwner: Trader;
      car: Car;
   }
   export class tradeNotification extends Event {
      car: Car;
   }
// }
