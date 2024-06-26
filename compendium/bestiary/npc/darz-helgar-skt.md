---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/skt
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/illuskan-human
statblock: inline
aliases: ["Darz Helgar"]
---
# [Darz Helgar](3-Mechanics\CLI\bestiary\npc/darz-helgar-skt.md)
*Source: Storm King's Thunder p. 253*  

In his youth, Darz was a member of the Xanathar Thieves' Guild in Waterdeep. After serving ten years in prison for his crimes, he cut all ties to the city and moved north to be a campground caretaker.

Ideal:"You can run from your past, but you can't hide from it."

Bond:"I've made a new life in Triboar. I'm not gonna run away this time."

Flaw:"I have no regrets. I do whatever it takes to survive."

```statblock
"name": "Darz Helgar (SKT)"
"size": "Medium"
"type": "humanoid"
"subtype": "Illuskan human"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "2"
  "Sleight of Hand": !!int "4"
  "Stealth": !!int "4"
"senses": "passive Perception 10"
"languages": "Common"
"traits":
- "desc": "Darz deals an extra 7 (2d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Darz that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and Darz doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- "desc": "In his youth, Darz was a member of the Xanathar Thieves' Guild in Waterdeep.\
    \ After serving ten years in prison for his crimes, he cut all ties to the city\
    \ and moved north to be a campground caretaker.\n\nIdeal: \"You can run from your\
    \ past, but you can't hide from it.\"\n\nBond: \"I've made a new life in Triboar.\
    \ I'm not gonna run away this time. \"\n\nFlaw: \"I have no regrets. I do whatever\
    \ it takes to survive.\""
  "name": "Roleplaying Information"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 4 (1d4 + 2) piercing damage. Darz carries twenty sling stones."
  "name": "Sling"
"source":
- "SKT"
"image": "/3-Mechanics/CLI/bestiary/npc/token/darz-helgar-skt.webp"
```
^statblock