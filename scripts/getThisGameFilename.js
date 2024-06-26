module.exports = (params) => {
    console.log(params);
    let thisCampaign = params.app.workspace.getActiveFile().parent.path.slice(22);
    let thisCampaignPrefix = thisCampaign.slice(0,5)
    let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"60 Games/62 Campaigns/${thisCampaign}/${thisCampaignPrefix}.02 Sessions"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === thisCampaign) {
                    return true;
                }
            }
        }).length

    numOfGames = JSON.stringify(numOfGames+1);
    while (numOfGames.length < 3) {
        numOfGames = "0" + numOfGames;
    }
    
    // Get the date
    let dateNow = moment().format('YYYYMMDD'); // now() -> 20230123

    // Put filename together
    let filename = numOfGames + '_' + dateNow;
    params.variables["thisGameFilename"] = filename;
    params.variables["folderName"] = '60 Games/62 Campaigns/' + thisCampaign;
    params.variables["sessionFolder"] = '60 Games/62 Campaigns/' + thisCampaign + '/' + thisCampaignPrefix + '.02 Sessions'
};