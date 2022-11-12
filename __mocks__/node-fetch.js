const fetch = jest.fn(
    (links) => { 
        if(links.includes('404')){
            return Promise.resolve( {status: 404} )
        }
       return Promise.resolve( {status: 200} )
    });

//export default
module.exports = fetch;
