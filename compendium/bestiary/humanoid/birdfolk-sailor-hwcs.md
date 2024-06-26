---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-birdfolk
statblock: inline
aliases: ["Birdfolk Sailor"]
---
# [Birdfolk Sailor](3-Mechanics\CLI\bestiary\humanoid/birdfolk-sailor-hwcs.md)
*Source: Humblewood Campaign Setting p. 191*  

For birdfolk who take up the seafaring trade, their home is as much on the ocean as it is at port. They relish the salt spray and stiff winds, finding the closed spaces of forest life to be stifling compared to the wide-open expanse of the sea.

> [!note] Peculiar Design
> 
> Birdfolk ship design often causes confusion among other seafaring races due to the relative absence of rigging. While cordage is needed to keep sails in place and cargo stored, nets and climbing ropes prove less necessary when the crew is capable of limited flight. A birdfolk sailor can simply lash a rope to their leg, open their wings, and let the ocean breeze carry them up to the sails or to a lookout post on the main mast.
^peculiar-design

```statblock
"name": "Birdfolk Sailor (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any birdfolk"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "3"
"senses": "passive Perception 10"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "1/8"
"traits":
- "desc": "When falling at least 10 feet, the sailor can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/birdfolk-sailor-hwcs.webp"
```
^statblock