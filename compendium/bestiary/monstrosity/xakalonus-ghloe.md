---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Xakalonus"]
---
# [Xakalonus](3-Mechanics\CLI\bestiary\monstrosity/xakalonus-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 73*  

> [!quote]-  
> 
> The Stillborn Forest crawls with these beasts, and their howls foretell even larger monsters approaching.

## Salvage

A xakalonus brain is encased in a viscous jelly which can be turned into a substance called [arcane oil](/3-Mechanics/CLI/items/arcane-oil-ghloe.md) (see Appendix A of Lairs of Etharis). This oil's creation requires a proficient alchemist to spend 8 hours and 200 gp of components. They must succeed on a DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check to create the substance.

## Lore

- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Xakalonus are created from wounds to the hraptnon. These creatures, though always originating in the Stillborn Forest, can be found anywhere in Etharis. They feed on the brains of creatures that use magic, then return to offer up the brain to the hraptnon.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** If magic effects but does not harm a xakalonus, the magic might heal them or power their attacks instead.  

```statblock
"name": "Xakalonus (GHLoE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "9"
- !!int "12"
- !!int "9"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "understands Draconic but can't speak"
"cr": "8"
"traits":
- "desc": "If a xakalonus succeeds on a saving throw against a magical effect that\
    \ would damage it, it takes no damage. Instead, the xakalonus regains 11 (2d10)\
    \ hit points. Alternatively, if the xakalonus is at full hit points, the next\
    \ successful melee attack by the xakalonus deals an additional 11 (2d10) force\
    \ damage."
  "name": "Magic Absorption"
- "desc": "The xakalonus has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The xakalonus makes one bite and one claws attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15\
    \ (2d10 + 4) slashing damage."
  "name": "Claws"
- "desc": "All creatures within 30 ft. who can hear the xakalonus must succeed on\
    \ a DC 14 Constitution saving throw or take 14 (4d6) thunder damage and be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until the end of their next turn. Other xakalonus and the hraptnon are immune\
    \ to this."
  "name": "Sonic Bark (Recharge 5-6)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/xakalonus-ghloe.webp"
```
^statblock