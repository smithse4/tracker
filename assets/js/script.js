// DATE VARIABLES
let day = moment().format("dddd");
let monday = document.querySelector("#monday span");
let tuesday = document.querySelector("#tuesday span");
let wednesday = document.querySelector("#wednesday span");
let thursday = document.querySelector("#thursday span");
let friday = document.querySelector("#friday span");
let jobOneRate = 30;
let jobTwoRate = 30;

// TABLE VARIABLES
let thisWeek = document.querySelector(".this-week");
let msqMonHours = document.querySelector("#msq-mon-hours");
let msqTueHours = document.querySelector("#msq-tue-hours");
let msqWedHours = document.querySelector("#msq-wed-hours");
let msqThuHours = document.querySelector("#msq-thu-hours");
let msqFriHours = document.querySelector("#msq-fri-hours");

function addDate() {
  if (day === "Monday") {
    monday.innerHTML = moment().format("ll");
    tuesday.innerHTML = moment().add(1, "days").format("ll");
    wednesday.innerHTML = moment().add(2, "days").format("ll");
    thursday.innerHTML = moment().add(3, "days").format("ll");
    friday.innerHTML = moment().add(4, "days").format("ll");
  } else if (day === "Tuesday") {
    monday.innerHTML = moment().subtract(1, "days").format("ll");
    tuesday.innerHTML = moment().format("ll");
    wednesday.innerHTML = moment().add(1, "days").format("ll");
    thursday.innerHTML = moment().add(2, "days").format("ll");
    friday.innerHTML = moment().add(3, "days").format("ll");
  } else if (day === "Wednesday") {
    monday.innerHTML = moment().subtract(2, "days").format("ll");
    tuesday.innerHTML = moment().subtract(1, "days").format("ll");
    wednesday.innerHTML = moment().format("ll");
    thursday.innerHTML = moment().add(1, "days").format("ll");
    friday.innerHTML = moment().add(2, "days").format("ll");
  } else if (day === "Thursday") {
    monday.innerHTML = moment().subtract(3, "days").format("ll");
    tuesday.innerHTML = moment().subtract(2, "days").format("ll");
    wednesday.innerHTML = moment().subtract(1, "days").format("ll");
    thursday.innerHTML = moment().format("ll");
    friday.innerHTML = moment().add(1, "days").format("ll");
  } else if (day === "Friday") {
    monday.innerHTML = moment().subtract(4, "days").format("ll");
    tuesday.innerHTML = moment().subtract(3, "days").format("ll");
    wednesday.innerHTML = moment().subtract(2, "days").format("ll");
    thursday.innerHTML = moment().subtract(1, "days").format("ll");
    friday.innerHTML = moment().format("ll");
  } else if (day === "Saturday") {
    monday.innerHTML = moment().add(2, "days").format("ll");
    tuesday.innerHTML = moment().add(3, "days").format("ll");
    wednesday.innerHTML = moment().add(4, "days").format("ll");
    thursday.innerHTML = moment().add(5, "days").format("ll");
    friday.innerHTML = moment().add(6, "days").format("ll");
  } else if (day === "Sunday") {
    monday.innerHTML = moment().add(1, "days").format("ll");
    tuesday.innerHTML = moment().add(2, "days").format("ll");
    wednesday.innerHTML = moment().add(3, "days").format("ll");
    thursday.innerHTML = moment().add(4, "days").format("ll");
    friday.innerHTML = moment().add(5, "days").format("ll");
  }
}

console.log(msqMonHours);

addDate();

// DAILY TOTALS
let addH1 = document.querySelector("#add-h-1");
let addT1 = document.querySelector("#add-t-1");
let addH2 = document.querySelector("#add-h-2");
let addT2 = document.querySelector("#add-t-2");
let addST = document.querySelector("#add-st");

// SUMMARIES
let incomeStatusTotal = document.querySelector('#income-status-total');
let hoursStatusTotal = document.querySelector('#hours-status-total');

// MONDAY
let mh1 = document.querySelector("#mh1");
let mt1 = document.querySelector("#mt1");
let mh2 = document.querySelector("#mh2");
let mt2 = document.querySelector("#mt2");
let mst = document.querySelector("#mst");

mh1.addEventListener("input", function () {
  mt1.value = JSON.parse(mh1.value) * jobOneRate;
  mst.value = JSON.parse(mt1.value) + JSON.parse(mt2.value);
  addH1.value =
    JSON.parse(mh1.value) +
    JSON.parse(th1.value) +
    JSON.parse(wh1.value) +
    JSON.parse(thh1.value) +
    JSON.parse(fh1.value);
  addT1.value =
    JSON.parse(mt1.value) +
    JSON.parse(tt1.value) +
    JSON.parse(wt1.value) +
    JSON.parse(tht1.value) +
    JSON.parse(ft1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

mh2.addEventListener("input", function () {
  mt2.value = JSON.parse(mh2.value) * jobTwoRate;
  mst.value = JSON.parse(mt1.value) + JSON.parse(mt2.value);
  addH2.value =
    JSON.parse(mh2.value) +
    JSON.parse(th2.value) +
    JSON.parse(wh2.value) +
    JSON.parse(thh2.value) +
    JSON.parse(fh2.value);
  addT2.value =
    JSON.parse(mt2.value) +
    JSON.parse(tt2.value) +
    JSON.parse(wt2.value) +
    JSON.parse(tht2.value) +
    JSON.parse(ft2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

// TUESDAY
let th1 = document.querySelector("#th1");
let tt1 = document.querySelector("#tt1");
let th2 = document.querySelector("#th2");
let tt2 = document.querySelector("#tt2");
let tst = document.querySelector("#tst");

th1.addEventListener("input", function () {
  tt1.value = JSON.parse(th1.value) * jobOneRate;
  tst.value = JSON.parse(tt1.value) + JSON.parse(tt2.value);
  addH1.value =
    JSON.parse(mh1.value) +
    JSON.parse(th1.value) +
    JSON.parse(wh1.value) +
    JSON.parse(thh1.value) +
    JSON.parse(fh1.value);
  addT1.value =
    JSON.parse(mt1.value) +
    JSON.parse(tt1.value) +
    JSON.parse(wt1.value) +
    JSON.parse(tht1.value) +
    JSON.parse(ft1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

th2.addEventListener("input", function () {
  tt2.value = JSON.parse(th2.value) * jobTwoRate;
  tst.value = JSON.parse(tt1.value) + JSON.parse(tt2.value);
  addH2.value =
    JSON.parse(mh2.value) +
    JSON.parse(th2.value) +
    JSON.parse(wh2.value) +
    JSON.parse(thh2.value) +
    JSON.parse(fh2.value);
  addT2.value =
    JSON.parse(mt2.value) +
    JSON.parse(tt2.value) +
    JSON.parse(wt2.value) +
    JSON.parse(tht2.value) +
    JSON.parse(ft2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

// WEDNESDAY
let wh1 = document.querySelector("#wh1");
let wt1 = document.querySelector("#wt1");
let wh2 = document.querySelector("#wh2");
let wt2 = document.querySelector("#wt2");
let wst = document.querySelector("#wst");

wh1.addEventListener("input", function () {
  wt1.value = JSON.parse(wh1.value) * jobOneRate;
  wst.value = JSON.parse(wt1.value) + JSON.parse(wt2.value);
  addH1.value =
    JSON.parse(mh1.value) +
    JSON.parse(th1.value) +
    JSON.parse(wh1.value) +
    JSON.parse(thh1.value) +
    JSON.parse(fh1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);
  addT1.value =
    JSON.parse(mt1.value) +
    JSON.parse(tt1.value) +
    JSON.parse(wt1.value) +
    JSON.parse(tht1.value) +
    JSON.parse(ft1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

wh2.addEventListener("input", function () {
  wt2.value = JSON.parse(wh2.value) * jobTwoRate;
  wst.value = JSON.parse(wt1.value) + JSON.parse(wt2.value);
  addH2.value =
    JSON.parse(mh2.value) +
    JSON.parse(th2.value) +
    JSON.parse(wh2.value) +
    JSON.parse(thh2.value) +
    JSON.parse(fh2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);
  addT2.value =
    JSON.parse(mt2.value) +
    JSON.parse(tt2.value) +
    JSON.parse(wt2.value) +
    JSON.parse(tht2.value) +
    JSON.parse(ft2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value.value) + JSON.parse(addH2);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

// THURSDAY
let thh1 = document.querySelector("#thh1");
let tht1 = document.querySelector("#tht1");
let thh2 = document.querySelector("#thh2");
let tht2 = document.querySelector("#tht2");
let thst = document.querySelector("#thst");

thh1.addEventListener("input", function () {
  tht1.value = JSON.parse(thh1.value) * jobOneRate;
  thst.value = JSON.parse(tht1.value) + JSON.parse(tht2.value);
  addH1.value =
    JSON.parse(mh1.value) +
    JSON.parse(th1.value) +
    JSON.parse(wh1.value) +
    JSON.parse(thh1.value) +
    JSON.parse(fh1.value);
  addT1.value =
    JSON.parse(mt1.value) +
    JSON.parse(tt1.value) +
    JSON.parse(wt1.value) +
    JSON.parse(tht1.value) +
    JSON.parse(ft1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

thh2.addEventListener("input", function () {
  tht2.value = JSON.parse(thh2.value) * jobTwoRate;
  thst.value = JSON.parse(tht1.value) + JSON.parse(tht2.value);
  addH2.value =
    JSON.parse(mh2.value) +
    JSON.parse(th2.value) +
    JSON.parse(wh2.value) +
    JSON.parse(thh2.value) +
    JSON.parse(fh2.value);
  addT2.value =
    JSON.parse(mt2.value) +
    JSON.parse(tt2.value) +
    JSON.parse(wt2.value) +
    JSON.parse(tht2.value) +
    JSON.parse(ft2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

// FRIDAY
let fh1 = document.querySelector("#fh1");
let ft1 = document.querySelector("#ft1");
let fh2 = document.querySelector("#fh2");
let ft2 = document.querySelector("#ft2");
let fst = document.querySelector("#fst");

fh1.addEventListener("input", function () {
  ft1.value = JSON.parse(fh1.value) * jobOneRate;
  fst.value = JSON.parse(ft1.value) + JSON.parse(ft2.value);
  addH1.value =
    JSON.parse(mh1.value) +
    JSON.parse(th1.value) +
    JSON.parse(wh1.value) +
    JSON.parse(thh1.value) +
    JSON.parse(fh1.value);
  addT1.value =
    JSON.parse(mt1.value) +
    JSON.parse(tt1.value) +
    JSON.parse(wt1.value) +
    JSON.parse(tht1.value) +
    JSON.parse(ft1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});

fh2.addEventListener("input", function () {
  ft2.value = JSON.parse(fh2.value) * jobTwoRate;
  fst.value = JSON.parse(ft1.value) + JSON.parse(ft2.value);
  addH2.value =
    JSON.parse(mh2.value) +
    JSON.parse(th2.value) +
    JSON.parse(wh2.value) +
    JSON.parse(thh2.value) +
    JSON.parse(fh2.value);
  addT2.value =
    JSON.parse(mt2.value) +
    JSON.parse(tt2.value) +
    JSON.parse(wt2.value) +
    JSON.parse(tht2.value) +
    JSON.parse(ft2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);

    incomeStatusTotal.textContent = `$${addST.value}`;

    hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
    // hoursTotal = addH1.value + addH2.value;
    hoursStatusTotal.textContent = hoursTotal;
});
