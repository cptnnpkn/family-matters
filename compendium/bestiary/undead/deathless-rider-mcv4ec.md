---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv4ec
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Deathless Rider"]
---
# [Deathless Rider](3-Mechanics\CLI\bestiary\undead/deathless-rider-mcv4ec.md)
*Source: Monstrous Compendium Volume 3: 4: Eldraine Creatures*  

Legends told in the courts of Eldraine suggest that the deathless riders serve a warlock-queen, known simply as the Shadow Queen, who rules from a castle called Dynnistan. It isn't known whether these legends are based on any true experience or are simply the result of imagination trying to account for a terrifying and unexplained phenomenon.

In either case, deathless riders are undeniably real. They are undead knights, once human, who ride undead steeds through the remotest parts of the wilds. They are sometimes called lich-knights or fell horsemen.

In stark contrast to the knights of Eldraine, the deathless riders are without virtue of any kind. They are few in number—unless many more lurk in the dark heart of the forest than anyone is aware. But when mortal knights meet them in the wilds, the encounter rarely ends well for the living. The deathless riders fight with superhuman strength, heedless of wounds and relentless in their assault.

A typical deathless rider's mount is a warhorse skeleton, though some lich-knights ride equine spirits like nightmares.

> [!quote]- A quote from Scalan, Edgewall innkeeper  
> 
> Headed to the wilds? Beware the dead riders who serve the Shadow Queen.


```statblock
"name": "Deathless Rider (MCV4EC)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "[chain mail](/3-Mechanics/CLI/items/chain-mail.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"stats":
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "6"
- !!int "6"
- !!int "5"
"speed": "20 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "1"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "understands the languages it knew in life but can't speak"
"cr": "5"
"traits":
- "desc": "While mounted and without the [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ condition, the rider has advantage on melee attack rolls against any unmounted\
    \ creature smaller than its mount, the rider and its mount have advantage on Dexterity\
    \ saving throws, and the rider can force an attack targeted at its mount to target\
    \ the rider instead."
  "name": "Mounted Adept"
- "desc": "If damage reduces the rider to 0 hit points, it must make a Constitution\
    \ saving throw with a DC equal to 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the rider drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "The rider makes two Axe attacks. It can replace one of these attacks with\
    \ Fell Glare."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) slashing damage."
  "name": "Axe"
- "desc": "The rider gazes at a creature within 30 feet of itself. The creature must\
    \ succeed on a DC 13 Wisdom saving throw or have the [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ condition for 1 minute. The [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the rider, ending the condition on itself on a success."
  "name": "Fell Glare"
"source":
- "MCV4EC"
"image": "/3-Mechanics/CLI/bestiary/undead/token/deathless-rider-mcv4ec.webp"
```
^statblock