beforeEach(() => {
  cy.visit("http://localhost:3001");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать").should("be.visible");
});

const bookFirst = {
  title: "Иван Васильевич меняет профессию",
  description: "Прошлое и будущее столкнулись в квартире ученого.",
  author: "Михаил Булгаков",
};

const bookSecond = {
  title: "Гарри Поттер и кубок огня",
  description: "История мальчика, который выжил.",
  author: "Джоан Роулинг",
};

const bookThird = {
  title: "Игрок",
  description: "Мысли и переживания игромана.",
  author: "Федор Достоевский",
};

describe("Favorite book spec", () => {
  it("Should add new book", () => {
    cy.addBook(bookFirst);
    cy.get(".card-title").should("contain.text", bookFirst.title);
  });

  it("Should add new book to favorite", () => {
    cy.addFavoriteBook(bookSecond);
    cy.visit("/favorites");
    cy.get(".card-title").should("contain.text", bookSecond.title);
  });

  it("Should add book to favorite through 'Book list' page", () => {
    cy.addBook(bookFirst);
    cy.contains(bookFirst.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.visit("/favorites");
    cy.contains(bookFirst.title).should("be.visible");
  });

  it("Should delete book from favorite", () => {
    cy.visit("/favorites");
    cy.contains(bookSecond.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.contains(bookSecond.title).should("not.exist");
  });
});
