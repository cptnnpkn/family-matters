---
aliases: games
banner: "![[games-banner.png]]"
banner_y: 0.86
---
# [[Games Index]]

## List of current campaigns


```button
name Add New World
type command
action QuickAdd: Template - Add TTRPG world
```
^button-btnAddNewWorld

```dataviewjs
let totalGames;
function getNumOfGames(campaign) {
	let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"60 Games/62 Campaigns/${campaign}"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === campaign) {
	                totalGames = totalGames +1;
                    return true;
                }
            }
        }).length
	return numOfGames
}

dv.table(["Campaign","System","Sessions", "Role","Status"],dv.pages('"60 Games/62 Campaigns"')
  .where(b => b.type === "world")
  .sort(b => b.status)
  .map(b => [dv.fileLink(b.file.path,false,[b.campaign]),b.system,getNumOfGames(b.campaign),b.role,b.status]))
```

