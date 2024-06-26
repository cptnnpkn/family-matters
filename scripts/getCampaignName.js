function getCampaignName (tp) {
    const thisFolder = tp.file.folder(false)
    if (thisFolder == "62.01.02 Sessions")
    {
        return "62.01 Family Matters";
    }
    return thisFolder;
}
module.exports = getCampaignName;