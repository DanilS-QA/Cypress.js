
describe('Автотесты для формы логина и пароля', function () {
 it('Проверка. Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
    })

 it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type ('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

  it('Проверка. Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ('Test_1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

it('Проверка. Не верный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('Test_1@dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

it('Проверка на негативный кейс валидации. Ввод логина без @ и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('germandolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

it('Проверка ввод букв разного регистра. Ввод логина с буквами разного регистра и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('GerMan@Dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})




















