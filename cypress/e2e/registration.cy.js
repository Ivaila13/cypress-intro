describe('Registration tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080/')
  })

  it('enter submit without valid user name',() => {
    cy.get('[data-test-id="submit"]').click();

    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  })


  it('full name error is cleared after valid input is added',() => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname"').type("John Doe");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('not.exist');
  })

  it('enter invalid email',() => {
    cy.get('[data-test-id="email"').type("invalid_email");
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  })

  it('enter valid data and click submit',()=> {
    cy.get('[data-test-id="fullname"').type("John Doe");
    cy.get('[data-test-id="email"').type("john_does@email.com");
    cy.get('[data-test-id="password"').type("12345678");
    cy.get('[data-test-id="gender"').select("Male");
    cy.get('[data-test-id="date"').type("2000-01-01");
    cy.get('[data-test-id="submit"]').click();
    cy.url().should('eq', 'http://localhost:8080/thank-you?') 
  })
})
describe('Registration tests', () => {

  // Изпълнява се преди всеки тест
  beforeEach(() => {
    // Посещава началната страница на приложението
    cy.visit('http://localhost:8080/');
  });

  it('enter submit without valid username', () => {
    // Кликва върху бутона за изпращане на формата без да попълва името
    cy.get('[data-test-id="submit"]').click();
    // Проверява дали съобщението за грешка на полето "fullname" е видимо
    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  });

  it('enter invalid email', () => {
    // Въвежда невалиден имейл
    cy.get('[data-test-id="email"]').type('invalid_email');
    // Кликва върху бутона за изпращане
    cy.get('[data-test-id="submit"]').click();
    // Проверява дали съобщението за грешка на полето "email" е видимо
    cy.get('[data-test-id="email-error"]').should('be.visible');
  });

  it('select invalid gender', () => {
    // Избира невалидна стойност за пол от падащото меню
    cy.get('[data-test-id="gender"]').select('Invalid');
    // Кликва върху бутона за изпращане
    cy.get('[data-test-id="submit"]').click();
    // Проверява дали съобщението за грешка на полето "gender" е видимо
    cy.get('[data-test-id="gender-error"]').should('be.visible');
  });

  it('enter short password', () => {
    // Въвежда твърде кратка парола
    cy.get('[data-test-id="password"]').type('short');
    // Кликва върху бутона за изпращане
    cy.get('[data-test-id="submit"]').click();
    // Проверява дали съобщението за грешка на полето "password" е видимо
    cy.get('[data-test-id="password-error"]').should('be.visible');
  });

  it('enter non-matching passwords', () => {
    // Въвежда различни пароли в двата полета
    cy.get('[data-test-id="password"]').type('password123');
    cy.get('[data-test-id="confirm-password"]').type('password');
    // Кликва върху бутона за изпращане
    cy.get('[data-test-id="submit"]').click();
    // Проверява дали съобщението за грешка на полето "confirm-password" е видимо
    cy.get('[data-test-id="confirm-password-error"]').should('be.visible');
  });

});
