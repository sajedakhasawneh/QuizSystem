document.querySelector("#registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // استحضار  القيم من الحقول
    const FirstName = document.getElementById("firstName").value;
    const LastName = document.getElementById("LastName").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const birthDate = document.querySelector("#birthDate").value;
    const gender = document.querySelector('input[name="gender"]:checked').nextElementSibling.textContent;
    const address = document.querySelector("#address").value;
    const country = document.querySelector("#country").value;
    const city = document.querySelector("#city").value;

    // تاكد من صحة البيانات
    const namePattern = /^[A-Za-z\s]+$/; // فقط أحرف ومسافات
    if (!namePattern.test(FirstName)) {
        alert("Please enter a valid name (only letters and spaces are allowed).");
        return;
    }

    const phonePattern = /^[0-9]+$/; // فقط أرقام
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number (only numbers are allowed).");
        return;
    }

    const birthDatePattern = /^\d{4}-\d{2}-\d{2}$/; // صيغة التاريخ
    if (!birthDatePattern.test(birthDate)) {
        alert("Please enter a valid birth date (format: YYYY-MM-DD).");
        return;
    }

    // تخزين البيانات في Local Storage
    

    localStorage.setItem('FirstName',FirstName);
    localStorage.setItem('LastName',LastName);
    localStorage.setItem('#phoneNumber',phoneNumber);
    localStorage.setItem('#birthDate',birthDate);
    localStorage.setItem('input[name="gender"]:checked','input[name="gender"]:checked');
    localStorage.setItem('#address',address);
    localStorage.setItem('#country',country);
    localStorage.setItem('#city',city);

    alert("Data saved successfully!");

    // إعادة تعيين الحقول
    document.querySelector("#registrationForm").reset();
});
