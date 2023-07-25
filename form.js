class FormHandler {
    async validateForm() {
      const form = document.getElementById('myForm');
      if (form.checkValidity()) {
        // All fields are filled
        return true;
      } else {
        // Some fields are missing, show an error message or handle it as needed
        return false;
      }
    }

    async generateSentence() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
      const country = document.getElementById('country').value;

      if (await this.validateForm()) {
        const sentence = `My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`;
        console.log(sentence);
      } else {
        console.log('Please fill in all the fields.');
      }
    }
  }

  const formHandler = new FormHandler();
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formHandler.generateSentence();
  });
