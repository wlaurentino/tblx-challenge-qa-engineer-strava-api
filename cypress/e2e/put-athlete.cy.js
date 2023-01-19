
describe('PUT https://www.strava.com/api/v3', function(){

    before(function(){
        cy.setToken()
    })

    it('It should update the currently authenticated athlete', function(){

        cy.api({
            method: 'PUT',
            url: '/athlete',
        headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            },
        body: {
            weight: '94'
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log(response.body)
        })
    })
})