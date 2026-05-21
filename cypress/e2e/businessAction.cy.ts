describe("Business AI Section", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(7000) // Wait for splash screen if needed
  })

  it("should render the Business AI Section with title and description", () => {
    cy.contains("h2", "AI Models tailored for your business needs")
      .should("exist")
      .and("be.visible")

    cy.contains(
      "p",
      "Leverage the power of AI to automate, analyze, and optimize your workflows."
    )
      .should("exist")
      .and("be.visible")
  })

  it("should display category buttons", () => {
    cy.get("button").should("have.length.at.least", 1)
    cy.get("button").first().should("be.visible")
  })

  it("should highlight the active category button when clicked", () => {
    cy.get("button").contains("Market Prediction").as("activeButton")
    cy.get("@activeButton").should("have.class", "bg-[#03217F] text-white")
  })
})
