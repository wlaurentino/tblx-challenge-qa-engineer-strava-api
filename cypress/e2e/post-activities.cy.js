
describe('POST https://www.strava.com/api/v3', function(){

    before(function(){
        cy.setToken()
    })

    const timeNow = new Date();

    it('It should create a manual activity for an athlete', function(){

        cy.api({
            method: 'POST',
            url: '/activities',
        headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            },
        body: {
            name: 'test_run',
            sport_type: 'Run',
            start_date_local: timeNow,
            elapsed_time: '3600'
            }
        }).then(function(response){
            expect(response.status).to.eql(201)
            cy.log(response.body.id)
        })
    })
})