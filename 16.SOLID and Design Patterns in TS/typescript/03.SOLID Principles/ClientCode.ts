import {
    Discount,
    GoldCustomer,
    PremiumCustomer,
} from "./03.OpenClosedPrinciple";
import {
    DebitCardProcessor,
    executePayment,
    PaypalProcessor,
} from "./05.RealWorldApplicationLSP";
import {
    HighLevelModule,
    MongoDbDatabase,
    MySqlDatabase,
} from "./08.DependencyInversionPrinciple";

let premiumCustomer: PremiumCustomer = new PremiumCustomer();
let goldCustomer: GoldCustomer = new GoldCustomer();
let discount: Discount = new Discount();

const discountAmount = discount.giveDiscount(premiumCustomer);
const discountAmount2 = discount.giveDiscount(goldCustomer);

console.log("🚀 ~ discountAmount:", discountAmount);
console.log("🚀 ~ discountAmount2:", discountAmount2);

const paypalProcessor1 = new PaypalProcessor();
executePayment(paypalProcessor1, 82);

const debitCardProcessor = new DebitCardProcessor();
executePayment(debitCardProcessor, 150);

let mysql: MySqlDatabase = new MySqlDatabase();
let mongo: MongoDbDatabase = new MongoDbDatabase();

let user: HighLevelModule = new HighLevelModule(mysql);
user.execute("John Doe");

let post: HighLevelModule = new HighLevelModule(mongo);
post.execute("New Post");
