function getThisGameNum (tp) {
    const fs = require('fs');
    let thisCampaign = ((tp.file.path(false)).split("/"))[3];
    let thisPrefix = thisCampaign.slice(0,5);
    //console.log(app.plugins.plugins.dataview.api.pages(`"60 Games/62 Campaigns/${thisCampaign}/${thisPrefix}.02 Sessions"`));
    let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"60 Games/62 Campaigns/${thisCampaign}/${thisPrefix}.02 Sessions"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === thisCampaign) {
                    // console.log('sessionNum: ' + page.sessionNum);
                    return true;
                }
            }
        }).length
    // console.log('numOfGames: ' + numOfGames);
    numOfGames = JSON.stringify(numOfGames+1);
    while (numOfGames.length < 3) {
        numOfGames = "0" + numOfGames;
    }
    // console.log('numOfGames after adding: ' + numOfGames);
    return numOfGames;
}
module.exports = getThisGameNum;