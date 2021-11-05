const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const cardArr = document.getElementsByClassName("card");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

const changeReportState = (state) => {
  data.forEach((d, i) => {
    let current = cardArr[i + 1].querySelector(".current");
    let previous = cardArr[i + 1].querySelector(".previous");
    let currentText = d.timeframes[state].current + "hrs";
    let previousText = "Last Week - " + d.timeframes[state].previous + "hrs";

    current.textContent = currentText;
    previous.textContent = previousText;
    setTimeout(() => {
      current.classList.remove("op-none");
      previous.classList.remove("op-none");
    }, 300);
  });
};

const removeOpacity = () => {
  document
    .querySelectorAll(".current")
    .forEach((current) => current.classList.add("op-none"));
  document
    .querySelectorAll(".previous")
    .forEach((current) => current.classList.add("op-none"));
};
window.onload = (e) => {
  changeReportState("weekly");
};

dailyBtn.addEventListener("click", () => {
  removeOpacity();
  changeReportState("daily");
  document.querySelector(".active").classList.remove("active");
  dailyBtn.classList.add("active");
});
weeklyBtn.addEventListener("click", () => {
  removeOpacity();
  changeReportState("weekly");
  document.querySelector(".active").classList.remove("active");
  weeklyBtn.classList.add("active");
});
monthlyBtn.addEventListener("click", () => {
  removeOpacity();
  changeReportState("monthly");
  document.querySelector(".active").classList.remove("active");
  monthlyBtn.classList.add("active");
});
