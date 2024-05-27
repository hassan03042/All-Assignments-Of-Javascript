var assignmentsArray = [
    {
      title: "Finance Tracking Application",
      code: "https://github.com/hassan03042/Finance-Record-Javascript.git",
      link: "https://hassan03042.github.io/Finance-Record-Javascript/",
      date: "24-May-2024",
      description: "Manage Income , Expense and see history using our app.",
    },
    { 
      title: "Text Editor",
      code: "https://github.com/hassan03042/Text-Editor-Javascript.git",
      link: "https://hassan03042.github.io/Text-Editor-Javascript/",
      date: "18-May-2024",
      description:"Learned making text bold , italice , changing font family using JS Dome",
    },
    {
      title: "Birth Date Checker",
      description: "Select Your Date Of Birth And See The Result In Console",
      code: "https://github.com/hassan03042/birthdatechecker.git",
      link: "https://hassan03042.github.io/birthdatechecker/",
      date: "20-May-2024",
    },
    {
      title: "Attendance Checker",
      code: "https://github.com/hassan03042/Attendance-Checker.git",
      link: "https://hassan03042.github.io/Attendance-Checker/",
      date: "24-May-2024",
      description: "Attendance Checker App. Before 10AM you are on time, at 10:05AM you will be warned and after 10:05AM you will be marked as late.",
    },
    {
      title: "Auto Color Changer",
      code: "https://github.com/hassan03042/color-changer-javascript.git",
      link: "https://hassan03042.github.io/color-changer-javascript/",
      date: "18-May-2024",
      description:
        "Automatically Color Will Be Changed",
    },
    {
      title: "Calculator",
      description: "Designed The Calculator Using Javascript",
      code: "https://github.com/hassan03042/calculator-javascript.git",
      link: "https://hassan03042.github.io/calculator-javascript/",
      date: "20-May-2024",
    },
  ];
  
  var assignList = document.getElementById("all-assignments");
  
  for (var i = 0; i < assignmentsArray.length; i++) {
    var div = ` <div class="p-4 md:w-1/3">
    <div
      class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    >
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
         ${assignmentsArray[i].title} 
        </h1>
        <p class="leading-relaxed mb-3">${assignmentsArray[i].description}</p>
        <div class="flex items-center flex-wrap">
          <a
            href="${assignmentsArray[i].link}"
            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >View Assignment
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <a
              href="${assignmentsArray[i].code}"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
              <i class="fa-brands fa-square-github" style="color: #35413d;"></i>
              </svg>
            </a>
            
          </span>
        </div>
      </div>
    </div>
  </div>`;
  
    assignList.innerHTML += div;
  }
  
  var projectInfo = {
    title: "Finance Tracking Application",
    code: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
    link: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
    date: "24-May-2024",
    description: "Manage Income , Expense and see history using our app.",
  };
  
  console.log(projectInfo.title);
  console.log(assignmentsArray[0].title);