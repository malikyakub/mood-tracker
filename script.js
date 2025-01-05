const elements = {
  daySelected: document.querySelectorAll(".days td"),
  yearHolder: document.querySelector(".year"),
  daySetInput: document.querySelector("#today-set"),
  daySetContainer: document.querySelector(".day-set"),
  closeDaySetContainer: document.querySelector(".fa-close"),
  emotionBox: document.querySelectorAll(".box"),
  heading: document.querySelector("h2"),
};

const now = new Date();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();
const currentDay = now.getDate();

let selectedDay = "";
let selectedMonth = "";

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

elements.yearHolder.textContent = currentYear;

const daysPassed = document.querySelectorAll(
  `[month="${months[currentMonth]}"]`
);
daysPassed.forEach((day) => {
  const dayNumber = parseInt(day.textContent, 10);
  if (dayNumber < currentDay) {
    day.classList.add("not-set");
    day.innerHTML = '<i class="fa-solid fa-question"></i>';
  } else if (dayNumber === currentDay) {
    day.classList.add("today");
  }
});

elements.daySelected.forEach((day) => {
  day.addEventListener("click", () => {
    if (day.classList.contains("not-set") || day.classList.contains("today")) {
      selectedDay = day.getAttribute("day");
      selectedMonth = day.getAttribute("month");
      const selectedDate = `${selectedDay} ${selectedMonth}`;
      elements.daySetContainer.style.display = "flex";
      elements.heading.textContent = `Set Your Emotion for - ${selectedDate}`;
      console.log(
        `Selected Day: ${selectedDay}, Selected Month: ${selectedMonth}`
      );
    } else {
      elements.daySetContainer.style.display = "none";
    }
  });
});

elements.closeDaySetContainer.addEventListener("click", () => {
  elements.daySetContainer.style.display = "none";
});

elements.emotionBox.forEach((box) => {
  box.addEventListener("click", () => {
    const selectedElement = document.querySelector(
      `[day="${selectedDay}"][month="${selectedMonth}"]`
    );
    selectedElement.classList.add("set");
    selectedElement.innerHTML = selectedDay;
    selectedElement.style.backgroundColor = box.style.backgroundColor;
    selectedElement.style.opacity = "1";
    elements.daySetContainer.style.display = "none";
  });
});
