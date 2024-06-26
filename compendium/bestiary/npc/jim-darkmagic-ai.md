---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ai
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Jim Darkmagic"]
---
# [Jim Darkmagic](3-Mechanics\CLI\bestiary\npc/jim-darkmagic-ai.md)
*Source: Acquisitions Incorporated p. 197*  

> [!quote]-  
> 
> Have a magical day!

James Winifred Darkmagic III is the scion of a mysterious, multiplanar wizarding family. Jim's arcane pedigree has long preceded him, incorporating equally healthy amounts of magical training and innate eldritch prowess. However, despite a natural talent that could have allowed him to make a name for himself as a court wizard, or perhaps "that strange old man in the village," Jim's original penchant was not for the magic of scroll or spell, but for the stage.

As an entertainer and purveyor of the "Jim Darkmagic Experience," the legendary mage can often be found in markets and town squares, performing feats of mundane legerdemain. The renown he has earned for these feats is nearly equaled by the reputation that follows him as chief arcanist (and occasional arsonist) for Acquisitions Incorporated. And although his skills as an adventurer and real wizard remain highly sought after, Jim looks forward to a well-earned retirement, at which point he hopes to become a "real wizard"-by which he means a fake wizard-full time.

```statblock
"name": "Jim Darkmagic (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "Animal Handling": !!int "4"
  "History": !!int "7"
  "Performance": !!int "5"
  "Acrobatics": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "5"
"traits":
- "desc": "Jim is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/3-Mechanics/CLI/spells/fire-bolt.md),\
    \ [friends](/3-Mechanics/CLI/spells/friends.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [disguise self](/3-Mechanics/CLI/spells/disguise-self.md),\
    \ [Jim's magic missile](/3-Mechanics/CLI/spells/jims-magic-missile-ai.md), [mage\
    \ armor](/3-Mechanics/CLI/spells/mage-armor.md)\n\n2nd level (3 slots): [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [Jim's glowing coin](/3-Mechanics/CLI/spells/jims-glowing-coin-ai.md)\n\n3rd\
    \ level (3 slots): [incite greed](/3-Mechanics/CLI/spells/incite-greed-ai.md),\
    \ [fireball](/3-Mechanics/CLI/spells/fireball.md)\n\n4th level (3 slots):\
    \ [conjure minor elementals](/3-Mechanics/CLI/spells/conjure-minor-elementals.md),\
    \ [polymorph](/3-Mechanics/CLI/spells/polymorph.md)\n\n5th level (1 slots):\
    \ [mislead](/3-Mechanics/CLI/spells/mislead.md)\n\nNew spell introduced in chapter\
    \ 3"
  "name": "Spellcasting"
- "desc": "Jim carries a [wand of wonder](/3-Mechanics/CLI/items/wand-of-wonder.md)."
  "name": "Special Equipment"
- "desc": "As a bonus action, Jim teleports up to 30 feet to a space he can see. The\
    \ space must be unoccupied or occupied by a willing Small or Medium creature.\
    \ If the latter, Jim and the willing creature both teleport, swapping places."
  "name": "Benign Transportation (Recharges after Jim Casts a Conjuration Spell of\
    \ 1st Level or Higher)"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "Jim conjures an inanimate object, no larger than 3 feet on a side and no\
    \ more than 10 pounds, in his hand or on the ground in an unoccupied space he\
    \ can see within 10 feet of him. The object is visibly magical, radiating dim\
    \ light out to 5 feet. It disappears if it takes any damage, after 1 hour, or\
    \ when Jim uses this feature again."
  "name": "Minor Conjuration"
"source":
- "AI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/jim-darkmagic-ai.webp"
```
^statblock