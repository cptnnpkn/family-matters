---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Barovian Witch"]
---
# [Barovian Witch](3-Mechanics\CLI\bestiary\humanoid/barovian-witch-cos.md)
*Source: Curse of Strahd p. 229*  

The mad women and men known as Barovian witches forge pacts with Strahd and the Dark Powers of Ravenloft in exchange for magic and longevity. They prefer to live in the shadows and can see in the dark. When traveling in the open, they use [alter self](/3-Mechanics/CLI/spells/alter-self.md) spells to assume less conspicuous forms. They also use these spells to grow long, sharp claws with which they can attack.

## Brothers and Sisters of Strahd

Barovian witches have no scruples. They will deal with anyone in return for power. They will also betray anyone for the same reason. The only thing they fear is Strahd, and his wish is their command. Barovian witches sometimes refer to themselves as the brothers and sisters of Strahd, though never to Strahd's face.

### Pack Rats with Cats

 Barovian witches are obsessive collectors, each believing that almost anything found - a piece of broken bone, a dead rodent, a handful of dust, or some other worthless item or substance - could be valuable or useful as a spell component, a ritual object, or a potion ingredient.

Barovian witches use the [find familiar](/3-Mechanics/CLI/spells/find-familiar.md) spell to call forth familiars. They are particularly fond of cats, though snakes and toads are also common. These animals lurk amid the clutter of the witches' lairs, seldom wandering far from their vile masters.

```statblock
"name": "Barovian Witch (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "10"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "7"
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "1/2"
"traits":
- "desc": "The witch is a 3rd-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 12, +4 to hit with spell attacks). The witch has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md), [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md)\n\
    \n1st level (4 slots): [ray of sickness](/3-Mechanics/CLI/spells/ray-of-sickness.md),\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md), [Tasha's hideous laughter](/3-Mechanics/CLI/spells/tashas-hideous-laughter.md)\n\
    \n2nd level (2 slots): [alter self](/3-Mechanics/CLI/spells/alter-self.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage. This attack is magical."
  "name": "Claws (Requires Alter Self)"
- "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 2 (1d4) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/barovian-witch-cos.webp"
```
^statblock