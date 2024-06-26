---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Amrik Vanthampur"]
---
# [Amrik Vanthampur](3-Mechanics\CLI\bestiary\npc/amrik-vanthampur-bgdia.md)
*Source: Baldur's Gate: Descent Into Avernus p. 30*  

Second son of Duke Thalamra Vanthampur of Baldur's Gate. Amrik loves to exchange pleasantries over drinks before conducting business. He has trained Laraelra's staff to recognize a variety of innocuous hand gestures that signal them to deliver drinks to the table. If he wants poison added to his clients' drinks, he has a secret sign for that. Hidden behind the bar is a small bottle containing four doses of torpor (see "Poisons" in chapter 8 of the Dungeon Master's Guide), which the kenku bartender can use to spike drinks when Amrik gives the signal.

```statblock
"name": "Amrik Vanthampur (BGDIA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md), charisma modifier"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Deception": !!int "6"
  "Insight": !!int "6"
  "Acrobatics": !!int "6"
"senses": "passive Perception 12"
"languages": "Common, Infernal"
"cr": "3"
"traits":
- "desc": "While Amrik is wearing light or no armor and wielding no shield, his AC\
    \ includes his Charisma modifier."
  "name": "Suave Defense"
"actions":
- "desc": "Amrik makes three dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- "desc": "Amrik hurls a smoke bomb up to 20 feet away. The bomb explodes on impact,\
    \ creating a cloud of black smoke that fills a 10-foot-radius sphere. The area\
    \ within the cloud is heavily obscured. A strong wind disperses the cloud, which\
    \ otherwise remains until the end of Amrik's next turn."
  "name": "Smoke Bomb (1/Day)"
"source":
- "BGDIA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/amrik-vanthampur-bgdia.webp"
```
^statblock