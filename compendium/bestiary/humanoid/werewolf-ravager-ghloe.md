---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Werewolf Ravager"]
---
# [Werewolf Ravager](3-Mechanics\CLI\bestiary\humanoid/werewolf-ravager-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 83*  

> [!quote]-  
> 
> During full moons, inhabitants of Etharis stay inside with the doors barred and windows tightly shut. Even then, they look at those indoors with them with a suspicious eye. One never knows.

## Salvage

Lycanthropes exist in a state of perpetual mental turmoil, and over time their memories fragment. As a result, many carry keepsakes of their past lives to strengthen the memories they do not want to lose. The pelt of a lycanthrope is prized by certain mages for the crafting of magical cloaks, particularly cloaks that allow a person to change their form such as the cloak of the bat or the cloak of the manta ray.

Weapons made from the fangs or claws of deceased lycanthropes have special properties and are known as [lycan weapons](/3-Mechanics/CLI/items/lycan-weapon-ghloe.md) (see Appendix A of Lairs of Etharis). These weapons require a successful DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check by a proficient weaponsmith, consuming 500 gp worth of components, and requiring 10 days of work.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Lycanthropy is a common affliction in Etharis. The source is a curse that twists mind and body into that of a savage beast. Though they can change at will, the light of the full moon triggers the transformation no matter what.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** In addition to the normal transmission of the curse through the bite of a lycanthrope, certain druidic sects also perform rituals to create new lycanthropes. This ritual is known as the Lunar Sacrament, used as a tool to protect druid groves from invasion.  
- **DC 20 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** While the nature of the transformation tends to override the senses with bestial fury, some can control themselves. By finding a balance between man and beast, they gain greater control over the curse, gaining the ability to turn into a full animal and retain their mental faculties.  

```statblock
"name": "Werewolf Ravager (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "any, shapechanger"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 from natural armor in hybrid form"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "17"
- !!int "16"
- !!int "14"
- !!int "9"
- !!int "15"
- !!int "10"
"speed": "30 ft. (50 ft. in hybrid form)"
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "6"
"skillsaves":
  "Perception": !!int "5"
"damage_vulnerabilities": "bludgeoning, piercing, slashing from nonmagical attacks\
  \ that are silvered"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "any two languages"
"cr": "7"
"traits":
- "desc": "While a creature is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the werewolf ravager, the werewolf has advantage on attack rolls against\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) targets, and the target\
    \ takes an additional 3 1d6 damage whenever it is hit with the werewolf's bite\
    \ or claw attack."
  "name": "Grappler"
- "desc": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid\
    \ or back into its true form, which is humanoid. Any armor it is wearing merges\
    \ into its hybrid form. It reverts to its true form if it dies."
  "name": "Shapechanger"
"actions":
- "desc": "The werewolf ravager makes two melee attacks. It can only make one bite\
    \ attack per turn."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 12\
    \ (2d8 + 3) piercing damage. The target must succeed on a DC 14 Strength saving\
    \ throw or be [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled).\n\nAdditionally,\
    \ if the target is a humanoid, it must succeed on a DC 13 Constitution saving\
    \ throw or be cursed with werewolf lycanthropy."
  "name": "Bite (Hybrid Form Only)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10\
    \ (2d6 + 3) slashing damage."
  "name": "Claw (Hybrid Form Only)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Short Sword"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/werewolf-ravager-ghloe.webp"
```
^statblock