---
osdidianUIMode: preview
---


> [!cards|4]
> **[[Map of Faerun]]**
> [![[Sword-Coast-Map_HighRes.jpg\|sban htiny ctr]]](Map%20of%20Faerun)
> 
> **[[60 Games/62 Campaigns/62.01 Family Matters/World|World]]**
> ![[60 Games/62 Campaigns/62.01 Family Matters/World|sban htiny ctr]]


> [!infobox]
> # Session Journals
>  ```dataview
TABLE WITHOUT ID link(file.name) as "Session Date", status, players
from "60 Games/62 Campaigns/62.01 Family Matters/62.01.02 Sessions"
where (NoteIcon = "session")
SORT file.name DESC
LIMIT 10

```dataview
TABLE WITHOUT ID link(file.name) as "Character Name", Player, Class, Race, level, Role
from "60 Games/62 Campaigns/62.01 Family Matters/62.01.03 PCs"
where (NoteIcon = "player")
where (status = "active")
```

# Recently Modified NPCs

```dataview
TABLE WITHOUT ID link(file.name) as "NPC Name", Gender, Race, Age, Location, Faction
FROM "60 Games/62 Campaigns/62.01 Family Matters/62.01.04 NPCs"
WHERE (NoteIcon = "npc")
SORT file.mtime DESC
LIMIT 10
```

# Recently Modified Location

```dataview
TABLE WITHOUT ID link(file.name) AS "Location Name", type, government, community-size, size, population
FROM "60 Games/62 Campaigns/62.01 Family Matters/62.01.05 Locations"
WHERE (type = "location")
SORT file.mtime DESC
LIMIT 10
```

# Recently Modified Notes
```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "z_Assets")
    AND !contains(file.path, "Inline Scripts")
    AND !contains(file.path, "z_Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```

