---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Lord of the Feast"]
---
# [Lord of the Feast](3-Mechanics\CLI\bestiary\monstrosity/lord-of-the-feast-dodk.md)
*Source: Dungeons of Drakkenheim p. 211*  

This horrific albino garmyr stands well over twelve feet tall. He is covered in a mass of yellowish-white mangy fur, bloodstained and scarred from countless battles, and clad in a patchwork armour of leather, chain, and bladed plate with trophies—mummified heads—hanging from his belt. A mane of bony spines and tufts of barbed grey hair jut out from his head and down his back to a long white tail braided with skulls and bone fragments. His snarling visage is filled with long, razor-sharp fangs and smouldering red eyes. The Lord of The Feast holds an oversized longbow, strung with thick sinew. A quiver on his back holds enormous arrows, some bristling with barbed snares, others connected to coils of chains around the beast's wrists, while others are tipped with delerium shards.

```statblock
"name": "Lord of the Feast (DoDk)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "228"
"hit_dice": "24d10 + 96"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "11"
- !!int "18"
- !!int "13"
"speed": "30 ft., climb 30 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "9"
  "Wisdom": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "14"
  "Perception": !!int "14"
  "Survival": !!int "9"
"senses": "darkvision 120 ft., passive Perception 24"
"languages": "Abyssal"
"cr": "15"
"traits":
- "desc": "If the Lord of the Feast fails a saving throw, he can choose to succeed\
    \ instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The Lord of the Feast regains 20 hit points at the start of his turn if\
    \ he has at least 1 hit point remaining."
  "name": "Regeneration"
- "desc": "Being within 5 feet of a hostile creature doesn't impose disadvantage on\
    \ the Lord of the Feast's ranged attack rolls."
  "name": "Close-Quarters Hunter"
- "desc": "The Lord of the Feast has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks. He can pinpoint the position of any creature within 120 feet of him\
    \ that is [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)."
  "name": "Predatory Senses"
"actions":
- "desc": "The Lord of the Feast makes three attacks: either one with each of its\
    \ different arrow attacks, or one with his bite and two with his claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15\
    \ (2d10 + 4) piercing damage plus 18 (4d8) necrotic damage. A target hit by\
    \ this attack must succeed on a DC 17 Constitution saving throw or gain one level\
    \ of contamination."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft, one target. Hit: 11\
    \ (2d6 + 4) slashing damage."
  "name": "Claws"
- "desc": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit:\
    \ 13 (2d8 + 4) piercing damage plus 18 (4d8) necrotic damage. A target hit\
    \ by this attack must succeed on a DC 17 Constitution saving throw or gain one\
    \ level of contamination."
  "name": "Contaminating Arrow"
- "desc": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit:\
    \ 13 (2d8 + 4) piercing damage. If the target is Large or smaller, it must succeed\
    \ on a DC 17 Dexterity saving throw or become [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ in a magical snare for 1 minute. A [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ target can use its action to repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Ensnaring Arrow"
- "desc": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit:\
    \ 13 (2d8 + 4) piercing damage. If the target is a Huge or smaller creature,\
    \ it must succeed on DC 17 Strength saving throw or be pulled up to 20 feet directly\
    \ toward the Lord of the Feast."
  "name": "Harpoon Arrow"
"legendary_actions":
- "desc": "The Lord of the Feast moves his speed without provoking opportunity attacks."
  "name": "Dash"
- "desc": "The Lord of the Feast makes one arrow attack of his choice."
  "name": "Arrow (Costs 2 actions)"
- "desc": "The Lord of the Feast releases a blood-curdling howl which can be heard\
    \ all across Drakkenheim. Garmyr within 60 feet who can see and hear the Lord\
    \ of the Feast can use their reaction to move up to half their speed and make\
    \ one melee or ranged attack with advantage."
  "name": "Call of the Hunt (costs 3 actions)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/lord-of-the-feast-dodk.webp"
```
^statblock