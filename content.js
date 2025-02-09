function getRandomName() {
  const names = ["Abdullah Rahman", "Ayesha Khan", "Arafat Hossain", "Asif Ahmed", "Akib Hasan", "Anika Islam", "Arman Ali", "Adnan Chowdhury", "Afnan Siddique", "Aiman Haque",
    "Bilal Karim", "Binita Das", "Barkat Ullah", "Brishti Roy", "Basir Malik", "Bilkis Begum", "Bakhtiar Khan", "Badrul Islam", "Bahar Ahmed", "Billal Hossain",
    "Chandan Roy", "Champa Begum", "Chayan Sarkar", "Chanchal Das", "Chowdhury Ahmed", "Chandni Islam", "Chandan Das", "Chhaya Khan", "Chand Ali", "Chandra Shekhar",
    "Dalia Akter", "Danyal Hossain", "Dilruba Begum", "Dinar Islam", "Disha Rahman", "Dolon Roy", "Dulal Ahmed", "Durdana Begum", "Dilip Kumar", "Dina Akter",
    "Emon Hossain", "Elias Khan", "Eti Das", "Eshita Islam", "Eram Ahmed", "Ehsan Ullah", "Ebad Rahman", "Eshika Khan", "Eva Begum", "Eshrak Ahmed",
    "Fahim Islam", "Farhana Akter", "Fardin Khan", "Fariha Begum", "Faysal Ahmed", "Fahmida Islam", "Farid Hossain", "Falak Begum", "Fahad Khan", "Fariya Akter",
    "Golap Das", "Gias Uddin", "Gulshan Ara", "Gouri Roy", "Golam Hossain", "Gita Das", "Gulzar Khan", "Gazi Ahmed", "Gulbahar Begum", "Golapi Akter",
    "Habib Rahman", "Hena Begum", "Hridoy Khan", "Hasan Ahmed", "Hira Islam", "Hossain Ali", "Humaira Akter", "Hannan Khan", "Hafiz Uddin", "Hridita Das",
    "Ibrahim Khan", "Irin Akter", "Imran Hossain", "Israt Begum", "Ishaan Ahmed", "Ishrat Jahan", "Iqbal Hossain", "Ishita Das", "Ishrak Khan", "Ishani Roy",
    "Jabed Ali", "Jannat Begum", "Jahid Hasan", "Joya Akter", "Jamil Khan", "Jhorna Das", "Jahangir Alam", "Jakia Begum", "Jahura Akter", "Jahidul Islam",
    "Kamal Hossain", "Kona Begum", "Khalid Khan", "Kanta Das", "Kazi Ahmed", "Kohinoor Begum", "Kausar Islam", "Kafil Uddin", "Kawsar Khan", "Khalek Ahmed",
    "Liton Das", "Laila Begum", "Limon Hossain", "Lubna Akter", "Latif Khan", "Lamia Islam", "Lutfar Rahman", "Liza Begum", "Labib Ahmed", "Laili Akter",
    "Mahmud Khan", "Mou Das", "Mamun Hossain", "Mita Begum", "Mizan Ahmed", "Moni Akter", "Morshed Ali", "Mala Begum", "Moin Uddin", "Mim Akter",
    "Nabil Hossain", "Nadia Begum", "Nahid Khan", "Nipa Akter", "Nayeem Ahmed", "Nila Das", "Nurul Islam", "Nahar Begum", "Noman Khan", "Nusrat Akter",
    "Omar Faruk", "Oishi Das", "Obaidul Islam", "Oyshee Akter", "Oli Ahmed", "Oyshi Begum", "Omar Khan", "Oindrila Roy", "Ovi Das", "Omi Akter",
    "Polash Hossain", "Papia Begum", "Parvez Ahmed", "Purnima Das", "Pavel Khan", "Piyali Roy", "Panna Begum", "Partha Das", "Pritom Ahmed", "Puja Akter",
    "Qasim Khan", "Queency Begum", "Quader Ali", "Qulsum Akter", "Qutub Uddin", "Qamar Islam", "Quazi Ahmed", "Quddus Khan", "Qamrul Hossain", "Qumruzzaman Ahmed",
    "Rafiq Islam", "Rima Begum", "Rakib Hossain", "Rina Akter", "Rashed Khan", "Rupali Das", "Rahman Ali", "Ruma Begum", "Rifat Ahmed", "Rina Akter",
    "Sabbir Khan", "Sadia Begum", "Sajib Hossain", "Sathi Akter", "Sakib Ahmed", "Sajia Begum", "Salam Khan", "Sultana Akter", "Sajid Hossain", "Sadia Akter",
    "Tahmid Hossain", "Tania Begum", "Tareq Ahmed", "Tumpa Akter", "Tuhin Khan", "Taslima Begum", "Tariq Islam", "Tasnia Akter", "Tahsin Ahmed", "Tania Begum",
    "Uzzal Khan", "Uma Das", "Uday Hossain", "Urmi Akter", "Ujjal Ahmed", "Urmila Begum", "Uzzaman Khan", "Umme Akter", "Uzzal Hossain", "Urmi Akter",
    "Vaskor Das", "Varsha Begum", "Vivek Roy", "Vandana Das", "Vijay Kumar", "Vanya Akter", "Vaskor Ahmed", "Varsha Begum", "Vivek Khan", "Vandana Akter",
    "Wahid Khan", "Wazia Begum", "Wasi Ahmed", "Wahida Akter", "Walid Hossain", "Wahida Begum", "Wahidul Islam", "Wazia Akter", "Wasi Khan", "Wahida Begum",
    "Xenon Das", "Xara Begum", "Xenon Khan", "Xara Akter", "Xenon Ahmed", "Xara Begum", "Xenon Hossain", "Xara Akter", "Xenon Khan", "Xara Begum",
    "Yasin Khan", "Yasmin Begum", "Yousuf Ahmed", "Yasmeen Akter", "Yamin Hossain", "Yasmin Begum", "Younus Khan", "Yasmin Akter", "Yamin Ahmed", "Yasmin Begum",
    "Zahid Khan", "Zakia Begum", "Zaman Ahmed", "Zeba Akter", "Zahin Hossain", "Zakia Begum", "Zahidul Islam", "Zakia Akter", "Zahin Khan", "Zakia Begum"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomPhoneNumber() {
  const operatorCodes = ["13", "14", "15", "16", "17", "18", "19"];
  const randomOperator = operatorCodes[Math.floor(Math.random() * operatorCodes.length)];
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return `+880${randomOperator}${randomNumber}`;
}
// Function to get a random Bangladeshi address
function getRandomAddress() {
  const addresses = [
    "123/A, Mirpur Road", "456/B, Dhanmondi", "789/C, Gulshan Avenue", "101/D, Uttara", "202/E, Banani",
    "303/F, Mohammadpur", "404/G, Motijheel", "505/H, Lalmatia", "606/I, Bashundhara", "707/J, Baridhara"
  ];
  return addresses[Math.floor(Math.random() * addresses.length)];
}

// Function to get a random Bangladeshi city
function getRandomCity() {
  const cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur", "Mymensingh"];
  return cities[Math.floor(Math.random() * cities.length)];
}

// Function to get a random Bangladeshi district
function getRandomDistrict() {
  const districts = [
    "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur", "Mymensingh",
    "Comilla", "Noakhali", "Jessore", "Bogra", "Dinajpur", "Faridpur", "Tangail"
  ];
  return districts[Math.floor(Math.random() * districts.length)];
}

// Function to get a random Bangladeshi division (state)
function getRandomDivision() {
  const divisions = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur", "Mymensingh"];
  return divisions[Math.floor(Math.random() * divisions.length)];
}

function getRandomPincode() {
  return `${Math.floor(10000 + Math.random() * 90000)}`;
}

function getRandomString(length) {
  return Math.random().toString(36).substring(2, length + 2);
}

function getRandomDate() {
  let year = Math.floor(Math.random() * 20) + 2000;
  let month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  let day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function fillForms() {
  document.querySelectorAll("input, textarea, select").forEach((field) => {
    if (field.type === "text" && field.name.toLowerCase().includes("name")) {
      field.value = getRandomName();
    } else if (field.type === "tel" || field.name.toLowerCase().includes("phone")) {
      field.value = getRandomPhoneNumber();
    } else if (field.name.toLowerCase().includes("pincode") || field.name.toLowerCase().includes("zip")) {
      field.value = getRandomPincode();
    } else if (field.type === "email") {
      const randomName = getRandomName().toLowerCase().replace(/\s+/g, '.');
      field.value = `${randomName}${Math.floor(Math.random() * 1000)}@gmail.com`;
    } else if (field.type === "number") {
      field.value = Math.floor(Math.random() * 100);
    } else if (field.type === "text" && field.name.toLowerCase().includes("address")) {
      field.value = getRandomAddress();
    } else if (field.type === "text" && field.name.toLowerCase().includes("city")) {
      field.value = getRandomCity();
    } else if (field.type === "text" && field.name.toLowerCase().includes("district")) {
      field.value = getRandomDistrict();
    } else if (field.type === "text" && field.name.toLowerCase().includes("state")) {
      field.value = getRandomDivision();
    } else if (field.type === "date") {
      field.value = getRandomDate();
    } else if (field.type === "radio" || field.type === "checkbox") {
      if (Math.random() > 0.5) field.checked = true;
    } else if (field.tagName.toLowerCase() === "select") {
      let options = field.options;
      if (options.length > 1) field.selectedIndex = Math.floor(Math.random() * options.length);
    }
  });
}
// Call the function to fill forms
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fillForm") {
    fillForms(); // Call the fillForms function
  }
});