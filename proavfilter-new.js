$("#Filter-Sorting-Field").each(function () {
  $(this).children().first().attr("disabled", "disabled");
});

document.addEventListener("DOMContentLoaded", () => {
  const itemsPerPage = 9; // Pagination applied for both desktop and mobile
  let currentPage = 1;
  let filteredItems = [];

  const servicesRadios = document.querySelectorAll(
    'input[name="Project-Category"]'
  );
  const items = Array.from(document.querySelectorAll("[filter_cms-item]"));
  const allCategory = document.querySelector(
    'input[name="Project-Category"][value="All"]'
  );
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const ppCountWrap = document.querySelector(".pagination-button_wrap");
  const paginationElem = document.querySelector(".pagination");
  const noItemsFoundElem = document.querySelector(".filter-not-found");
  const sortSelect = document.getElementById("Filter-Sorting-Field");
  const clearFilterBtn = document.getElementById("clearFilterBtn");

  const applyFilterbtn = document.querySelector(".apply-filter-button");
  const closeFilterbtn = document.querySelector(".filter-popup-close");
  const newToOldBtn = document.getElementById("newToOldBtn");
  const oldToNewBtn = document.getElementById("oldToNewBtn");

  applyFilterbtn.addEventListener("click", function () {
    closeFilterbtn.click();
    console.log("123456");
  });

  // Set default sorting option
  sortSelect.value = "Oldest to newest";

  servicesRadios.forEach((radio) =>
    radio.addEventListener("change", filterItems)
  );
  sortSelect.addEventListener("change", filterItems);
  clearFilterBtn.addEventListener("click", clearFilter);

  prevBtn.addEventListener("click", () => changePage(-1));
  nextBtn.addEventListener("click", () => changePage(1));

  function filterItems() {
    const selectedService = document.querySelector(
      'input[name="Project-Category"]:checked'
    ).value;

    const sortOrder = sortSelect.value;

    filteredItems = items.filter((item) => {
      const itemService = item.getAttribute("data-category");

      const serviceMatch =
        selectedService === "All" || itemService === selectedService;

      return serviceMatch;
    });

    // Sort the filtered items
    filteredItems.sort((a, b) => {
      const dateA = new Date(a.getAttribute("data-date"));
      const dateB = new Date(b.getAttribute("data-date"));

      return sortOrder === "Newest to oldest" ? dateB - dateA : dateA - dateB;
    });

    // Reset the current page to 1 when filters are applied
    currentPage = 1;

    items.forEach((item) => item.classList.add("hidden"));
    if (filteredItems.length > 0) {
      noItemsFoundElem.style.display = "none";
      showPage(currentPage);
    } else {
      noItemsFoundElem.style.display = "block";
    }

    updatePagination();
  }

  function clearFilter() {
    // Reset filters and sorting
    //sortSelect.value = "Newest to oldest";
    allCategory.click();
    newToOldBtn.click();
    console.log(allCategory);

    // Reset the page number
    currentPage = 1;

    // Show all items
    filteredItems = items;
    items.forEach((item) => item.classList.remove("hidden"));

    // Update the UI
    noItemsFoundElem.style.display = "none";
    updatePagination();
  }

  function updatePagination() {
    const totalSteps = Math.ceil(filteredItems.length / itemsPerPage);

    // Hide the pagination if the total number of filtered items is less than or equal to itemsPerPage
    if (filteredItems.length <= itemsPerPage) {
      paginationElem.style.display = "none";
    } else {
      paginationElem.style.display = "flex";
    }

    ppCountWrap.innerHTML = ""; // Clear the current pagination

    // Generate page numbers only if there are more pages
    if (totalSteps > 1) {
      for (let i = 1; i <= totalSteps; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.classList.add("pagination-btn");
        if (i === currentPage) {
          pageBtn.classList.add("active");
        }
        pageBtn.textContent = i;
        pageBtn.addEventListener("click", () => changePageTo(i));
        ppCountWrap.appendChild(pageBtn);
      }
    }

    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalSteps;
    prevBtn.classList.toggle("disabled", isPrevDisabled);
    nextBtn.classList.toggle("disabled", isNextDisabled);
  }

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Hide all items first
    filteredItems.forEach((item) => item.classList.add("hidden"));

    // Use a short delay before showing the items within the current page range
    setTimeout(() => {
      filteredItems
        .slice(start, end)
        .forEach((item) => item.classList.remove("hidden"));
    }, 10); // 10ms delay
  }

  function changePage(step) {
    const totalSteps = Math.ceil(filteredItems.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(currentPage + step, totalSteps));
    showPage(currentPage);
    updatePagination();
  }

  function changePageTo(page) {
    currentPage = page;
    showPage(currentPage);
    updatePagination();
  }

  // Function to remove active class from both buttons
  function clearActiveClass() {
    newToOldBtn.classList.remove("active");
    oldToNewBtn.classList.remove("active");
  }

  // Add event listener to select field
  sortSelect.addEventListener("change", function () {
    clearActiveClass(); // Remove active class from both buttons

    // Add active class based on selected value
    if (sortSelect.value === "Newest to oldest") {
      newToOldBtn.classList.add("active");
    } else if (sortSelect.value === "Oldest to newest") {
      // Corrected value check
      oldToNewBtn.classList.add("active");
    }
  });

  // Add event listener to "Newest to Oldest" button
  newToOldBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    sortSelect.value = "Newest to oldest"; // Change select field value
    clearActiveClass(); // Clear active class from both buttons
    newToOldBtn.classList.add("active"); // Add active class to this button
  });

  // Add event listener to "Oldest to Newest" button
  oldToNewBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    sortSelect.value = "Oldest to newest"; // Change select field value (corrected)
    clearActiveClass(); // Clear active class from both buttons
    oldToNewBtn.classList.add("active"); // Add active class to this button
  });

  filterItems();
});
