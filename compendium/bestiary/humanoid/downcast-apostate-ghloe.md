---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/downcast
statblock: inline
aliases: ["Downcast Apostate"]
---
# [Downcast Apostate](3-Mechanics\CLI\bestiary\humanoid/downcast-apostate-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 49*  

> [!quote]-  
> 
> To assume the downcast are good at heart is foolish. Many still cling to delusions of grandeur and do anything to maintain them.

## Salvage

The recently deceased body of a downcast can be used in a ritual to unlock magical power. This ritual takes 16 hours to complete and requires candles, chalk, incense, silver, and other reagents worth 2,000 gp. Upon completion of this ritual, the downcast's body disintegrates, and the ritualist can choose one benefit.

- **Life Force.** The ritualist's maximum hit points increase by 2 per level (or Hit Die) the ritualist has. Each time the ritualist gains a level (or Hit Die), the ritualist's hit point maximum increases by 2. Also, the ritualist's natural lifespan increases by 250 years.  
- **Magic Power.** The ritualist learns the thaumaturgy cantrip and gains additional benefits based on the type of downcast sacrificed, as follows.  

    *Aurelian*: The ritualist's Charisma score increases by 1, to a maximum of 20. Once per day, the ritualist can cast cure wounds as a 1st level spell.  

    *Galiant*: The ritualist's Constitution score increases by 1, to a maximum of 20. Once per day, the ritualist can cast shield of faith as a 1st level spell.  

    *Maliganti*: The ritualist's Strength score increases by 1, to a maximum of 20. Once per day, the ritualist can cast branding smite as a 1st level spell.  

    *Ulmyrite*: The ritualist's Intelligence score increases by 1, to a maximum of 20. Once per day, the ritualist can cast detect magic.  
- **Resurrection.** Upon finishing the ritual, the ritualist can cast resurrection without expending a spell slot or providing any other components.  

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The downcast were once immortal celestial servants to the gods. Each has inclinations and aptitudes based on the god they once served.  
- **DC 13 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** As a result of their divine nature, fallen though it might be, downcast have resistance to necrotic damage and limited access to innate magic.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The physical form of a downcast contains significant power from before their fallen state. A ritual requiring the sacrifice or corpse of a downcast can draw out this power.  

```statblock
"name": "Downcast Apostate (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "downcast"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "13"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "5"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Religion": !!int "5"
  "Perception": !!int "5"
  "Persuasion": !!int "8"
"damage_resistances": "necrotic"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 15"
"languages": "Celestial and two other languages"
"cr": "11"
"traits":
- "desc": "The downcast apostate's spellcasting ability is Charisma. The apostate\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [alter self](/3-Mechanics/CLI/spells/alter-self.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [jump](/3-Mechanics/CLI/spells/jump.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)"
  "name": "Innate Spellcasting"
- "desc": "The downcast apostate is an 18th-level spellcaster. Its spellcasting ability\
    \ is Charisma (spell save DC 16, +8 to hit with spell attacks). It regains its\
    \ expended spell slots when it finishes a short or long rest. It knows the following\
    \ warlock spells:\n\n1/day each: [glibness](/3-Mechanics/CLI/spells/glibness.md),\
    \ [mass suggestion](/3-Mechanics/CLI/spells/mass-suggestion.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md),\
    \ [power word kill](/3-Mechanics/CLI/spells/power-word-kill.md)\n\nCantrips\
    \ (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md), [light](/3-Mechanics/CLI/spells/light.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md)\n\n1st-5th level (4\
    \ slots): [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [dimension door](/3-Mechanics/CLI/spells/dimension-door.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [flame strike](/3-Mechanics/CLI/spells/flame-strike.md), [fly](/3-Mechanics/CLI/spells/fly.md),\
    \ [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md), [guiding\
    \ bolt](/3-Mechanics/CLI/spells/guiding-bolt.md), [insect plague](/3-Mechanics/CLI/spells/insect-plague.md),\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md),\
    \ [tongues](/3-Mechanics/CLI/spells/tongues.md), [vampiric touch](/3-Mechanics/CLI/spells/vampiric-touch.md),\
    \ [wall of fire](/3-Mechanics/CLI/spells/wall-of-fire.md)"
  "name": "Spellcasting"
- "desc": "The downcast apostate's weapon attacks are magical."
  "name": "Apostate's Weapons"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage and 18 (4d8) necrotic or radiant damage (downcast\
    \ apostate's choice)."
  "name": "Morningstar"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/downcast-apostate-ghloe.webp"
```
^statblock