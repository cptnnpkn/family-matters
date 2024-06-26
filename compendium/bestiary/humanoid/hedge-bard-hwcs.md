---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/hedge
statblock: inline
aliases: ["Hedge Bard"]
---
# [Hedge Bard](3-Mechanics\CLI\bestiary\humanoid/hedge-bard-hwcs.md)
*Source: Humblewood Campaign Setting p. 198*  

Recognized for being excellent diplomats and mediators, hedges are less well known for their love of music. Those who turn their natural charm towards the talent of entertaining can find great success. Some of the most gifted performers are blessed with magical talents. While most hedges use these powers for good, others choose a more sinister path, using their bardic talents to cheat, dupe, or steal from common folk.

```statblock
"name": "Hedge Bard (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "hedge"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "16"
"speed": "25 ft., burrow 15 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "7"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "Birdfolk, Hedge, can also speak with beasts of any size which represent\
  \ spiders, insects, worms, or other bugs"
"cr": "2"
"traits":
- "desc": "The bard is a 4th-level spellcaster. Their spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). They have the following bard\
    \ spells prepared:\n\nCantrips (at will): [gust barrier](/3-Mechanics/CLI/spells/gust-barrier-hwcs.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md), [vicious mockery](/3-Mechanics/CLI/spells/vicious-mockery.md)\n\
    \n1st level (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person.md),\
    \ [healing word](/3-Mechanics/CLI/spells/healing-word.md), [tasha's hideous laughter](/3-Mechanics/CLI/spells/tashas-hideous-laughter.md),\
    \ [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [shatter](/3-Mechanics/CLI/spells/shatter.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Spellcasting"
- "desc": "The bard can use a bonus action on their turn to target one creature within\
    \ 30 feet of them. If the target can hear the bard, the target must succeed on\
    \ a DC 13 Charisma saving throw or have disadvantage on ability checks, attack\
    \ rolls, and saving throws until the start of the bard's next turn"
  "name": "Taunt (2/Day)"
"actions":
- "desc": "he bard makes two weapon attacks, one with their rapier and one with their\
    \ dagger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Rapier"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "The bard curls up into a spiny ball. While curled up in this way they cannot\
    \ move, attack, or cast spells with somatic components, and their base armor class\
    \ becomes 19. Any creature that misses the hedge bard with a melee attack while\
    \ they are curled up takes 2d4 points of piercing damage from their sharp quills.\
    \ If a creature hits the bard while they are curled up, however, the bard is knocked\
    \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in their space at the end\
    \ of the turn. The bard may uncurl themselves at any point during their turn."
  "name": "Curl Up"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/hedge-bard-hwcs.webp"
```
^statblock