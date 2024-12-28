
      const calendarContainer = document.getElementById("calendar-container");
      const dateInput = document.getElementById("date-input");
      const calendarDates = document.getElementById("calendar-dates");
      const monthYear = document.getElementById("month-year");
      const prevMonth = document.getElementById("prev-month");
      const nextMonth = document.getElementById("next-month");

      let currentDate = new Date();
      let selectedStartDate = null;
      let selectedEndDate = null;

      function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDayOfLastMonth = new Date(year, month, 0).getDate();

        monthYear.textContent = `${date.toLocaleString("default", {
          month: "long",
        })}, ${year}`;

        calendarDates.innerHTML = "";

        // Các ngày từ tháng trước (nếu có)
        for (let i = firstDayOfMonth; i > 0; i--) {
          const day = lastDayOfLastMonth - i + 1;
          const div = document.createElement("div");
          div.textContent = day;
          div.style.color = "#ccc";
          calendarDates.appendChild(div);
        }

        // Các ngày của tháng hiện tại
        for (let day = 1; day <= lastDateOfMonth; day++) {
          const div = document.createElement("div");
          div.textContent = day;
          div.dataset.date = `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;

          // Kiểm tra xem ngày có trong phạm vi chọn không
          const dateString = div.dataset.date;
          const currentDate = new Date(dateString);
          if (selectedStartDate && selectedEndDate) {
            if (
              currentDate >= selectedStartDate &&
              currentDate <= selectedEndDate
            ) {
              div.classList.add("range");
            }
          }

          if (
            selectedStartDate &&
            currentDate.getTime() === selectedStartDate.getTime()
          ) {
            div.classList.add("selected");
          }
          if (
            selectedEndDate &&
            currentDate.getTime() === selectedEndDate.getTime()
          ) {
            div.classList.add("selected");
          }

          div.addEventListener("click", () =>
            selectDate(new Date(dateString), div)
          );
          calendarDates.appendChild(div);
        }

        // Các ngày từ tháng sau (nếu có)
        const totalCells = calendarDates.children.length;
        const remainingCells = 42 - totalCells; // Lịch luôn có 6 dòng (7x6 = 42)
        for (let i = 1; i <= remainingCells; i++) {
          const div = document.createElement("div");
          div.textContent = i;
          div.style.color = "#ccc";
          calendarDates.appendChild(div);
        }
      }

      function selectDate(date, cell) {
        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
          // Nếu chưa chọn hoặc đã chọn xong phạm vi, bắt đầu lại
          selectedStartDate = date;
          selectedEndDate = null;
        } else if (selectedStartDate && !selectedEndDate) {
          // Chọn ngày kết thúc
          if (date < selectedStartDate) {
            // Hoán đổi nếu ngày kết thúc trước ngày bắt đầu
            [selectedStartDate, selectedEndDate] = [date, selectedStartDate];
          } else {
            selectedEndDate = date;
          }
        }

        // Cập nhật giá trị hiển thị trong ô input
        const start = selectedStartDate
          ? selectedStartDate.toISOString().split("T")[0]
          : "";
        const end = selectedEndDate
          ? selectedEndDate.toISOString().split("T")[0]
          : "";
        dateInput.textContent = end ? `${start} to ${end}` : start;

        // Chỉ cập nhật lịch, không ẩn container
        renderCalendar(currentDate);
      }

      // Hiển thị/ẩn lịch khi bấm vào ô input
      dateInput.addEventListener("click", () => {
        calendarContainer.style.display =
          calendarContainer.style.display === "none" ||
          !calendarContainer.style.display
            ? "block"
            : "none";
      });

      // Đóng lịch khi bấm ngoài
      document.addEventListener("click", (e) => {
        if (
          !e.target.closest(".calendar-container") &&
          e.target !== dateInput
        ) {
          calendarContainer.style.display = "none";
        }
      });

      prevMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
      });

      nextMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
      });

      renderCalendar(currentDate);