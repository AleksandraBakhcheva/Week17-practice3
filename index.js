function formatDate(x) {
    let dateNow = new Date();
    let difference = dateNow - x;

    if (difference > 0 && difference < 1000) {
        return("прямо сейчас");
    }    
    else if (difference > 0 && difference < 60000) {
        let seconds = Math.round(difference / 1000);
        return(`${seconds} сек. назад`);
    }
    else if (difference > 0 && difference < 60 * 60000) {
        let minutes = Math.round(difference / 60000);
        return(`${minutes} мин. назад`);
    }
    else {
        let date = x;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        return(`0${day}.0${month}.${year} ${hour}:${minute}`);
    }
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
//вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 4 * 1000)));