///<reference types="cypress"/>
describe('flipkart Auto Suggest API', function () {
    
    it('flipkart Auto Suggest API', function () {
        cy.request({
            method: "POST",
            url: "https://1.rome.api.flipkart.com/api/4/discover/autosuggest",
            headers: {
                "Accept": "/",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9",
                "Connection": "keep-alive",
                "Content-Type": "application/json",
                "Host": "1.rome.api.flipkart.com",
                "Origin": "https://www.flipkart.com",
                "Referer": "https://www.flipkart.com/",
                "sec-ch-ua": "'Not_A Brand';v='99', 'Google Chrome';v='109', 'Chromium';v='109'",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "Windows",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
                "X-User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 FKUA/website/42/website/Desktop"
            },body:{
                "query": "i phone",
                "contextUri": "/",
                "marketPlaceId": "FLIPKART",
                "types": [
                    "QUERY",
                    "QUERY_STORE",
                    "PRODUCT",
                    "RICH",
                    "PARTITION"
                ],
                "rows": 10,
                "zeroPrefixHistory": true,
                "userTimeStamp": 1674313306841,
                "searchBrowseHistory": [
                    
                    {
                        "marketPlaceId": "FLIPKART",
                        "uri": "/search?q=redmi+note+12+pro+plus&otracker=AS_Query_HistoryAutoSuggest_2_0&otracker1=AS_Query_HistoryAutoSuggest_2_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=2&as-type=HISTORY",
                        "timestamp": 1673887372054
                    }
                ]
            }
            
        }).then((resp)=>{
            expect(resp.status).to.eql(200)
        })
    })
})