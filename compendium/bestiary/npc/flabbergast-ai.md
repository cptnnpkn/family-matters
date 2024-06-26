---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ai
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Flabbergast"]
---
# [Flabbergast](3-Mechanics\CLI\bestiary\npc/flabbergast-ai.md)
*Source: Acquisitions Incorporated p. 200*  

Not much is known of the mysterious and aloof majordomo of Acquisitions Incorporated Head Office, the mage known as Flabbergast. It's said that he hails from Neverwinter, and that his wealthy family helped erect and carve the famous Dolphin Bridge in that city. Although he detests physical labor, Flabbergast is a bit of a bridge builder in his own way, always striving to bring people together and flexing his diplomatic muscles. A pacifist bureaucrat, he abhors violence, and rarely puts his magical prowess on display.

One thing that is known (though it's seldom spoken of) is that Flabbergast once worked for Dran Enterprises, and specifically for Portentia Dran. He carries a certain amount of guilt around being complicit in certain Dran Enterprises' dealings, and helped Acquisitions Incorporated on the side even before taking up an official role with the company. Though Head Office certainly trusts him, others might wonder where his true loyalties lie.

Flabbergast's familiar, Mister Snibbly, uses the cat stat block.

```statblock
"name": "Flabbergast (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "3"
  "History": !!int "5"
  "Arcana": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Elvish, Gnomish"
"cr": "4"
"traits":
- "desc": "Flabbergast is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/3-Mechanics/CLI/spells/fire-bolt.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\n1st level\
    \ (4 slots): [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [mage\
    \ armor](/3-Mechanics/CLI/spells/mage-armor.md), [distort value](/3-Mechanics/CLI/spells/distort-value-ai.md)\n\
    \n2nd level (3 slots): [gift of gab](/3-Mechanics/CLI/spells/gift-of-gab-ai.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)\n\n3rd level (3 slots):\
    \ [fast friends](/3-Mechanics/CLI/spells/fast-friends-ai.md), [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md)\n\
    \n4th level (3 slots): [greater invisibility](/3-Mechanics/CLI/spells/greater-invisibility.md)\n\
    \n5th level (1 slots): [cone of cold](/3-Mechanics/CLI/spells/cone-of-cold.md)\n\
    \nNew spell introduced in chapter 3"
  "name": "Spellcasting"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "AI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/flabbergast-ai.webp"
```
^statblock