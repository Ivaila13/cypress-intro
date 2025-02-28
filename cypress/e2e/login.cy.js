describe('Login tests', () => {

    // Изпълнява се преди всеки тест
    beforeEach(() => {
      // Посещава страницата на приложението
      cy.visit('http://localhost:8080/'); // Или URL-то на твоето приложение
    });
  
    it('enter submit without email and password', () => {
      // Кликва върху бутона за изпращане на формата без да попълва полетата
      cy.get('[data-test-id="submit"]').click();
      // Проверява дали съобщението за грешка на полето "email" е видимо
      cy.get('[data-test-id="email-error"]').should('be.visible');
      // Проверява дали съобщението за грешка на полето "password" е видимо
      cy.get('[data-test-id="password-error"]').should('be.visible');
    });
  
    it('enter invalid email', () => {
      // Въвежда невалиден имейл
      cy.get('[data-test-id="email"]').type('invalid_email');
      // Кликва върху бутона за изпращане
      cy.get('[data-test-id="submit"]').click();
      // Проверява дали съобщението за грешка на полето "email" е видимо
      cy.get('[data-test-id="email-error"]').should('be.visible');
    });
  
    it('enter valid email and password', () => {
      // Въвежда валиден имейл
      cy.get('[data-test-id="email"]').type('test@example.com');
      // Въвежда валидна парола
      cy.get('[data-test-id="password"]').type('validpassword123');
      // Кликва върху бутона за изпращане
      cy.get('[data-test-id="submit"]').click();
      // Може да провериш дали след успешен вход се пренасочваш към друга страница или се показва съобщение за успех
      cy.url().should('include', '/dashboard'); // Примерен пренасочващ URL
    });
  
  });
  