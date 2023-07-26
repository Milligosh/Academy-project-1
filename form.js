document.addEventListener('DOMContentLoaded', () => {
  class FormHandler {
    async validateForm() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
      const country = document.getElementById('country').value;

      if (!firstName || !lastName || !age || !country) {
        throw new Error("All fields are required.");
      }
    }

    generateSentence() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
      const country = document.getElementById('country').value;

      const sentence = `My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`;
      return sentence;
    }
  }

  const formHandler = new FormHandler();

  document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      await formHandler.validateForm();
      const sentence = formHandler.generateSentence();
      alert(sentence);
    } catch (error) {
      alert(error.message);
    }
  });
});