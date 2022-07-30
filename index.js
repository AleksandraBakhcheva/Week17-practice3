let input = document.createElement("div");
input.innerHTML =`<p>Please enter date in the format YYYY-MM-DDTHH:mm:ss.sssZ:</p><input class="date" type="text" /><button>Enter</button>`;
document.body.append(input);

let btn = document.querySelector("button");
btn.addEventListener("click", formatDate);

function formatDate() {
    let date = document.querySelector(".date").value;
    let convertDate = Date.parse(date);
    let dateNow = new Date();
    
    let difference = Number(dateNow) - convertDate;
    if (difference > 0 && difference < 1000) {
        alert("прямо сейчас");
    }    
    else if (difference > 0 && difference < 60000) {
        let seconds = Math.round(difference / 1000);
        alert(`${seconds} сек. назад`);
    }
    else if (difference > 0 && difference < 60 * 60000) {
        let minutes = Math.round(difference / 60000);
        alert(`${minutes} мин. назад`);
    }
    else {
        let year = date.slice(2, 4); 
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let hour = date.slice(11, 13);
        let minute = date.slice(14, 16);
        alert(`${day}.${month}.${year} ${hour}:${minute}`);
    }
}