const hourListSelector = document.querySelector("#hour-list");
const userSelector = document.querySelector("#user");
let hourListArray = [];

startApp();

function startApp() {
  hourListSelector.addEventListener("click", takeResource);

  document.addEventListener("DOMContentLoaded", getAndRenderUser);

  fillArrayHours();
};

function fillArrayHours() {
  for (let i = 8; i <= 20; i++) {
    const objHours1 = {
      hour: i + ":00",
      moto: 8,
      user: true
    };

    const objHours2 = {
      hour: i + ":30",
      moto: Math.floor(Math.random() * 8),
      user: true
    };

    hourListArray = [...hourListArray, objHours1, objHours2];
  };

  fillHourHtml(hourListArray);
};

function takeResource(e) {

  const hourId = e.path[1].id;

    if(e.target.classList.contains('redHour')) {
        alert('No motorcycles available!');
        return;
    } else {

      hourListArray.forEach((hora) => {
        if (hora.hour === hourId && hora.user == true) {
          hora.moto--;
          hora.user = false;
        } else if(hora.hour === hourId && hora.user == false){
            hora.moto++;
            hora.user = true;
        }
      });
    };

    fillHourHtml(hourListArray);
};

function fillHourHtml(hourListArray) {
  cleanHTML();

  let classHour;
  let classNotAvailable;

  hourListArray.forEach((element) => {
    classHour = "";
    classNotAvailable ="";

    if (!element.user) {
      classHour = "bg-success";
    };

    if(element.moto === 0 && element.user === true) {
      classNotAvailable = "bg-danger redHour";
    };

    hourListSelector.innerHTML += `
        <tr class="p-0">
            <td id="${element.hour}" class="p-0">
                <p class="p-2 mb-0 hora ${classHour} ${classNotAvailable}">${element.hour}</p>
            </td>
            <td class="p-0">
                <p class="p-2 mb-0">(${element.moto}) Motorcycles Ready</p>
            </td>
        </tr>
        `;
  });

};

function getAndRenderUser() {
  const user = prompt("Please enter your name");
  userSelector.textContent = `Hi ${user}, click on a time slot to take a motorcycle resource->`;
}

function cleanHTML() {
  while (hourListSelector.firstChild) {
    hourListSelector.removeChild(hourListSelector.firstChild);
  }
};