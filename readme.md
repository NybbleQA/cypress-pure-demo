			Cypress/Cucumber -- Project Creation Guidelines

1) *Global dependencies

	- Node.JS --> Ver. 16.17.0 (Windows - Current)
		https://nodejs.org/ (LTS VERSION IF POSSIBLE)

	- Git / Git Bash --> Ver. 2.31.1.windows.1 (Windows)
		https://git-scm.com/downloads

	- Git repository (Project)
		https://github.com/NybbleQA

	- Docker --> Ver. 20.10.17 (Windows - Current)
		https://www.docker.com/products/docker-desktop/


	- (Desired-Optional) Visual Studio Code --> Ver. 1.74.2 (Windows)
		https://code.visualstudio.com/download

	- (Desired-Optional) Java 8 (for running Allure reports)


2) *General annotations/acronyms

	"Execute" = to run a command by console line (bash/powershell/cmd)
	"CL" = command line
	"RegEx" = regular expressions
	"POM" = page object model 

******************************** 3) CREATING FIRST PROJECT FROM SCRATCH ********************************

	**************************** 3.1) SET UP A NODE.JS PROJECT ****************************

	- Create a new folder
	- Execute Git Bash inside folder (or move to folder's directory manually through  git/powershell terminal)
	- Execute "npm init" --> Complete project's information =
		
		*package name: "cypress-10plus-demo"
		*version: 1.0.0 (default - just press enter)
		*description: "project to test instructions guideline"
		*entry point: (index.js) --> (default)
		*test command: "test"
		*git repository: your_repository_url
		*keywords: qa cypress testing javascript typescript
		*author: Whoever is reading this right now
		*license: "ISC" (default)

	(NOTE: ADDING "-y" parameter to "npm init" command will set fields by default and skip previous steps)

	- (Desired) Execute "code ." to open the folder in Visual Studio Code IDE // Or open project in any other IDE.

	**************************** 3.2) SET UP CYPRESS PROJECT ****************************

	- Execute "npm install cypress --save-dev"

	- Inside package.json, create a script (inside scripts section) named "script_name": "cypress open" and SAVE CHANGES --> This will generate the cypress folder structure
	- Execute "npm run script_name" --> Cypress client will open
	
	- Select "E2E Testing" option --> Cypress will list the files & folders added to the project
	- Click "Continue" button
	- Select a browser (Electron is the default one, native for Cypress)
	- Click "Start E2E Testing in selected_browser"
	- Close both cypress client and application

	**************************** 3.3) SET UP & RUN AN EXAMPLE TEST ****************************

	
	- Inside package.json, create a script (inside scripts section) named "script_run_name": "cypress run" and SAVE CHANGES
	- Execute "npm run script_run_name" --> Cypress runner will start executing in CL. -->
	("Can't run because no spec files were found." error message will display)

	- Inside "cypress/e2e" folder, create a filled called "example.cy.js" --> here we'll start writing tests with cypress methods library
	- Inside "example.cy.js" file, paste the following lines:

		describe('template spec for a login in todo.ly', () => {
	  		it('passes', () => {
	    		//  FIRST/SETUP ACTIONS - (GIVEN)
			    cy.visit('https://todo.ly')
			    //  ACTIONS OVER PAGE ELEMENTS - (WHEN)
			    cy.get('.HPHeaderLogin > a > img').click()
			    cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type("fhr1@fhr1.com")
			    cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type("12345")
			    cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
			    //  ASSERTION/S (THEN)
			    cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout').should('be.visible')
	  		})
		})

	- Save changes (ALWAYS)

	- Now we can execute both "npm run" commands (from package.json) containing "cypress open" AND "cypress run" scripts --> both should get access to the created ".cy.js" example file and run the test.