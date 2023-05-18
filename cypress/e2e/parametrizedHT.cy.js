describe('HT', () => {

    const testLayouts = (firstName, lastName, email, website) => 

    function () {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('.columns > nb-layout-column:nth-child(1) > nb-card:nth-child(3) > nb-card-body:nth-child(2) > img:nth-child(1)').click ();
        cy.get('span.ng-tns-c141-9').click ();
        cy.get('span.ng-tns-c141-11').click ();
        cy.wait(2000);
        cy.get('#inputFirstName').type(firstName);
        cy.get('#inputFirstName').should('contain.value', firstName);
        cy.get('#inputLastName').type(lastName);  
        cy.get('#inputLastName').should('contain.value', lastName);
        cy.get('#inputEmail').type(email);
        cy.get('#inputEmail').should('contain.value', email);
        cy.get('#inputWebsite').type(website);
        cy.get('#inputWebsite').should('contain.value', website)
    };

    it('user1', testLayouts('Iryna', 'Bilyk', 'testmail@mail.com', 'testwebsite.com'));
    it('user2', testLayouts('Alex', 'Malyshenko', 'testmail1@mail.com', 'testwebsite1.com'));

})

// describe('HT', () => {
//     const tests = [
//         {testData: 'Iryna', expectedResult: 'Iryna'},
//         {testData: 'Bilyk', expectedResult: 'Bilyk'},
//         {testData: 'bilyk.iren@gmail.com', expectedResult: 'bilyk.iren@gmail.com'},
//         {testData: 'bilyk.iren.com', expectedResult: 'bilyk.iren.com'}
//     ]


//     tests.forEach(({testData, expectedResult}) => {
//         it(`Test ${testData}`, () => {
//             cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//             cy.get('id="inputFirstName"').type(testData);
//             cy.get('id="inputFirstName"').should('contain.value', expectedResult);
//             cy.get('id="inputLastName"').type(testData);
//             cy.get('id="inputLastName"').should('contain.value', expectedResult);
//             cy.get('id="inputEmail"').type(testData);
//             cy.get('id="inputEmail"').should('contain.value', expectedResult);
//             cy.get('id="inputWebsite"').type(testData);
//             cy.get('id="inputWebsite"').should('contain.value', expectedResult)

//         })
//     })
// })