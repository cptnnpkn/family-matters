---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Shadowsteel Ghast"]
---
# [Shadowsteel Ghast](3-Mechanics\CLI\bestiary\undead/shadowsteel-ghast-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 84*  

> [!quote]-  
> 
> Shards of dark metal pierce the skin of the foul creature. The metal pushes out from within the abomination rather than the other way.

## Salvage

Taking 1 hour to extract the shards of Shadowsteel from a Shadowsteel ghoul, someone can collect an amount worth 250 gp. A Shadowsteel ghast yields a quantity worth 500 gp.

## Lore

- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Those who use Shadowsteel to power curses can become Shadowsteel ghouls upon death. These undead creatures seek out more of the metal. As the creature ages, it can regain a semblance of the arcane power it had in life, empowering similar creatures and cursing nearby foes.  

```statblock
"name": "Shadowsteel Ghast (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "118"
"hit_dice": "17d8 + 42"
"stats":
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "14"
- !!int "13"
- !!int "8"
"speed": "40 ft., climb 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "4"
  "Arcana": !!int "5"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "two languages known in life"
"cr": "7"
"traits":
- "desc": "The Shadowsteel ghast's innate spellcasting ability is Intelligence (spell\
    \ save DC 13, +5 to hit with spell attacks). It can innately cast the following\
    \ spells, requiring no components:\n\nAt will: [chill touch](/3-Mechanics/CLI/spells/chill-touch.md),\
    \ [shocking grasp](/3-Mechanics/CLI/spells/shocking-grasp.md) (both 17th level)\n\
    \n2/day: [bestow curse](/3-Mechanics/CLI/spells/bestow-curse.md)\n\n3/day\
    \ each: [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [misty step](/3-Mechanics/CLI/spells/misty-step.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md)"
  "name": "Innate Spellcasting"
- "desc": "The Shadowsteel ghast has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
- "desc": "The Shadowsteel ghast is coated in metal armor made of Shadowsteel."
  "name": "Shadowsteel Coat"
- "desc": "Creatures of the Shadowsteel ghast's choice that start their turn within\
    \ 30 feet of the ghast must roll a d4 and subtract the number rolled from any\
    \ attack roll or saving throw they make until the start of their next turn. Only\
    \ one miasma can affect a given creature at a time. A creature that rolls a natural\
    \ 20 on any attack roll or saving throw while in a Shadowsteel miasma is immune\
    \ to the miasma of any Shadowsteel ghast for 1 hour."
  "name": "Shadowsteel Miasma"
- "desc": "The Shadowsteel ghast and any Shadowsteel ghouls within 30 feet of it have\
    \ advantage on saving throws against effects that turn undead."
  "name": "Turning Defiance"
"actions":
- "desc": "The Shadowsteel ghast makes two claw attacks or casts one at-will spell\
    \ and makes one claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12\
    \ (2d8 + 3) slashing damage and 7 (2d6) necrotic damage. A cursed target must\
    \ make an escalation check. If a target drops to 0 hit points due to this damage\
    \ and isn't already cursed, they are randomly afflicted with one from among any\
    \ of the curses in the Grim Hollow Campaign Guide (GM's choice)."
  "name": "Claw"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/shadowsteel-ghast-ghloe.webp"
```
^statblock