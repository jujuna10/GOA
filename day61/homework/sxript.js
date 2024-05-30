// davaleba 1
// function isTeenager(age,hasPermission){
//     console.log(age > 18 || hasPermission);
//     console.log(age > 18 && hasPermission);
// }
// isTeenager(12,true)

// davaleba 2
function isValidCoupon(couponCode, totalAmount) {
    if ((couponCode === "SALE" || couponCode === "BIGSALE" && totalAmount >= 50) || couponCode === "LILSALE") {
        console.log("true");
    } else {
        console.log("false");
    }
}

isValidCoupon("LILSALE", 100);
