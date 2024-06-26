---
NoteIcon: location
faction: House of Inspired Hands
location: The Cloudsong
world: Toril
campaign: 62.01 Family Matters
date: 2024-06-25
description: Airship developed by the House of Inspired Hands of Waterdeep. Project is headed up by Quoji Enbatene and captained by Aretik Vorlin. Chief Technology Officer Alden Shea maintains the ship engine.
race: Airship
gender: Airship
class: Airship
---
# [[The Cloudsong (Airship)]]

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: <% tp.file.title %>
image: 
 - [[Cloudsong Deck.jpg|On Deck]]
 - [[Cloudsong below Deck.jpg|Below Deck]]
height: 1000px
width: 70%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 50
long: 50
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: 0
### Max zoom is 18. 
maxZoom: 18
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: 14.5
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: feet
scale: 1
darkMode: false
```

```dataview
table description as "Description" from "60 Games/62 Campaigns/62.01 Family Matters/62.01.03 PCs"
WHERE contains(location,"The Cloudsong")
SORT file.name ASC
```

```dataview
table description as "Description" from "60 Games/62 Campaigns/62.01 Family Matters/62.01.04 NPCs"
WHERE contains(type,"npc") and contains(location,"The Cloudsong")
SORT file.name ASC
```