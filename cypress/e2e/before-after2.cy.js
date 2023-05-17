 describe("Before Method", () => {

before(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})
after(() => {
  cy.log("Hello")
})
  
it("Test 1", () => {
  cy.get('[placeholder="Jane Doe"]').type('Hello');
  
})
  
it("Test 2", () => {
  cy.get('[placeholder="Jane Doe"]').type('Hello');
})
})

describe("Before Each Method", () => {

beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})
after(() => {
  cy.log("Hello")
})
  
it("Test 1", () => {
  cy.get('[placeholder="Jane Doe"]').type('Hello');
  
})
  
it("Test 2", () => {
  cy.get('[placeholder="Jane Doe"]').type('Hello');
})

})

describe("After Method", () => {
beforeEach(() => {
cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

cy.log(`Open "Form Layouts" page...`);
cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
cy.get('[title="Forms"]').click();
cy.get('[title="Form Layouts"]').click();
})
after(() => {
  cy.log("Hello")
})

it("Test 1", () => {
  cy.get('[placeholder="Jane Doe"]').type('Hello');

})

it("Test 2", () => {
  cy.get('[placeholder="Jane Doe"]').type('Hello');
})
})

describe("After Each Method", () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  
    cy.log(`Open "Form Layouts" page...`);
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })

  afterEach(() => {
    cy.log("Hello")
  })
  
  it("Test 1", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
  it("Test 2", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
})


it.only("Test retries", {retries: 2}, () => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.log(`Open "Form Layouts" page...`);
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
  cy.get('[placeholder="Jane Doe"]').type('Hello');
})
