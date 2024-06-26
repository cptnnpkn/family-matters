---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Downcast Mercenary"]
---
# [Downcast Mercenary](3-Mechanics\CLI\bestiary\humanoid/downcast-mercenary-ghloe.md)
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
"name": "Downcast Mercenary (GHLoE)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[half plate](/3-Mechanics/CLI/items/half-plate-armor.md)"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Athletics": !!int "6"
  "Religion": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "necrotic"
"senses": "passive Perception 14"
"languages": "Celestial and two other languages"
"cr": "5"
"traits":
- "desc": "The downcast mercenary takes one extra action."
  "name": "Action Surge (Recharges after a Short or Long Rest)"
- "desc": "If the downcast mercenary fails a saving throw, it can reroll the saving\
    \ throw and use the new roll."
  "name": "Indomitable (2/Day)"
- "desc": "The downcast mercenary can cast [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\
    \ at will."
  "name": "Thaumaturge"
"actions":
- "desc": "The downcast mercenary makes three attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) slashing damage."
  "name": "Greatsword"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/downcast-mercenary-ghloe.webp"
```
^statblock