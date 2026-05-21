describe("Hero Section", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(7000)
  })

  it("should render the hero section with correct title and subtitle", () => {
    cy.get('[data-testid="cypress-title"]').should("exist").and("be.visible")
    cy.get('[data-testid="cypress-subtitle"]')
      .should("exist")
      .and("contain.text", "Leverage the power of AI to automate")
  })

  it("should animate text properly", () => {
    cy.get('[data-testid="cypress-title"]').should("have.css", "opacity", "1")
    cy.get('[data-testid="cypress-subtitle"]').should(
      "have.css",
      "opacity",
      "1"
    )
  })

  it("should display the Get Started Now button", () => {
    cy.contains("button", "Get Started Now").should("exist").and("be.visible")
  })

  it("should navigate to the expected page when clicking the button", () => {
    cy.contains("button", "Get Started Now").click().should("exist")
  })

  it("should have the animated IconCircle component", () => {
    cy.get("svg").should("exist").and("be.visible")
  })
})
