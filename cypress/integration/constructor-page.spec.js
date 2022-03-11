import fixture from '../fixtures/auth.json';

describe('app works correctly', () => {
    before(() => {
        cy.visit('http://localhost:3000');
        cy.intercept('https://norma.nomoreparties.space/api/auth/user', { fixture: 'auth.json' }).as('getMethods');
    });

    it('load main page is ok', () => {
        cy.contains('Соберите бургер');
        cy.contains('Для начала выберите булку для бургера - перетащите ее прямо сюда');
    });

    it('test DnD', () => {
        cy.get('[class^=ingredients_ingredients__]').as('ingredientsContainer');
        cy.get('@ingredientsContainer').find('div').contains('Булки').next().as('buns');
        cy.get('@ingredientsContainer').find('div').contains('Соусы').next().as('sauces');
        cy.get('@ingredientsContainer').find('div').contains('Начинки').next().as('ingredients');
        cy.get('[class^=constructor-list_commonList__]').as('dropBox');

        cy.get('@buns').find('[class^=ingredient_ingredient__]').first().as('dragBun');
        cy.get('@sauces').find('[class^=ingredient_ingredient__]').first().as('dragSauce');
        cy.get('@ingredients').find('[class^=ingredient_ingredient__]').first().as('dragIngredient');

        cy.get('@dragBun').trigger('dragstart');
        cy.get('@dropBox').trigger('drop');

        cy.get('@dragSauce').trigger('dragstart');
        cy.get('@dropBox').trigger('drop');

        cy.get('@dragIngredient').trigger('dragstart');
        cy.get('@dropBox').trigger('drop');

        cy.get('@dropBox').should('contain', 'Краторная булка N-200i');
        cy.get('@dropBox').should('contain', 'Соус Spicy-X');
        cy.get('@dropBox').should('contain', 'Филе Люминесцентного тетраодонтимформа');
    });

    it('test open popup', () => {
        cy.get('[class^=button_button__]').as('button');

        cy.get('@button').click();

        cy.get('input:first').focus().type('testing@yandex.ru');
        cy.get('input:last').focus().type('12345');
        cy.get('[class^=button_button__]').click();

        cy.get('[class^=constructor-list_commonList__]').should('contain', 'Филе Люминесцентного тетраодонтимформа');
        cy.get('[class^=button_button__]').click();
        cy.get('[class^=popup_popup__content__]').as('popup');
        // setTimeout(() => {cy.get('@popup').should('contain', 'идентификатор заказа');}, 20000)
        cy.wait(25000).then(() => {
            cy.get('@popup')
                .should('contain', 'идентификатор заказа')
                .then(() => cy.get('[class^=popup_popup__cross__]').click());
        });
    });
});
