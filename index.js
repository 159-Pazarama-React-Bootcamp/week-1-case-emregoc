//var cardNumber =1000000000000001;
var cardNumber = prompt("Lütfen kart numaranızı giriniz.");
function isCreditCardNumberValid(cardNumber){
    var sum = 0;
    var count=0;
    var strCard = cardNumber.toString();
    if (cardNumber && strCard.length === 16 && !isNaN(cardNumber)) {
        for (let i = 0; i < strCard.length; i++) {
            var element = strCard[i];
            sum +=parseInt(element);
            if (strCard[i] !== strCard[i+1]) {
                count++;
            }
        }
        if (count === 1 ) {
            console.log("Kart numaraları en az bir rakam farklı olmalı"); 
        }
        if (sum < strCard.length ) {
            console.log("Kart Numarasının rakamlarının toplamı 16'dan küçük olamaz.")
        }
        if (element % 2 == 1) {
            console.log("Kart Numarasının son hanesi tek olamaz.");
        }
       
    }else{
        console.log("Kart Numarası 16 haneden küçük veya büyük olamaz veya Sıfır ile başlayamaz.");
    }

}

isCreditCardNumberValid(cardNumber);