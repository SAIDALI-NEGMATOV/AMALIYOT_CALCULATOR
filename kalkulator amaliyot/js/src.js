let btn = document.querySelectorAll('span');
let dis = document.querySelector('#dis')
let C = document.querySelector("#C")

for (let i = 0; i<btn.length; i++) {
    btn[i].addEventListener("click", function () {

        if (this.innerHTML == "=") {
            dis.innerHTML = eval(dis.innerHTML);
        } else {
            if (this.innerHTML == "C") {
                dis.innerHTML = "";
            }
            else {
                dis.innerHTML += this.innerHTML;
            }
        }

    })
}