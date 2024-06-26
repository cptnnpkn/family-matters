---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Scoundrel"]
---
# [Scoundrel](3-Mechanics\CLI\bestiary\humanoid/scoundrel-dodk.md)
*Source: Dungeons of Drakkenheim p. 219*  

> [!quote]- A quote from Blackjack Mel  
> 
> When you've been around the beat as long as me, you learn to pick up a trick or two. Take anything you can get, it might mean you win the next big score, or just live another day.


```statblock
"name": "Scoundrel (DoDk)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[leather](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Deception": !!int "6"
  "Stealth": !!int "7"
  "Acrobatics": !!int "5"
"senses": "passive Perception 10"
"languages": "Thieves' cant plus any two languages"
"cr": "3"
"traits":
- "desc": "The scoundrel is a 3rd level spellcaster that uses Intelligence as its\
    \ spellcasting ability (spell save DC 12; +4 to hit with spell attacks). It\
    \ knows the following spells from the wizard spell list:\n\nCantrips (at will):\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md) (the hand is invisible), [minor\
    \ illusion](/3-Mechanics/CLI/spells/minor-illusion.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person.md),\
    \ [disguise self](/3-Mechanics/CLI/spells/disguise-self.md), [sleep](/3-Mechanics/CLI/spells/sleep.md)\n\
    \n2nd level (2 slots): [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Spellcasting"
- "desc": "On each of its turns, the scoundrel can use a bonus action to take the\
    \ Dash, Disengage, or Hide action."
  "name": "Cunning Action"
- "desc": "The scoundrel deals an extra 14 4d6 damage when it hits a target with\
    \ a weapon attack and has advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of the scoundrel that isn't incapacitated and the scoundrel\
    \ doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage."
  "name": "Hand Crossbow"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/scoundrel-dodk.webp"
```
^statblock