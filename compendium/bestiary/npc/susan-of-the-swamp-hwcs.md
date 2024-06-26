---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/hedge
statblock: inline
aliases: ["Susan of the Swamp"]
---
# [Susan of the Swamp](3-Mechanics\CLI\bestiary\npc/susan-of-the-swamp-hwcs.md)
*Source: Humblewood Campaign Setting p. 198*  

Susan is an eccentric hedge whose magical aptitude has always been outclassed by her hunger for knowledge. She studied at the Avium for a short time, but left of her own accord to experiment with magics the Avium found unsavory. Susan recently settled in the swamp in the hopes of pursuing her arcane curiosities in peace. She shares her modest home with her beetle familiar, Normal, and spends her time foraging for ingredients, testing spells, and reading mystery novels in addition to tomes of eldritch lore. Though she performs her rituals a safe distance away from the cities and towns, her presence in the region has made the Magistrate of Winnowing Reach uneasy, and he wants her gone. Susan uses the [hedge witch](/3-Mechanics/CLI/bestiary/humanoid/hedge-witch-hwcs.md) stat block. Her alignment is chaotic good.

```statblock
"name": "Susan of the Swamp (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "hedge"
"alignment": "Chaotic Good"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "16"
"speed": "25 ft., burrow 15 ft."
"skillsaves":
  "Arcana": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Abyssal, Birdfolk, Hedge, can also speak with beasts of any size which\
  \ represent spiders, insects, worms, or other bugs"
"cr": "1"
"traits":
- "desc": "Susan is a 2nd-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). Susan has the following warlock\
    \ spells prepared:\n\nCantrips (at will): [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\n1st-1st level\
    \ (2 slots): [charm person](/3-Mechanics/CLI/spells/charm-person.md), [hellish\
    \ rebuke](/3-Mechanics/CLI/spells/hellish-rebuke.md), [unseen servant](/3-Mechanics/CLI/spells/unseen-servant.md)"
  "name": "Spellcasting"
- "desc": "When Susan reduces a hostile creature to 0 hit points, she gains 5 temporary\
    \ hit points."
  "name": "Dark One's Blessing"
- "desc": "When Susan hits a creature with eldritch blast, she can push the creature\
    \ up to 10 feet away in a straight line."
  "name": "Repelling Blast"
"actions":
- "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage."
  "name": "Staff"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "Susan can cast [false life](/3-Mechanics/CLI/spells/false-life.md) at will\
    \ as a 1st-level spell."
  "name": "Fiendish Vigor"
- "desc": "Susan curls up into a spiny ball. While curled up in this way she cannot\
    \ move, attack, or cast spells with somatic components, and her base armor class\
    \ becomes 19. Any creature that misses Susan with a melee attack while she is\
    \ curled up takes 2d4 points of piercing damage from her sharp quills. If a\
    \ creature hits Susan while she is curled up, however, Susan is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ in her space at the end of the turn. Susan may uncurl herself at any point during\
    \ her turn."
  "name": "Curl Up"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/susan-of-the-swamp-hwcs.webp"
```
^statblock