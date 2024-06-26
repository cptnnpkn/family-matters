---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
- ttrpg-cli/monster/type/humanoid/fiend
statblock: inline
aliases: ["Infernal Tormentor"]
---
# [Infernal Tormentor](3-Mechanics\CLI\bestiary\humanoid/infernal-tormentor-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 50*  

> [!quote]-  
> 
> I knew when she pulled out a gold pen reeking of brimstone that I was making a mistake.

## Salvage

Aspiring fiends often possess special materials used in the drafting of infernal contracts. These include special inks and parchment worth up to 200 gp. These materials can also be used for scribing new spells into a spell book or crafting magic scrolls. Any existing contracts on the fiend's person burst into flames upon its death, which might damage other items.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Fiends, or mortals taking on fiendish traits, can be found in every corner of Etharis, working their wiles on those foolish enough to sign one of their contracts. They are clever, deceitful, and evil to the core.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** A fiend's power and status are directly tied to the number and quality of mortal souls bound to it by contracts. Sometimes, the terms of such an agreement involve the mortal becoming a fiend itself, so a powerful fiend might have any number of lesser devils serving under it via contract.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Fiends are natives of the Netherworld, and any fiend slain returns to that plane to reconstitute itself. Only powerful divine magic can banish a fiend permanently. Uttering a devil's true name, however, grants the speaker power over it.  

```statblock
"name": "Infernal Tormentor (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race, fiend"
"alignment": "Any Evil alignment"
"ac": !!int "16"
"ac_class": "[half plate](/3-Mechanics/CLI/items/half-plate-armor.md)"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "5"
  "Perception": !!int "4"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Infernal and one other language"
"cr": "6"
"actions":
- "desc": "The infernal tormentor makes two greatsword attacks. It can use infernal\
    \ leash in place of one attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) slashing damage and 7 (2d6) fire damage."
  "name": "Greatsword"
- "desc": "A flaming whip appears in the infernal tormentor's hand or from its greatsword\
    \ and lashes at a creature the tormentor can see within 30 feet of it. The target\
    \ must succeed on a DC 13 Charisma saving throw. A creature that has signed a\
    \ fiendish contract has disadvantage on this save. On a failure, the creature\
    \ takes 14 (4d6) fire damage, is pulled 10 feet closer to the tormentor, and\
    \ is cursed for 1 minute or until the tormentor uses this action again. This curse\
    \ also ends if the target enters hallowed ground.\n\nWhile cursed, the target\
    \ can't move more than 30 feet from the tormentor. Also while the curse lasts,\
    \ the target takes 7 (2d6) extra\_fire damage from the tormentor's greatsword\
    \ attacks. The tormentor can use a bonus action to move the target 10 feet to\
    \ an unoccupied space within 30 feet of the tormentor. If this space is dangerous,\
    \ the target receives a new saving throw before moving, ending the effect on itself\
    \ on a success."
  "name": "Infernal Leash (Recharge 6)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/infernal-tormentor-ghloe.webp"
```
^statblock