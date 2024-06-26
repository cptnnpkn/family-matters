---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Ordeal Tree"]
---
# [Ordeal Tree](3-Mechanics\CLI\bestiary\plant/ordeal-tree-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 39*  

> [!quote]-  
> 
> In the primeval wood rises the ordeal tree. Should you hang from this hoary pillar of begone time for seven moons, you will gain power of the ancients.

## Salvage

The heartwood of an ordeal tree can be turned into an incense that, when inhaled, acts as a cure for removing powerful curses. Obtaining the wood requires a successful DC 15 Dexterity ([Sleight of Hand](/3-Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)) check.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Lashing yourself to an ordeal tree for 7 days can grant a petitioner power based on their heart's desire.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The blessings of the ordeal tree often come with curses.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Ordeal trees only grant their blessings to those whose hearts are evil.  

```statblock
"name": "Ordeal Tree (GHLoE)"
"size": "Gargantuan"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "186"
"hit_dice": "12d20 + 60"
"stats":
- !!int "24"
- !!int "7"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 13"
"languages": "Sylvan"
"cr": "12"
"traits":
- "desc": "A humanoid may bind themselves to the ordeal tree. Each day the petitioner\
    \ is bound to the tree, they must succeed on a Constitution saving throw with\
    \ a DC equal to 15 + number of days bound or suffer a level of [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion).\
    \ If they survive for 7 days, the ordeal tree may choose to grant a blessing.\
    \ The tree only does this if the humanoid is evil, once per humanoid. If the humanoid\
    \ is neutral or good, the tree attacks them.\n\nThe blessing is tailored to the\
    \ petitioner's desires (GM discretion) but might include +1 to an ability score,\
    \ a feat, expertise in a skill, or the ability to innately cast a 3rd-level (or\
    \ lower) spell once per day using Charisma as the petitioner's spellcasting ability.\n\
    \nThe petitioner also contracts the curse of foul blight (Grim Hallow Campaign\
    \ Guide). If the petitioner commits a profoundly evil act every day, the curse\
    \ never advances beyond stage 1. If the petitioner fails to commit the act, the\
    \ curse automatically escalates."
  "name": "Corrupt Desire"
- "desc": "While the ordeal tree remains motionless, it is indistinguishable from\
    \ a normal tree."
  "name": "False Appearance"
- "desc": "The ordeal tree knows the alignment and desires of any creature that binds\
    \ itself to the tree."
  "name": "Heart Sight"
"actions":
- "desc": "The ordeal tree makes two slam attacks and one attack with a vine or enervate."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 29\
    \ (4d10 + 7) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +11 to hit, reach 20 ft., one target. Hit: 20\
    \ (3d8 + 7) slashing damage, and the creature is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 17)."
  "name": "Vine"
- "desc": "A creature bound to the ordeal tree or [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it must succeed on a DC 17 Constitution saving throw or suffer 44 (8d10)\
    \ necrotic damage. The ordeal tree gains temporary hit points equal to half the\
    \ damage done."
  "name": "Enervate (2/Day)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/plant/token/ordeal-tree-ghloe.webp"
```
^statblock