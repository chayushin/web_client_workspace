
function printValue() {

    const user = 
    document.querySelector("form input").value;

    const prname = 
    document.getElementById("pname").value;

    const price = 
    (document.getElementsByName("price"))[0].value;
    // console.log(user);
    // console.log(prname);
    // console.log(price);

    const area = document.querySelector("body div#area");
    // console.log(area);

    const sumHtml = "구입자 : " + user + "님" + "<br>"
                   +"구입상품 : " + prname + "<br>"
                   +"구매가격 : " + price + "만원" + "<br>"; 
    area.innerHTML = sumHtml;
}