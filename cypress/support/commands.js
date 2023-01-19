
Cypress.Commands.add('setToken', function(){

    cy.request({
        method: 'POST',
        url: 'https://www.strava.com/oauth/token',
        headers: {
            Accept: 'application/json, text/plain, */*'
        },
        body: {
            client_id: '95803',
            client_secret: '4ea047fbcbf3cf357a9bf4d56b7d67d7727188e0',
            refresh_token: 'c7b56ae97f5f79c5ed0750448f47aa6cf8e4b9c1',
            access_token: '22abd65e0942e653fcf069ac07b182139df83f4f',
            grant_type: 'refresh_token'
        },
    }).then(function(response){
        expect(response.status).to.eql(200)
        cy.log(response.body.access_token)
        Cypress.env('token', response.body.access_token)

    })

})