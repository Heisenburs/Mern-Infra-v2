import {checkToken} from "../utilities/users-service";


function OrderHistoryPage(){
const handleCheckToken=async()=>{

const expDate=await checkToken();
console.log(expDate);
}
    return( 
    <div>
    <h1>Order History Page</h1>
<button onClick={handleCheckToken}>Check When my Login Token expires</button>
    </div>
    );
    }
    export default OrderHistoryPage;