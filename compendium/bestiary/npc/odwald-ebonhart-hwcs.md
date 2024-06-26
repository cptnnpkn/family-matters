---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/corvum
statblock: inline
aliases: ["Odwald Ebonhart"]
---
# [Odwald Ebonhart](3-Mechanics\CLI\bestiary\npc/odwald-ebonhart-hwcs.md)
*Source: Humblewood Campaign Setting p. 194*  

Odwald is a haggard old kindled corvum, resembling a thick billed raven with coarse, hoary feathers, ruffled from years of adventuring. Odwald has a sharp mind but a faint heart. A member of the illustrious Ebonhart family, a noble house that dates back to the founding of Alderheart, Odwald was an arcane prodigy who grew up in a world which expected him to be brilliant. While magic always came naturally to him, the pressure of his family's expectations weighed heavily upon him, and filled him with a deep-seated fear of failure. Months ago, he was tricked by an unknown entity into weakening the seal that held the aspect of fire beneath the Scorched Grove. Ever since he has blamed himself for the worsening conditions in the Wood. He has no solution for stopping the aspect, and this terrifies him. Shortly after saving his friend Riffin, desperation drove him back to his alma mater, the Avium, where he has since worked with forbidden magics in secrecy. Using a secret door he discovered during his time as a student, Odwald converted several inaccessible and defunct classrooms into a makeshift laboratory where he toils tirelessly, experimenting with dark and dangerous magics in the hopes of discovering a way to stop the aspect. Odwald uses the [corvum necromancer](/3-Mechanics/CLI/bestiary/humanoid/corvum-necromancer-hwcs.md) stat block. His alignment is chaotic neutral.

```statblock
"name": "Odwald Ebonhart (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "corvum"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with mage armor"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "7"
"skillsaves":
  "Medicine": !!int "3"
  "Deception": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 10"
"languages": "Birdfolk, any two other languages, can also understand Auran but can't\
  \ speak it"
"cr": "6"
"traits":
- "desc": "Odwald is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Odwald has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\n1st level\
    \ (4 slots): [disguise self](/3-Mechanics/CLI/spells/disguise-self.md), [false\
    \ life†](/3-Mechanics/CLI/spells/false-life.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [magic missile](/3-Mechanics/CLI/spells/magic-missile.md)\n\n2nd level (3\
    \ slots): [misty step](/3-Mechanics/CLI/spells/misty-step.md), [ray of enfeeblement†\
    ](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)\n\
    \n3rd level (3 slots): [animate dead†](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [fear](/3-Mechanics/CLI/spells/fear.md)\n\
    \n4th level (3 slots): [blight†](/3-Mechanics/CLI/spells/blight.md), [greater\
    \ invisibility](/3-Mechanics/CLI/spells/greater-invisibility.md)\n\n5th level\
    \ (1 slots): [dominate person](/3-Mechanics/CLI/spells/dominate-person.md)\n\
    \n†necromancy spell of 1st level or higher"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, Odwald can spend a reaction to fly up to\
    \ his speed in one direction as he descends. Odwald lands in an unoccupied space\
    \ at the end of his movement, and takes no falling damage. Odwald cannot glide\
    \ while carrying heavy objects, heavy weapons, or shields (though he can drop\
    \ any held items as part of his reaction)."
  "name": "Glide"
- "desc": "Odwald has advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface his talons could reasonably grip."
  "name": "Talons"
- "desc": "Odwald has advantage on all Charisma checks used to convince someone of\
    \ his knowledge of subject matter pertaining to the Arcana skill."
  "name": "Convincing"
- "desc": "Once per turn, when Odwald kills one or more creatures with a spell of\
    \ 1st level or higher, he can regain hit points equal to twice the level of the\
    \ spell, or three times the level if it is a necromancy spell."
  "name": "Life Leech"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if wielded with\
    \ both hands."
  "name": "Staff"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talons"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/odwald-ebonhart-hwcs.webp"
```
^statblock