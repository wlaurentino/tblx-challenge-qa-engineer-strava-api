
describe('GET https://www.strava.com/api/v3', function(){

    before(function(){
        cy.setToken()
    })

    it('It should return the currently authenticated athlete', function(){

        cy.api({
            method: 'GET',
            url: '/athlete',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.body)
        })
    })
    
    it('It should return the authenticated athletes heart/power zones', function(){

        cy.api({
            method: 'GET',
            url: '/athlete/zones',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.body)
        })
    })

    it('It should return a list of the routes created by the authenticated athlete', function(){

        cy.api({
            method: 'GET',
            url: 'athletes/109651826/routes',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.log)
        })
    })

    it('It should return a list of the clubs of the authenticated athlete', function(){

        cy.api({
            method: 'GET',
            url: '/athlete/clubs',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.log)
        })
    })
}) 




