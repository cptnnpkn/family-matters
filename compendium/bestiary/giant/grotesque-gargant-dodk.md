---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
aliases: ["Grotesque Gargant"]
---
# [Grotesque Gargant](3-Mechanics\CLI\bestiary\giant/grotesque-gargant-dodk.md)
*Source: Dungeons of Drakkenheim p. 197*  

These mutated human monstrosities have grown to tremendous size. Delerium shards are merged into their disfigured bodies, and their muscles pulse with arcane energies as they lumber forward. Furiously territorial, these creatures are occasionally sighted hauling massive delerium crystals from the crater and placing them like obelisks in the ruins.

```statblock
"name": "Grotesque Gargant (DoDk)"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "8"
"traits":
- "desc": "A grotesque gargant regains 10 hit points at the start of its turn as long\
    \ as it is within the Deep Haze. The gargant dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "The grotesque gargant has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks to hide in any area obscured by mist or fog."
  "name": "Misty Camouflage"
"actions":
- "desc": "The grotesque gargant makes two greatclub attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19\
    \ (3d8 + 6) bludgeoning damage."
  "name": "Greatclub"
- "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Rock"
- "desc": "The grotesque gargant magically forces a creature it can see within 60\
    \ feet of it to make a DC 15 Constitution saving throw. The creature takes 27\
    \ (6d8) necrotic damage on a failed save and gains one level of contamination."
  "name": "Contaminating Beam"
"reactions":
- "desc": "If a rock or similar object is hurled at the grotesque gargant, the grotesque\
    \ gargant can, with a successful DC 10 Dexterity saving throw, catch the missile\
    \ and take no bludgeoning damage from it."
  "name": "Rock Catching"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/giant/token/grotesque-gargant-dodk.webp"
```
^statblock