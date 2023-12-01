# automated-qa-playwright
Playwright automation skeleton for e2e testing

# Getting Started
1. Clone the repository
   git clone https://github.com/Mulalic97/automated-qa-playwright.git

2. Navigate to the project and run the setup command
   npm i

3. Run tests
   # npm run test:{environment}
   npm run test:ci
   # run individual tests
   npx playwright test {**/*.ts}
   # run headed tests
   npx playwright test --headed
