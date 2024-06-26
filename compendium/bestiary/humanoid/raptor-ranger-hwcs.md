---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/raptor
statblock: inline
aliases: ["Raptor Ranger"]
---
# [Raptor Ranger](3-Mechanics\CLI\bestiary\humanoid/raptor-ranger-hwcs.md)
*Source: Humblewood Campaign Setting p. 203*  

The ranger is an iconic figure in raptor stories and myths, and has inspired many to follow in their legendary footsteps. Outfitted for rough living in the wilds, these rangers are consummate archers and exceptional hunters. With supernatural eyesight and quick reflexes, raptors are ideally suited to the life of a hunter. Many who chose this path find themselves the inspiration for new tales.

The raptor ranger listed is outfitted with a [red-feather bow](/3-Mechanics/CLI/items/red-feather-bow-hwcs.md) (see "Appendix D: New Magic Items").

```statblock
"name": "Raptor Ranger (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "raptor"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "66"
"hit_dice": "12d6 + 24"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "8"
"speed": "25 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Stealth": !!int "7"
  "Survival": !!int "5"
"senses": "passive Perception 13"
"languages": "Birdfolk, Mapach, can also understand Auran but can't speak it"
"cr": "4"
"traits":
- "desc": "The ranger is a 3rd-level spellcaster. Their spellcasting ability is \n\
    \nWisdom (spell save DC 13, + 5 to hit with spell attacks). The ranger has the\
    \ following spells prepared:\n\n1st level (3 slots): [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md), [hunter's mark](/3-Mechanics/CLI/spells/hunters-mark.md),\
    \ [protection from evil and good](/3-Mechanics/CLI/spells/protection-from-evil-and-good.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the ranger can spend \n\na reaction to fly\
    \ up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The ranger rolls advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "Creatures who attack the ranger while the ranger is falling, gliding, or\
    \ jumping have disadvantage on their attack roll."
  "name": "Aerial Defense"
- "desc": "The explorer has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- "desc": "When the ranger attacks with their red-feather bow, they can use their\
    \ bonus action to see from the point the arrow struck as if they were there. If\
    \ the arrow strikes a creature, the ranger can see from the creature's perspective.\
    \ This effect lasts for 1 minute."
  "name": "Arrow Sight (3/Day)"
- "desc": "As a bonus action, the ranger can deal an extra 1d10 damage on their\
    \ next attack made with a shortbow or longbow."
  "name": "Hunter (3/Day)"
"actions":
- "desc": "The ranger makes two red-feather bow attacks."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
    \ 6 (1d6 + 4) piercing damage."
  "name": "Red-Feather Bow"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage. "
  "name": "Dagger"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage. "
  "name": "Talons"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/raptor-ranger-hwcs.webp"
```
^statblock