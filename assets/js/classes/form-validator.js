class FormValidator {
  constructor(form, onSubmit,options) {
    this.form = form;
    this.onSubmit = onSubmit;
    this.options = {
      validateOnEntry: true,
      preventDefault: true
    };
    if (typeof options === 'object') Object.assign(this.options,options);
  }

  initialize () {
    this.form.addEventListener("submit", (e) => {
      if (this.options.preventDefault) e.preventDefault();
      this.getFields().forEach((input) => {
        this.validateField(input);
      });
      this.form.classList.remove("needs-validation");
      this.form.classList.add("was-validated");
      if (this.form.querySelectorAll(".is-invalid").length === 0) this.onSubmit(e,this);
    });

    if (this.options.validateOnEntry) {
      this.getFields().forEach((input) => {
        input.addEventListener("input", (event) => {
          this.validateField(input);
        });
      });
    }
  }

  getFormData () {
    return new FormData(this.form);
  };

  getEntries () {
    return Object.fromEntries(this.getFormData());
  };

  getFields () {
    return Object.keys(this.getEntries()).map( (n) => {
      return this.form.querySelector('[name="'+n+'"]')
    });
  };

  clean () {
    if (!this.form.noValidate) {
      this.form.classList.replace("was-validated", "needs-validation");
    }
    this.getFields().forEach((input) => {
      input.classList.remove("is-invalid", "is-valid");
    });
    this.form.reset();
  };

  validateField(field) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    field.classList.remove("is-valid","is-invalid");
    if (!this.form.noValidate) {
      if (field.matches(':invalid')) field.classList.add("is-invalid");
    } else {
      if (field.required && field.value.trim() === "") field.classList.add("is-invalid");
      if (field.type === "email" && !regexEmail.test(field.value)) field.classList.add("is-invalid");
    }
    if (field.dataset.equalTo && field.value !== this.getEntries()[field.dataset.equalTo]) field.classList.add("is-invalid");
    
    if (!field.classList.contains("is-invalid")) field.classList.add("is-valid");
  }
}
