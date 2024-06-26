---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Corpse Walker"]
---
# [Corpse Walker](3-Mechanics\CLI\bestiary\undead/corpse-walker-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 103*  

> [!quote]-  
> 
> They rose from their graves, some by force of magic, others cursed through their life's misdeeds. Whatever the reason, we can't let them walk among the living.

## Salvage

Someone who has proficiency with alchemist's supplies can mix the mold from a corpse walker's skin with other materials worth 500 gp to produce a potion that grants all the corpse walker's damage resistances for 10 minutes. The skin from an ancient corpse walker can produce two doses of this potion. A humanoid that dies while under the effects of this potion rises as a corpse walker 24 hours later. Creating this rare potion requires a successful DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)) check and 8 hours of brewing.

Someone who has proficiency with smith's tools can fashion the femur of an ancient corpse walker into a one-handed melee weapon. Both femurs can make a two-handed weapon. Creating the weapon takes 10 days and extra materials worth 500 gp, and it's a magic weapon when complete. Someone you hit with an attack using the weapon can't regain hit points until the start of your next turn. If someone casts vampiric touch and inflict wounds on the weapon once per day while it's being made, and materials worth 1,000 more gp are added to the process, the weapon also takes on the properties of a sword of life stealing but need not be a sword.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** It's bad luck for the living to set eyes upon a corpse walker. The returned gaze imparts a curse. Like a zombie, a corpse walker can take significant wounds and remain standing.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** The corpse walker has a severe vulnerability to sunlight, which burns and distracts it. Radiant damage is a sure way to ensure the corpse walker stays down when slain.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** An ancient corpse walker can release spores that call loyal undead to it, although wind can disperse these spores. The ancient walker can also become a cloud of deadly spores that can animate corpses. If terribly wounded, the ancient corpse walker turns into this mist and has 2 hours to return to its lair or perish forever.  

```statblock
"name": "Corpse Walker (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "13"
- !!int "17"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Constitution": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands languages it knew in life but can't speak"
"cr": "6"
"traits":
- "desc": "A humanoid that starts its turn within 30 ft. of and able to see the corpse\
    \ walker must succeed on a DC 14 Charisma saving throw, provided the corpse walker\
    \ isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated). On\
    \ a failure, the humanoid is [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if not averting its eyes from the corpse walker, ending the effect on itself\
    \ on a success. A creature failing two of these saving throws becomes cursed with\
    \ disturbing thoughts. Such a creature can't benefit from a short or long rest\
    \ until the curse is removed. On a successful save, the target is immune to any\
    \ corpse walker's Cursed Gaze for the next 24 hours.\n\nUnless surprised, a creature\
    \ can avert its eyes to avoid the saving throw. If the creature does so, it can't\
    \ see the corpse walker until the start of its next turn. A creature that looks\
    \ at the corpse walker in the meantime must immediately make the save."
  "name": "Cursed Gaze"
- "desc": "The corpse walker takes 20 radiant damage when it starts its turn in sunlight.\
    \ While in sunlight, it has disadvantage on attack rolls and ability checks."
  "name": "Sunlight Hypersensitivity"
- "desc": "If damage reduces the corpse walker to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the corpse walker drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "The corpse walker makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage and 5 (2d4) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 14 Constitution saving throw, or its hit point maximum\
    \ is reduced by an amount equal to the necrotic damage taken, and the corpse walker\
    \ regains hit points equal to that amount. This reduction lasts until the target\
    \ finishes a long rest. The target dies if this effect reduces its hit point maximum\
    \ to 0. An evil humanoid slain this way rises 24 hours later as a corpse walker."
  "name": "Slam"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/corpse-walker-ghloe.webp"
```
^statblock