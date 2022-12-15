function showClock() {
    const dt = new Date();
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1;
    const date = dt.getDate();
    const day = dt.getDay();
    const hour = dt.getHours();
    const minute = dt.getMinutes();
    const second = dt.getSeconds();
    const millisecond = dt.getMilliseconds();
    const week = ["日", "月", "火", "水", "木", "金", "土"];

    const time_s = ("00" + hour).slice(-2) + ":" + ("00" + minute).slice(-2) + ":" + ("00" + second).slice(-2) + "." + ("000" + millisecond).slice(-3);
    const date_s = year + "/" + ("00" + month).slice(-2) + "/" + ("00" + date).slice(-2) + "(" + week[day] + ")";

    document.getElementById("time").innerText = time_s;
    document.getElementById("date").innerText = date_s;
}

window.addEventListener('DOMContentLoaded', e => {
    setInterval('showClock()', 10);
})