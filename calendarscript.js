document.addEventListener("DOMContentLoaded", function () {
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const monthDisplay = document.getElementById("month");
    const calendarBody = document.getElementById("calendarBody");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function generateCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);

        monthDisplay.textContent = firstDay.toLocaleString("default", { month: "long" }) + " " + currentYear;

        let calendarHTML = "";
        let dayCounter = 1;

        for (let i = 0; i < 6; i++) {
            let rowHTML = "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay.getDay()) {
                    rowHTML += "<td></td>";
                } else if (dayCounter > lastDay.getDate()) {
                    break;
                } else {
                    rowHTML += `<td>${dayCounter}</td>`;
                    dayCounter++;
                }
            }
            rowHTML += "</tr>";
            calendarHTML += rowHTML;
        }

        calendarBody.innerHTML = calendarHTML;
    }

    generateCalendar();

    prevMonthBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar();
    });


        const reminderDateInput = document.getElementById("reminderDate");
        const reminderTextInput = document.getElementById("reminderText");
        const addReminderBtn = document.getElementById("addReminder");
        const remindersList = document.getElementById("remindersList");

        addReminderBtn.addEventListener("click", () => {
            const selectedDate = reminderDateInput.value;
            const reminderText = reminderTextInput.value;

            if (selectedDate && reminderText) {
                const reminderItem = document.createElement("li");
                reminderItem.className = "reminder";
                reminderItem.innerHTML = `
                    <span>${selectedDate}</span>
                    <span>${reminderText}</span>
                    <span class="delete-reminder">Delete</span>
                `;

                remindersList.appendChild(reminderItem);

                // Clear input fields
                reminderDateInput.value = "";
                reminderTextInput.value = "";

                // Add event listener to delete reminder
                const deleteReminderBtn = reminderItem.querySelector(".delete-reminder");
                deleteReminderBtn.addEventListener("click", () => {
                    remindersList.removeChild(reminderItem);
                });
            }
        });
        });
