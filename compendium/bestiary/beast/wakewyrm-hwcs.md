---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Wakewyrm"]
---
# [Wakewyrm](3-Mechanics\CLI\bestiary\beast/wakewyrm-hwcs.md)
*Source: Humblewood Campaign Setting p. 187*  

Wakewyrms are massive reptiles that have aspects of both snakes and eels. On rare occasions they've been spotted close to the shores of the Talongrip Coast, though many are quick to dismiss these accounts. Their name originates from the powerful tidal waves their bodies cause, which pose a considerable threat to nearby vessels.

## Ocean Tales

Despite their size, wakewyrms are elusive, able to hide within the vast expanse of the ocean. The rarity of this creature has bred many rumors about the exact nature of wakewyrms. All sailors know at least a few stories about bizarre creatures of the sea, including fantastical accounts of wakewyrms that lurk in the ocean's gloomy depths, able to sink an entire fleet of ships. Such tales are more often fabrications than not, as few have actually encountered these creatures.

## Devourer from the Deeps

Wakewyrms are more than a 100 feet long and weigh over 1000 tons. Their lashing tails, snapping jaws, and huge bodies can deal significant damage to a ship's hull, though they prefer to swallow sailors whole, swiftly pulling them into the fathoms below with hardly more than a splash. Filling their gullet with as many creatures as possible, wakewyrms let their strong stomachs take care of their meals. While a fine tactic for devouring fish or other large marine creatures, wakewyrms that swallow adventurers whole sometimes find the snack too much to handle.

Though wakewyrms rarely encounter sailing vessels as they cross the ocean looking for food, the results are often violent. Afterwards, all that remains is nothing but a derelict phantom ship, found wrecked against the rocks of distant shores.

```statblock
"name": "Wakewyrm (HWCS)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "3"
- !!int "12"
- !!int "3"
"speed": "20 ft., swim 50 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "6"
"traits":
- "desc": "The Wakewyrm can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- "desc": "The wakewyrm makes two attacks, one with its bite and one with its tail,\
    \ or two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 15\
    \ (3d6 + 5) piercing damage. The target must succeed on a DC 16 Strength saving\
    \ throw or be [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape\
    \ DC 16). The wakewyrm can only grapple one creature at a time, and cannot make\
    \ bite attacks against other creatures while it has a creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 25 ft., one target. Hit: 18\
    \ (3d8 + 5) bludgeoning damage."
  "name": "Tail"
- "desc": "The wakewyrm makes a bite attack against a Large or smaller creature it\
    \ is grappling, and if the attack hits the target is swallowed, and the grapple\
    \ ends. The swallowed target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), it has total\
    \ cover against attacks and other effects outside the wakewyrm, and it takes 11\
    \ (3d6) acid damage at the start of each of the wakewyrm's turns. If the wakewyrm\
    \ takes 18 or more points of damage from a creature inside of it, the wakewyrm\
    \ must succeed on a DC 15 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ in a space within 10 feet of the wakewyrm. If the wakewyrm dies, a swallowed\
    \ creature is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by it, and it can escape from the corpse using 20 feet of movement. After death,\
    \ internal gasses keep the wakewyrm's body afloat for several hours, before it\
    \ begins to sink gradually to a watery grave."
  "name": "Swallow"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/beast/token/wakewyrm-hwcs.webp"
```
^statblock