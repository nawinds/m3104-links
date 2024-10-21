const DEADLINES_URL = "/api-deadlines";
let text = "";


function waitForElement(id, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const startTime = new Date().getTime();

        const checkElement = () => {
            const element = document.getElementById(id);
            if (element) {
                resolve(element);
            } else if (new Date().getTime() - startTime >= timeout) {
                reject(new Error(`Element with ID ${id} not found within ${timeout}ms`));
            } else {
                requestAnimationFrame(checkElement);
            }
        };

        checkElement();
    });
}

function Get(yourUrl) {
    let Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function CompareDeadlines(a, b) {
    const aTime = Date.parse(a.time);
    const bTime = Date.parse(b.time);

    return aTime - bTime;
}

function PrintDeadline(d) {
    const unixTimeDeadline = Date.parse(d.time);
    let unixTimeNow = Date.now();
    if (unixTimeDeadline > unixTimeNow) {
        let delta = unixTimeDeadline - unixTimeNow;
        let deltaSeconds = delta / 1000;
        let deltaMinutes = deltaSeconds / 60;
        let deltaHours = deltaMinutes / 60;
        let deltaDays = deltaHours / 24;

        let deltaHoursSDays = deltaHours - 24 * Math.floor(deltaDays);
        let deltaMinutesSDays = deltaMinutes - 60 * Math.floor(deltaHours);

        text += "<b>" + d.name + "</b> &#8212; ";
        if (deltaDays < 1) {
            text +=
                Math.floor(deltaHoursSDays) + "ч " +
                Math.floor(deltaMinutesSDays) + "м";

        } else if (deltaDays < 3) {
            text += Math.floor(deltaDays) + ((Math.floor(deltaDays) === 1)
                    ? " день " : " дня ") +
                Math.floor(deltaHoursSDays) + "ч " +
                Math.floor(deltaMinutesSDays) + "м";

        } else {
            text += Math.floor(deltaDays) +
                ((Math.floor(deltaDays) === 3 || Math.floor(deltaDays) === 4)
                    ? " дня" : " дней");
        }

        const options = {month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'short'};
        text += " (" + new Date(unixTimeDeadline).toLocaleDateString('ru-RU', options) + ")";
        text += "<br>";
    }
}


window.onload = () => {
    console.log('Page is fully loaded, including React');
    setTimeout(() => {
        waitForElement('дедлайны', 5000)
            .then(element => {
                let deadlinesElement = document.getElementById("дедлайны");

                let deadlinesElement2 = document.createElement('div');

                deadlinesElement2.style = "background-color: rgb(0, 191, 255, 0.15); padding: 20px; " +
                    "border-radius: 15px; margin-bottom: 10px;";
                let deadlinesElement2h2 = document.createElement('h2');
                deadlinesElement2h2.id = "дедлайны";
                deadlinesElement2h2.innerHTML = deadlinesElement.innerHTML;
                deadlinesElement2.appendChild(deadlinesElement2h2);
                deadlinesElement.parentNode.replaceChild(deadlinesElement2, deadlinesElement);

                let deadlinesP = document.createElement("p");

                let json_obj = JSON.parse(Get(DEADLINES_URL));
                let ordered = json_obj.deadlines;
                ordered = ordered.sort(CompareDeadlines);
                ordered.forEach(PrintDeadline);

                text += "<a href='https://m3104.nawinds.dev/deadlines-editing-instructions' target='_blank'>" +
                    "Добавить дедлайн</a>"
                deadlinesP.innerHTML = text;
                deadlinesElement2.appendChild(deadlinesP);
            })
            .catch(error => {
                console.error(error.message);
            });
    }, 100);
};
