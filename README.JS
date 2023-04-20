// const settings = {
//     async: true,
//     crossDomain: true,
//     url: 'https://send.api.mailtrap.io/api/send',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Api-Token': ''
//     },
//     processData: false,
//     data: '{\n  "to": [\n    {\n      "email": "john_doe@example.com",\n      "name": "John Doe"\n    }\n  ],\n  "from": {\n    "email": "sales@example.com",\n    "name": "Example Sales Team"\n  },\n "subject": "Your Example Order Confirmation",\n  "text": "Congratulations on your order no. 1234",\n  "category": "API Test"\n}'
//   };
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });


$(document).ready(function () {
    const form = $('#my-form');
    const nameField = $('#name');
    const emailField = $('#email');
    const messageField = $('#message');
  
    form.submit(function (event) {
      event.preventDefault();
  
      const data = {
        "to": [
          {
            "email": "john_doe@example.com",
            "name": "John Doe"
          }
        ],
        "from": {
          "email": emailField.val(),
          "name": nameField.val()
        },
        "subject": "Відгук на сайті",
        "text": messageField.val(),
        "category": "Відгук на сайті"
      };
  
      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://send.api.mailtrap.io/api/send',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': 'eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjp7InRva2VuIjoiOGNkOThmYTg2ZDUwOTI0NzczNTRhMDUxZmZlMmE2NDUifX0.6tcCtAcdVPy3PM2X5sYLddreBy5afRsbBsq3t1S9NLo2ubEJG0OFaynFv3WM5-C3G1nNVrTKbhk_XmRbwd6OIA'
        },
        processData: false,
        data: JSON.stringify(data)
      };
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        alert('Ваш відгук успішно надіслано!');
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus, errorThrown);
        alert('Помилка надсилання відгука. Будь ласка, спробуйте ще раз пізніше.');
      });
    });
  });