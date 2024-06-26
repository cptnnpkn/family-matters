---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gallus
statblock: inline
aliases: ["Gallus Druid"]
---
# [Gallus Druid](3-Mechanics\CLI\bestiary\humanoid/gallus-druid-hwcs.md)
*Source: Humblewood Campaign Setting p. 196*  

The gallus of Humblewood have an especially deep connection with nature. Hanera teaches them to see the world from the forest floor, instead of the canopy. This is a message many gallus have taken to heart. Out of this reverence for nature, some gallus dedicate themselves to the study and preservation of the Wood, becoming wardens of the forest, or acting as guides. A select few with a unique connection to flora and fauna develop incredible powers and abilities. These druids can sprout trees and mend injured animals with a touch. They are revered among birdfolk and humblefolk alike as spiritual leaders and wise advisors.

```statblock
"name": "Gallus Druid (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "gallus"
"alignment": "Neutral"
"ac": !!int "11"
"ac_class": "16 with barkskin"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Medicine": !!int "6"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Birdfolk, Druidic, Sylvan, can also understand Auran but can't speak\
  \ it"
"cr": "4"
"traits":
- "desc": "The druid is a 6th-level spellcaster. Their spellcasting ability is Wisdom\
    \ (spell save DC 14, +6 to hit with spell attacks). The druid has the following\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/3-Mechanics/CLI/spells/druidcraft.md),\
    \ [produce flame](/3-Mechanics/CLI/spells/produce-flame.md), [shillelagh](/3-Mechanics/CLI/spells/shillelagh.md)\n\
    \n1st level (4 slots): [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md),\
    \ [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md), [entangle](/3-Mechanics/CLI/spells/entangle.md),\
    \ [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md)\n\n2nd level (3 slots):\
    \ [barkskin](/3-Mechanics/CLI/spells/barkskin.md), [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind.md),\
    \ [moonbeam](/3-Mechanics/CLI/spells/moonbeam.md)\n\n3rd level (3 slots):\
    \ [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [wind wall](/3-Mechanics/CLI/spells/wind-wall.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the druid can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "As a bonus action, the druid can use their powerful feathered arms to propel\
    \ themselves upward up to half their movement speed. The druid can use it in conjunction\
    \ with a regular jump, but not while gliding."
  "name": "Wing Flap"
- "desc": "The druid can communicate simple ideas to living plants, and is able to\
    \ interpret their responses in simple language."
  "name": "Seedspeech"
- "desc": "As a bonus action, the druid calls forth a nature spirit. The spirit appears\
    \ at a point the druid can see within 60 feet. The spirit creates a 30-foot-radius\
    \ aura. The spirit is neither an object nor a creature, but is a spectral beast.\
    \ As a bonus action, the druid can move the spirit to another location within\
    \ 60 feet. The spirit lasts for 1 minute.\n\nBear Spirit. The druid and allies\
    \ within the aura gain 9 temporary hit points and have advantage on Strength checks\
    \ and saving throws.\n\nHawk Spirit. The druid can use their reaction to grant\
    \ advantage to an ally's attack roll against a target in the aura. The druid and\
    \ allies within the aura have advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks.\n\nUnicorn Spirit. If a spell that requires a spell slot heals the\
    \ druid or allies in the aura, each creature of the druid's choice also gains\
    \ 4 hit points"
  "name": "Spirit Totem (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Staff"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/gallus-druid-hwcs.webp"
```
^statblock