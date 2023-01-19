
describe('GET https://www.strava.com/api/v3', function(){

    before(function(){
        cy.setToken()
    })

    it('it should return the activities of an athlete for a specific identifier', function(){

        cy.api({
            method: 'GET',
            url: '/activities',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            } 
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.body)
        })
    })

    it('It should return the activity stats of an athlete', function(){
      
        cy.api({
            method: 'GET',
            url: '/athletes/109651826/stats',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.body)
        })
    }) 



}) 




